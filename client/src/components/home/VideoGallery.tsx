import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Link } from "wouter";

/**
 * VideoGallery component for The Study Hive
 * A dedicated page-style section for YouTube videos styled with the Jellyfish template design
 * This matches the Jellyfish Squarespace template layout for video content
 */
const VideoGallery = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // These are the actual videos from Miss Haridas' Study Hive YouTube channel
  // Videos from https://www.youtube.com/@TheStudyHive/videos with exact titles
  const videos = [
    {
      id: "video1",
      title: "Immune System | GCSE | IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/WC3TiPRECTI/maxresdefault.jpg",
      embedId: "WC3TiPRECTI",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Learn about the immune system for GCSE and IGCSE Biology with expert explanations from Miss Haridas."
    },
    {
      id: "video2",
      title: "Vaccinations | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/mU9PGceV_yk/maxresdefault.jpg",
      embedId: "mU9PGceV_yk",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Comprehensive explanation of vaccinations for GCSE and IGCSE Biology curriculum requirements."
    },
    {
      id: "video3",
      title: "Required Practical for Photosynthesis | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/z7Yg9Xf_rjs/maxresdefault.jpg",
      embedId: "z7Yg9Xf_rjs",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Step-by-step guide to the required practical experiments for photosynthesis in GCSE and IGCSE Biology."
    },
    {
      id: "video4",
      title: "Hormones & the Endocrine System (Part 1) | GCSE/ IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/pZc5H4XDScg/maxresdefault.jpg",
      embedId: "pZc5H4XDScg",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Detailed explanation of hormones and the endocrine system for GCSE and IGCSE Biology."
    },
    {
      id: "video5",
      title: "Hormones & the Endocrine System (Part 2) | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/gDvGOm55qZ4/maxresdefault.jpg",
      embedId: "gDvGOm55qZ4",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Continuation of the hormones and endocrine system topic for GCSE and IGCSE Biology."
    },
    {
      id: "video6",
      title: "Diffusion | GCSE Biology",
      thumbnail: "https://img.youtube.com/vi/tKm24Dm6eHk/maxresdefault.jpg",
      embedId: "tKm24Dm6eHk",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Learn about diffusion processes and their importance in biological systems for GCSE Biology."
    },
    {
      id: "video7",
      title: "Photosynthesis | GCSE Biology",
      thumbnail: "https://img.youtube.com/vi/djudhjDheUg/maxresdefault.jpg",
      embedId: "djudhjDheUg",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Comprehensive guide to photosynthesis covering all the essential concepts for GCSE Biology."
    },
    {
      id: "video8",
      title: "Factors affecting the rate of Photosynthesis | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/qhC5VRIhXrg/maxresdefault.jpg",
      embedId: "qhC5VRIhXrg",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Detailed explanation of all the factors that affect photosynthesis rates in plants for GCSE and IGCSE."
    },
    {
      id: "video9",
      title: "Structure of a Leaf | GCSE / IGCSE Biology",
      thumbnail: "https://img.youtube.com/vi/hEG-G8oGXmM/maxresdefault.jpg",
      embedId: "hEG-G8oGXmM",
      subject: "Biology",
      category: "GCSE/IGCSE",
      description: "Detailed look at leaf structure and how it relates to photosynthesis for GCSE and IGCSE Biology."
    },
    {
      id: "video10",
      title: "How to Revise Effectively | The Study Hive LIVE",
      thumbnail: "https://img.youtube.com/vi/_eT2bS0dwh0/maxresdefault.jpg",
      embedId: "_eT2bS0dwh0",
      subject: "Study Skills",
      category: "Study Skills",
      description: "Essential revision strategies and techniques to help you succeed in your science exams."
    },
  ];

  const categories = ["All", "Biology", "Chemistry", "Physics", "Study Skills", "GCSE/IGCSE"];

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => 
        video.subject === selectedCategory || video.category === selectedCategory
      );

  return (
    <section id="videos" className="py-20 md:py-28 bg-[#fafbfc] relative">
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
          
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Access our library of curriculum-focused video lessons, created by Miss Haridas to help you master key science concepts for GCSE and IGCSE exams.
          </p>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Featured video - first video or first in filtered category */}
        {filteredVideos.length > 0 && (
          <div className="mb-16">
            <ScrollAnimation variant="fadeUp">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-slate-200 max-w-5xl mx-auto">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${filteredVideos[0].embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={filteredVideos[0].title}
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full mr-3">
                      {filteredVideos[0].subject}
                    </span>
                    <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                      {filteredVideos[0].category}
                    </span>
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-slate-900 mb-4">{filteredVideos[0].title}</h3>
                  <p className="text-slate-600 text-lg">{filteredVideos[0].description}</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )}
        
        {/* Section title for more videos */}
        <div className="text-center mb-10">
          <h3 className="font-playfair text-2xl font-bold text-slate-900 inline-block pb-2 border-b-2 border-yellow-400">
            More Video Lessons
          </h3>
        </div>
        
        {/* Video grid - in jellyfish style - uniform size */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.slice(1).map((video, index) => (
            <ScrollAnimation key={video.id} variant="fadeUp" delay={0.1 * (index % 4)}>
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-video w-full group cursor-pointer" onClick={() => window.location.href = `#video-${video.id}`}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                      <i className="fas fa-play text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-red-50 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full mr-2">
                      {video.subject}
                    </span>
                  </div>
                  <h4 className="font-medium text-slate-900 mb-2 line-clamp-2 text-sm h-10">{video.title}</h4>
                  <a 
                    href={`#video-${video.id}`}
                    className="text-xs font-medium text-red-600 hover:text-red-700 flex items-center mt-2"
                  >
                    Watch Video <i className="fas fa-chevron-right ml-1 text-xs"></i>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
        
        {/* Hidden video players that become visible when anchored */}
        <div className="mt-16">
          {videos.map((video) => (
            <div key={video.id} id={`video-${video.id}`} className="py-12 scroll-mt-24">
              <ScrollAnimation variant="fadeUp">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-200 max-w-4xl mx-auto">
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
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                        {video.subject}
                      </span>
                      <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {video.category}
                      </span>
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-3">{video.title}</h3>
                    <p className="text-slate-600 mb-4">{video.description}</p>
                    <a 
                      href="#videos" 
                      className="text-sm font-medium text-slate-600 hover:text-slate-800 flex items-center"
                    >
                      <i className="fas fa-arrow-left mr-2"></i> Back to all videos
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
        
        {/* Why Our Video Lessons Section */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <ScrollAnimation variant="fadeUp">
            <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-8 text-center">Why Our Video Lessons?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;