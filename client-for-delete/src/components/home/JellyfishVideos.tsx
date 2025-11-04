import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Link } from "wouter";

/**
 * JellyfishVideos component for The Study Hive
 * A dedicated section for YouTube videos styled with the Jellyfish template design
 */
const JellyfishVideos = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(0);
  
  // These are the actual videos from Miss Haridas' Study Hive YouTube channel
  // Videos from https://www.youtube.com/@TheStudyHive/videos with exact titles
  const videos = [
    {
      id: "video1",
      title: "Immune System | GCSE | IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/WC3TiPRECTI/maxresdefault.jpg",
      embedId: "WC3TiPRECTI",
      subject: "Biology",
      description: "Learn about the immune system for GCSE and IGCSE Biology with expert explanations from Miss Haridas."
    },
    {
      id: "video2",
      title: "Vaccinations | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/mU9PGceV_yk/maxresdefault.jpg",
      embedId: "mU9PGceV_yk",
      subject: "Biology",
      description: "Comprehensive explanation of vaccinations for GCSE and IGCSE Biology curriculum requirements."
    },
    {
      id: "video3",
      title: "Required Practical for Photosynthesis | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/z7Yg9Xf_rjs/maxresdefault.jpg",
      embedId: "z7Yg9Xf_rjs",
      subject: "Biology",
      description: "Step-by-step guide to the required practical experiments for photosynthesis in GCSE and IGCSE Biology."
    },
    {
      id: "video4",
      title: "Hormones & the Endocrine System (Part 1) | GCSE/ IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/pZc5H4XDScg/maxresdefault.jpg",
      embedId: "pZc5H4XDScg",
      subject: "Biology",
      description: "Detailed explanation of hormones and the endocrine system for GCSE and IGCSE Biology."
    },
    {
      id: "video5",
      title: "Hormones & the Endocrine System (Part 2) | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/gDvGOm55qZ4/maxresdefault.jpg",
      embedId: "gDvGOm55qZ4",
      subject: "Biology",
      description: "Continuation of the hormones and endocrine system topic for GCSE and IGCSE Biology."
    },
    {
      id: "video6",
      title: "Diffusion | GCSE Biology",
      thumbnail: "https://img.youtube.com/vi/tKm24Dm6eHk/maxresdefault.jpg",
      embedId: "tKm24Dm6eHk",
      subject: "Biology",
      description: "Learn about diffusion processes and their importance in biological systems for GCSE Biology."
    },
    {
      id: "video7",
      title: "Photosynthesis | GCSE Biology",
      thumbnail: "https://img.youtube.com/vi/djudhjDheUg/maxresdefault.jpg",
      embedId: "djudhjDheUg",
      subject: "Biology",
      description: "Comprehensive guide to photosynthesis covering all the essential concepts for GCSE Biology."
    },
    {
      id: "video8",
      title: "Factors affecting the rate of Photosynthesis | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/qhC5VRIhXrg/maxresdefault.jpg",
      embedId: "qhC5VRIhXrg",
      subject: "Biology",
      description: "Detailed explanation of all the factors that affect photosynthesis rates in plants for GCSE and IGCSE."
    },
    {
      id: "video9",
      title: "Structure of a Leaf | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/hEG-G8oGXmM/maxresdefault.jpg",
      embedId: "hEG-G8oGXmM",
      subject: "Biology",
      description: "Detailed look at leaf structure and how it relates to photosynthesis for GCSE and IGCSE Biology."
    },
    {
      id: "video10",
      title: "How to Revise Effectively | The Study Hive LIVE",
      thumbnail: "https://img.youtube.com/vi/_eT2bS0dwh0/maxresdefault.jpg",
      embedId: "_eT2bS0dwh0",
      subject: "Study Skills",
      description: "Essential revision strategies and techniques to help you succeed in your science exams."
    },
  ];

  return (
    <section id="videos" className="py-20 md:py-28 bg-[#fafbfc] relative">
      <div className="container mx-auto px-6">
        <ScrollAnimation variant="fadeUp" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 bg-red-50 text-red-800 text-sm font-medium rounded-full mb-6 border border-red-100"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            FREE EDUCATIONAL VIDEOS
          </motion.span>
          
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-slate-900 mb-5">
            Science Video Lessons
          </h2>
          
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Access our library of curriculum-focused video lessons, created by Miss Haridas to help you master key science concepts for GCSE and IGCSE exams.
          </p>
          
          <Link href="/videos">
            <motion.a 
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Video Lessons
              <i className="fas fa-arrow-right ml-2"></i>
            </motion.a>
          </Link>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          {/* Main video player - 3 columns */}
          <div className="lg:col-span-3 bg-white rounded-lg overflow-hidden shadow-xl border border-slate-200">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[selectedVideo].embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={videos[selectedVideo].title}
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  {videos[selectedVideo].subject}
                </span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">{videos[selectedVideo].title}</h3>
              <p className="text-slate-600 text-sm">{videos[selectedVideo].description}</p>
            </div>
          </div>
          
          {/* Video list - 2 columns */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="mb-4">
              <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">More Video Lessons</h3>
              <p className="text-slate-600 text-sm">Browse our collection of science video lessons for GCSE and IGCSE curriculum.</p>
            </div>
            
            <div className="space-y-3 flex-grow overflow-auto max-h-[480px] pr-2 custom-scrollbar">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className={`flex cursor-pointer transition-all rounded-lg overflow-hidden ${selectedVideo === index ? 'ring-2 ring-yellow-400' : 'hover:bg-slate-50'}`}
                  onClick={() => setSelectedVideo(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-1/3 relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover aspect-video"
                    />
                    {selectedVideo === index && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="bg-red-600 text-white p-1.5 rounded-full">
                          <i className="fas fa-play"></i>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="w-2/3 p-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium bg-red-50 text-red-600 rounded-full mb-1">
                      {video.subject}
                    </span>
                    <h4 className="font-medium text-slate-900 mb-1 text-sm line-clamp-2">{video.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/videos">
                <motion.button 
                  className="flex items-center justify-center w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-play-circle mr-2 text-lg"></i>
                  View All Video Lessons
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        
        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <div className="mt-12 text-center">
            <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-4">Why Our Video Lessons?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: "fas fa-graduation-cap",
                  title: "Curriculum Aligned",
                  description: "All videos are specifically designed to cover key topics in the UK GCSE and IGCSE science curriculum."
                },
                {
                  icon: "fas fa-chalkboard-teacher",
                  title: "Expert Teacher",
                  description: "Learn from Miss Haridas, an experienced science teacher with a proven track record of student success."
                },
                {
                  icon: "fas fa-check-circle",
                  title: "Exam Focused",
                  description: "Targeted content helps you understand exactly what you need to know for your science exams."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-100"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-yellow-500 mb-4 text-3xl">
                    <i className={feature.icon}></i>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
        
        {/* All Videos Library Section */}
        <div id="all-videos" className="mt-20 pt-12 border-t border-slate-200">
          <ScrollAnimation variant="fadeUp">
            <h3 className="font-playfair text-3xl font-bold text-slate-900 mb-8 text-center">All Video Lessons</h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-center mb-12">
              Access our complete library of GCSE and IGCSE science video lessons, embedded directly on this page for easy viewing.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <ScrollAnimation key={video.id} variant="fadeUp" delay={0.1 * (index % 2)}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200">
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 mb-2">{video.title}</h4>
                    <p className="text-slate-600 text-sm mb-2">{video.description}</p>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      {video.subject}
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          {/* Additional Videos Section */}
          <ScrollAnimation variant="fadeUp" delay={0.3} className="mt-12">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-playfair text-xl font-bold text-slate-900 mb-4 text-center">More Videos Coming Soon</h4>
              <p className="text-slate-600 text-center mb-6">
                We're constantly adding new videos to help with your science education. 
                Visit our <a 
                  href="https://www.youtube.com/@TheStudyHive/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium"
                >YouTube channel</a> to see the latest uploads.
              </p>
              
              <div className="flex justify-center">
                <motion.a 
                  href="https://www.youtube.com/@TheStudyHive/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fab fa-youtube mr-2"></i>
                  Visit YouTube Channel
                </motion.a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default JellyfishVideos;