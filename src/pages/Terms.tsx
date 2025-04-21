
import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Last updated: April 2025</p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using VYRA's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            
            <h2>Services Description</h2>
            <p>
              VYRA provides services to help digital content creators grow their audience, engage with followers, and monetize their content. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>
            
            <h2>User Obligations</h2>
            <p>
              You agree to provide accurate information when applying to our services and to comply with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account information.
            </p>
            
            <h2>Intellectual Property</h2>
            <p>
              All content and materials available on our website are the property of VYRA and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              VYRA is not liable for any indirect, consequential, or incidental damages arising out of your use of our services. Our liability is limited to the amount paid by you, if any, for our services.
            </p>
            
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to our services at our discretion, without prior notice, if you violate these Terms of Service.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>
            
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes by posting the new terms on this page.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at terms@vyra.com.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
