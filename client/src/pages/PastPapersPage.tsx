import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * PastPapersPage component
 * A comprehensive repository of past papers organized by exam board
 */
const PastPapersPage = () => {
  const [selectedBoard, setSelectedBoard] = useState("aqa");
  
  // Exam board data structure
  const examBoards = [
    { id: "aqa", name: "AQA", type: "GCSE" },
    { id: "ocr", name: "OCR", type: "GCSE" },
    { id: "edexcel-gcse", name: "Edexcel", type: "GCSE" },
    { id: "wjec", name: "WJEC", type: "GCSE" },
    { id: "edexcel-igcse", name: "Edexcel", type: "IGCSE" },
    { id: "cie", name: "Cambridge (CIE)", type: "IGCSE" }
  ];
  
  // Past papers by exam board and subject
  const pastPapers = {
    aqa: {
      biology: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84611H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84611H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84621H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84621H-MS-JUN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84611H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84611H-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84621H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84621H-MS-JUN21.PDF" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84611F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84611F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84621F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84621F-MS-JUN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84611F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84611F-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84621F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84621F-MS-JUN21.PDF" },
        ]
      },
      chemistry: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84622H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84622H-MS-JUN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84612H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84612H-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84622H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84622H-MS-JUN21.PDF" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84622F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84622F-MS-JUN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84612F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84612F-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84622F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84622F-MS-JUN21.PDF" },
        ]
      },
      physics: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84613H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84613H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84623H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84623H-MS-JUN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84613H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84613H-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84623H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84623H-MS-JUN21.PDF" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84613F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84613F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84623F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84623F-MS-JUN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84613F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84613F-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84623F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84623F-MS-JUN21.PDF" },
        ]
      },
      "combined-science": {
        higher: [
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83461H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83461H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83471H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83471H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83462H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83462H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83472H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83472H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83463H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83463H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83473H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83473H-MS-JUN22.PDF" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83461F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83461F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83471F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83471F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83462F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83462F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83472F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83472F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83463F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83463F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83473F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83473F-MS-JUN22.PDF" },
        ]
      },
    },
    ocr: {
      biology: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Mark-Scheme-June-2021.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Mark-Scheme-June-2021.pdf" },
        ],
      },
      chemistry: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Higher-Tier-Mark-Scheme-June-2022.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
        ],
      },
      physics: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Higher-Tier-Mark-Scheme-June-2022.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
        ],
      },
      "combined-science": {
        higher: [
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-5-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-5-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-6-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-6-Higher-Tier-Mark-Scheme-June-2022.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-5-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-5-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-6-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-6-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
        ],
      },
    },
    "edexcel-gcse": {
      biology: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_que_20220517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_msc_20220517.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2H_que_20220609.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2H_msc_20220609.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_que_20220517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_msc_20220517.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2F_que_20220609.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2F_msc_20220609.pdf" },
        ]
      },
      chemistry: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_que_20220520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_msc_20220520.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2H_que_20220613.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2H_msc_20220613.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_que_20220520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_msc_20220520.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2F_que_20220613.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2F_msc_20220613.pdf" },
        ]
      },
      physics: {
        higher: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Physics/2016/exam-materials/1PH0_1H_que_20220524.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Physics/2016/exam-materials/1PH0_1H_msc_20220524.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Physics/2016/exam-materials/1PH0_2H_que_20220616.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Physics/2016/exam-materials/1PH0_2H_msc_20220616.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Physics/2016/exam-materials/1PH0_1F_que_20220524.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Physics/2016/exam-materials/1PH0_1F_msc_20220524.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Physics/2016/exam-materials/1PH0_2F_que_20220616.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Physics/2016/exam-materials/1PH0_2F_msc_20220616.pdf" },
        ]
      },
      "combined-science": {
        higher: [
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Biology Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1BH_que_20220517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1BH_msc_20220517.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Biology Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2BH_que_20220609.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2BH_msc_20220609.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Chemistry Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1CH_que_20220520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1CH_msc_20220520.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Chemistry Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2CH_que_20220613.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2CH_msc_20220613.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Physics Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1PH_que_20220524.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1PH_msc_20220524.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Physics Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2PH_que_20220616.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2PH_msc_20220616.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Biology Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1BF_que_20220517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1BF_msc_20220517.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Biology Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2BF_que_20220609.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2BF_msc_20220609.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Chemistry Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1CF_que_20220520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1CF_msc_20220520.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Chemistry Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2CF_que_20220613.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2CF_msc_20220613.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Physics Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1PF_que_20220524.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_1PF_msc_20220524.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Physics Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2PF_que_20220616.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/exam-materials/1SC0_2PF_msc_20220616.pdf" },
        ]
      },
    },
    "edexcel-igcse": {
      biology: {
        higher: [
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 1B", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/exam-materials/4BI1_1B_que_20220517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/exam-materials/4BI1_1B_rms_20220517.pdf" },
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 2B", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/exam-materials/4BI1_2B_que_20220606.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/exam-materials/4BI1_2B_rms_20220606.pdf" },
          { year: "2021", season: "Summer", course: "Biology", paperNumber: "Paper 1B", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/exam-materials/4BI1_1B_que_20210517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/exam-materials/4BI1_1B_rms_20210517.pdf" },
          { year: "2021", season: "Summer", course: "Biology", paperNumber: "Paper 2B", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/exam-materials/4BI1_2B_que_20210608.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Biology/2017/exam-materials/4BI1_2B_rms_20210608.pdf" },
        ]
      },
      chemistry: {
        higher: [
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 1C", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Chemistry/2017/exam-materials/4CH1_1C_que_20220518.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Chemistry/2017/exam-materials/4CH1_1C_rms_20220518.pdf" },
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 2C", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Chemistry/2017/exam-materials/4CH1_2C_que_20220608.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Chemistry/2017/exam-materials/4CH1_2C_rms_20220608.pdf" },
        ]
      },
      physics: {
        higher: [
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 1P", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Physics/2017/exam-materials/4PH1_1P_que_20220520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Physics/2017/exam-materials/4PH1_1P_rms_20220520.pdf" },
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 2P", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Physics/2017/exam-materials/4PH1_2P_que_20220611.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Physics/2017/exam-materials/4PH1_2P_rms_20220611.pdf" },
        ]
      },
      "combined-science": {
        higher: [
          { year: "2022", season: "Summer", course: "Science (Double Award)", paperNumber: "Biology Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Science%20(Double%20Award)/2017/exam-materials/4SD0_1B_que_20220517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Science%20(Double%20Award)/2017/exam-materials/4SD0_1B_rms_20220517.pdf" },
          { year: "2022", season: "Summer", course: "Science (Double Award)", paperNumber: "Chemistry Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Science%20(Double%20Award)/2017/exam-materials/4SD0_1C_que_20220518.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Science%20(Double%20Award)/2017/exam-materials/4SD0_1C_rms_20220518.pdf" },
          { year: "2022", season: "Summer", course: "Science (Double Award)", paperNumber: "Physics Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Science%20(Double%20Award)/2017/exam-materials/4SD0_1P_que_20220520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Science%20(Double%20Award)/2017/exam-materials/4SD0_1P_rms_20220520.pdf" },
        ]
      }
    },
    cie: {
      biology: {
        higher: [
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 2 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2022/0610_s22_qp_21.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2022/0610_s22_ms_21.pdf" },
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 4 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2022/0610_s22_qp_41.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2022/0610_s22_ms_41.pdf" },
          { year: "2021", season: "Summer", course: "Biology", paperNumber: "Paper 2 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2021/0610_s21_qp_21.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2021/0610_s21_ms_21.pdf" },
          { year: "2021", season: "Summer", course: "Biology", paperNumber: "Paper 4 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2021/0610_s21_qp_41.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2021/0610_s21_ms_41.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 2 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2022/0610_s22_qp_22.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2022/0610_s22_ms_22.pdf" },
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 4 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2022/0610_s22_qp_42.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/2022/0610_s22_ms_42.pdf" },
        ]
      },
      chemistry: {
        higher: [
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 2 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/2022/0620_s22_qp_21.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/2022/0620_s22_ms_21.pdf" },
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 4 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/2022/0620_s22_qp_41.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/2022/0620_s22_ms_41.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 2 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/2022/0620_s22_qp_22.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/2022/0620_s22_ms_22.pdf" },
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 4 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/2022/0620_s22_qp_42.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/2022/0620_s22_ms_42.pdf" },
        ]
      },
      physics: {
        higher: [
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 2 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/2022/0625_s22_qp_22.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/2022/0625_s22_ms_22.pdf" },
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 4 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/2022/0625_s22_qp_42.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/2022/0625_s22_ms_42.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 2 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/2022/0625_s22_qp_21.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/2022/0625_s22_ms_21.pdf" },
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 4 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/2022/0625_s22_qp_41.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/2022/0625_s22_ms_41.pdf" },
        ]
      },
      "combined-science": {
        higher: [
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Biology Paper 2 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_qp_21.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_ms_21.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Chemistry Paper 3 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_qp_31.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_ms_31.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Physics Paper 4 (Extended)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_qp_41.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_ms_41.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Biology Paper 2 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_qp_22.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_ms_22.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Chemistry Paper 3 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_qp_32.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_ms_32.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science", paperNumber: "Physics Paper 4 (Core)", questionPaper: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_qp_42.pdf", markScheme: "https://papers.gceguide.com/Cambridge%20IGCSE/Science%20-%20Combined%20(0653)/2022/0653_s22_ms_42.pdf" },
        ]
      },
    },
    wjec: {
      biology: {
        higher: [
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/bhypcb1e/3400u10-1-wjec-gcse-biology-unit-1-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/2epjoxuz/3400u10-1-wjec-gcse-biology-unit-1-higher-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/4adnb4mz/3400u20-1-wjec-gcse-biology-unit-2-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/fxynmgnc/3400u20-1-wjec-gcse-biology-unit-2-higher-ms-s22.pdf" },
          { year: "2021", season: "Summer", course: "Biology", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/t2inoqju/3400u10-1-wjec-gcse-biology-unit-1-higher-que-s21.pdf", markScheme: "https://www.wjec.co.uk/media/mmlpbywt/3400u10-1-wjec-gcse-biology-unit-1-higher-ms-s21.pdf" },
          { year: "2021", season: "Summer", course: "Biology", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/axyd0b0u/3400u20-1-wjec-gcse-biology-unit-2-higher-que-s21.pdf", markScheme: "https://www.wjec.co.uk/media/ylwpoigu/3400u20-1-wjec-gcse-biology-unit-2-higher-ms-s21.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/dqdkq2tn/3400n10-1-wjec-gcse-biology-unit-1-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/dwcnnjr2/3400n10-1-wjec-gcse-biology-unit-1-foundation-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/0wmbbmfi/3400n20-1-wjec-gcse-biology-unit-2-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/jlpd4mbz/3400n20-1-wjec-gcse-biology-unit-2-foundation-ms-s22.pdf" },
        ]
      },
      chemistry: {
        higher: [
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/yh5jclrk/3410u10-1-wjec-gcse-chemistry-unit-1-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/yphlhd05/3410u10-1-wjec-gcse-chemistry-unit-1-higher-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/oekbfz0d/3410u20-1-wjec-gcse-chemistry-unit-2-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/ixofgc23/3410u20-1-wjec-gcse-chemistry-unit-2-higher-ms-s22.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/3uadacka/3410n10-1-wjec-gcse-chemistry-unit-1-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/n0yfs5u1/3410n10-1-wjec-gcse-chemistry-unit-1-foundation-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/z5kjnqlb/3410n20-1-wjec-gcse-chemistry-unit-2-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/vaxnnunp/3410n20-1-wjec-gcse-chemistry-unit-2-foundation-ms-s22.pdf" },
        ]
      },
      physics: {
        higher: [
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/tvvnm4yd/3420u10-1-wjec-gcse-physics-unit-1-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/cbpldugv/3420u10-1-wjec-gcse-physics-unit-1-higher-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/tdnpbajg/3420u20-1-wjec-gcse-physics-unit-2-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/yfckwrj5/3420u20-1-wjec-gcse-physics-unit-2-higher-ms-s22.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/s0gbzqmy/3420n10-1-wjec-gcse-physics-unit-1-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/j3vhubut/3420n10-1-wjec-gcse-physics-unit-1-foundation-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/vfvptc4b/3420n20-1-wjec-gcse-physics-unit-2-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/wbjllrbv/3420n20-1-wjec-gcse-physics-unit-2-foundation-ms-s22.pdf" },
        ]
      },
      "combined-science": {
        higher: [
          { year: "2022", season: "Summer", course: "Applied Science (Double Award)", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/cjbdszft/4473u10-1-wjec-gcse-applied-science-double-award-unit-1-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/phcpy2a3/4473u10-1-wjec-gcse-applied-science-double-award-unit-1-higher-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Applied Science (Double Award)", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/qfwdtswr/4473u20-1-wjec-gcse-applied-science-double-award-unit-2-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/njsnsacx/4473u20-1-wjec-gcse-applied-science-double-award-unit-2-higher-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Applied Science (Double Award)", paperNumber: "Unit 3", questionPaper: "https://www.wjec.co.uk/media/0y3o1bkg/4473u30-1-wjec-gcse-applied-science-double-award-unit-3-higher-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/bqjcyoip/4473u30-1-wjec-gcse-applied-science-double-award-unit-3-higher-ms-s22.pdf" },
        ],
        foundation: [
          { year: "2022", season: "Summer", course: "Applied Science (Double Award)", paperNumber: "Unit 1", questionPaper: "https://www.wjec.co.uk/media/2eon2zf5/4473n10-1-wjec-gcse-applied-science-double-award-unit-1-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/zrpnvipk/4473n10-1-wjec-gcse-applied-science-double-award-unit-1-foundation-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Applied Science (Double Award)", paperNumber: "Unit 2", questionPaper: "https://www.wjec.co.uk/media/k44hzkiq/4473n20-1-wjec-gcse-applied-science-double-award-unit-2-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/jtfpbbgk/4473n20-1-wjec-gcse-applied-science-double-award-unit-2-foundation-ms-s22.pdf" },
          { year: "2022", season: "Summer", course: "Applied Science (Double Award)", paperNumber: "Unit 3", questionPaper: "https://www.wjec.co.uk/media/hxdcwsxd/4473n30-1-wjec-gcse-applied-science-double-award-unit-3-foundation-que-s22.pdf", markScheme: "https://www.wjec.co.uk/media/2psmqvri/4473n30-1-wjec-gcse-applied-science-double-award-unit-3-foundation-ms-s22.pdf" },
        ]
      },
    },
  };
  
  // Subjects and course types
  const subjects = ["biology", "chemistry", "physics", "combined-science"];
  
  // Tiers
  const tiers = ["higher", "foundation"];
  
  return (
    <div className="bg-[#fafbfc]">
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Link href="/">
              <motion.button 
                className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8"
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Home
              </motion.button>
            </Link>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <motion.span 
                className="inline-block px-4 py-1 bg-[#2dd4bf]/20 text-teal-700 text-sm font-medium rounded-full mb-6 border border-teal-200"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                EXAM PREPARATION
              </motion.span>
              
              <ScrollAnimation variant="fadeRight">
                <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
                  Past Papers
                </h1>
                <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
                  Access a comprehensive collection of past papers from all major exam boards. 
                  Use these resources to prepare for your exams and improve your grades.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Exam Board Selection */}
            <div className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-2 inline-flex flex-wrap gap-2 mx-auto justify-center">
                {examBoards.map((board) => (
                  <button
                    key={board.id}
                    onClick={() => setSelectedBoard(board.id)}
                    className={`px-4 py-3 rounded-3xl text-sm font-medium transition-all ${
                      selectedBoard === board.id
                        ? "bg-[#2dd4bf] text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {board.name} {board.type}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Papers Content */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Tabs defaultValue="biology" className="w-full">
                <div className="px-6 pt-6 border-b">
                  <TabsList className="grid grid-cols-4 mb-2">
                    <TabsTrigger value="biology" className="text-sm md:text-base">Biology</TabsTrigger>
                    <TabsTrigger value="chemistry" className="text-sm md:text-base">Chemistry</TabsTrigger>
                    <TabsTrigger value="physics" className="text-sm md:text-base">Physics</TabsTrigger>
                    <TabsTrigger value="combined-science" className="text-sm md:text-base">Combined Science</TabsTrigger>
                  </TabsList>
                </div>
                
                {subjects.map((subject) => (
                  <TabsContent key={subject} value={subject} className="p-6">
                    <h3 className="font-playfair font-bold text-2xl text-slate-900 mb-4 capitalize">
                      {subject === "combined-science" ? "Combined Science" : subject} Papers - {examBoards.find(b => b.id === selectedBoard)?.name} {examBoards.find(b => b.id === selectedBoard)?.type}
                    </h3>
                    
                    {pastPapers[selectedBoard as keyof typeof pastPapers] && 
                     (pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject] ? (
                      <div>
                        {/* Tier Tabs */}
                        {typeof (pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject] === 'object' && 
                         !(pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject].length ? (
                          <div>
                            <div className="flex space-x-2 mb-6">
                              {tiers.map((tier) => (
                                (pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject][tier] && 
                                (
                                  <button
                                    key={tier}
                                    onClick={() => {
                                      const element = document.getElementById(`${subject}-${tier}`);
                                      if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                      }
                                    }}
                                    className="px-4 py-2 bg-[#2dd4bf] text-white rounded-md capitalize font-medium"
                                  >
                                    {tier} Tier
                                  </button>
                                )
                              ))}
                            </div>
                            
                            {tiers.map((tier) => (
                              (pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject][tier] && (
                                <div key={tier} id={`${subject}-${tier}`} className="mb-12">
                                  <h4 className="text-xl font-semibold mb-4 capitalize">{tier} Tier</h4>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                      <thead>
                                        <tr className="bg-slate-50">
                                          <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Year</th>
                                          <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Season</th>
                                          <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Course</th>
                                          <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Paper</th>
                                          <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Question Paper</th>
                                          <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Mark Scheme</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {(pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject][tier].map((paper: any, index: number) => (
                                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                            <td className="py-4 px-4 border-b text-slate-800">{paper.year}</td>
                                            <td className="py-4 px-4 border-b text-slate-800">{paper.season}</td>
                                            <td className="py-4 px-4 border-b text-slate-800">{paper.course}</td>
                                            <td className="py-4 px-4 border-b text-slate-800">{paper.paperNumber}</td>
                                            <td className="py-4 px-4 border-b">
                                              <a 
                                                href={paper.questionPaper} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="text-[#2dd4bf] hover:text-teal-700 font-medium inline-flex items-center"
                                              >
                                                <i className="fas fa-file-pdf mr-2"></i> Question Paper
                                              </a>
                                            </td>
                                            <td className="py-4 px-4 border-b">
                                              <a 
                                                href={paper.markScheme} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="text-[#2dd4bf] hover:text-teal-700 font-medium inline-flex items-center"
                                              >
                                                <i className="fas fa-file-pdf mr-2"></i> Mark Scheme
                                              </a>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        ) : (
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-slate-50">
                                  <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Year</th>
                                  <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Season</th>
                                  <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Paper</th>
                                  <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Question Paper</th>
                                  <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Mark Scheme</th>
                                </tr>
                              </thead>
                              <tbody>
                                {(pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject].map((paper: any, index: number) => (
                                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    <td className="py-4 px-4 border-b text-slate-800">{paper.year}</td>
                                    <td className="py-4 px-4 border-b text-slate-800">{paper.season}</td>
                                    <td className="py-4 px-4 border-b text-slate-800">{paper.paperNumber}</td>
                                    <td className="py-4 px-4 border-b">
                                      <a 
                                        href={paper.questionPaper} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="text-[#2dd4bf] hover:text-teal-700 font-medium inline-flex items-center"
                                      >
                                        <i className="fas fa-file-pdf mr-2"></i> Question Paper
                                      </a>
                                    </td>
                                    <td className="py-4 px-4 border-b">
                                      <a 
                                        href={paper.markScheme} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="text-[#2dd4bf] hover:text-teal-700 font-medium inline-flex items-center"
                                      >
                                        <i className="fas fa-file-pdf mr-2"></i> Mark Scheme
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-slate-500">No papers available for this selection.</p>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            
            {/* Study Tips */}
            <div className="mt-16">
              <ScrollAnimation variant="fadeUp">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="font-playfair font-bold text-2xl text-slate-900 mb-4">
                    How to Use Past Papers Effectively
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-[#2dd4bf] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">1</span>
                      <p className="text-slate-700">Start by trying the paper under timed conditions to simulate an exam environment.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-[#2dd4bf] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">2</span>
                      <p className="text-slate-700">Mark your answers using the mark scheme, being strict with yourself.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-[#2dd4bf] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">3</span>
                      <p className="text-slate-700">Review your mistakes and make notes on the topics you need to revise further.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-[#2dd4bf] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">4</span>
                      <p className="text-slate-700">Focus your revision on weak areas, then try another paper to track your progress.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-[#2dd4bf] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">5</span>
                      <p className="text-slate-700">Book a session with The Study Hive tutors for help with any challenging topics or questions.</p>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
            
            {/* Call to Action */}
            <div className="mt-16">
              <ScrollAnimation variant="fadeUp">
                <div className="bg-[#2dd4bf] rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900 opacity-10 pattern-hexagons"></div>
                  <div className="p-8 md:p-10 relative z-10 text-center">
                    <h3 className="font-playfair font-bold text-2xl md:text-3xl text-white mb-4">
                      Need Help With Your Exam Preparation?
                    </h3>
                    <p className="text-white/90 mb-6 max-w-3xl mx-auto">
                      Our experienced tutors can guide you through past papers, explain difficult concepts, 
                      and help you develop effective exam strategies.
                    </p>
                    <Link href="#contact">
                      <motion.button 
                        className="px-8 py-3 bg-white text-teal-600 font-bold rounded-3xl hover:bg-slate-100 transition-colors"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Book a Session
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastPapersPage;