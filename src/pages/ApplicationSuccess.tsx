
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface ApplicationSuccessProps {
  applicationId: string;
}

export default function ApplicationSuccess({ applicationId }: ApplicationSuccessProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCopyId = () => {
    navigator.clipboard.writeText(applicationId);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Application ID has been copied to your clipboard",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={`bg-card p-8 rounded-xl border border-pink-500/30 shadow-xl transition-all duration-700 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
    >
      <div className="w-20 h-20 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-500/10 animate-pulse rounded-full"></div>
        <Check className="h-10 w-10 text-pink-500 relative z-10" />
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-center">Application Submitted!</h2>
      
      <p className="text-muted-foreground mb-6 text-center">
        Thank you for applying to join VYRA. Our team will review your application and get back to you within 3-5 business days.
      </p>
      
      <div className="bg-pink-500/5 border border-pink-500/20 p-6 rounded-lg mb-6 relative">
        <div className="absolute inset-0 shimmer rounded-lg"></div>
        <p className="text-sm text-muted-foreground mb-2 text-center relative z-10">Your Application ID:</p>
        <div className="flex items-center justify-center gap-2 relative z-10">
          <p className="text-lg font-semibold text-pink-500">{applicationId}</p>
          <button 
            onClick={handleCopyId}
            className="p-1 rounded-md hover:bg-pink-500/20 transition-colors text-pink-400"
            title="Copy ID"
          >
            {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Please save your application ID for reference. You'll need it for any communication regarding your application status.
      </p>
      
      <div className="flex justify-center">
        <Link to="/">
          <Button variant="outline" className="border-pink-500/50 hover:bg-pink-500/20 hover:text-pink-300 transition-all duration-300">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
