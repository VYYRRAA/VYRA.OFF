
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1F2C] text-[#F1F1F1] border-t border-[#262837] relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#9b87f5] hover:bg-[#7A63DD] text-white p-2 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg width={20} height={20} viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
      </button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#262837] pb-10">
          <div className="col-span-1">
            <span className="font-extrabold text-2xl text-gradient mb-4 inline-block tracking-widest">
              VYRA
            </span>
            <p className="text-[#8E9196] mt-2 max-w-[210px]">
              Unlock your potential. Live the lifestyle.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-[#9b87f5]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#9b87f5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#9b87f5] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#9b87f5] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-[#9b87f5] transition-colors">
                  Apply
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-[#9b87f5]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-[#9b87f5] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#9b87f5] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-[#9b87f5]">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/vyra.ofm"
                aria-label="Instagram"
                className="hover:text-[#9b87f5] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://telegram.org"
                aria-label="Telegram"
                className="hover:text-[#9b87f5] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
              <a
                href="https://twitter.com/vyra.ofm"
                aria-label="Twitter"
                className="hover:text-[#9b87f5] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-[#8E9196] text-sm">
            © {currentYear} VYRA. All rights reserved.
          </p>
          <div className="flex items-center text-sm mt-4 md:mt-0">
            {/* Professional Made with Heart */}
            <span className="mr-2">Made with</span>
            <Heart
              className="inline h-4 w-4 mx-1"
              stroke="#9b87f5"
              fill="none"
              style={{ verticalAlign: "middle" }}
            />
            <span className="ml-2">for creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

