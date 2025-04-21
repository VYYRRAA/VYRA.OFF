import { Link } from "react-router-dom";
import { ArrowRight, Check, Heart, MessageSquare, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="absolute inset-0 bg-grid-white/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="inline">Unlock Your </span>
              <span className="inline bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Potential</span>
              <span className="block mt-2">Live the Lifestyle</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              VYRA helps creative individuals monetize their content and build sustainable income streams while connecting with their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="font-medium">
                  Apply to Join <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="font-medium">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Creative visual element */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-primary/20 to-accent-foreground/20 blur-3xl rounded-full"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How VYRA Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support and services to help creators thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-start transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-lg mb-5">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Daily Chatting & Fan Engagement</h3>
              <p className="text-muted-foreground mb-4">
                Build genuine connections with your followers through our optimized messaging platform.
              </p>
              <div className="mt-auto">
                <Link to="/services" className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-start transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-lg mb-5">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Revenue Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Maximize your earnings with our proven strategies and monetization techniques.
              </p>
              <div className="mt-auto">
                <Link to="/services" className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-start transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-lg mb-5">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Growth</h3>
              <p className="text-muted-foreground mb-4">
                Access our network and resources to rapidly expand your audience and reach.
              </p>
              <div className="mt-auto">
                <Link to="/services" className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VYRA?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our exclusive community of successful creators who have transformed their passion into profit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Get personalized coaching from industry professionals who understand what works.
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
                  <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Our team is available around the clock to help you overcome any challenges.
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
                  <h3 className="text-lg font-semibold mb-2">Content Strategy</h3>
                  <p className="text-muted-foreground">
                    Develop engaging content that resonates with your audience and drives engagement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Exclusive Network</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded creators and collaborate on exciting projects.
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
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Our creators consistently see growth in followers, engagement, and revenue.
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
                    We're committed to scaling your presence and income over the long term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Preview */}
      {/* Remove "Read More Success Stories" button and references */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Creator Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from creators who have transformed their digital presence with VYRA.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-xl border border-border relative">
            <div className="absolute -top-4 -left-4">
              <div className="text-4xl text-primary">"</div>
            </div>
            <blockquote className="text-lg md:text-xl italic mb-6 mt-2">
              Joining VYRA was the best decision for my creator career. Within three months, I doubled my followers and increased my revenue by 320%. The team's support and strategies have been invaluable.
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-medium">JD</div>
              <div className="ml-4">
                <p className="font-semibold">Jamie Davis</p>
                <p className="text-sm text-muted-foreground">Content Creator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Creator Journey?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join our exclusive community of successful creators and start growing your audience and income today.
            </p>
            <Link to="/apply">
              <Button size="lg" variant="secondary" className="text-primary font-medium">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
