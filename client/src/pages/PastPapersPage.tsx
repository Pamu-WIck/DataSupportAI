import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, FileText, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { NoteGenerator } from "@/components/pastpapers/NoteGenerator";

/**
 * PastPapersPage component
 * A comprehensive repository of past papers organized by exam board
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
      const notes = generateSimulatedNotes(paper, tier, subject);
      setGeneratedNotes(notes);
      setIsGeneratingNotes(false);
    }, 1500);
  };
  
  // Function to generate simulated notes based on paper data
  const generateSimulatedNotes = (paper: any, tier: string, subject: string) => {
    const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
    const capitalizedTier = tier.charAt(0).toUpperCase() + tier.slice(1);
    const examBoard = examBoards.find(b => b.id === selectedBoard)?.name;
    const examType = examBoards.find(b => b.id === selectedBoard)?.type || "GCSE";
    const isALevel = examType.includes("A Level") || examType.includes("A-Level");
    
    // Generate different notes based on the specific paper details
    const paperSpecificTopics = generatePaperSpecificTopics(paper, subject);
    const examTechniques = generateExamTechniques(paper, subject);
    const frequentlyTestedConcepts = generateFrequentlyTestedConcepts(paper, subject, examBoard);
    const practiceQuestions = generatePracticeQuestions(paper, subject);
    
    // Format title differently for A-level (no tier)
    const titleTier = isALevel ? "" : `(${capitalizedTier} Tier)`;
    
    return `# Study Notes: ${examBoard} ${capitalizedSubject} ${paper.paperNumber} ${titleTier}

## Key Topics Covered in ${paper.year} ${paper.season} Paper

${paperSpecificTopics}

## Common Exam Techniques for ${paper.paperNumber}

${examTechniques}

## Frequently Tested Concepts in ${paper.year} ${paper.season}

${frequentlyTestedConcepts}

## Practice Questions Specific to ${paper.paperNumber}

${practiceQuestions}

These notes were automatically generated for ${examBoard} ${capitalizedSubject} ${paper.paperNumber} (${paper.year} ${paper.season}).`;
  };
  
  // Generate paper-specific topics based on paper number, year and season
  const generatePaperSpecificTopics = (paper: any, subject: string) => {
    const examType = examBoards.find(b => b.id === selectedBoard)?.type || "GCSE";
    const isALevel = examType.includes("A Level") || examType.includes("A-Level");
    // Use paper identifiers to create unique content
    const paperIdentifier = `${paper.year}${paper.season}${paper.paperNumber}`;
    const hash = Array.from(paperIdentifier).reduce((hash, char) => char.charCodeAt(0) + ((hash << 5) - hash), 0);
    
    // KS3 topics are different from GCSE and A-level
    if (selectedLevel === "ks3" && subject === "biology") {
      // KS3 Biology topics
      const allTopics = [
        {
          title: "Cells and Organisation",
          bullets: [
            "Plant and animal cell structure and function",
            "Specialised cells in plants and animals",
            "Levels of organisation: cells, tissues, organs, and organ systems"
          ]
        },
        {
          title: "Reproduction and Growth",
          bullets: [
            "Human reproductive systems and fertilisation",
            "Plant reproduction including pollination and seed dispersal",
            "Adolescent development and puberty"
          ]
        },
        {
          title: "Health and Nutrition",
          bullets: [
            "Balanced diet and nutrients required for health",
            "The digestive system and enzymes",
            "Effects of smoking, alcohol, and drugs on health"
          ]
        },
        {
          title: "Ecosystems and Habitats",
          bullets: [
            "Food chains, food webs and energy flow",
            "Adaptations of organisms to their environments",
            "Human impact on biodiversity and conservation"
          ]
        },
        {
          title: "Genetics and Evolution",
          bullets: [
            "Introduction to inheritance and variation",
            "DNA structure and function in simple terms",
            "Natural selection and evolutionary adaptations"
          ]
        }
      ];
      
      // Select topics based on paper hash to ensure consistency for the same paper
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length)
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else if (selectedLevel === "ks3" && subject === "chemistry") {
      // KS3 Chemistry topics
      const allTopics = [
        {
          title: "Atoms, Elements and Compounds",
          bullets: [
            "The periodic table and its organisation",
            "Atoms, molecules and chemical formulae",
            "Properties of elements and compounds"
          ]
        },
        {
          title: "Chemical Reactions",
          bullets: [
            "Physical and chemical changes",
            "Conservation of mass in reactions",
            "Word and simple symbol equations"
          ]
        },
        {
          title: "Acids and Alkalis",
          bullets: [
            "pH scale and indicators",
            "Neutralisation reactions",
            "Everyday applications of acids and alkalis"
          ]
        },
        {
          title: "Materials and Their Properties",
          bullets: [
            "States of matter and particle theory",
            "Properties of metals and non-metals",
            "Uses of materials based on their properties"
          ]
        },
        {
          title: "Earth Science",
          bullets: [
            "The rock cycle and types of rocks",
            "Extraction of metals from ores",
            "Earth's atmosphere and human impacts"
          ]
        }
      ];
      
      // Select topics based on paper hash
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length)
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else if (selectedLevel === "ks3" && subject === "physics") {
      // KS3 Physics topics
      const allTopics = [
        {
          title: "Forces and Motion",
          bullets: [
            "Speed, velocity and acceleration calculations",
            "Balanced and unbalanced forces",
            "Newton's laws of motion in simple contexts"
          ]
        },
        {
          title: "Energy and Work",
          bullets: [
            "Energy transfers and conservation",
            "Different forms of energy (kinetic, potential, thermal)",
            "Renewable and non-renewable energy resources"
          ]
        },
        {
          title: "Waves and Sound",
          bullets: [
            "Wave properties: amplitude, wavelength, frequency",
            "Sound production and propagation",
            "Uses of different waves in the electromagnetic spectrum"
          ]
        },
        {
          title: "Electricity and Magnetism",
          bullets: [
            "Current, voltage and resistance in circuits",
            "Series and parallel circuits",
            "Electromagnets and their applications"
          ]
        },
        {
          title: "Space Physics",
          bullets: [
            "The solar system and planetary motion",
            "Gravity and orbital motion",
            "Day, night, seasons and the Earth's rotation"
          ]
        }
      ];
      
      // Select topics based on paper hash
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length)
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else if (isALevel && subject === "biology") {
      // A-level Biology topics
      const allTopics = [
        {
          title: "Biological Molecules",
          bullets: [
            "Protein structure: primary, secondary, tertiary and quaternary structure",
            "Carbohydrates, lipids and their roles in living organisms",
            "Enzyme mechanisms, inhibition and factors affecting activity"
          ]
        },
        {
          title: "Cells, Viruses and Reproduction",
          bullets: [
            "Ultrastructure of eukaryotic and prokaryotic cells",
            "Membrane structure and transport mechanisms",
            "Cell cycle control and mitosis/meiosis regulation"
          ]
        },
        {
          title: "Exchange and Transport",
          bullets: [
            "Gaseous exchange systems in mammals and plants",
            "Circulatory systems and cardiac cycle",
            "Transport systems in plants - xylem and phloem"
          ]
        },
        {
          title: "Energy Transfer Systems",
          bullets: [
            "Photosynthesis: light-dependent and light-independent reactions",
            "Cellular respiration: glycolysis, Krebs cycle and oxidative phosphorylation",
            "Chemiosmotic theory and ATP synthesis"
          ]
        },
        {
          title: "Genetics, Evolution and Biodiversity",
          bullets: [
            "DNA replication, transcription and translation",
            "Gene expression control and epigenetic mechanisms",
            "Population genetics and speciation mechanisms"
          ]
        },
        {
          title: "Control Systems and Homeostasis",
          bullets: [
            "Neural and hormonal communication",
            "Synaptic transmission and action potentials",
            "Homeostatic mechanisms including negative feedback"
          ]
        }
      ];
      
      // Select topics based on paper hash to ensure consistency for the same paper
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length),
        Math.abs((hash + 3) % allTopics.length)
      ];
      
      // Format the selected topics
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else if (isALevel && subject === "chemistry") {
      // A-level Chemistry topics
      const allTopics = [
        {
          title: "Physical Chemistry: Atomic Structure and Bonding",
          bullets: [
            "Electron configurations and orbital theory",
            "Advanced concepts in ionic, covalent and metallic bonding",
            "Intermolecular forces and their effects on physical properties"
          ]
        },
        {
          title: "Physical Chemistry: Energetics and Kinetics",
          bullets: [
            "Enthalpy, entropy and free energy changes",
            "Born-Haber cycles and advanced thermodynamic calculations",
            "Reaction rates, order and complex mechanisms"
          ]
        },
        {
          title: "Physical Chemistry: Equilibria and Redox",
          bullets: [
            "Equilibrium constants Kc, Kp and their applications",
            "pH calculations, buffer solutions and titration curves",
            "Electrode potentials and electrochemical cells"
          ]
        },
        {
          title: "Inorganic Chemistry",
          bullets: [
            "Periodicity and trends in s, p and d-block elements",
            "Transition metal chemistry and complex ions",
            "Reaction mechanisms in inorganic chemistry"
          ]
        },
        {
          title: "Organic Chemistry: Structure and Mechanisms",
          bullets: [
            "Stereoisomerism: optical isomerism and E/Z isomerism",
            "Nucleophilic substitution and elimination mechanisms",
            "Electrophilic addition and substitution mechanisms"
          ]
        },
        {
          title: "Organic Chemistry: Functional Groups",
          bullets: [
            "Aromatic chemistry and benzene derivatives",
            "Carbonyl compounds: aldehydes, ketones and carboxylic acids",
            "Organic synthesis and analytical techniques"
          ]
        }
      ];
      
      // Select topics based on paper hash
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length),
        Math.abs((hash + 3) % allTopics.length)
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else if (isALevel && subject === "physics") {
      // A-level Physics topics
      const allTopics = [
        {
          title: "Mechanics and Materials",
          bullets: [
            "Advanced kinematics and dynamics in two dimensions",
            "Circular motion, simple harmonic motion, and resonance",
            "Elastic and plastic deformation, stress-strain relationships"
          ]
        },
        {
          title: "Waves and Quantum Physics",
          bullets: [
            "Wave-particle duality and the photoelectric effect",
            "Standing waves, interference, and diffraction",
            "Quantum phenomena and the uncertainty principle"
          ]
        },
        {
          title: "Electricity and Magnetism",
          bullets: [
            "Electric field theory and capacitance",
            "Magnetic fields, electromagnetic induction and applications",
            "AC circuits, resonance and power calculations"
          ]
        },
        {
          title: "Fields and Nuclear Physics",
          bullets: [
            "Gravitational, electric and magnetic fields",
            "Nuclear structure, radioactive decay and binding energy",
            "Nuclear fission, fusion and reactor design"
          ]
        },
        {
          title: "Thermodynamics and Gases",
          bullets: [
            "Kinetic theory of gases and molecular modeling",
            "First and second laws of thermodynamics",
            "Entropy, heat engines and thermal efficiency"
          ]
        },
        {
          title: "Modern Physics and Astrophysics",
          bullets: [
            "Special relativity: time dilation and length contraction",
            "Particle physics: Standard Model and fundamental forces",
            "Cosmology: Big Bang theory and the expanding universe"
          ]
        }
      ];
      
      // Select topics based on paper hash
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length),
        Math.abs((hash + 3) % allTopics.length)
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else if (subject === "biology") {
      // GCSE Biology topics
      const allTopics = [
        {
          title: "Cell Biology and Organization",
          bullets: [
            "Cell structure and ultrastructure differences between plant and animal cells",
            "Transport across cell membranes: diffusion, osmosis, and active transport",
            "Cell specialization and differentiation in multicellular organisms"
          ]
        },
        {
          title: "Biological Molecules",
          bullets: [
            "Carbohydrates: monosaccharides, disaccharides and polysaccharides",
            "Proteins: amino acids, peptide bonds and protein structure",
            "Enzymes: biological catalysts, factors affecting enzyme activity"
          ]
        },
        {
          title: "Genetics and Inheritance",
          bullets: [
            "DNA structure, replication and protein synthesis",
            "Mendelian genetics: monohybrid crosses and genetic disorders",
            "Mitosis and meiosis: chromosome behavior and genetic variation"
          ]
        },
        {
          title: "Ecology and Ecosystems",
          bullets: [
            "Adaptations, interdependence and competition",
            "Nutrient cycles and energy transfer through trophic levels",
            "Human impacts on biodiversity and conservation strategies"
          ]
        },
        {
          title: "Homeostasis and Response",
          bullets: [
            "Nervous system coordination and reflexes",
            "Hormonal coordination and control of blood glucose",
            "Kidney function and osmoregulation"
          ]
        },
        {
          title: "Infection and Response",
          bullets: [
            "Communicable diseases and pathogens",
            "Human defense mechanisms and immunity",
            "Monoclonal antibodies and antibiotic resistance"
          ]
        }
      ];
      
      // Select topics based on paper hash to ensure consistency for the same paper
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length),
        Math.abs((hash + 3) % allTopics.length)
      ];
      
      // Format the selected topics
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else if (subject === "chemistry") {
      // Chemistry topics with paper-specific variations
      const allTopics = [
        {
          title: "Atomic Structure and the Periodic Table",
          bullets: [
            "Electronic configuration and electron shells",
            "Groups, periods and trends in reactivity",
            "Development of the periodic table and isotopes"
          ]
        },
        {
          title: "Bonding, Structure and Properties",
          bullets: [
            "Ionic, covalent and metallic bonding",
            "Giant structures and molecular arrangements",
            "Intermolecular forces and physical properties"
          ]
        },
        {
          title: "Quantitative Chemistry",
          bullets: [
            "Conservation of mass and balanced equations",
            "Moles, Avogadro's number and molar calculations",
            "Concentration, titrations and gas volume calculations"
          ]
        },
        {
          title: "Chemical Changes and Electrolysis",
          bullets: [
            "Reactivity series and displacement reactions",
            "Extraction of metals and redox reactions",
            "Electrolysis of molten and aqueous substances"
          ]
        },
        {
          title: "Energy Changes in Reactions",
          bullets: [
            "Exothermic and endothermic reactions",
            "Energy profile diagrams and bond energy calculations",
            "Chemical cells and fuel cells"
          ]
        },
        {
          title: "Organic Chemistry",
          bullets: [
            "Alkanes, alkenes and their reactions",
            "Alcohols, carboxylic acids and esters",
            "Polymers, synthetic and naturally occurring"
          ]
        }
      ];
      
      // Select topics based on paper hash
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length),
        Math.abs((hash + 3) % allTopics.length)
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else if (subject === "physics") {
      // Physics topics with paper-specific variations
      const allTopics = [
        {
          title: "Forces and Motion",
          bullets: [
            "Newton's laws of motion and their applications",
            "Momentum, conservation of momentum and impulse",
            "Work, energy, power and efficiency calculations"
          ]
        },
        {
          title: "Waves",
          bullets: [
            "Transverse and longitudinal waves, amplitude, frequency and wavelength",
            "Reflection, refraction, diffraction and interference",
            "Electromagnetic spectrum and wave behaviors"
          ]
        },
        {
          title: "Electricity and Circuits",
          bullets: [
            "Current, potential difference and resistance in series and parallel circuits",
            "Domestic electricity, AC/DC and power calculations",
            "Static electricity and electric fields"
          ]
        },
        {
          title: "Magnetism and Electromagnetism",
          bullets: [
            "Magnetic fields around magnets and current-carrying conductors",
            "Electromagnetic induction and generators",
            "Transformers and the National Grid"
          ]
        },
        {
          title: "Particle Model of Matter",
          bullets: [
            "Density, states of matter and changes of state",
            "Internal energy, specific heat capacity and latent heat",
            "Pressure in gases and the kinetic theory"
          ]
        },
        {
          title: "Atomic Structure",
          bullets: [
            "Nuclear model of the atom and radioactive decay",
            "Half-life calculations and nuclear radiation",
            "Nuclear fission, fusion and hazards of radiation"
          ]
        }
      ];
      
      // Select topics based on paper hash
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length),
        Math.abs((hash + 3) % allTopics.length)
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
      
    } else {
      // Combined Science topics
      const allTopics = [
        {
          title: "Biology: Cells and Systems",
          bullets: [
            "Cell structure, specialization and microscopy",
            "Transport systems in plants and animals",
            "Health, disease and the immune system"
          ]
        },
        {
          title: "Chemistry: Structure and Bonding",
          bullets: [
            "States of matter and particle arrangements",
            "Ionic, covalent and metallic bonding",
            "Properties of materials based on structure"
          ]
        },
        {
          title: "Physics: Energy and Forces",
          bullets: [
            "Energy transfers, conservation and calculations",
            "Forces, motion and pressure in fluids",
            "Work, power and efficiency"
          ]
        },
        {
          title: "Biology: Homeostasis and Response",
          bullets: [
            "Nervous and hormonal coordination",
            "Regulation of blood glucose and temperature",
            "Human reproduction and fertility"
          ]
        },
        {
          title: "Chemistry: Reactions and Rates",
          bullets: [
            "Rates of reaction and factors affecting rates",
            "Reversible reactions and equilibrium",
            "Acid-base reactions and neutralization"
          ]
        },
        {
          title: "Physics: Waves and Electricity",
          bullets: [
            "Wave properties, behaviors and equations",
            "Circuit components and calculations",
            "Electricity generation and distribution"
          ]
        }
      ];
      
      // Select topics based on paper hash
      const selectedIndices = [
        Math.abs(hash % allTopics.length),
        Math.abs((hash + 1) % allTopics.length),
        Math.abs((hash + 2) % allTopics.length),
        Math.abs((hash + 3) % allTopics.length)
      ];
      
      return selectedIndices.map((index, i) => {
        const topic = allTopics[index];
        return `${i+1}. **${topic.title}**\n   - ${topic.bullets.join('\n   - ')}`;
      }).join('\n\n');
    }
  };
  
  // Generate exam techniques specific to the paper
  const generateExamTechniques = (paper: any, subject: string) => {
    // Base techniques for all subjects
    const baseTechniques = [
      "Understand command words - 'describe' requires facts while 'explain' needs reasoning",
      "Pay attention to mark allocation - it indicates the depth required in your answer",
      "Write legibly and organize your answers clearly, especially in longer response questions",
      "Manage your time effectively - approximately 1 minute per mark as a guideline"
    ];
    
    // Subject-specific techniques
    const subjectTechniques = {
      "biology": [
        "Label diagrams clearly with specific biological terms",
        "When describing processes, use the correct sequence of events",
        "Include relevant mathematical calculations for topics like genetics or ecology",
        "Link structure to function when describing biological systems"
      ],
      "chemistry": [
        "Write balanced chemical equations with correct state symbols",
        "Show all steps in calculations, including formula rearrangements",
        "Draw clear diagrams for organic molecules or bonding arrangements",
        "Use correct chemical terminology and symbols consistently"
      ],
      "physics": [
        "Include correct units in all calculations and final answers",
        "Draw clear, labeled force diagrams where applicable",
        "Show substitution of values into equations before calculating",
        "Draw graphs with labeled axes and appropriate scales"
      ],
      "combined-science": [
        "Identify whether the question is biology, chemistry or physics focused",
        "Apply correct mathematical skills to each science discipline",
        "Cross-reference knowledge between science disciplines where relevant",
        "Link theoretical knowledge to practical applications and experiments"
      ]
    };
    
    // Determine paper-specific techniques based on paper number
    const paperSpecificTechniques = [];
    if (paper.paperNumber.includes("1")) {
      paperSpecificTechniques.push("Focus on core knowledge and fundamental principles in this paper");
      paperSpecificTechniques.push("Multiple choice questions require careful reading of all options");
    } else if (paper.paperNumber.includes("2")) {
      paperSpecificTechniques.push("Application of knowledge to unfamiliar contexts is common in this paper");
      paperSpecificTechniques.push("Expect questions that synthesize knowledge from multiple topics");
    }
    
    // Combine techniques and format as bullet points
    const combinedTechniques = [
      ...paperSpecificTechniques,
      ...baseTechniques.slice(0, 2),
      ...subjectTechniques[subject as keyof typeof subjectTechniques].slice(0, 2)
    ];
    
    return combinedTechniques.map(technique => `- ${technique}`).join('\n');
  };
  
  // Generate frequently tested concepts specific to the paper and exam board
  const generateFrequentlyTestedConcepts = (paper: any, subject: string, examBoard: string | undefined) => {
    // Paper-specific concepts based on paper number and subject
    let concepts = `This ${examBoard} ${paper.paperNumber} from ${paper.year} ${paper.season} frequently examines these key areas:\n\n`;
    
    if (subject === "biology") {
      if (paper.paperNumber.includes("1")) {
        concepts += "- Cell biology, transport systems, and biological molecules\n";
        concepts += "- Detailed understanding of enzymes and their mechanisms\n";
        concepts += "- Practical skills in microscopy and investigation design\n";
      } else {
        concepts += "- Ecology, inheritance and evolution\n";
        concepts += "- Homeostasis and response systems\n";
        concepts += "- Application of knowledge to environmental and ethical issues\n";
      }
    } else if (subject === "chemistry") {
      if (paper.paperNumber.includes("1")) {
        concepts += "- Atomic structure, bonding and the periodic table\n";
        concepts += "- Quantitative chemistry calculations and stoichiometry\n";
        concepts += "- Chemical changes and reaction types\n";
      } else {
        concepts += "- Rates of reaction and equilibrium principles\n";
        concepts += "- Organic chemistry and chemical analysis\n";
        concepts += "- Energy changes and calculations in chemical reactions\n";
      }
    } else if (subject === "physics") {
      if (paper.paperNumber.includes("1")) {
        concepts += "- Energy transfers and calculations\n";
        concepts += "- Electricity principles and circuit problems\n";
        concepts += "- Particle model of matter and atomic structure\n";
      } else {
        concepts += "- Forces, motion and momentum\n";
        concepts += "- Waves, electromagnetic spectrum and their applications\n";
        concepts += "- Magnetism, electromagnetism and space physics\n";
      }
    } else {
      // Combined Science
      if (paper.paperNumber.includes("Biology")) {
        concepts += "- Core biological processes and systems\n";
        concepts += "- Relationships between structure and function\n";
        concepts += "- Health and disease in human and plant systems\n";
      } else if (paper.paperNumber.includes("Chemistry")) {
        concepts += "- Fundamental chemical principles and reactions\n";
        concepts += "- Basic calculations and equation balancing\n";
        concepts += "- Materials science and industrial applications\n";
      } else if (paper.paperNumber.includes("Physics")) {
        concepts += "- Energy, forces and motion concepts\n";
        concepts += "- Practical applications of electrical systems\n";
        concepts += "- Simplified wave phenomena and electromagnetic effects\n";
      }
    }
    
    // Add exam board specific approaches
    if (examBoard?.includes("AQA")) {
      concepts += "\nAQA often includes questions that link different topic areas and test application of knowledge to novel scenarios.";
    } else if (examBoard?.includes("Edexcel")) {
      concepts += "\nEdexcel papers frequently include questions with real-world contexts and applications of scientific principles.";
    } else if (examBoard?.includes("OCR")) {
      concepts += "\nOCR emphasizes clear scientific explanations and the use of correct terminology in longer response questions.";
    } else if (examBoard?.includes("WJEC")) {
      concepts += "\nWJEC papers often test the ability to interpret data and experimental evidence in scientific contexts.";
    } else if (examBoard?.includes("Cambridge")) {
      concepts += "\nCambridge (CIE) exams focus on international contexts and applications, with emphasis on practical skills.";
    }
    
    return concepts;
  };
  
  // Generate practice questions specific to the paper
  const generatePracticeQuestions = (paper: any, subject: string) => {
    // Generate questions based on subject and paper number
    const questions = [];
    
    if (subject === "biology") {
      if (paper.paperNumber.includes("1")) {
        questions.push("Describe the structure of a eukaryotic cell and explain how its features enable it to carry out specialized functions. (6 marks)");
        questions.push("Explain how enzymes are affected by changes in temperature and pH, using the lock and key theory in your answer. (5 marks)");
        questions.push("Calculate the magnification of a cell image if the actual cell diameter is 15μm and it appears 30mm in the textbook. (3 marks)");
      } else {
        questions.push("Describe the process of natural selection and use an example to explain how it leads to adaptation. (6 marks)");
        questions.push("Explain how the human body responds to an increase in core body temperature during exercise. (5 marks)");
        questions.push("Calculate the percentage efficiency of energy transfer between two trophic levels if 15,000 kJ enters the first level and 1,200 kJ is transferred to the second level. (3 marks)");
      }
    } else if (subject === "chemistry") {
      if (paper.paperNumber.includes("1")) {
        questions.push("Explain why different elements in the same group of the periodic table have similar chemical properties. (4 marks)");
        questions.push("Calculate the number of moles in 6.0g of carbon. [C=12] (3 marks)");
        questions.push("Describe the difference between an ionic and covalent bond, using diagrams to illustrate your answer. (6 marks)");
      } else {
        questions.push("Calculate the volume of oxygen produced when 2.45g of potassium chlorate (KClO₃) is fully decomposed. [K=39, Cl=35.5, O=16] (5 marks)");
        questions.push("Explain how temperature and a catalyst affect the rate of a chemical reaction, using collision theory. (6 marks)");
        questions.push("Draw the displayed formula for propanoic acid and identify the functional group present. (3 marks)");
      }
    } else if (subject === "physics") {
      if (paper.paperNumber.includes("1")) {
        questions.push("Calculate the energy transferred when a current of 4.5A passes through a 12Ω resistor for 30 seconds. (4 marks)");
        questions.push("Explain how the resistance in a thermistor changes with temperature and describe a practical application of this property. (5 marks)");
        questions.push("Calculate the specific heat capacity of a 2kg metal block that increases in temperature from 20°C to 80°C when 24,000J of energy is supplied. (3 marks)");
      } else {
        questions.push("Calculate the resultant force acting on a 1500kg car that accelerates from rest to 25m/s in 10 seconds. (3 marks)");
        questions.push("Describe the differences between longitudinal and transverse waves, giving examples of each. (4 marks)");
        questions.push("Explain how transformers work and why they are essential for the National Grid distribution system. (6 marks)");
      }
    } else {
      // Combined Science
      if (paper.paperNumber.includes("Biology")) {
        questions.push("Explain how the structure of the lungs is adapted for efficient gas exchange. (4 marks)");
        questions.push("Describe the process of osmosis and explain its importance in plants and animals. (5 marks)");
        questions.push("Calculate the percentage of offspring that would be expected to have the recessive phenotype when two heterozygous parents are crossed. (3 marks)");
      } else if (paper.paperNumber.includes("Chemistry")) {
        questions.push("Balance the following equation and describe the type of reaction: Mg + HCl → MgCl₂ + H₂ (3 marks)");
        questions.push("Explain why metals conduct electricity but non-metals generally do not. (4 marks)");
        questions.push("Calculate the relative formula mass of sodium hydroxide (NaOH). [Na=23, O=16, H=1] (3 marks)");
      } else if (paper.paperNumber.includes("Physics")) {
        questions.push("Calculate the work done when a force of 250N moves an object 3.5m in the direction of the force. (3 marks)");
        questions.push("Describe what happens to the resistance of a component when two identical resistors are connected in series. (3 marks)");
        questions.push("Explain why sound cannot travel through a vacuum but light can. (4 marks)");
      }
    }
    
    // Format the questions as a numbered list
    return questions.map((question, index) => `${index + 1}. ${question}`).join('\n\n');
  };
  
  // Notes Dialog Component
  const NotesDialog = () => {
    return (
      <Dialog open={!!selectedPaper} onOpenChange={(open) => !open && setSelectedPaper(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {isGeneratingNotes ? (
                <div className="flex items-center gap-2">
                  <span>Generating Notes</span>
                  <svg className="animate-spin w-5 h-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-teal-500" />
                  <span>Study Notes: {selectedPaper?.examBoard} {selectedPaper?.subject} {selectedPaper?.paperNumber}</span>
                </div>
              )}
            </DialogTitle>
            <DialogDescription>
              {isGeneratingNotes 
                ? "Analyzing past paper content and generating comprehensive notes..."
                : `${selectedPaper?.year} ${selectedPaper?.season} | ${selectedPaper?.tier} Tier`}
            </DialogDescription>
          </DialogHeader>
          
          {isGeneratingNotes ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-teal-500 animate-pulse" />
                </div>
                <div className="absolute inset-0 border-t-4 border-teal-500 rounded-full animate-spin"></div>
              </div>
              <p className="mt-6 text-slate-600">Identifying key topics and exam patterns...</p>
            </div>
          ) : (
            <div className="mt-4">
              <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                {generatedNotes}
              </div>
              
              <DialogFooter className="mt-6 gap-2 flex-row flex-wrap sm:justify-end justify-center">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-1"
                  onClick={() => {
                    const blob = new Blob([generatedNotes], { type: "text/markdown" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${selectedPaper?.examBoard}-${selectedPaper?.subject}-${selectedPaper?.paperNumber}-${selectedPaper?.year}-notes.md`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download as Markdown
                </Button>
                
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedNotes);
                    // Could add toast notification here
                  }}
                >
                  Copy to Clipboard
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  };
  
  // Exam board data structure
  const examBoards = [
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
  

  
  // Past papers by exam board and subject
  const pastPapers = {
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
      
      {/* Notes Dialog */}
      <NotesDialog />
    </div>
  );
};

export default PastPapersPage;