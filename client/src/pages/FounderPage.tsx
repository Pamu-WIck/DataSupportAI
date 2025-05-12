import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Link } from "wouter";

const FounderPage = () => {
  return (
    <div className="bg-[#fafbfc]">
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:py-24">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation variant="fadeRight">
              <div className="text-center lg:text-left">
                <motion.span 
                  className="inline-block px-4 py-1 bg-red-50 text-red-800 text-sm font-medium rounded-full mb-6 border border-red-100"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  MEET OUR FOUNDER
                </motion.span>
                
                <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
                  Neethu Haridas
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                  Former Teacher of Science & Director of EPQ at North London Collegiate School<br/>
                  Founder of The Study Hive
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://www.linkedin.com/in/neethu-haridas-6198a021/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
                  >
                    <i className="fab fa-linkedin mr-2"></i>
                    LinkedIn Profile
                  </a>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full transition-colors border-2 border-black"
                  >
                    Contact Ms. Haridas
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeLeft">
              <div className="relative">
                <div className="bg-gradient-to-tr from-yellow-400/20 to-teal-400/20 w-full h-full absolute top-6 left-6 rounded-2xl"></div>
                <img 
                  src="/assets/images/neethu-haridas.jpg" 
                  alt="Neethu Haridas - Founder of The Study Hive" 
                  className="w-full h-auto object-cover rounded-2xl shadow-xl relative z-10 border-2 border-slate-800"
                />
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md z-20">
                  <a 
                    href="https://www.linkedin.com/in/neethu-haridas-6198a021/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-medium text-sm flex items-center text-blue-700"
                  >
                    <i className="fab fa-linkedin text-blue-700 mr-2"></i>
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation variant="fadeUp" className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Professional Credentials
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Ms. Haridas brings extensive experience and qualifications to help students achieve academic excellence in science subjects.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-graduation-cap",
                title: "Education",
                items: [
                  "BSc (Hons) in Biology, University of Sheffield",
                  "Postgraduate Certificate in Education (PGCE)",
                  "Qualified Teacher Status (QTS)"
                ]
              },
              {
                icon: "fas fa-briefcase",
                title: "Experience",
                items: [
                  "Teacher of Science at North London Collegiate School",
                  "Director of Extended Project Qualification (EPQ) at NLCS",
                  "Teacher of Biology at St Helen's School, Northwood",
                  "Science Specialist Writer for BBC Bitesize"
                ]
              },
              {
                icon: "fas fa-award",
                title: "Specializations",
                items: [
                  "GCSE & IGCSE Biology Curriculum Expert",
                  "A-Level Biology Specialist",
                  "Expert in Cambridge and Edexcel Exam Boards"
                ]
              }
            ].map((section, index) => (
              <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                <motion.div 
                  className="bg-slate-50 p-8 rounded-xl border border-slate-100"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-yellow-500 mb-4 text-4xl">
                    <i className={section.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-500 mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Career Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollAnimation variant="fadeUp" className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Career Highlights
            </h2>
          </ScrollAnimation>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
            
            {[
              {
                year: "2020 - Present",
                title: "Founder & Lead Educator",
                organization: "The Study Hive",
                description: "Founded The Study Hive to provide personalized science education and academic support for GCSE and IGCSE students.",
                image: "/assets/images/schools/study-hive.svg"
              },
              {
                year: "2021 - 2024",
                title: "Teacher of Science & Director of EPQ",
                organization: "North London Collegiate School",
                description: "Teaching Science and directing the Extended Project Qualification program, helping students achieve outstanding exam results.",
                image: "/assets/images/schools/nlcs-school.svg"
              },
              {
                year: "2017 - 2021",
                title: "Teacher of Biology",
                organization: "St Helen's School, Northwood",
                description: "Taught Biology at one of the UK's top independent schools, developing specialized curriculum and exam preparation strategies for students.",
                image: "/assets/images/schools/st-helens-school.svg"
              },
              {
                year: "2021 - 2024",
                title: "Science Specialist Writer",
                organization: "BBC Bitesize",
                description: "Developed and wrote science content for BBC Bitesize's secondary school platform, creating educational materials for KS3 and GCSE students across the UK.",
                image: "/assets/images/schools/bbc-bitesize.svg"
              },
              {
                year: "2008 - 2010",
                title: "Science Education Specialist",
                organization: "Various Educational Institutions",
                description: "Developed specialized teaching methodologies for science subjects with a focus on practical applications."
              }
            ].map((item, index) => (
              <ScrollAnimation 
                key={index} 
                variant={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                className="mb-16 relative"
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:pr-12 lg:pr-24' : 'md:pl-12 lg:pl-24'}`}>
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 md:static md:transform-none z-10 ${index % 2 === 0 ? 'md:order-1 md:left-0' : 'md:order-3 md:right-0'}`}>
                    <div className="bg-yellow-400 text-slate-900 font-bold px-4 py-2 rounded-full inline-block mb-4 md:mb-0">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className={`bg-white p-6 rounded-xl shadow-md border border-slate-200 w-full md:w-auto z-0 mt-6 md:mt-0 ${index % 2 === 0 ? 'md:order-2 md:text-right' : 'md:order-2 md:text-left'}`}>
                    {item.image && (
                      <div className="mb-4 flex justify-center">
                        <img 
                          src={item.image} 
                          alt={item.organization} 
                          className="h-32 object-contain rounded-md"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-yellow-600 font-medium mb-3">{item.organization}</p>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Teaching Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation variant="fadeRight">
              <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-xl text-slate-700 mb-8">
                "I believe every student has the potential to succeed in science with the right guidance, support, and teaching methodology that adapts to their individual learning style."
              </blockquote>
              
              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-slate-900 mb-6">
                My Teaching Philosophy
              </h3>
              
              <div className="space-y-6 text-slate-700">
                <p>
                  As a former Science Teacher and Director of EPQ at North London Collegiate School (2021-2024), with previous experience as a Biology Teacher at St Helen's School (2017-2021) and as a content writer for BBC Bitesize, I've developed a teaching approach that combines academic rigor with personalized support. I'm passionate about making science accessible and engaging for all students, regardless of their starting point.
                </p>
                
                <p>
                  At The Study Hive, we focus on building strong foundations in scientific concepts while developing critical thinking skills that extend beyond exam success. Our goal is to inspire a lifelong love of learning and scientific inquiry in every student.
                </p>
                
                <p>
                  I take pride in helping students not just understand the curriculum, but excel in their examinations through strategic preparation, practice, and personalized feedback tailored to each exam board's specific requirements.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeLeft">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    percentage: "98%",
                    metric: "Student Satisfaction",
                    description: "Of our students report improved confidence and understanding"
                  },
                  {
                    percentage: "95%",
                    metric: "Grade Improvements",
                    description: "Of students improve by at least one grade level"
                  },
                  {
                    percentage: "90%",
                    metric: "Exam Success Rate",
                    description: "Of our students achieve A* to B grades in GCSE Science"
                  },
                  {
                    percentage: "100%",
                    metric: "Personalized Approach",
                    description: "Commitment to adapting to each student's learning style"
                  }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                      {stat.percentage}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {stat.metric}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <ScrollAnimation variant="fadeUp" className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Student & Parent Testimonials
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Here's what some of our students and parents have to say about their experience with Ms. Haridas.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Ms. Haridas helped me to understand complex Biology concepts in a way that made them seem simple. Her teaching style is engaging and she genuinely cares about her students' success.",
                name: "Sarah T.",
                role: "GCSE Student",
                image: "/assets/images/testimonial-1.jpg"
              },
              {
                quote: "As a parent, I've seen my daughter's confidence in science grow tremendously under Ms. Haridas' guidance. Her grades improved significantly and she now enjoys studying science.",
                name: "Michael P.",
                role: "Parent of IGCSE Student",
                image: "/assets/images/testimonial-2.jpg"
              },
              {
                quote: "The Study Hive's approach to teaching is refreshing. Ms. Haridas makes learning interactive and relevant. My Science grades went from a C to an A* in just six months!",
                name: "James K.",
                role: "A-Level Student",
                image: "/assets/images/testimonial-3.jpg"
              }
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md border border-slate-200 h-full"
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-slate-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mt-4 text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/90 to-teal-400/90 relative">
        <div className="absolute inset-0 bg-slate-900 opacity-10 pattern-hexagons"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation variant="fadeUp">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-6">
                Ready to Excel in Science?
              </h2>
              
              <p className="text-white/90 text-lg mb-8">
                Join Ms. Haridas and The Study Hive team for personalized science tutoring that delivers results. Spaces are limited to ensure quality instruction for each student.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="#contact">
                  <motion.button 
                    className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Consultation
                  </motion.button>
                </Link>
                
                <Link href="/videos">
                  <motion.button 
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Free Lessons
                  </motion.button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;