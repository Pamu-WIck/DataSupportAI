import ScrollAnimation from "@/components/ui/scroll-animation";

/**
 * StudyTips component
 * Displays helpful tips on how to use past papers effectively
 */
export const StudyTips = () => {
  return (
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
  );
};
