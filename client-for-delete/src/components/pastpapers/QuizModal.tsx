import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, BookOpen, Trophy, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  examBoard: string;
  subject: string;
  paperDetails: {
    year: string;
    season: string;
    paperNumber: string;
    tier?: string;
  };
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  marks: number;
}

export function QuizModal({ open, onOpenChange, examBoard, subject, paperDetails }: QuizModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Generate sample questions based on subject
  const questions: Question[] = generateQuestions(subject);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Calculate score
  const calculateScore = () => {
    let correct = 0;
    let totalMarks = 0;
    let earnedMarks = 0;

    questions.forEach((q, index) => {
      totalMarks += q.marks;
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
        earnedMarks += q.marks;
      }
    });

    return { correct, total: questions.length, earnedMarks, totalMarks };
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (!hasAnswered) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestionIndex] = optionIndex;
      setSelectedAnswers(newAnswers);
      setHasAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setHasAnswered(selectedAnswers[currentQuestionIndex + 1] !== undefined);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setHasAnswered(selectedAnswers[currentQuestionIndex - 1] !== undefined);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setHasAnswered(false);
  };

  const handleClose = () => {
    handleRestart();
    onOpenChange(false);
  };

  const score = showResults ? calculateScore() : null;
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <BookOpen className="h-6 w-6 text-teal-500" />
            <span>
              {examBoard} {subject.charAt(0).toUpperCase() + subject.slice(1)} {paperDetails.paperNumber}
            </span>
          </DialogTitle>
          <DialogDescription>
            {paperDetails.year} {paperDetails.season}
            {paperDetails.tier && ` - ${paperDetails.tier} Tier`}
          </DialogDescription>
        </DialogHeader>

        {!showResults ? (
          <div className="space-y-6 mt-4">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Question {currentQuestionIndex + 1}
                    </h3>
                    <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      {currentQuestion.marks} {currentQuestion.marks === 1 ? 'mark' : 'marks'}
                    </span>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed">
                    {currentQuestion.question}
                  </p>
                </div>

                {/* Answer Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const showCorrectAnswer = hasAnswered;
                    const isCorrectOption = index === currentQuestion.correctAnswer;

                    let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";

                    if (showCorrectAnswer) {
                      if (isCorrectOption) {
                        buttonClass += "border-green-500 bg-green-50 text-green-900";
                      } else if (isSelected && !isCorrectOption) {
                        buttonClass += "border-red-500 bg-red-50 text-red-900";
                      } else {
                        buttonClass += "border-slate-200 bg-white text-slate-600";
                      }
                    } else {
                      if (isSelected) {
                        buttonClass += "border-teal-500 bg-teal-50 text-teal-900";
                      } else {
                        buttonClass += "border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50/50";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={hasAnswered}
                        className={buttonClass}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-medium text-sm">
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span className="font-medium">{option}</span>
                          </div>
                          {showCorrectAnswer && isCorrectOption && (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          )}
                          {showCorrectAnswer && isSelected && !isCorrectOption && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {hasAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border-2 ${
                      isCorrect
                        ? 'border-green-200 bg-green-50'
                        : 'border-orange-200 bg-orange-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        isCorrect ? 'bg-green-200' : 'bg-orange-200'
                      }`}>
                        {isCorrect ? (
                          <CheckCircle2 className="h-4 w-4 text-green-700" />
                        ) : (
                          <BookOpen className="h-4 w-4 text-orange-700" />
                        )}
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isCorrect ? 'text-green-900' : 'text-orange-900'
                        }`}>
                          {isCorrect ? 'Correct!' : 'Not quite right'}
                        </h4>
                        <p className={`text-sm ${
                          isCorrect ? 'text-green-800' : 'text-orange-800'
                        }`}>
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4 border-t">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                variant="outline"
                className="rounded-full px-6"
              >
                Previous
              </Button>

              <div className="flex gap-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentQuestionIndex
                        ? 'bg-teal-500 w-6'
                        : selectedAnswers[index] !== undefined
                        ? 'bg-teal-300'
                        : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={!hasAnswered}
                className="rounded-full px-6 bg-teal-500 hover:bg-teal-600"
              >
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 py-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 mb-4">
                <Trophy className="h-10 w-10 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Complete!</h2>
              <p className="text-slate-600">Here's how you performed</p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
                <div className="text-center">
                  <p className="text-sm text-teal-700 font-medium mb-1">Questions Correct</p>
                  <p className="text-4xl font-bold text-teal-900">
                    {score?.correct}/{score?.total}
                  </p>
                  <p className="text-sm text-teal-600 mt-1">
                    {Math.round((score!.correct / score!.total) * 100)}%
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="text-center">
                  <p className="text-sm text-purple-700 font-medium mb-1">Marks Earned</p>
                  <p className="text-4xl font-bold text-purple-900">
                    {score?.earnedMarks}/{score?.totalMarks}
                  </p>
                  <p className="text-sm text-purple-600 mt-1">
                    {Math.round((score!.earnedMarks / score!.totalMarks) * 100)}%
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Message */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Performance Feedback</h3>
              <p className="text-slate-700">
                {score && score.correct / score.total >= 0.8
                  ? "Excellent work! You've demonstrated a strong understanding of this topic. Keep up the great work!"
                  : score && score.correct / score.total >= 0.6
                  ? "Good effort! You're on the right track. Review the explanations and try again to improve your score."
                  : "Don't worry, practice makes perfect! Review the material and the explanations provided, then try again."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center pt-4">
              <Button
                onClick={handleRestart}
                variant="outline"
                className="rounded-full px-6"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Retry Quiz
              </Button>
              <Button
                onClick={handleClose}
                className="rounded-full px-6 bg-teal-500 hover:bg-teal-600"
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Generate sample questions based on subject
function generateQuestions(subject: string): Question[] {
  const subjectLower = subject.toLowerCase();

  if (subjectLower === 'biology') {
    return [
      {
        id: 1,
        question: "What is the primary function of mitochondria in a cell?",
        options: [
          "Protein synthesis",
          "Energy production through cellular respiration",
          "Storage of genetic information",
          "Photosynthesis"
        ],
        correctAnswer: 1,
        explanation: "Mitochondria are known as the 'powerhouse of the cell' because they generate most of the cell's supply of ATP (adenosine triphosphate), which is used as a source of chemical energy through the process of cellular respiration.",
        marks: 1
      },
      {
        id: 2,
        question: "Which process allows plants to convert light energy into chemical energy?",
        options: [
          "Respiration",
          "Transpiration",
          "Photosynthesis",
          "Osmosis"
        ],
        correctAnswer: 2,
        explanation: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of glucose. The light energy is converted into chemical energy stored in glucose molecules.",
        marks: 1
      },
      {
        id: 3,
        question: "What are the building blocks of proteins?",
        options: [
          "Nucleotides",
          "Fatty acids",
          "Amino acids",
          "Monosaccharides"
        ],
        correctAnswer: 2,
        explanation: "Amino acids are the basic building blocks of proteins. There are 20 different amino acids that can be combined in various sequences to create different proteins with unique structures and functions.",
        marks: 1
      },
      {
        id: 4,
        question: "During which phase of mitosis do chromosomes line up at the cell's equator?",
        options: [
          "Prophase",
          "Metaphase",
          "Anaphase",
          "Telophase"
        ],
        correctAnswer: 1,
        explanation: "During metaphase, chromosomes align at the cell's equator (also called the metaphase plate). This alignment ensures that each daughter cell will receive one copy of each chromosome when the cell divides.",
        marks: 2
      },
      {
        id: 5,
        question: "What is the role of enzymes in biological reactions?",
        options: [
          "They provide energy for reactions",
          "They act as biological catalysts to speed up reactions",
          "They are consumed during reactions",
          "They store genetic information"
        ],
        correctAnswer: 1,
        explanation: "Enzymes are biological catalysts that speed up chemical reactions in living organisms without being consumed in the process. They lower the activation energy required for reactions to occur, making biological processes possible at body temperature.",
        marks: 2
      }
    ];
  }

  if (subjectLower === 'chemistry') {
    return [
      {
        id: 1,
        question: "What type of bond is formed when atoms share electrons?",
        options: [
          "Ionic bond",
          "Covalent bond",
          "Metallic bond",
          "Hydrogen bond"
        ],
        correctAnswer: 1,
        explanation: "A covalent bond forms when two atoms share one or more pairs of electrons. This type of bonding typically occurs between non-metal atoms and creates molecules.",
        marks: 1
      },
      {
        id: 2,
        question: "Which of the following is an example of a physical change?",
        options: [
          "Burning wood",
          "Rusting iron",
          "Melting ice",
          "Baking a cake"
        ],
        correctAnswer: 2,
        explanation: "Melting ice is a physical change because it only changes the state of water from solid to liquid, but the chemical composition (H₂O) remains the same. The change is reversible by freezing.",
        marks: 1
      },
      {
        id: 3,
        question: "What is the pH of a neutral solution at 25°C?",
        options: [
          "0",
          "7",
          "10",
          "14"
        ],
        correctAnswer: 1,
        explanation: "A neutral solution has a pH of 7 at 25°C. This means it has equal concentrations of hydrogen ions (H⁺) and hydroxide ions (OH⁻). Solutions with pH < 7 are acidic, and pH > 7 are alkaline.",
        marks: 1
      },
      {
        id: 4,
        question: "What is the relative atomic mass of an element?",
        options: [
          "The number of protons in an atom",
          "The number of neutrons in an atom",
          "The weighted average mass of all isotopes of an element",
          "The mass of one mole of the element"
        ],
        correctAnswer: 2,
        explanation: "The relative atomic mass is the weighted average mass of all the naturally occurring isotopes of an element, compared to 1/12th the mass of a carbon-12 atom. It takes into account the abundance of each isotope.",
        marks: 2
      },
      {
        id: 5,
        question: "Which factors increase the rate of a chemical reaction?",
        options: [
          "Increasing temperature and concentration only",
          "Increasing temperature, concentration, and surface area",
          "Decreasing temperature and adding a catalyst",
          "Increasing pressure for all reactions"
        ],
        correctAnswer: 1,
        explanation: "The rate of reaction increases with higher temperature (more kinetic energy), higher concentration (more frequent collisions), larger surface area (more exposed reactant), and the presence of a catalyst. Pressure mainly affects gaseous reactions.",
        marks: 2
      }
    ];
  }

  if (subjectLower === 'physics') {
    return [
      {
        id: 1,
        question: "What is the SI unit of force?",
        options: [
          "Joule (J)",
          "Newton (N)",
          "Watt (W)",
          "Pascal (Pa)"
        ],
        correctAnswer: 1,
        explanation: "The Newton (N) is the SI unit of force. One Newton is defined as the force required to accelerate a mass of one kilogram at a rate of one metre per second squared (1 N = 1 kg⋅m/s²).",
        marks: 1
      },
      {
        id: 2,
        question: "Which of the following is a vector quantity?",
        options: [
          "Speed",
          "Distance",
          "Velocity",
          "Temperature"
        ],
        correctAnswer: 2,
        explanation: "Velocity is a vector quantity because it has both magnitude (speed) and direction. Speed and distance are scalar quantities (magnitude only), and temperature is also a scalar.",
        marks: 1
      },
      {
        id: 3,
        question: "What happens to the resistance of a wire when its length is doubled?",
        options: [
          "It halves",
          "It stays the same",
          "It doubles",
          "It quadruples"
        ],
        correctAnswer: 2,
        explanation: "Resistance is directly proportional to length (R ∝ L). When the length of a wire doubles, its resistance also doubles, assuming the cross-sectional area and material remain constant.",
        marks: 1
      },
      {
        id: 4,
        question: "According to Newton's First Law of Motion, what happens to an object at rest?",
        options: [
          "It will remain at rest unless acted upon by an unbalanced force",
          "It will eventually start moving on its own",
          "It will accelerate constantly",
          "It will move at constant velocity"
        ],
        correctAnswer: 0,
        explanation: "Newton's First Law states that an object at rest stays at rest, and an object in motion stays in motion with the same velocity, unless acted upon by an unbalanced external force. This is also known as the law of inertia.",
        marks: 2
      },
      {
        id: 5,
        question: "A car travels 150 metres in 10 seconds at constant velocity. What is its speed?",
        options: [
          "10 m/s",
          "15 m/s",
          "150 m/s",
          "1500 m/s"
        ],
        correctAnswer: 1,
        explanation: "Speed = Distance ÷ Time. In this case: Speed = 150 m ÷ 10 s = 15 m/s. Since the car travels at constant velocity, its speed remains 15 metres per second throughout the journey.",
        marks: 2
      }
    ];
  }

  // Default questions for combined science or other subjects
  return [
    {
      id: 1,
      question: "What is the basic unit of life?",
      options: [
        "Atom",
        "Molecule",
        "Cell",
        "Organ"
      ],
      correctAnswer: 2,
      explanation: "The cell is the basic structural and functional unit of all living organisms. All life forms are composed of one or more cells.",
      marks: 1
    },
    {
      id: 2,
      question: "Which of the following is a renewable energy source?",
      options: [
        "Coal",
        "Natural gas",
        "Solar power",
        "Petroleum"
      ],
      correctAnswer: 2,
      explanation: "Solar power is a renewable energy source because it comes from the sun, which continuously produces energy. Unlike fossil fuels, it won't run out on a human timescale.",
      marks: 1
    },
    {
      id: 3,
      question: "What is the chemical symbol for water?",
      options: [
        "H₂O",
        "CO₂",
        "O₂",
        "H₂O₂"
      ],
      correctAnswer: 0,
      explanation: "H₂O is the chemical formula for water. It consists of two hydrogen atoms bonded to one oxygen atom.",
      marks: 1
    }
  ];
}

export default QuizModal;
