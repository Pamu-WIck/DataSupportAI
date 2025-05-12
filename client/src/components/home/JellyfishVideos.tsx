import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";

/**
 * JellyfishVideos component for The Study Hive
 * A dedicated section for YouTube videos styled with the Jellyfish template design
 */
const JellyfishVideos = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(0);
  
  // These are the actual videos from Miss Haridas' Study Hive YouTube channel
  // Videos from https://www.youtube.com/@TheStudyHive/featured with exact titles
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
          
          <p className="text-slate-600 max-w-2xl mx-auto">
            Access our library of curriculum-focused video lessons, created by Miss Haridas to help you master key science concepts for GCSE and IGCSE exams.
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          {/* Main video player - 3 columns */}
          <div className="lg:col-span-3 bg-slate-900 rounded-lg overflow-hidden shadow-lg">
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
            <div className="p-6 bg-slate-800">
              <h3 className="text-white font-bold text-xl mb-2">{videos[selectedVideo].title}</h3>
              <p className="text-slate-300 text-sm">{videos[selectedVideo].description}</p>
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
                      <div className="absolute inset-0 bg-yellow-400/20 flex items-center justify-center">
                        <span className="bg-yellow-500 text-white p-1 rounded-full">
                          <i className="fas fa-play"></i>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="w-2/3 p-3">
                    <h4 className="font-medium text-slate-900 mb-1 text-sm line-clamp-2">{video.title}</h4>
                    <p className="text-xs text-slate-500">{video.subject}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4">
              <motion.a 
                href="https://www.youtube.com/@TheStudyHive/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-youtube mr-2 text-lg"></i>
                Visit Our Full YouTube Channel
              </motion.a>
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
      </div>
    </section>
  );
};

export default JellyfishVideos;