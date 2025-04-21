
import { Check } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="absolute inset-0 bg-grid-white/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="inline">About </span>
              <span className="inline bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">VYRA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering digital creators to build sustainable careers through innovation, support, and community.
            </p>
          </div>
        </div>
        
        {/* Creative visual element */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-primary/20 to-accent-foreground/20 blur-3xl rounded-full"></div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                VYRA was founded in 2022 with a clear mission: to help digital creators transform their passion into sustainable careers. What started as a small collective of industry experts has grown into a thriving ecosystem supporting creators around the globe.
              </p>
              
              <p>
                Our founder, Sarah Chen, experienced firsthand the challenges of building a creator business. After struggling to monetize her own content despite a growing audience, she assembled a team of marketing specialists, platform experts, and successful creators to build a comprehensive support system for digital entrepreneurs.
              </p>
              
              <p>
                Today, VYRA works with hundreds of creators across multiple platforms, providing personalized strategies, community support, and innovative tools to help them grow their audience and revenue streams.
              </p>
              
              <blockquote>
                <p>"We believe that creators deserve better. Better tools, better support, and better opportunities to build meaningful careers doing what they love."</p>
                <footer>— Sarah Chen, Founder & CEO</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl mb-10">
              At VYRA, we're guided by core principles that define everything we do:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Empower Creators</h3>
                <p className="text-muted-foreground">
                  We provide the tools, knowledge, and support creators need to take control of their digital careers.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Foster Community</h3>
                <p className="text-muted-foreground">
                  We believe in the power of connection, bringing creators together to learn, collaborate, and grow.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Drive Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve our approaches to stay ahead of platform changes and industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Meet Our Team</h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our diverse team of experts is dedicated to helping creators succeed in the digital landscape.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-medium text-primary">SC</span>
              </div>
              <h3 className="text-lg font-semibold">Sarah Chen</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-medium text-primary">MJ</span>
              </div>
              <h3 className="text-lg font-semibold">Marcus Johnson</h3>
              <p className="text-muted-foreground">Head of Creator Relations</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-medium text-primary">LP</span>
              </div>
              <h3 className="text-lg font-semibold">Lisa Park</h3>
              <p className="text-muted-foreground">Strategy Director</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-medium text-primary">DN</span>
              </div>
              <h3 className="text-lg font-semibold">David Nguyen</h3>
              <p className="text-muted-foreground">Technology Lead</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Values</h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            These principles guide how we work with creators and build our community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Authenticity</h3>
                <p className="text-muted-foreground">
                  We believe in genuine connections and transparent communication in all we do.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly evolve our approaches to stay ahead of industry trends.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We welcome creators from all backgrounds, perspectives, and niches.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Growth-Focused</h3>
                <p className="text-muted-foreground">
                  We measure our success by the growth and achievements of our creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
