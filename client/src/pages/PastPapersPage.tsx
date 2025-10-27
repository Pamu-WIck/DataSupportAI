import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { NoteGenerator } from "@/components/pastpapers/NoteGenerator";

// Import data from new data files
import { examBoards } from "./past-papers/data/examBoardsData";
import { pastPapers } from "./past-papers/data/papersData";

// Import components
import { NotesDialog } from "./past-papers/components/NotesDialog";
import { StudyTips } from "./past-papers/components/StudyTips";
import { CallToAction } from "./past-papers/components/CallToAction";
import { PaperFilters } from "./past-papers/components/PaperFilters";

// Import utilities
import { generateSimulatedNotes } from "./past-papers/utils/noteGenerationUtils";

/**
 * PastPapersPage component
 * A comprehensive repository of past papers organised by exam board
 */
const PastPapersPage = () => {
  const [selectedLevel, setSelectedLevel] = useState("gcse");
  const [selectedBoard, setSelectedBoard] = useState("aqa");
  const [yearFilter, setYearFilter] = useState("all");
  const [seasonFilter, setSeasonFilter] = useState("all");

  // Note generation state
  const [isGeneratingNotes, setIsGeneratingNotes] = useState(false);
  const [generatedNotes, setGeneratedNotes] = useState("");
  const [selectedPaper, setSelectedPaper] = useState<any>(null);

  // Function to generate notes for a specific paper
  const generateNotes = (paper: any, tier: string, subject: string) => {
    setSelectedPaper({
      ...paper,
      tier,
      subject: subject === "combined-science" ? "Combined Science" : subject,
      examBoard: examBoards.find(b => b.id === selectedBoard)?.name
    });
    setIsGeneratingNotes(true);

    // Simulate API call to Perplexity
    setTimeout(() => {
      const notes = generateSimulatedNotes(
        paper,
        tier,
        subject,
        examBoards,
        selectedBoard,
        selectedLevel
      );
      setGeneratedNotes(notes);
      setIsGeneratingNotes(false);
    }, 1500);
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

              <ScrollAnimation variant="fadeIn">
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
            {/* Education Level Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Select Education Level</h3>
              <div className="bg-white rounded-xl shadow-md p-3 flex flex-wrap mx-auto justify-center w-full">
                <button
                  onClick={() => {
                    setSelectedLevel("ks3");
                    setSelectedBoard("ks3");
                  }}
                  className={`flex-1 px-6 py-4 rounded-xl text-base font-medium transition-all mx-1 ${
                    selectedLevel === "ks3"
                      ? "bg-[#2dd4bf] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  KS3 (11-14)
                </button>
                <button
                  onClick={() => {
                    setSelectedLevel("gcse");
                    setSelectedBoard("aqa");
                  }}
                  className={`flex-1 px-6 py-4 rounded-xl text-base font-medium transition-all mx-1 ${
                    selectedLevel === "gcse"
                      ? "bg-[#2dd4bf] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  GCSE & IGCSE (14-16)
                </button>
                <button
                  onClick={() => {
                    setSelectedLevel("alevel");
                    setSelectedBoard("aqa-alevel");
                  }}
                  className={`flex-1 px-6 py-4 rounded-xl text-base font-medium transition-all mx-1 ${
                    selectedLevel === "alevel"
                      ? "bg-[#2dd4bf] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  A Level (16-18)
                </button>
              </div>
            </div>

            {/* Exam Board Selection */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-center">Select Exam Board</h3>
              <div className="bg-white rounded-xl shadow-md p-2 flex flex-wrap gap-2 mx-auto justify-center w-full">
                {examBoards
                  .filter(board => {
                    if (selectedLevel === "gcse") {
                      return board.type === "GCSE" || board.type === "IGCSE";
                    } else if (selectedLevel === "alevel") {
                      return board.type === "A Level";
                    } else if (selectedLevel === "ks3") {
                      return board.id === "ks3";
                    }
                    return false;
                  })
                  .map((board) => {
                    // When there's only one board (like in KS3), take the full width
                    const filteredBoards = examBoards.filter(b => {
                      if (selectedLevel === "gcse") return b.type === "GCSE" || b.type === "IGCSE";
                      if (selectedLevel === "alevel") return b.type === "A Level";
                      if (selectedLevel === "ks3") return b.id === "ks3";
                      return false;
                    });

                    const isSingleBoard = filteredBoards.length === 1;
                    const flexClass = isSingleBoard ? 'w-full' : 'flex-1 max-w-fit';

                    return (
                      <button
                        key={board.id}
                        onClick={() => setSelectedBoard(board.id)}
                        className={`${flexClass} px-4 py-3 rounded-3xl text-sm font-medium transition-all mx-1 ${
                          selectedBoard === board.id
                            ? "bg-[#2dd4bf] text-white shadow-md"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {board.name} {board.type}
                      </button>
                    );
                  })}
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
                    <PaperFilters
                      yearFilter={yearFilter}
                      seasonFilter={seasonFilter}
                      onYearFilterChange={setYearFilter}
                      onSeasonFilterChange={setSeasonFilter}
                      onClearFilters={() => {
                        setYearFilter('all');
                        setSeasonFilter('all');
                      }}
                    />

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
                                          <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Study Notes</th>
                                        </tr>
                                        {/* Paper Count */}
                                        <tr className="bg-slate-50/40">
                                          <td colSpan={7} className="py-2 px-4 text-xs text-slate-500 italic">
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
                                                href={paper.questionPaper.replace('/downloads/past-papers/', '/api/download/')}
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
                                                href={paper.markScheme.replace('/downloads/past-papers/', '/api/download/')}
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
                                            <td className="py-4 px-4 border-b">
                                              <NoteGenerator
                                                examBoard={selectedBoard}
                                                subject={subject}
                                                paperIdentifier={`${selectedBoard}-${subject}-${paper.paperNumber}-${paper.year}-${paper.season}`}
                                                paperDetails={paper}
                                                studentId={1} // Default student ID for demo
                                              />
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
                                            <td colSpan={7} className="py-8 text-center text-slate-500">
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
                                  <th className="text-left py-4 px-4 font-medium text-slate-700 border-b">Study Notes</th>
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
                                    <td className="py-4 px-4 border-b">
                                      <NoteGenerator
                                        examBoard={selectedBoard}
                                        subject={subject}
                                        paperIdentifier={`${selectedBoard}-${subject}-${paper.paperNumber}-${paper.year}-${paper.season}`}
                                        paperDetails={paper}
                                        studentId={1} // Default student ID for demo
                                      />
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
            <StudyTips />

            {/* Call to Action */}
            <CallToAction />
          </div>
        </div>
      </section>

      {/* Notes Dialog */}
      <NotesDialog
        selectedPaper={selectedPaper}
        isGeneratingNotes={isGeneratingNotes}
        generatedNotes={generatedNotes}
        onOpenChange={(open) => !open && setSelectedPaper(null)}
      />
    </div>
  );
};

export default PastPapersPage;
