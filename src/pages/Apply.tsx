
import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Application form interface—ensure all major social platforms included
interface ApplicationForm {
  name: string;
  age: string;
  email: string;
  country: string;
  instagram: string;
  twitter: string;
  onlyfans: string;
  telegram: string;
  tiktok: string;
  youtube: string;
  facebook: string;
  threads: string;
  socials: string;
  contentStyle: string;
}

// Initial form state includes more fields for additional social platforms
const initialFormState: ApplicationForm = {
  name: "",
  age: "",
  email: "",
  country: "",
  instagram: "",
  twitter: "",
  onlyfans: "",
  telegram: "",
  tiktok: "",
  youtube: "",
  facebook: "",
  threads: "",
  socials: "",
  contentStyle: ""
};

const Apply = () => {
  const [formData, setFormData] = useState<ApplicationForm>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Helper: Generate a downloadable text file of the submission
  const downloadApplicationAsText = (data: ApplicationForm & { id: string | number }) => {
    const lines = [
      `Application ID: ${data.id}`,
      `Name: ${data.name}`,
      `Age: ${data.age}`,
      `Email: ${data.email}`,
      `Country: ${data.country}`,
      `Instagram: ${data.instagram}`,
      `Twitter: ${data.twitter}`,
      `OnlyFans: ${data.onlyfans}`,
      `Telegram: ${data.telegram}`,
      `TikTok: ${data.tiktok}`,
      `YouTube: ${data.youtube}`,
      `Facebook: ${data.facebook}`,
      `Threads: ${data.threads}`,
      `Other Socials: ${data.socials}`,
      `Content Style: ${data.contentStyle}`,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const downloadId = `vyra_application_${data.id}.txt`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = downloadId;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      a.remove();
      URL.revokeObjectURL(a.href);
    }, 1000);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started");

    // Validation: At least the required fields
    const requiredFields = [
      "name", "age", "email",
      "instagram", "twitter", "onlyfans", "telegram", "contentStyle"
    ];
    const missingFields = requiredFields.filter(field => !formData[field as keyof ApplicationForm]);

    if (missingFields.length > 0) {
      console.log("Missing fields:", missingFields);
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Preparing data for submission");

    try {
      // Prepare the data to insert (including new additions)
      const insertData = {
        name: formData.name,
        age: Number(formData.age),
        email: formData.email,
        country: formData.country || null,
        instagram: formData.instagram,
        twitter: formData.twitter,
        onlyfans: formData.onlyfans,
        telegram: formData.telegram,
        tiktok: formData.tiktok,
        youtube: formData.youtube,
        facebook: formData.facebook,
        threads: formData.threads,
        socials: formData.socials,
        content_style: formData.contentStyle,
      };
      
      console.log("Insert data prepared:", insertData);

      const { data, error } = await supabase
        .from("applications")
        .insert([insertData])
        .select("id");
      
      console.log("Supabase response:", { data, error });

      if (error) {
        console.error("Database error:", error);
        setIsSubmitting(false);
        toast({
          title: "Submission Failed",
          description: `Database error: ${error.message}`,
          variant: "destructive"
        });
        return;
      }

      if (!data || data.length === 0) {
        console.error("No data returned from insert");
        setIsSubmitting(false);
        toast({
          title: "Submission Failed",
          description: "No confirmation received from database. Please try again.",
          variant: "destructive"
        });
        return;
      }

      const appId = data[0]?.id?.toString() ?? "Unknown";
      setApplicationId(appId);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save data as text file for the user (for download)
      downloadApplicationAsText({ ...formData, id: appId });

      toast({
        title: "Application Submitted!",
        description: `Your application has been received. Your application ID is: ${appId}`,
      });

      setFormData(initialFormState);
    } catch (error) {
      console.error("Unexpected error:", error);
      setIsSubmitting(false);
      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="absolute inset-0 bg-grid-white/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="inline">Apply to Join </span>
              <span className="inline bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">VYRA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step toward transforming your creator career by applying to join our exclusive community.
            </p>
          </div>
        </div>
        
        {/* Creative visual element */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-primary/20 to-accent-foreground/20 blur-3xl rounded-full"></div>
      </section>

      {/* Application Form Section */}
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

                <div className="bg-card p-8 rounded-xl border border-border">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      {/* Name */}
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="mt-1"
                          required
                        />
                      </div>
                      {/* Age */}
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input 
                          id="age"
                          name="age"
                          type="number"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Your age"
                          className="mt-1"
                          required
                          min="18"
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="mt-1"
                          required
                        />
                      </div>
                      {/* Country */}
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input 
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Your country of residence"
                          className="mt-1"
                        />
                      </div>
                      {/* Instagram */}
                      <div>
                        <Label htmlFor="instagram">Instagram Username *</Label>
                        <Input 
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleChange}
                          placeholder="@yourinstagram"
                          className="mt-1"
                          required
                        />
                      </div>
                      {/* Twitter */}
                      <div>
                        <Label htmlFor="twitter">Twitter Username *</Label>
                        <Input 
                          id="twitter"
                          name="twitter"
                          value={formData.twitter}
                          onChange={handleChange}
                          placeholder="@yourtwitter"
                          className="mt-1"
                          required
                        />
                      </div>
                      {/* OnlyFans */}
                      <div>
                        <Label htmlFor="onlyfans">OnlyFans Username *</Label>
                        <Input 
                          id="onlyfans"
                          name="onlyfans"
                          value={formData.onlyfans}
                          onChange={handleChange}
                          placeholder="@youronlyfans"
                          className="mt-1"
                          required
                        />
                      </div>
                      {/* Telegram */}
                      <div>
                        <Label htmlFor="telegram">Telegram Username *</Label>
                        <Input 
                          id="telegram"
                          name="telegram"
                          value={formData.telegram}
                          onChange={handleChange}
                          placeholder="@yourtelegram"
                          className="mt-1"
                          required
                        />
                      </div>
                      {/* TikTok */}
                      <div>
                        <Label htmlFor="tiktok">TikTok Username</Label>
                        <Input 
                          id="tiktok"
                          name="tiktok"
                          value={formData.tiktok}
                          onChange={handleChange}
                          placeholder="@yourtiktok"
                          className="mt-1"
                        />
                      </div>
                      {/* YouTube */}
                      <div>
                        <Label htmlFor="youtube">YouTube Channel</Label>
                        <Input 
                          id="youtube"
                          name="youtube"
                          value={formData.youtube}
                          onChange={handleChange}
                          placeholder="YouTube Channel URL or @username"
                          className="mt-1"
                        />
                      </div>
                      {/* Facebook */}
                      <div>
                        <Label htmlFor="facebook">Facebook Page</Label>
                        <Input 
                          id="facebook"
                          name="facebook"
                          value={formData.facebook}
                          onChange={handleChange}
                          placeholder="Facebook page/profile"
                          className="mt-1"
                        />
                      </div>
                      {/* Threads */}
                      <div>
                        <Label htmlFor="threads">Threads Username</Label>
                        <Input 
                          id="threads"
                          name="threads"
                          value={formData.threads}
                          onChange={handleChange}
                          placeholder="@yourthreads"
                          className="mt-1"
                        />
                      </div>
                      {/* Social Media (Other) */}
                      <div>
                        <Label htmlFor="socials">Other Social Media Accounts</Label>
                        <Input 
                          id="socials"
                          name="socials"
                          value={formData.socials}
                          onChange={handleChange}
                          placeholder="Snapchat: @username, LinkedIn, etc."
                          className="mt-1"
                        />
                      </div>
                      {/* Content Style */}
                      <div>
                        <Label htmlFor="contentStyle">Content Style *</Label>
                        <Textarea 
                          id="contentStyle"
                          name="contentStyle"
                          value={formData.contentStyle}
                          onChange={handleChange}
                          placeholder="Describe your content style, niche, and target audience"
                          className="mt-1"
                          rows={4}
                          required
                        />
                      </div>
                      {/* Privacy Notice */}
                      <div className="bg-secondary p-4 rounded-lg flex items-start">
                        <Info className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          By submitting this application, you agree to our{" "}
                          <Link to="/privacy" className="text-primary underline hover:text-primary/90">
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link to="/terms" className="text-primary underline hover:text-primary/90">
                            Terms of Service
                          </Link>.
                        </p>
                      </div>
                      {/* Submit Button */}
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
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
            )}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Application FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold mb-2">How long is the application process?</h3>
              <p className="text-muted-foreground">
                After submission, our team typically reviews applications within 3-5 business days. If approved, you'll receive an onboarding email with next steps.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold mb-2">What are the minimum requirements?</h3>
              <p className="text-muted-foreground">
                While we consider creators at various stages, we typically look for consistent content production, engagement with your audience, and a clear niche or direction.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold mb-2">Is there a fee to apply or join?</h3>
              <p className="text-muted-foreground">
                There's no fee to apply. If accepted, we'll discuss our partnership structure during onboarding, which is designed to align with your success.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold mb-2">What happens after I'm accepted?</h3>
              <p className="text-muted-foreground">
                Our team will schedule an onboarding call to discuss your goals, create a customized strategy, and introduce you to our community and resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
