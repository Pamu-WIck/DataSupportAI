import { useTranslation } from "@/hooks/useTranslation";

type TutorCardProps = {
  image: string;
  name: string;
  specialty: string;
  bio: string;
  rating: number;
};

const TutorCard = ({ image, name, specialty, bio, rating }: TutorCardProps) => {
  const { t } = useTranslation();
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<div key={`full-${i}`} className="text-[#FFC107] mr-1"><i className="fas fa-star"></i></div>);
    }
    
    if (halfStar) {
      stars.push(<div key="half" className="text-[#FFC107] mr-1"><i className="fas fa-star-half-alt"></i></div>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<div key={`empty-${i}`} className="text-[#FFC107]/30 mr-1"><i className="fas fa-star"></i></div>);
    }
    
    return stars;
  };
  
  return (
    <div className="bg-[#FAFAFA] rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#424242]/80 to-transparent p-4">
          <h3 className="font-poppins font-semibold text-white text-xl">{name}</h3>
          <p className="text-white/90 text-sm">{specialty}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#424242]/70 text-sm mb-4">
          {bio}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {renderStars(rating)}
            <span className="text-[#424242] text-sm ml-1">{rating.toFixed(1)}</span>
          </div>
          <a href="#contact" className="text-[#0288D1] hover:text-[#03A9F4] transition text-sm font-medium">
            {t("tutors.bookSession")}
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
      bio: "Ph.D. in Molecular Biology with 8+ years of teaching experience. Specializes in genetics and cellular biology.",
      rating: 5.0
    },
    {
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      name: "Prof. Marcus Johnson",
      specialty: "Chemistry Expert",
      bio: "M.Sc. in Chemistry with 10+ years teaching high school and undergraduate chemistry. AP Chemistry exam coordinator.",
      rating: 4.8
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      name: "Dr. Sarah Kim",
      specialty: "Physics & Math",
      bio: "Ph.D. in Theoretical Physics. Former university lecturer specializing in mechanics, relativity, and mathematical methods.",
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      name: "Alex Rodriguez",
      specialty: "Earth Science",
      bio: "M.Sc. in Environmental Science with field research experience. Specializes in geology, climate science, and sustainability.",
      rating: 4.7
    }
  ];

  return (
    <section id="tutors" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#424242] mb-4">
            {t("tutors.title")}
          </h2>
          <p className="text-[#424242]/70 max-w-2xl mx-auto">
            {t("tutors.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tutors.map((tutor, index) => (
            <TutorCard
              key={index}
              image={tutor.image}
              name={tutor.name}
              specialty={tutor.specialty}
              bio={tutor.bio}
              rating={tutor.rating}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="bg-white border-2 border-[#FFC107] hover:bg-[#FFC107] text-[#FFC107] hover:text-white font-montserrat font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 inline-block">
            {t("tutors.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;
