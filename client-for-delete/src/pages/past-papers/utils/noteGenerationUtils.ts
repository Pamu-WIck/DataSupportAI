import { ExamBoard } from '../data/examBoardsData';

/**
 * Generate simulated notes based on paper data
 */
export function generateSimulatedNotes(
  paper: any,
  tier: string,
  subject: string,
  examBoards: ExamBoard[],
  selectedBoard: string,
  selectedLevel: string
): string {
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
  const capitalizedTier = tier.charAt(0).toUpperCase() + tier.slice(1);
  const examBoard = examBoards.find(b => b.id === selectedBoard)?.name;
  const examType = examBoards.find(b => b.id === selectedBoard)?.type || "GCSE";
  const isALevel = examType.includes("A Level") || examType.includes("A-Level");

  // Generate different notes based on the specific paper details
  const paperSpecificTopics = generatePaperSpecificTopics(paper, subject, examBoards, selectedBoard, selectedLevel);
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
}

/**
 * Generate paper-specific topics based on paper number, year and season
 */
export function generatePaperSpecificTopics(
  paper: any,
  subject: string,
  examBoards: ExamBoard[],
  selectedBoard: string,
  selectedLevel: string
): string {
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
            "Mitosis and meiosis: chromosome behaviour and genetic variation"
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
  }

/**
 * Generate exam techniques specific to the paper
 */
export function generateExamTechniques(paper: any, subject: string): string {
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
  }

/**
 * Generate frequently tested concepts specific to the paper and exam board
 */
export function generateFrequentlyTestedConcepts(
  paper: any,
  subject: string,
  examBoard: string | undefined
): string {
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
  }

/**
 * Generate practice questions specific to the paper
 */
export function generatePracticeQuestions(paper: any, subject: string): string {
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
  }
