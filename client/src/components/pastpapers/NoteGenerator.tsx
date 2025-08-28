import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Sparkles, Download, Copy } from 'lucide-react';

interface NoteGeneratorProps {
  examBoard: string;
  subject: string;
  paperIdentifier: string;
  paperDetails: any;
  studentId: number;
  disabled?: boolean;
}

export function NoteGenerator({
  examBoard,
  subject,
  paperIdentifier,
  paperDetails,
  studentId,
  disabled = false
}: NoteGeneratorProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedNotes, setGeneratedNotes] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('preview');

  // Function to generate study notes
  const generateNotes = async () => {
    setIsGenerating(true);
    try {
      // This would typically be an API call to the note generation service
      // For this implementation, we'll use simulated note generation
      setTimeout(async () => {
        const notes = simulateNoteGeneration();
        setGeneratedNotes(notes);
        setIsGenerating(false);
        
        // Save the notes to the database
        await saveNotesToDatabase(notes);
        
        toast({
          title: "Study notes generated!",
          description: "Your personalised study notes are ready to use.",
        });
      }, 1500);
    } catch (error) {
      console.error("Error generating notes:", error);
      setIsGenerating(false);
      toast({
        title: "Error generating notes",
        description: "There was a problem generating your study notes. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Function to save notes to the database
  const saveNotesToDatabase = async (notes: string) => {
    try {
      const response = await fetch('/api/paper-notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentId,
          examBoard,
          subject,
          paperIdentifier,
          notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save notes');
      }
    } catch (error) {
      console.error("Error saving notes:", error);
      // We don't show an error toast here as notes are still generated
      // and shown to the user, even if saving fails
    }
  };

  // Function to copy notes to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedNotes);
    toast({
      title: "Copied to clipboard",
      description: "Study notes copied to clipboard successfully.",
    });
  };

  // Function to download notes as a text file
  const downloadNotes = () => {
    const blob = new Blob([generatedNotes], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${examBoard}-${subject}-${paperDetails.paperNumber}-Notes.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // This function simulates the note generation that would typically come from an API
  const simulateNoteGeneration = (): string => {
    const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
    const examType = examBoard.includes("alevel") ? "A Level" : "GCSE";
    const isALevel = examType.includes("A Level");
    
    // Generate paper-specific content
    const paperSpecificTopics = generatePaperSpecificTopics();
    const examTechniques = generateExamTechniques();
    const frequentlyTestedConcepts = generateFrequentlyTestedConcepts();
    const practiceQuestions = generatePracticeQuestions();
    
    // Format title differently for A-level (no tier)
    const tierText = isALevel ? "" : ` (${paperDetails.tier || 'Higher'} Tier)`;
    
    return `# Study Notes: ${examBoard.toUpperCase()} ${capitalizedSubject} ${paperDetails.paperNumber}${tierText}

## Key Topics Covered in ${paperDetails.year} ${paperDetails.season} Paper

${paperSpecificTopics}

## Common Exam Techniques for ${paperDetails.paperNumber}

${examTechniques}

## Frequently Tested Concepts in ${paperDetails.year} ${paperDetails.season}

${frequentlyTestedConcepts}

## Practice Questions Specific to ${paperDetails.paperNumber}

${practiceQuestions}

These notes were automatically generated for ${examBoard.toUpperCase()} ${capitalizedSubject} ${paperDetails.paperNumber} (${paperDetails.year} ${paperDetails.season}).`;
  };

  // Generate paper-specific topics based on paper number, year and season
  const generatePaperSpecificTopics = () => {
    // Use paper identifiers to create unique content
    const paperIdentifierHash = paperIdentifier + paperDetails.year + paperDetails.season;
    const hash = Array.from(paperIdentifierHash).reduce((hash, char) => char.charCodeAt(0) + ((hash << 5) - hash), 0);
    
    // Biology topics
    if (subject === "biology") {
      const topics = [
        {
          title: "Cell Biology and Transport",
          bullets: [
            "Cell structure and function: eukaryotic and prokaryotic cells",
            "Transport mechanisms: diffusion, osmosis, active transport",
            "Cell specialization and differentiation"
          ]
        },
        {
          title: "Respiration and Photosynthesis",
          bullets: [
            "Aerobic and anaerobic respiration pathways",
            "Photosynthesis: light-dependent and light-independent reactions",
            "Factors affecting respiration and photosynthesis rates"
          ]
        },
        {
          title: "Inheritance and Genetics",
          bullets: [
            "Meiosis and genetic variation",
            "Mendelian inheritance and genetic disorders",
            "DNA structure, replication and protein synthesis"
          ]
        },
      ];
      
      // Select topics based on hash to ensure consistency for the same paper
      const selectedIndices = [
        Math.abs(hash % topics.length),
        Math.abs((hash + 1) % topics.length),
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = topics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
    }
    
    // Chemistry topics
    if (subject === "chemistry") {
      const topics = [
        {
          title: "Atomic Structure and Bonding",
          bullets: [
            "Electronic configuration and the periodic table",
            "Ionic, covalent, and metallic bonding",
            "Bond properties and intermolecular forces"
          ]
        },
        {
          title: "Chemical Reactions and Equations",
          bullets: [
            "Balancing equations and conservation of mass",
            "Types of chemical reactions: combustion, neutralization, redox",
            "Energy changes in reactions and reaction profiles"
          ]
        },
        {
          title: "Organic Chemistry",
          bullets: [
            "Alkanes, alkenes, and alcohols",
            "Functional groups and homologous series",
            "Reactions of organic compounds"
          ]
        },
      ];
      
      const selectedIndices = [
        Math.abs(hash % topics.length),
        Math.abs((hash + 1) % topics.length),
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = topics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
    }
    
    // Physics topics
    if (subject === "physics") {
      const topics = [
        {
          title: "Forces and Motion",
          bullets: [
            "Newton's laws of motion and their applications",
            "Momentum, impulse, and conservation of momentum",
            "Circular motion and centripetal force"
          ]
        },
        {
          title: "Energy and Work",
          bullets: [
            "Energy transformations and conservation of energy",
            "Work done and power calculations",
            "Efficiency and energy resources"
          ]
        },
        {
          title: "Electricity and Magnetism",
          bullets: [
            "Current, voltage, and resistance in circuits",
            "Electromagnetic induction and generators",
            "Magnetic fields and their applications"
          ]
        },
      ];
      
      const selectedIndices = [
        Math.abs(hash % topics.length),
        Math.abs((hash + 1) % topics.length),
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = topics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
    }
    
    // Default for other subjects
    return "1. **Key Topic 1**\n   - Important concept 1\n   - Important concept 2\n   - Important concept 3\n\n2. **Key Topic 2**\n   - Important concept 1\n   - Important concept 2\n   - Important concept 3";
  };

  // Generate exam techniques for the specific paper
  const generateExamTechniques = () => {
    const paperType = paperDetails.paperNumber.toLowerCase().includes("paper 1") ? "Paper 1" : 
                      paperDetails.paperNumber.toLowerCase().includes("paper 2") ? "Paper 2" : "Paper 3";
    
    const commonTechniques = [
      "Read the question carefully and highlight key command words (e.g., describe, explain, compare)",
      "Allocate time based on the mark allocation - approximately 1 minute per mark",
      "For calculation questions, always show your working and include correct units",
      "Use scientific terminology correctly and spell key terms accurately",
    ];
    
    // Subject-specific techniques
    const subjectTechniques: Record<string, string[]> = {
      biology: [
        "Label diagrams clearly and precisely when asked to do so",
        "Link structure to function when explaining biological processes",
        "Include real examples or case studies where appropriate",
      ],
      chemistry: [
        "Balance chemical equations carefully and check your work",
        "When explaining reactions, mention conditions (temperature, pressure, catalysts)",
        "Include state symbols in chemical equations when appropriate",
      ],
      physics: [
        "Memorize and apply the correct formulas for calculations",
        "Pay attention to significant figures in your answers",
        "Draw clear, labeled diagrams for problems involving forces or fields",
      ]
    };
    
    const specificTechniques = subjectTechniques[subject] || [];
    
    // Combine common and subject-specific techniques
    const allTechniques = [...commonTechniques, ...specificTechniques];
    
    // Format as bullet points
    return allTechniques.map((technique, i) => `${i+1}. ${technique}`).join('\n\n');
  };

  // Generate frequently tested concepts for the paper
  const generateFrequentlyTestedConcepts = () => {
    // For biology
    if (subject === "biology") {
      const concepts = [
        "Cell transport mechanisms (diffusion, osmosis, active transport)",
        "Enzyme structure, function, and factors affecting enzyme activity",
        "DNA structure and function in genetic inheritance",
        "Hormonal and nervous coordination in mammals",
        "Ecological relationships and energy flow in ecosystems",
      ];
      
      return concepts.map((concept, i) => `${i+1}. **${concept}**`).join('\n\n');
    }
    
    // For chemistry
    if (subject === "chemistry") {
      const concepts = [
        "Atomic structure and the periodic table",
        "Ionic and covalent bonding models",
        "Rates of reaction and factors affecting them",
        "Redox reactions and electron transfer",
        "Carbon compounds and functional groups",
      ];
      
      return concepts.map((concept, i) => `${i+1}. **${concept}**`).join('\n\n');
    }
    
    // For physics
    if (subject === "physics") {
      const concepts = [
        "Newton's laws of motion and their applications",
        "Energy conservation and transformations",
        "Electromagnetic waves and their properties",
        "Circuit analysis and Ohm's law",
        "Nuclear decay and half-life calculations",
      ];
      
      return concepts.map((concept, i) => `${i+1}. **${concept}**`).join('\n\n');
    }
    
    // Default for other subjects
    return "1. **Concept 1**\n\n2. **Concept 2**\n\n3. **Concept 3**\n\n4. **Concept 4**\n\n5. **Concept 5**";
  };

  // Generate practice questions
  const generatePracticeQuestions = () => {
    // Biology questions
    if (subject === "biology") {
      return `1. Explain how the structure of a cell membrane relates to its function in controlling the movement of substances. (6 marks)

2. Compare and contrast the processes of aerobic and anaerobic respiration, including their efficiency and end products. (8 marks)

3. A student investigated the effect of temperature on the rate of photosynthesis.
   a) Describe a suitable method for this investigation. (4 marks)
   b) Explain why the rate of photosynthesis changes with temperature. (4 marks)`;
    }
    
    // Chemistry questions
    if (subject === "chemistry") {
      return `1. Draw and explain the electronic structure of sodium and chlorine atoms. Show how these atoms form an ionic bond to produce sodium chloride. (6 marks)

2. Calculate the relative formula mass of Ca(OH)₂. (Relative atomic masses: Ca = 40, O = 16, H = 1) (3 marks)

3. Explain how rate of reaction is affected by:
   a) Temperature (3 marks)
   b) Concentration (3 marks)
   c) Surface area (3 marks)`;
    }
    
    // Physics questions
    if (subject === "physics") {
      return `1. A car of mass 1,200 kg accelerates from rest to 20 m/s in 8 seconds.
   a) Calculate the acceleration of the car. (3 marks)
   b) Calculate the force required to produce this acceleration. (3 marks)

2. Explain how electromagnetic induction works in a simple generator. (6 marks)

3. A transformer has 500 turns on its primary coil and 100 turns on its secondary coil. If the input voltage is 230 V:
   a) Calculate the output voltage. (3 marks)
   b) Explain whether this is a step-up or step-down transformer. (2 marks)`;
    }
    
    // Default for other subjects
    return "1. Practice question 1 (6 marks)\n\n2. Practice question 2 (8 marks)\n\n3. Practice question 3 (6 marks)";
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        disabled={disabled}
        className="flex items-center gap-2"
        variant="outline"
      >
        <Sparkles className="h-4 w-4" />
        <span>Generate Notes</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Study Notes Generator</DialogTitle>
            <DialogDescription>
              Create custom study notes for this past paper with one click
            </DialogDescription>
          </DialogHeader>

          {!generatedNotes ? (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate Study Notes</h3>
              <p className="text-gray-500 text-center mb-6 max-w-md">
                Create personalised study notes based on this past paper. The notes include key topics, 
                exam techniques, frequently tested concepts, and practice questions.
              </p>
              <Button 
                onClick={generateNotes} 
                disabled={isGenerating}
                className="min-w-[200px]"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Notes
                  </>
                )}
              </Button>
            </div>
          ) : (
            <>
              <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-4">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="markdown">Markdown</TabsTrigger>
                </TabsList>
                
                <TabsContent value="preview" className="border rounded-md p-4 mt-2 bg-white">
                  <div className="prose prose-sm max-w-none">
                    <div dangerouslySetInnerHTML={{ 
                      __html: generatedNotes
                        .replace(/^# (.*)/gm, '<h1>$1</h1>')
                        .replace(/^## (.*)/gm, '<h2>$1</h2>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n\n/g, '<br/><br/>')
                    }} />
                  </div>
                </TabsContent>
                
                <TabsContent value="markdown" className="border rounded-md p-4 mt-2 bg-gray-50">
                  <pre className="text-xs font-mono whitespace-pre-wrap overflow-auto max-h-[50vh]">
                    {generatedNotes}
                  </pre>
                </TabsContent>
              </Tabs>
              
              <DialogFooter className="flex sm:justify-between items-center flex-col sm:flex-row gap-4 mt-4">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadNotes}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
                <Button onClick={() => setOpen(false)}>
                  Done
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default NoteGenerator;