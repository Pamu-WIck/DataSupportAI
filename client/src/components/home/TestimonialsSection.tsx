import { useState, useEffect, useRef } from 'react';
import { useTranslation } from "@/hooks/useTranslation";

type TestimonialProps = {
  image: string;
  name: string;
  role: string;
  text: string;
  rating: number;
};

const Testimonial = ({ image, name, role, text, rating }: TestimonialProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<div key={i} className="text-[#FFC107] mr-1"><i className="fas fa-star"></i></div>);
    }
    return stars;
  };
  
  return (
    <div className="testimonial-slide px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-poppins font-semibold text-lg">{name}</h4>
            <p className="text-[#424242]/70 text-sm">{role}</p>
          </div>
          <div className="ml-auto">
            <i className="fas fa-quote-right text-4xl text-[#FFC107]/20"></i>
          </div>
        </div>
        <p className="text-[#424242]/80 mb-4">
          {text}
        </p>
        <div className="flex items-center">
          {renderStars(rating)}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      name: "Jamie C.",
      role: "AP Biology Student",
      text: "Dr. Chen completely transformed my understanding of cellular processes. I was struggling with AP Biology concepts, and after just a few sessions, everything started to click. I went from a C to an A- and felt confident taking my AP exam!",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      name: "Michael T.",
      role: "Chemistry Student",
      text: "I was really struggling with balancing chemical equations and understanding reaction mechanisms. Prof. Johnson broke everything down in a way that finally made sense. His approach to teaching chemistry made a subject I used to dread into one I actually enjoy.",
      rating: 5
    },
    {
      image: "https://pixabay.com/get/g11144106a002e332ea44ad3c55fc04ca052c5f16227ababd1f421df85e5bab8fd3c38b20093f6c8e230ba7bf4ec33bd909581d60a9481901fe6bf7bb1a6a13a9_1280.jpg",
      name: "Sophia L.",
      role: "Physics Student",
      text: "Dr. Kim has an incredible ability to make complex physics concepts accessible. Her approach to teaching mechanics and her focus on building strong mathematical foundations helped me overcome my fear of physics. I'm now considering a STEM major in college!",
      rating: 5
    }
  ];
  
  const updateSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  // Update slider position when current slide changes
  useEffect(() => {
    updateSliderPosition();
  }, [currentSlide]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#FFC107]/10 to-[#03A9F4]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#424242] mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-[#424242]/70 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>
        
        <div className="testimonial-container relative">
          <div className="testimonial-slider" ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 hover:bg-[#FFC107] hover:text-white text-[#424242] rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 transition"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 hover:bg-[#FFC107] hover:text-white text-[#424242] rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 transition"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`mx-1 w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[#FFC107]' : 'bg-[#FFC107]/30'}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
