
import { useState } from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import downloadApplicationAsText from "./downloadTextFile";

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

interface ApplyFormProps {
  onSuccess: (applicationId: string, formData: ApplicationForm) => void;
}

export default function ApplyForm({ onSuccess }: ApplyFormProps) {
  const [formData, setFormData] = useState<ApplicationForm>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "name", "age", "email",
      "instagram", "twitter", "contentStyle"
    ];
    const missingFields = requiredFields.filter(field => !formData[field as keyof ApplicationForm]);
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: columnsData, error: columnsError } = await supabase
        .from("applications")
        .select("*")
        .limit(1);

      if (columnsError) {
        toast({
          title: "Submission Failed",
          description: "Database structure check failed.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      const availableColumns = columnsData && columnsData[0]
        ? Object.keys(columnsData[0])
        : ["name", "age", "email", "country", "instagram", "twitter", "onlyfans", "telegram", "socials", "content_style"];

      const insertData: any = {
        name: formData.name,
        age: Number(formData.age),
        email: formData.email,
        content_style: formData.contentStyle,
        socials: formData.socials || "",
        telegram: formData.telegram || "" // Fix: Provide default empty string for telegram
      };

      if (availableColumns.includes('country')) insertData.country = formData.country || null;
      if (availableColumns.includes('instagram')) insertData.instagram = formData.instagram || null;
      if (availableColumns.includes('twitter')) insertData.twitter = formData.twitter || null;
      if (availableColumns.includes('onlyfans')) insertData.onlyfans = formData.onlyfans || null;
      if (availableColumns.includes('tiktok')) insertData.tiktok = formData.tiktok || null;
      if (availableColumns.includes('youtube')) insertData.youtube = formData.youtube || null;
      if (availableColumns.includes('facebook')) insertData.facebook = formData.facebook || null;
      if (availableColumns.includes('threads')) insertData.threads = formData.threads || null;

      const { data, error } = await supabase
        .from("applications")
        .insert([insertData])
        .select("id");

      if (error || !data || data.length === 0) {
        toast({
          title: "Submission Failed",
          description: error?.message || "No confirmation from database.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      const appId = data[0]?.id?.toString() ?? "Unknown";
      downloadApplicationAsText({ ...formData, id: appId });
      toast({
        title: "Application Submitted!",
        description: `Your application has been received. Your application ID is: ${appId}`,
      });
      setFormData(initialFormState);
      setIsSubmitting(false);
      onSuccess(appId, formData);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-card p-8 rounded-xl border border-border shadow-xl animate-fade-in">
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
            <Label htmlFor="onlyfans">OnlyFans Username</Label>
            <Input
              id="onlyfans"
              name="onlyfans"
              value={formData.onlyfans}
              onChange={handleChange}
              placeholder="@youronlyfans"
              className="mt-1"
            />
          </div>
          {/* Telegram */}
          <div>
            <Label htmlFor="telegram">Telegram Username</Label>
            <Input
              id="telegram"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="@yourtelegram"
              className="mt-1"
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
              <Link to="/privacy" className="text-pink-500 underline hover:text-pink-400">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms" className="text-pink-500 underline hover:text-pink-400">
                Terms of Service
              </Link>.
            </p>
          </div>
          {/* Submit Button */}
          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 transition-all" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
}
