/**
 * Past Papers Data
 * Comprehensive collection of past exam papers organized by exam board, subject, and year
 */

export interface PastPaper {
  year: string;
  season: string;
  paperNumber: string;
  course?: string;
  questionPaper?: string;
  markScheme?: string;
  url?: string;
}

export interface SubjectPapers {
  foundation?: PastPaper[];
  higher?: PastPaper[];
  [key: string]: PastPaper[] | undefined;
}

export interface ExamBoardPapers {
  biology: SubjectPapers;
  chemistry: SubjectPapers;
  physics: SubjectPapers;
  "combined-science"?: SubjectPapers;
}

export interface PastPapersData {
  [examBoardId: string]: ExamBoardPapers;
}

export const pastPapers: PastPapersData = {
    // KS3 Past Papers
    "ks3": {
      biology: {
        higher: [
          { year: "2023", season: "Summer", course: "KS3 Year 9", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year9-Summer2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year9-Summer2023-MS.pdf" },
          { year: "2023", season: "Spring", course: "KS3 Year 9", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year9-Spring2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year9-Spring2023-MS.pdf" },
          { year: "2023", season: "Autumn", course: "KS3 Year 9", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year9-Autumn2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year9-Autumn2023-MS.pdf" },
          { year: "2023", season: "Summer", course: "KS3 Year 8", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year8-Summer2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year8-Summer2023-MS.pdf" },
          { year: "2023", season: "Spring", course: "KS3 Year 8", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year8-Spring2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year8-Spring2023-MS.pdf" },
          { year: "2023", season: "Autumn", course: "KS3 Year 8", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year8-Autumn2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year8-Autumn2023-MS.pdf" },
          { year: "2023", season: "Summer", course: "KS3 Year 7", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year7-Summer2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year7-Summer2023-MS.pdf" },
          { year: "2023", season: "Spring", course: "KS3 Year 7", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year7-Spring2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year7-Spring2023-MS.pdf" },
          { year: "2023", season: "Autumn", course: "KS3 Year 7", paperNumber: "Biology Paper 1", questionPaper: "/downloads/past-papers/ks3/biology/KS3-Biology-Year7-Autumn2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/biology/KS3-Biology-Year7-Autumn2023-MS.pdf" }
        ]
      },
      chemistry: {
        higher: [
          { year: "2023", season: "Summer", course: "KS3 Year 9", paperNumber: "Chemistry Paper 1", questionPaper: "/downloads/past-papers/ks3/chemistry/KS3-Chemistry-Year9-Summer2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/chemistry/KS3-Chemistry-Year9-Summer2023-MS.pdf" },
          { year: "2023", season: "Spring", course: "KS3 Year 9", paperNumber: "Chemistry Paper 1", questionPaper: "/downloads/past-papers/ks3/chemistry/KS3-Chemistry-Year9-Spring2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/chemistry/KS3-Chemistry-Year9-Spring2023-MS.pdf" },
          { year: "2023", season: "Autumn", course: "KS3 Year 9", paperNumber: "Chemistry Paper 1", questionPaper: "/downloads/past-papers/ks3/chemistry/KS3-Chemistry-Year9-Autumn2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/chemistry/KS3-Chemistry-Year9-Autumn2023-MS.pdf" }
        ]
      },
      physics: {
        higher: [
          { year: "2023", season: "Summer", course: "KS3 Year 9", paperNumber: "Physics Paper 1", questionPaper: "/downloads/past-papers/ks3/physics/KS3-Physics-Year9-Summer2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/physics/KS3-Physics-Year9-Summer2023-MS.pdf" },
          { year: "2023", season: "Spring", course: "KS3 Year 9", paperNumber: "Physics Paper 1", questionPaper: "/downloads/past-papers/ks3/physics/KS3-Physics-Year9-Spring2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/physics/KS3-Physics-Year9-Spring2023-MS.pdf" },
          { year: "2023", season: "Autumn", course: "KS3 Year 9", paperNumber: "Physics Paper 1", questionPaper: "/downloads/past-papers/ks3/physics/KS3-Physics-Year9-Autumn2023-QP.pdf", markScheme: "/downloads/past-papers/ks3/physics/KS3-Physics-Year9-Autumn2023-MS.pdf" }
        ]
      }
    },
    
    // A-Level Past Papers
    "aqa-alevel": {
      biology: {
        higher: [
          { year: "2023", season: "Summer", course: "Biology", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-1-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-1-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Biology", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-2-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-2-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Biology", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-3-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-3-MS-JUN23.pdf" },
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-1-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-1-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-2-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-2-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Biology", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-3-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/biology/AQA-7402-3-MS-JUN22.pdf" }
        ]
      },
      chemistry: {
        higher: [
          { year: "2023", season: "Summer", course: "Chemistry", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-1-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-1-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Chemistry", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-2-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-2-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Chemistry", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-3-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-3-MS-JUN23.pdf" },
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-1-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-1-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-2-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-2-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Chemistry", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-3-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/chemistry/AQA-7405-3-MS-JUN22.pdf" }
        ]
      },
      physics: {
        higher: [
          { year: "2023", season: "Summer", course: "Physics", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-1-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-1-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Physics", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-2-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-2-MS-JUN23.pdf" },
          { year: "2023", season: "Summer", course: "Physics", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-3-QP-JUN23.pdf", markScheme: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-3-MS-JUN23.pdf" },
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-1-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-1-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-2-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-2-MS-JUN22.pdf" },
          { year: "2022", season: "Summer", course: "Physics", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-3-QP-JUN22.pdf", markScheme: "/downloads/past-papers/aqa-alevel/physics/AQA-7408-3-MS-JUN22.pdf" }
        ]
      }
    },
    
    "edexcel-alevel": {
      biology: {
        higher: [
          { year: "2023", season: "Summer", course: "Biology A", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/edexcel-alevel/biology/9BN0_01_que_20230524.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/biology/9BN0_01_rms_20230524.pdf" },
          { year: "2023", season: "Summer", course: "Biology A", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/edexcel-alevel/biology/9BN0_02_que_20230614.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/biology/9BN0_02_rms_20230614.pdf" },
          { year: "2023", season: "Summer", course: "Biology A", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/edexcel-alevel/biology/9BN0_03_que_20230620.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/biology/9BN0_03_rms_20230620.pdf" },
          { year: "2022", season: "Summer", course: "Biology A", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/edexcel-alevel/biology/9BN0_01_que_20220524.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/biology/9BN0_01_rms_20220524.pdf" },
          { year: "2022", season: "Summer", course: "Biology A", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/edexcel-alevel/biology/9BN0_02_que_20220614.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/biology/9BN0_02_rms_20220614.pdf" },
          { year: "2022", season: "Summer", course: "Biology A", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/edexcel-alevel/biology/9BN0_03_que_20220620.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/biology/9BN0_03_rms_20220620.pdf" }
        ]
      },
      chemistry: {
        higher: [
          { year: "2023", season: "Summer", course: "Chemistry", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/edexcel-alevel/chemistry/9CH0_01_que_20230526.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/chemistry/9CH0_01_rms_20230526.pdf" },
          { year: "2023", season: "Summer", course: "Chemistry", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/edexcel-alevel/chemistry/9CH0_02_que_20230616.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/chemistry/9CH0_02_rms_20230616.pdf" },
          { year: "2023", season: "Summer", course: "Chemistry", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/edexcel-alevel/chemistry/9CH0_03_que_20230622.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/chemistry/9CH0_03_rms_20230622.pdf" }
        ]
      },
      physics: {
        higher: [
          { year: "2023", season: "Summer", course: "Physics", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/edexcel-alevel/physics/9PH0_01_que_20230525.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/physics/9PH0_01_rms_20230525.pdf" },
          { year: "2023", season: "Summer", course: "Physics", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/edexcel-alevel/physics/9PH0_02_que_20230615.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/physics/9PH0_02_rms_20230615.pdf" },
          { year: "2023", season: "Summer", course: "Physics", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/edexcel-alevel/physics/9PH0_03_que_20230621.pdf", markScheme: "/downloads/past-papers/edexcel-alevel/physics/9PH0_03_rms_20230621.pdf" }
        ]
      }
    },
    
    "ocr-alevel": {
      biology: {
        higher: [
          { year: "2023", season: "Summer", course: "Biology A", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/ocr-alevel/biology/H420-01-que-20230525.pdf", markScheme: "/downloads/past-papers/ocr-alevel/biology/H420-01-rms-20230525.pdf" },
          { year: "2023", season: "Summer", course: "Biology A", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/ocr-alevel/biology/H420-02-que-20230608.pdf", markScheme: "/downloads/past-papers/ocr-alevel/biology/H420-02-rms-20230608.pdf" },
          { year: "2023", season: "Summer", course: "Biology A", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/ocr-alevel/biology/H420-03-que-20230615.pdf", markScheme: "/downloads/past-papers/ocr-alevel/biology/H420-03-rms-20230615.pdf" }
        ]
      },
      chemistry: {
        higher: [
          { year: "2023", season: "Summer", course: "Chemistry A", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/ocr-alevel/chemistry/H432-01-que-20230605.pdf", markScheme: "/downloads/past-papers/ocr-alevel/chemistry/H432-01-rms-20230605.pdf" },
          { year: "2023", season: "Summer", course: "Chemistry A", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/ocr-alevel/chemistry/H432-02-que-20230612.pdf", markScheme: "/downloads/past-papers/ocr-alevel/chemistry/H432-02-rms-20230612.pdf" },
          { year: "2023", season: "Summer", course: "Chemistry A", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/ocr-alevel/chemistry/H432-03-que-20230619.pdf", markScheme: "/downloads/past-papers/ocr-alevel/chemistry/H432-03-rms-20230619.pdf" }
        ]
      },
      physics: {
        higher: [
          { year: "2023", season: "Summer", course: "Physics A", paperNumber: "Paper 1", questionPaper: "/downloads/past-papers/ocr-alevel/physics/H556-01-que-20230606.pdf", markScheme: "/downloads/past-papers/ocr-alevel/physics/H556-01-rms-20230606.pdf" },
          { year: "2023", season: "Summer", course: "Physics A", paperNumber: "Paper 2", questionPaper: "/downloads/past-papers/ocr-alevel/physics/H556-02-que-20230613.pdf", markScheme: "/downloads/past-papers/ocr-alevel/physics/H556-02-rms-20230613.pdf" },
          { year: "2023", season: "Summer", course: "Physics A", paperNumber: "Paper 3", questionPaper: "/downloads/past-papers/ocr-alevel/physics/H556-03-que-20230620.pdf", markScheme: "/downloads/past-papers/ocr-alevel/physics/H556-03-rms-20230620.pdf" }
        ]
      }
    },
    
    // GCSE Past Papers
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
