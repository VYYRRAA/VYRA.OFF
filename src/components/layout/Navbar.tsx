
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Contact information
const CONTACT_INFO = {
  email: "vyraofm@gmail.com",
  instagram: "@vyra.ofm",
  twitter: "@vyra.ofm"
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-background/50 backdrop-blur-sm'
    } border-b border-border`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Link to home with brand name */}
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="font-bold text-2xl text-gradient group-hover:opacity-80 transition-opacity">
            VYRA
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`transition-colors hover:text-pink-400 ${location.pathname === '/' ? 'text-pink-500' : 'text-foreground'}`}>
            Home
          </Link>
          <Link to="/about" className={`transition-colors hover:text-pink-400 ${location.pathname === '/about' ? 'text-pink-500' : 'text-foreground'}`}>
            About
          </Link>
          <Link to="/services" className={`transition-colors hover:text-pink-400 ${location.pathname === '/services' ? 'text-pink-500' : 'text-foreground'}`}>
            Services
          </Link>
          <Link to="/apply" className={`transition-colors ${location.pathname === '/apply' ? 'opacity-80' : ''}`}>
            <Button className="bg-pink-600 hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-900/20 transition-all">Apply Now</Button>
          </Link>
        </div>
        
        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 ml-4">
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="text-foreground hover:text-pink-400 transition-colors" 
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a 
            href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground hover:text-pink-400 transition-colors" 
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a 
            href={`https://twitter.com/${CONTACT_INFO.twitter.replace('@', '')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground hover:text-pink-400 transition-colors" 
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground hover:text-pink-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/"
              className={`transition-colors hover:text-pink-400 py-2 ${location.pathname === '/' ? 'text-pink-500' : 'text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`transition-colors hover:text-pink-400 py-2 ${location.pathname === '/about' ? 'text-pink-500' : 'text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services"
              className={`transition-colors hover:text-pink-400 py-2 ${location.pathname === '/services' ? 'text-pink-500' : 'text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/apply"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-pink-600 hover:bg-pink-700 transition-colors">Apply Now</Button>
            </Link>
            
            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-4 py-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground hover:text-pink-400 transition-colors flex items-center gap-2">
                <Mail size={18} /> {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex items-center space-x-4 py-2">
              <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-pink-400 transition-colors flex items-center gap-2">
                <Instagram size={18} /> {CONTACT_INFO.instagram}
              </a>
            </div>
            <div className="flex items-center space-x-4 py-2">
              <a href={`https://twitter.com/${CONTACT_INFO.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-pink-400 transition-colors flex items-center gap-2">
                <Twitter size={18} /> {CONTACT_INFO.twitter}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
