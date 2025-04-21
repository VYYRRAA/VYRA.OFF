
import ApplyForm from "./ApplyForm";
import ApplicationSuccess from "./ApplicationSuccess";
import ApplicationFAQ from "./ApplicationFAQ";
import { useState } from "react";

const ApplyMainSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  // Optionally pass the form data out for advanced usage
  const [lastFormData, setLastFormData] = useState<any>(null);

  const handleSuccess = (id: string, formData: any) => {
    setApplicationId(id);
    setLastFormData(formData);
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Creator Application</h2>
                <p className="text-muted-foreground text-center">
                  Please provide the following information so we can evaluate your application.
                  All fields marked with an asterisk (*) are required.
                </p>
              </div>
              <ApplyForm onSuccess={handleSuccess} />
            </>
          ) : (
            <ApplicationSuccess applicationId={applicationId} />
          )}
        </div>
      </div>
      {/* FAQ Section */}
      <ApplicationFAQ />
    </section>
  );
};

export default ApplyMainSection;
