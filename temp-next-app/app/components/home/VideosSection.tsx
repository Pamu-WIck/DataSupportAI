import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import Hexagon from "@/components/ui/hexagon";

const VideosSection = () => {
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
  ];

  return (
    <section id="videos" className="py-20 md:py-28 bg-yellow-50 relative overflow-hidden">
      {/* Background hexagons */}
      <div className="absolute -right-20 top-20 opacity-20 z-0">
        <Hexagon
          variant="secondary"
          className="w-60 h-60"
          content={<span></span>}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-teal-400 border-2 border-black text-black font-semibold text-sm mb-3 px-4 py-2 rounded-full inline-block">
              EDUCATIONAL VIDEOS
            </span>
          </div>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4 mt-5">
            {t("videos.title")}
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            {t("videos.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main video player */}
          <div className="lg:w-2/3">
            <div className="bg-white p-3 rounded-2xl border-2 border-black shadow-md">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/${videos[selectedVideo].embedId}`}
                  title={videos[selectedVideo].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                  {videos[selectedVideo].title}
                </h3>
                <p className="text-slate-700 text-sm">
                  {videos[selectedVideo].description}
                </p>
              </div>
            </div>
          </div>

          {/* Video selection sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl border-2 border-black p-4 shadow-md">
              <h3 className="font-poppins font-bold text-lg mb-4 text-slate-900">{t("videos.more")}</h3>

              <div className="space-y-4">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`flex items-start cursor-pointer p-3 rounded-xl transition-all ${
                      selectedVideo === index
                        ? "bg-yellow-100 border-2 border-yellow-400"
                        : "hover:bg-slate-50 border border-slate-100"
                    }`}
                    onClick={() => setSelectedVideo(index)}
                  >
                    <div className="w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden relative mr-3">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 flex items-center justify-center ${
                        selectedVideo === index ? "bg-black/0" : "bg-black/40"
                      }`}>
                        {selectedVideo !== index && (
                          <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-black flex items-center justify-center">
                            <i className="fas fa-play text-xs"></i>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        video.subject === "Biology" ? "bg-green-100 text-green-800" :
                        video.subject === "Chemistry" ? "bg-violet-100 text-violet-800" :
                        "bg-blue-100 text-blue-800"
                      }`}>
                        {video.subject}
                      </span>
                      <h4 className="font-medium text-sm mt-1 text-slate-900">{video.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://www.youtube.com/@TheStudyHive/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full inline-flex items-center"
                >
                  <i className="fab fa-youtube mr-2"></i>
                  {t("videos.visitChannel")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;