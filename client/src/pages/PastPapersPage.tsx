import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * PastPapersPage component
 * A comprehensive repository of past papers organized by exam board
 */
const PastPapersPage = () => {
  const [selectedBoard, setSelectedBoard] = useState("aqa");
  const [yearFilter, setYearFilter] = useState("all");
  const [seasonFilter, setSeasonFilter] = useState("all");
  
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
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa/biology/AQA-84611H-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa/biology/AQA-84611H-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa/biology/AQA-84621H-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa/biology/AQA-84621H-MS-JUN23.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa/biology/AQA-84611H-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa/biology/AQA-84611H-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa/biology/AQA-84621H-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa/biology/AQA-84621H-MS-JUN22.pdf" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84611H-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84611H-MS-JAN22.PDF" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84621H-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84621H-MS-JAN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84611H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84611H-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84621H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84621H-MS-JUN21.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84611H-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84611H-MS-NOV20.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84621H-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84621H-MS-NOV20.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84611H-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84611H-MS-JUN19.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84621H-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84621H-MS-JUN19.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84611H-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84611H-MS-JUN18.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84621H-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84621H-MS-JUN18.PDF" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa/biology/AQA-84611F-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa/biology/AQA-84611F-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa/biology/AQA-84621F-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa/biology/AQA-84621F-MS-JUN23.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa/biology/AQA-84611F-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa/biology/AQA-84611F-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa/biology/AQA-84621F-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa/biology/AQA-84621F-MS-JUN22.pdf" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84611F-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84611F-MS-JAN22.PDF" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84621F-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84621F-MS-JAN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84611F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84611F-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84621F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84621F-MS-JUN21.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84611F-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84611F-MS-NOV20.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84621F-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84621F-MS-NOV20.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84611F-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84611F-MS-JUN19.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84621F-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84621F-MS-JUN19.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84611F-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84611F-MS-JUN18.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84621F-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84621F-MS-JUN18.PDF" },
        ]
      },
      chemistry: {
        higher: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa/chemistry/AQA-84612H-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa/chemistry/AQA-84612H-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa/chemistry/AQA-84622H-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa/chemistry/AQA-84622H-MS-JUN23.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa/chemistry/AQA-84612H-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa/chemistry/AQA-84612H-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa/chemistry/AQA-84622H-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa/chemistry/AQA-84622H-MS-JUN22.pdf" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84612H-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84612H-MS-JAN22.PDF" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84622H-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84622H-MS-JAN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84612H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84612H-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84622H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84622H-MS-JUN21.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84612H-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84612H-MS-NOV20.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84622H-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84622H-MS-NOV20.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612H-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612H-MS-JUN19.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84622H-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84622H-MS-JUN19.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84612H-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84612H-MS-JUN18.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84622H-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84622H-MS-JUN18.PDF" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-84612F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-84612F-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-84622F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-84622F-MS-JUN23.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84622F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84622F-MS-JUN22.PDF" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84612F-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84612F-MS-JAN22.PDF" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84622F-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84622F-MS-JAN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84612F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84612F-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84622F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84622F-MS-JUN21.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84612F-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84612F-MS-NOV20.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84622F-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84622F-MS-NOV20.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612F-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612F-MS-JUN19.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84622F-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84622F-MS-JUN19.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84612F-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84612F-MS-JUN18.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84622F-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84622F-MS-JUN18.PDF" },
        ]
      },
      physics: {
        higher: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa/physics/AQA-84613H-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa/physics/AQA-84613H-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa/physics/AQA-84623H-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa/physics/AQA-84623H-MS-JUN23.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa/physics/AQA-84613H-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa/physics/AQA-84613H-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa/physics/AQA-84623H-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa/physics/AQA-84623H-MS-JUN22.pdf" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84613H-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84613H-MS-JAN22.PDF" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84623H-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84623H-MS-JAN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84613H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84613H-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84623H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84623H-MS-JUN21.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84613H-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84613H-MS-NOV20.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84623H-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84623H-MS-NOV20.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84613H-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84613H-MS-JUN19.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84623H-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84623H-MS-JUN19.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84613H-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84613H-MS-JUN18.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84623H-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84623H-MS-JUN18.PDF" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-84613F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-84613F-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-84623F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-84623F-MS-JUN23.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84613F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84613F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84623F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84623F-MS-JUN22.PDF" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84613F-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84613F-MS-JAN22.PDF" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84623F-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-84623F-MS-JAN22.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84613F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84613F-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84623F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-84623F-MS-JUN21.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84613F-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84613F-MS-NOV20.PDF" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84623F-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-84623F-MS-NOV20.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84613F-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84613F-MS-JUN19.PDF" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84623F-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84623F-MS-JUN19.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84613F-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84613F-MS-JUN18.PDF" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84623F-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84623F-MS-JUN18.PDF" },
        ]
      },
      "combined-science": {
        higher: [
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83461H-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83461H-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83471H-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83471H-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83462H-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83462H-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83472H-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83472H-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83463H-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83463H-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83473H-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83473H-MS-JUN23.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83461H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83461H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83471H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83471H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83462H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83462H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83472H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83472H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83463H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83463H-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83473H-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83473H-MS-JUN22.PDF" },
          { year: "2022", season: "January", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-83461H-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-83461H-MS-JAN22.PDF" },
          { year: "2022", season: "January", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-83471H-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-83471H-MS-JAN22.PDF" },
          { year: "2021", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-83461H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-83461H-MS-JUN21.PDF" },
          { year: "2021", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-83471H-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-83471H-MS-JUN21.PDF" },
          { year: "2020", season: "Autumn", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-83461H-QP-NOV20.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-83461H-MS-NOV20.PDF" },
          { year: "2019", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-83461H-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-83461H-MS-JUN19.PDF" },
          { year: "2018", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-83461H-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-83461H-MS-JUN18.PDF" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83461F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83461F-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83471F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83471F-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83462F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83462F-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83472F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83472F-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83463F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83463F-MS-JUN23.PDF" },
          { year: "2023", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83473F-QP-JUN23.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-83473F-MS-JUN23.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83461F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83461F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83471F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83471F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83462F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83462F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Chemistry Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83472F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83472F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83463F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83463F-MS-JUN22.PDF" },
          { year: "2022", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Physics Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83473F-QP-JUN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-83473F-MS-JUN22.PDF" },
          { year: "2022", season: "January", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-83461F-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-83461F-MS-JAN22.PDF" },
          { year: "2022", season: "January", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 2", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-83471F-QP-JAN22.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/january/AQA-83471F-MS-JAN22.PDF" },
          { year: "2021", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-83461F-QP-JUN21.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/june/AQA-83461F-MS-JUN21.PDF" },
          { year: "2019", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-83461F-QP-JUN19.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-83461F-MS-JUN19.PDF" },
          { year: "2018", season: "Summer", course: "Combined Science: Trilogy", paperNumber: "Biology Paper 1", questionPaper: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-83461F-QP-JUN18.PDF", markScheme: "https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-83461F-MS-JUN18.PDF" },
        ]
      },
    },
    ocr: {
      biology: {
        higher: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2020", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Higher-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2020", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Higher-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/601057-question-paper-breadth-in-biology-higher-tier-paper-1-j247-01.pdf", markScheme: "https://www.ocr.org.uk/Images/601085-mark-scheme-breadth-in-biology-higher-tier-paper-1-j247-01.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/601058-question-paper-depth-in-biology-higher-tier-paper-2-j247-02.pdf", markScheme: "https://www.ocr.org.uk/Images/601086-mark-scheme-depth-in-biology-higher-tier-paper-2-j247-02.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/505644-question-paper-breadth-in-biology-higher-tier-paper-1-j247-01.pdf", markScheme: "https://www.ocr.org.uk/Images/505672-mark-scheme-breadth-in-biology-higher-tier-paper-1-j247-01.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/505645-question-paper-depth-in-biology-higher-tier-paper-2-j247-02.pdf", markScheme: "https://www.ocr.org.uk/Images/505673-mark-scheme-depth-in-biology-higher-tier-paper-2-j247-02.pdf" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Foundation-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Foundation-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Foundation-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-2-Foundation-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2020", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J247-J257-Paper-1-Foundation-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/601055-question-paper-breadth-in-biology-foundation-tier-paper-1-j247-01.pdf", markScheme: "https://www.ocr.org.uk/Images/601083-mark-scheme-breadth-in-biology-foundation-tier-paper-1-j247-01.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Biology A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/505642-question-paper-breadth-in-biology-foundation-tier-paper-1-j247-01.pdf", markScheme: "https://www.ocr.org.uk/Images/505670-mark-scheme-breadth-in-biology-foundation-tier-paper-1-j247-01.pdf" },
        ],
      },
      chemistry: {
        higher: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2020", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Higher-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/603753-question-paper-breadth-in-chemistry-higher-tier-paper-1-j248-01.pdf", markScheme: "https://www.ocr.org.uk/Images/603781-mark-scheme-breadth-in-chemistry-higher-tier-paper-1-j248-01.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/506982-question-paper-breadth-in-chemistry-higher-tier-paper-1-j248-01.pdf", markScheme: "https://www.ocr.org.uk/Images/507010-mark-scheme-breadth-in-chemistry-higher-tier-paper-1-j248-01.pdf" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-2-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2020", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J248-J258-Paper-1-Foundation-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/603751-question-paper-breadth-in-chemistry-foundation-tier-paper-1-j248-01.pdf", markScheme: "https://www.ocr.org.uk/Images/603779-mark-scheme-breadth-in-chemistry-foundation-tier-paper-1-j248-01.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Chemistry A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/506980-question-paper-breadth-in-chemistry-foundation-tier-paper-1-j248-01.pdf", markScheme: "https://www.ocr.org.uk/Images/507008-mark-scheme-breadth-in-chemistry-foundation-tier-paper-1-j248-01.pdf" },
        ],
      },
      physics: {
        higher: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2020", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Higher-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/604649-question-paper-breadth-in-physics-higher-tier-paper-1-j249-01.pdf", markScheme: "https://www.ocr.org.uk/Images/604677-mark-scheme-breadth-in-physics-higher-tier-paper-1-j249-01.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/507878-question-paper-breadth-in-physics-higher-tier-paper-1-j249-01.pdf", markScheme: "https://www.ocr.org.uk/Images/507906-mark-scheme-breadth-in-physics-higher-tier-paper-1-j249-01.pdf" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-2-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2020", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J249-J259-Paper-1-Foundation-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/604647-question-paper-breadth-in-physics-foundation-tier-paper-1-j249-01.pdf", markScheme: "https://www.ocr.org.uk/Images/604675-mark-scheme-breadth-in-physics-foundation-tier-paper-1-j249-01.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Physics A - Paper 1", questionPaper: "https://www.ocr.org.uk/Images/507876-question-paper-breadth-in-physics-foundation-tier-paper-1-j249-01.pdf", markScheme: "https://www.ocr.org.uk/Images/507904-mark-scheme-breadth-in-physics-foundation-tier-paper-1-j249-01.pdf" },
        ],
      },
      "combined-science": {
        higher: [
          { year: "2023", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2023", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2023", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2023", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Higher-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Higher-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-5-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-5-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-6-Higher-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-6-Higher-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2020", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Higher-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2019", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/604155-question-paper-biology-paper-1-higher-tier-paper-1-j250-01.pdf", markScheme: "https://www.ocr.org.uk/Images/604183-mark-scheme-biology-paper-1-higher-tier-paper-1-j250-01.pdf" },
          { year: "2018", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/504762-question-paper-paper-1-biology-higher-tier-j250-01.pdf", markScheme: "https://www.ocr.org.uk/Images/504790-mark-scheme-paper-1-biology-higher-tier-j250-01.pdf" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2023", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Foundation-Tier-Question-Paper-June-2023.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Foundation-Tier-Mark-Scheme-June-2023.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-4-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-2-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Chemistry Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-5-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-5-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-3-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2022", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Physics Paper 2", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-6-Foundation-Tier-Question-Paper-June-2022.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-6-Foundation-Tier-Mark-Scheme-June-2022.pdf" },
          { year: "2021", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Question-Paper-June-2021.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Mark-Scheme-June-2021.pdf" },
          { year: "2020", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Question-Paper-June-2020.pdf", markScheme: "https://www.ocr.org.uk/Images/J250-J260-Paper-1-Foundation-Tier-Mark-Scheme-June-2020.pdf" },
          { year: "2019", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/604152-question-paper-biology-paper-1-foundation-tier-paper-1-j250-01.pdf", markScheme: "https://www.ocr.org.uk/Images/604181-mark-scheme-biology-paper-1-foundation-tier-paper-1-j250-01.pdf" },
          { year: "2018", season: "Summer", course: "Combined Science A: Gateway", paperNumber: "Biology Paper 1", questionPaper: "https://www.ocr.org.uk/Images/504759-question-paper-paper-1-biology-foundation-tier-j250-01.pdf", markScheme: "https://www.ocr.org.uk/Images/504787-mark-scheme-paper-1-biology-foundation-tier-j250-01.pdf" },
        ],
      },
    },
    "edexcel-gcse": {
      biology: {
        higher: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_que_20230517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_msc_20230517.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2H_que_20230609.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2H_msc_20230609.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_que_20220517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_msc_20220517.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2H_que_20220609.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2H_msc_20220609.pdf" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_que_20220124.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_msc_20220124.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_que_20210527.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_msc_20210527.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2H_que_20210616.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2H_msc_20210616.pdf" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_que_20201102.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_msc_20201102.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_que_20190514.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_msc_20190514.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_que_20180515.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1H_msc_20180515.pdf" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_que_20230517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_msc_20230517.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2F_que_20230609.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2F_msc_20230609.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_que_20220517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_msc_20220517.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2F_que_20220609.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_2F_msc_20220609.pdf" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_que_20220124.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_msc_20220124.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_que_20210527.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_msc_20210527.pdf" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_que_20201102.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_msc_20201102.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_que_20190514.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_msc_20190514.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_que_20180515.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Biology/2016/exam-materials/1BI0_1F_msc_20180515.pdf" },
        ]
      },
      chemistry: {
        higher: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_que_20230520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_msc_20230520.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2H_que_20230613.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2H_msc_20230613.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_que_20220520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_msc_20220520.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2H_que_20220613.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2H_msc_20220613.pdf" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_que_20220126.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_msc_20220126.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_que_20210527.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_msc_20210527.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2H_que_20210616.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2H_msc_20210616.pdf" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_que_20201104.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_msc_20201104.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_que_20190516.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_msc_20190516.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_que_20180517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1H_msc_20180517.pdf" },
        ],
        foundation: [
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_que_20230520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_msc_20230520.pdf" },
          { year: "2023", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2F_que_20230613.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2F_msc_20230613.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_que_20220520.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_msc_20220520.pdf" },
          { year: "2022", season: "Summer", course: "Triple Science", paperNumber: "Paper 2", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2F_que_20220613.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_2F_msc_20220613.pdf" },
          { year: "2022", season: "January", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_que_20220126.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_msc_20220126.pdf" },
          { year: "2021", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_que_20210527.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_msc_20210527.pdf" },
          { year: "2020", season: "Autumn", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_que_20201104.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_msc_20201104.pdf" },
          { year: "2019", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_que_20190516.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_msc_20190516.pdf" },
          { year: "2018", season: "Summer", course: "Triple Science", paperNumber: "Paper 1", questionPaper: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_que_20180517.pdf", markScheme: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Chemistry/2016/exam-materials/1CH0_1F_msc_20180517.pdf" },
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
                    
                    {/* Official Resource Link */}
                    <div className="mb-6">
                      <a 
                        href={(() => {
                          const subjectForUrl = subject === "combined-science" ? "combined-science" : subject;
                          switch(selectedBoard) {
                            case "aqa":
                              return `https://www.aqa.org.uk/find-past-papers-and-mark-schemes?subject=${subjectForUrl.charAt(0).toUpperCase() + subjectForUrl.slice(1)}`;
                            case "ocr":
                              return `https://www.ocr.org.uk/qualifications/past-paper-finder/`;
                            case "edexcel-gcse":
                            case "edexcel-igcse":
                              return `https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html`;
                            case "cie":
                              return `https://papers.gceguide.com/Cambridge%20IGCSE/`;
                            case "wjec":
                              return `https://www.wjec.co.uk/home/past-papers/`;
                            default:
                              return `https://www.aqa.org.uk/find-past-papers-and-mark-schemes`;
                          }
                        })()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-all"
                      >
                        <ExternalLink size={16} />
                        Browse Official {examBoards.find(b => b.id === selectedBoard)?.name} Resources
                      </a>
                    </div>
                    
                    {/* Filter options */}
                    <div className="flex flex-wrap gap-3 mb-6 items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700">Filter by Year:</span>
                        <select 
                          className="px-3 py-1.5 border border-slate-300 rounded-md text-sm"
                          value={yearFilter}
                          onChange={(e) => setYearFilter(e.target.value)}
                        >
                          <option value="all">All Years</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700">Filter by Season:</span>
                        <select 
                          className="px-3 py-1.5 border border-slate-300 rounded-md text-sm"
                          value={seasonFilter}
                          onChange={(e) => setSeasonFilter(e.target.value)}
                        >
                          <option value="all">All Seasons</option>
                          <option value="Summer">Summer</option>
                          <option value="January">January</option>
                          <option value="Winter">Winter</option>
                          <option value="Autumn">Autumn</option>
                        </select>
                      </div>
                      
                      {/* Clear Filters Button - only show if filters are active */}
                      {(yearFilter !== 'all' || seasonFilter !== 'all') && (
                        <button
                          onClick={() => {
                            setYearFilter('all');
                            setSeasonFilter('all');
                          }}
                          className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5"/>
                            <path d="M12 19l-7-7 7-7"/>
                          </svg>
                          Clear Filters
                        </button>
                      )}
                    </div>
                    
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
                                        {/* Paper Count */}
                                        <tr className="bg-slate-50/40">
                                          <td colSpan={6} className="py-2 px-4 text-xs text-slate-500 italic">
                                            Showing {(pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject][tier]
                                              .filter((paper: any) => {
                                                if (yearFilter !== 'all' && paper.year !== yearFilter) return false;
                                                if (seasonFilter !== 'all' && paper.season !== seasonFilter) return false;
                                                return true;
                                              }).length} of {(pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject][tier].length} papers
                                          </td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {(pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject][tier]
                                          .filter((paper: any) => {
                                            // Apply year filter
                                            if (yearFilter !== 'all' && paper.year !== yearFilter) {
                                              return false;
                                            }
                                            
                                            // Apply season filter
                                            if (seasonFilter !== 'all' && paper.season !== seasonFilter) {
                                              return false;
                                            }
                                            
                                            return true;
                                          })
                                          .map((paper: any, index: number) => (
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
                                                className="text-[#2dd4bf] hover:text-teal-700 font-medium inline-flex items-center gap-1.5"
                                                download
                                              >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                                  <polyline points="14 2 14 8 20 8"/>
                                                </svg>
                                                Question Paper
                                              </a>
                                            </td>
                                            <td className="py-4 px-4 border-b">
                                              <a 
                                                href={paper.markScheme} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="text-[#2dd4bf] hover:text-teal-700 font-medium inline-flex items-center gap-1.5"
                                                download
                                              >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                                  <polyline points="14 2 14 8 20 8"/>
                                                </svg>
                                                Mark Scheme
                                              </a>
                                            </td>
                                          </tr>
                                        ))}
                                        
                                        {/* No results message */}
                                        {(pastPapers[selectedBoard as keyof typeof pastPapers] as any)[subject][tier]
                                          .filter((paper: any) => {
                                            if (yearFilter !== 'all' && paper.year !== yearFilter) return false;
                                            if (seasonFilter !== 'all' && paper.season !== seasonFilter) return false;
                                            return true;
                                          }).length === 0 && (
                                          <tr>
                                            <td colSpan={6} className="py-8 text-center text-slate-500">
                                              No papers found matching your filters. Try adjusting your criteria.
                                            </td>
                                          </tr>
                                        )}
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