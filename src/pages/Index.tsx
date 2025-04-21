
import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageSquare, Wallet, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="absolute inset-0 bg-grid-white/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="inline">Unlock Your </span>
              <span className="inline bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Potential</span>
              <span className="block mt-2">Live the Lifestyle.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              VYRA helps creative individuals monetize their content and build sustainable income streams while connecting deeply with their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="font-medium">
                  APPLY TO JOIN <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="font-medium">
                  LEARN MORE
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How VYRA Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide full-service support and innovative tools to help creators thrive across platforms and grow their digital careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-gradient-to-br from-[#191628]/90 to-[#232032]/80 rounded-2xl p-7 border border-border shadow-lg/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 backdrop-blur-md card-gradient glass-morphism animate-fade-in"
              style={{ animationDelay: "100ms" }}>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/10"></div>
              <div className="z-10 relative bg-primary/10 p-3 rounded-lg mb-5 shadow-inner group-hover:bg-primary/20 transition-colors duration-200">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors duration-200">Daily Chatting & Fan Engagement</h3>
              <p className="text-muted-foreground mb-4">
                Build authentic relationships with your fans through our optimized messaging strategies that drive retention and boost revenue.
              </p>
              <div className="mt-auto">
                <Link to="/services" className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-tr from-[#171421]/85 via-[#232035]/80 to-[#271f34]/80 rounded-2xl p-7 border border-border shadow-lg/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-md card-gradient glass-morphism animate-fade-in"
              style={{ animationDelay: "200ms" }}>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/10"></div>
              <div className="z-10 relative bg-primary/10 p-3 rounded-lg mb-5 shadow-inner group-hover:bg-primary/20 transition-colors duration-200">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors duration-200">Revenue Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Maximize your income through advanced pricing models, upsells, and premium content strategies.
              </p>
              <div className="mt-auto">
                <Link to="/services" className="text-primary font-medium inline-flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-[#1a1825]/80 via-[#28253a]/80 to-[#171628]/80 rounded-2xl p-7 border border-border shadow-lg/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 backdrop-blur-md card-gradient glass-morphism animate-fade-in"
              style={{ animationDelay: "300ms" }}>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/10"></div>
              <div className="z-10 relative bg-primary/10 p-3 rounded-lg mb-5 shadow-inner group-hover:bg-primary/20 transition-colors duration-200">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors duration-200">Community Growth</h3>
              <p className="text-muted-foreground mb-4">
                Tap into our network and growth systems to rapidly expand your following and visibility.
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VYRA?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our curated community of ambitious creators and gain access to premium support, tools, and results-driven strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div className="group flex items-start transition-all duration-200 hover:scale-105 animate-fade-in">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Work with experienced industry professionals who know what it takes to grow.
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start transition-all duration-200 hover:scale-105 animate-fade-in">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Our team is available daily to guide you through challenges and keep you on track.
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start transition-all duration-200 hover:scale-105 animate-fade-in">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Content Strategy</h3>
                  <p className="text-muted-foreground">
                    Plan content that engages, converts, and aligns with the latest trends.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-6">
              <div className="group flex items-start transition-all duration-200 hover:scale-105 animate-fade-in">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Exclusive Network</h3>
                  <p className="text-muted-foreground">
                    Collaborate with like-minded creators and leverage shared audiences.
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start transition-all duration-200 hover:scale-105 animate-fade-in">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Creators working with VYRA consistently experience real growth in engagement, subscribers, and revenue.
                  </p>
                </div>
              </div>
              
              <div className="group flex items-start transition-all duration-200 hover:scale-105 animate-fade-in">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Growth-Focused</h3>
                  <p className="text-muted-foreground">
                    We’re here for the long run — scaling your brand, your audience, and your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Preview -- removed per request */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent-foreground text-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Creator Journey?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join VYRA and unlock your full earning potential with a strategy built for creators, by creators.
            </p>
            <Link to="/apply">
              <Button size="lg" variant="secondary" className="text-primary font-medium">
                APPLY NOW <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
