import { useTranslation } from "@/hooks/useTranslation";

type TutorCardProps = {
  image: string;
  name: string;
  specialty: string;
  bio: string;
  rating: number;
  examBoards: string[];
};

const TutorCard = ({ image, name, specialty, bio, rating, examBoards }: TutorCardProps) => {
  const { t } = useTranslation();
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<div key={`full-${i}`} className="text-blue-600 mr-1"><i className="fas fa-star"></i></div>);
    }
    
    if (halfStar) {
      stars.push(<div key="half" className="text-blue-600 mr-1"><i className="fas fa-star-half-alt"></i></div>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<div key={`empty-${i}`} className="text-blue-200 mr-1"><i className="fas fa-star"></i></div>);
    }
    
    return stars;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-60 object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
        
        {/* Tutor name and specialty */}
        <div className="absolute bottom-0 left-0 w-full p-5">
          <h3 className="font-poppins font-semibold text-white text-xl">{name}</h3>
          <p className="text-white/90 text-sm">{specialty}</p>
        </div>
      </div>
      
      <div className="p-5">
        {/* Exam boards */}
        <div className="flex flex-wrap gap-1 mb-3">
          {examBoards.map((board, index) => (
            <span key={index} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
              {board}
            </span>
          ))}
        </div>
        
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {bio}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {renderStars(rating)}
            <span className="text-slate-700 text-sm ml-1 font-medium">{rating.toFixed(1)}</span>
          </div>
          <a 
            href="#contact" 
            className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium flex items-center"
          >
            {t("tutors.bookSession")}
            <i className="fas fa-arrow-right ml-1.5 text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const TutorsSection = () => {
  const { t } = useTranslation();
  
  const tutors = [
    {
      image: "https://pixabay.com/get/g3b67b6d0678e0760b8bd30fb569b8963827fd0f4ff9366f1e400f4ceb769f44f84b71c283e8e9d52db70af3e8419ebc9fd5578b022aa7d92b399f88e7c2c1e2c_1280.jpg",
      name: "Dr. Emily Chen",
      specialty: "Biology Specialist",
      bio: "PhD in Molecular Biology with QTS. Teaches KS3, GCSE, and A Level Biology with 8+ years of experience in UK schools. Cambridge Assessment Examiner.",
      examBoards: ["AQA", "OCR", "Edexcel"],
      rating: 5.0
    },
    {
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      name: "Dr. Marcus Johnson",
      specialty: "Chemistry Expert",
      bio: "MSc in Chemistry, PGCE qualified. 10+ years teaching GCSE and A Level Chemistry. Edexcel exam marker with specialty in Organic Chemistry and practical assessments.",
      examBoards: ["Edexcel", "AQA"],
      rating: 4.8
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      name: "Dr. Sarah Kim",
      specialty: "Physics & Mathematics",
      bio: "PhD in Theoretical Physics with former Head of Department role in UK secondary school. Specializes in A Level Physics and Mathematical Methods for science.",
      examBoards: ["OCR", "AQA", "Cambridge"],
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      name: "Alex Rodriguez",
      specialty: "Combined Science",
      bio: "MSc in Science Education, qualified teacher. Experienced in teaching Double Award Science GCSE and coordinating KS3 Science curriculum across all three sciences.",
      examBoards: ["AQA", "Edexcel"],
      rating: 4.7
    }
  ];

  return (
    <section id="tutors" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-medium text-sm mb-3">EXPERT EDUCATORS</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-4">
            {t("tutors.title")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t("tutors.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutors.map((tutor, index) => (
            <TutorCard
              key={index}
              image={tutor.image}
              name={tutor.name}
              specialty={tutor.specialty}
              bio={tutor.bio}
              rating={tutor.rating}
              examBoards={tutor.examBoards}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 hover:border-blue-300 font-medium px-6 py-3 rounded-lg shadow-sm transition-colors inline-block"
          >
            {t("tutors.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;
