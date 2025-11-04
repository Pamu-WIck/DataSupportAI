import { NextResponse } from "next/server";
import * as fs from 'fs';
import * as path from 'path';
import PDFDocument from 'pdfkit';

export async function GET(
  request: Request,
  { params }: { params: { examBoard: string, subject: string, filename: string } }
) {
  const { examBoard, subject, filename } = params;

  // Validate the file path to prevent directory traversal attacks
  const safeExamBoard = path.basename(examBoard);
  const safeSubject = path.basename(subject);
  const safeFilename = path.basename(filename);

  const filePath = path.join(
    process.cwd(),
    'public',
    'downloads',
    'past-papers',
    safeExamBoard,
    safeSubject,
    safeFilename
  );

  try {
    // Check if the file exists locally
    if (fs.existsSync(filePath) && path.extname(filePath) === '.pdf') {
      // If it does, serve it
      const file = fs.readFileSync(filePath);
      return new NextResponse(file, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${safeFilename}"`,
        },
      });
    }

    // If not, create a sample PDF for testing purposes
    const samplePdfDir = path.join(
      process.cwd(),
      'public',
      'downloads',
      'past-papers',
      safeExamBoard,
      safeSubject
    );

    // Ensure directory exists
    if (!fs.existsSync(samplePdfDir)) {
      fs.mkdirSync(samplePdfDir, { recursive: true });
    }

    // Create a PDF document
    const doc = new PDFDocument();

    // Pipe the PDF into a buffer
    const buffers: any[] = [];
    doc.on('data', buffers.push.bind(buffers));

    // PDF content
    doc.fontSize(25).fillColor('#2dd4bf').text('The Study Hive', { align: 'center' });
    doc.moveDown();

    // Exam information
    doc.fontSize(18).fillColor('#333333').text(`${safeExamBoard.toUpperCase()} ${safeSubject.charAt(0).toUpperCase() + safeSubject.slice(1)}`, { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(16).text(`${safeFilename.replace('.pdf', '').replace(/-/g, ' ')}`, { align: 'center' });

    // Horizontal line
    doc.moveDown();
    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown();

    // Main content
    doc.fontSize(12).fillColor('#333333').text('This is a sample past paper document for educational purposes.', { align: 'left' });
    doc.moveDown();
    doc.text('In a production environment, this would link to the actual past paper content.', { align: 'left' });
    doc.moveDown();
    doc.text(`File requested: ${safeFilename}`, { align: 'left' });

    // Add sample questions based on subject
    doc.moveDown(2);
    doc.fontSize(14).fillColor('#2dd4bf').text('Sample Questions', { align: 'left' });
    doc.moveDown();

    // Generate subject-specific sample questions
    if (safeSubject === 'biology') {
      doc.fontSize(12).fillColor('#333333').text('1. Explain the process of photosynthesis and describe the factors that affect its rate.', { align: 'left' });
      doc.moveDown();
      doc.text('2. Describe the structure and function of the human heart. Include a diagram in your answer.', { align: 'left' });
      doc.moveDown();
      doc.text('3. Explain how natural selection leads to evolution, using a specific example.', { align: 'left' });
    } else if (safeSubject === 'chemistry') {
      doc.fontSize(12).fillColor('#333333').text('1. Balance the following equation and explain what type of reaction it is: Fe + O₂ → Fe₂O₃', { align: 'left' });
      doc.moveDown();
      doc.text('2. Describe the structure of an atom and explain how the electronic configuration affects its chemical properties.', { align: 'left' });
      doc.moveDown();
      doc.text('3. Compare and contrast the properties of ionic and covalent compounds.', { align: 'left' });
    } else if (safeSubject === 'physics') {
      doc.fontSize(12).fillColor('#333333').text('1. Calculate the force needed to accelerate a 1500kg car from 0 to 27m/s in 10 seconds.', { align: 'left' });
      doc.moveDown();
      doc.text('2. Explain how electromagnetic induction works and give three practical applications.', { align: 'left' });
      doc.moveDown();
      doc.text('3. Describe the concept of wave-particle duality and its implications for our understanding of light.', { align: 'left' });
    }

    // Add mark scheme text if it's a mark scheme
    if (safeFilename.includes('MS') || safeFilename.includes('mark-scheme')) {
      doc.addPage();
      doc.fontSize(16).fillColor('#2dd4bf').text('MARK SCHEME', { align: 'center' });
      doc.moveDown();

      if (safeSubject === 'biology') {
        doc.fontSize(12).fillColor('#333333').text('1. Photosynthesis (8 marks)', { align: 'left' });
        doc.moveDown(0.5);
        doc.text('• Process where plants use light energy to convert carbon dioxide and water into glucose and oxygen (1 mark)', { align: 'left', indent: 20 });
        doc.text('• Occurs in chloroplasts (1 mark)', { align: 'left', indent: 20 });
        doc.text('• Light, temperature, CO₂ concentration and water availability are limiting factors (1 mark per factor, max 4 marks)', { align: 'left', indent: 20 });
        doc.text('• Correctly drawn diagram showing reactants and products (2 marks)', { align: 'left', indent: 20 });
        doc.moveDown();
      } else if (safeSubject === 'chemistry') {
        doc.fontSize(12).fillColor('#333333').text('1. Balancing equations (5 marks)', { align: 'left' });
        doc.moveDown(0.5);
        doc.text('• 4Fe + 3O₂ → 2Fe₂O₃ (2 marks for correctly balanced equation)', { align: 'left', indent: 20 });
        doc.text('• Identified as oxidation reaction (1 mark)', { align: 'left', indent: 20 });
        doc.text('• Iron is oxidized because it gains oxygen (1 mark)', { align: 'left', indent: 20 });
        doc.text('• Correct explanation that oxygen is the oxidizing agent (1 mark)', { align: 'left', indent: 20 });
        doc.moveDown();
      } else if (safeSubject === 'physics') {
        doc.fontSize(12).fillColor('#333333').text('1. Force calculation (6 marks)', { align: 'left' });
        doc.moveDown(0.5);
        doc.text('• Identify correct formula: F = ma (1 mark)', { align: 'left', indent: 20 });
        doc.text('• Calculate acceleration: a = (27 - 0)/10 = 2.7 m/s² (2 marks)', { align: 'left', indent: 20 });
        doc.text('• Substitute values correctly: F = 1500 × 2.7 (1 mark)', { align: 'left', indent: 20 });
        doc.text('• Calculate F = 4050 N (1 mark)', { align: 'left', indent: 20 });
        doc.text('• Correct units (1 mark)', { align: 'left', indent: 20 });
        doc.moveDown();
      }
    }

    // Footer
    doc.fontSize(10).fillColor('#666666').text(`Copyright © ${new Date().getFullYear()} The Study Hive. All rights reserved.`, { align: 'center' });

    // Finalize PDF file
    doc.end();

    return new Promise((resolve, reject) => {
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        fs.writeFileSync(filePath, pdfBuffer);
        resolve(new NextResponse(pdfBuffer, {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${safeFilename}"`,
          },
        }));
      });
      doc.on('error', reject);
    });

  } catch (error) {
    console.error("Error serving past paper:", error);
    return NextResponse.json({ error: "Failed to download past paper" }, { status: 500 });
  }
}
