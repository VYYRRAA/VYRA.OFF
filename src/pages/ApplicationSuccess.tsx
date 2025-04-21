
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApplicationSuccessProps {
  applicationId: string;
}

export default function ApplicationSuccess({ applicationId }: ApplicationSuccessProps) {
  return (
    <div className="bg-card p-8 rounded-xl border border-border text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
      <p className="text-muted-foreground mb-6">
        Thank you for applying to join VYRA. Our team will review your application and get back to you within 3-5 business days.
      </p>
      <div className="bg-secondary p-4 rounded-lg mb-6">
        <p className="text-sm text-muted-foreground mb-2">Your Application ID:</p>
        <p className="text-lg font-semibold">{applicationId}</p>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Please save your application ID for reference. You'll need it for any communication regarding your application status.
      </p>
      <div className="flex justify-center">
        <Link to="/">
          <Button variant="outline">Return to Homepage</Button>
        </Link>
      </div>
    </div>
  )
}
