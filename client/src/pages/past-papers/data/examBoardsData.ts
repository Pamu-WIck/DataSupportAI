export interface ExamBoard {
  id: string;
  name: string;
  type: string;
}

export const examBoards: ExamBoard[] = [
  // KS3 Level
  { id: "ks3", name: "National Curriculum", type: "KS3" },

  // GCSE Exam Boards
  { id: "aqa", name: "AQA", type: "GCSE" },
  { id: "ocr", name: "OCR", type: "GCSE" },
  { id: "edexcel-gcse", name: "Edexcel", type: "GCSE" },
  { id: "wjec", name: "WJEC", type: "GCSE" },
  { id: "edexcel-igcse", name: "Edexcel", type: "IGCSE" },
  { id: "cie", name: "Cambridge (CIE)", type: "IGCSE" },

  // A-Level Exam Boards
  { id: "aqa-alevel", name: "AQA", type: "A Level" },
  { id: "ocr-alevel", name: "OCR", type: "A Level" },
  { id: "edexcel-alevel", name: "Edexcel", type: "A Level" },
  { id: "wjec-alevel", name: "WJEC", type: "A Level" },
  { id: "cie-alevel", name: "Cambridge (CIE)", type: "A Level" }
];
