
import { useState, useEffect } from "react";

const ApplyHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black to-pink-900 pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="absolute inset-0">
        {/* Abstract background shapes */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-pink-500/30 rounded-full blur-xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.2))]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div 
          className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="inline">Apply to Join </span>
            <span className="inline text-gradient">VYRA</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward transforming your creator career by applying to join our exclusive community.
          </p>
          
          {/* Added decorative element */}
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto mt-6 mb-8 rounded-full"></div>
        </div>
      </div>
      
      {/* Bottom glow */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-pink-500/30 to-fuchsia-500/20 blur-3xl rounded-full"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-pink-500/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `shimmer ${Math.random() * 10 + 10}s infinite linear`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ApplyHero;
