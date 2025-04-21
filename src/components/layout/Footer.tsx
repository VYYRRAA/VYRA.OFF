
import { Link } from "react-router-dom";
import { Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-2xl text-gradient">VYRA</span>
            </Link>
            <p className="text-muted-foreground">Unlock your potential. Live the lifestyle.</p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-pink-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-pink-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-pink-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/apply" className="text-muted-foreground hover:text-pink-400 transition-colors">Apply</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-pink-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-pink-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-pink-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-pink-400">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/vyra.ofm" 
                aria-label="Instagram" 
                className="text-muted-foreground hover:text-pink-400 transition-colors hover-scale"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://telegram.org" 
                aria-label="Telegram" 
                className="text-muted-foreground hover:text-pink-400 transition-colors hover-scale"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </a>
              <a 
                href="https://twitter.com/vyra.ofm" 
                aria-label="Twitter" 
                className="text-muted-foreground hover:text-pink-400 transition-colors hover-scale"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} VYRA. All rights reserved.</p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="inline h-4 w-4 mx-1 text-pink-500 animate-pulse" /> for creators
          </p>
        </div>
      </div>
      
      {/* Footer background glow */}
      <div className="absolute bottom-0 left-1/3 w-1/3 h-1 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent blur-sm"></div>
    </footer>
  );
};

export default Footer;
