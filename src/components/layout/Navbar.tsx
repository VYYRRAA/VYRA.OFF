
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Use latest uploaded logo
const LOGO_SRC = "/lovable-uploads/15b3531c-7211-43ad-b2e8-f4c1bc068ef7.png";

// Contact information
const CONTACT_INFO = {
  email: "vyraofm@gmail.com",
  instagram: "@vyra.ofm",
  twitter: "@vyra.ofm"
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={LOGO_SRC} alt="Logo" className="h-10 w-10 object-contain rounded-full bg-card border-2 border-primary" />
          <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            VYRA
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
          <Link to="/apply">
            <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
          </Link>
        </div>
        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 ml-4">
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href={`https://twitter.com/${CONTACT_INFO.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter size={18} />
          </a>
        </div>
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/apply"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-primary hover:bg-primary/90">Apply Now</Button>
            </Link>
            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-4 py-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={18} /> {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex items-center space-x-4 py-2">
              <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Instagram size={18} /> {CONTACT_INFO.instagram}
              </a>
            </div>
            <div className="flex items-center space-x-4 py-2">
              <a href={`https://twitter.com/${CONTACT_INFO.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
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
