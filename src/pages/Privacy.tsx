
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Last updated: April 2025</p>
            
            <h2>Introduction</h2>
            <p>
              This Privacy Policy explains how VYRA ("we", "us", or "our") collects, uses, and shares information about you when you use our website and services. We respect your privacy and are committed to protecting your personal data.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide to us, such as when you fill out our application form. This may include your name, age, email address, country, social media accounts, and other contact information.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use your information to process your application, provide our services, communicate with you, and improve our platform. We may also use your information to personalize our services and send you relevant marketing communications.
            </p>
            
            <h2>How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We may share your information with third-party service providers who help us operate our business, but they are required to protect your information.
            </p>
            
            <h2>Your Choices</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time.
            </p>
            
            <h2>Security</h2>
            <p>
              We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is completely secure.
            </p>
            
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@vyra.com.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
