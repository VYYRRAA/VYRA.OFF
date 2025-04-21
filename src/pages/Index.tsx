
import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageSquare, Wallet, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

// Use Unsplash demo images per placeholder key
const featureImages = [
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=700&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=700&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=700&q=80"
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent-foreground/10 pt-20 pb-20 md:pt-28 md:pb-28">
        {/* Subtle background grid + hero abstract shape */}
        <div className="absolute inset-0 bg-grid-white/30 dark:bg-grid-black/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.4))]"></div>
        <div className="absolute top-10 -right-32 lg:right-10 lg:top-10 w-96 h-96 bg-gradient-to-tr from-[#9b87f5]/40 to-[#e5deff]/90 rounded-full blur-3xl opacity-65 animate-fade-in"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">
                Unlock Your <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Potential</span>
              </span>
              <span className="block mt-2">Live the Lifestyle.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              VYRA helps creative individuals monetize their content and build sustainable income streams while connecting deeply with their audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link to="/apply">
                <Button size="lg" className="font-bold shadow-xl after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_30px_#9b87f5,0_0_15px_#7E69AB] after:-z-10 after:opacity-10 relative">
                  APPLY TO JOIN <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="font-bold border-primary/40 hover:border-accent-foreground/70">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
          {/* Hero accent image */}
          <div className="flex-1 flex justify-center animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=520&q=80"
              alt="Professional creative lifestyle"
              className="rounded-2xl shadow-2xl border-4 border-white/10 w-[330px] max-w-full object-cover"
              style={{ boxShadow: "0px 16px 64px 0px #9b87f524, 0 1.5px 12px 0 #1A1F2C1b" }}
              loading="eager" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How VYRA Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide full-service support and innovative tools to help creators thrive across platforms and grow their digital careers.
          </p>
        </div>
        {/* Premium cards grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature Card 1 */}
            <div className="relative group transition-transform duration-300 hover:scale-[1.035]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e5deff]/60 via-white/50 to-[#D6BCFA]/10 blur-xl opacity-70 -z-10"></div>
              <div className="relative z-10 rounded-3xl bg-white/80 dark:bg-card/90 backdrop-blur-xl shadow-2xl border border-border ring-1 ring-primary/20 px-7 py-8 flex flex-col items-center transition-all duration-200 group-hover:shadow-[0_12px_50px_0px_#9b87f526] group-hover:border-primary/40 card-glow">
                <img src={featureImages[0]} alt="Fan Engagement" className="w-20 h-20 object-cover rounded-xl mb-2 shadow-lg border border-white/50"/>
                <div className="bg-primary/10 p-3 rounded-lg mb-5 shadow-inner group-hover:bg-primary/20 transition-colors duration-200">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-150">Daily Chatting & Fan Engagement</h3>
                <p className="text-muted-foreground mb-3 text-base text-center">
                  Build authentic relationships with your fans through our optimized messaging strategies that drive retention and boost revenue.
                </p>
                <Link to="/services" className="mt-auto text-primary text-sm font-medium inline-flex items-center hover:underline transition-all">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className="relative group transition-transform duration-300 hover:scale-[1.035]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e5deff]/60 via-white/50 to-[#D6BCFA]/10 blur-xl opacity-70 -z-10"></div>
              <div className="relative z-10 rounded-3xl bg-white/80 dark:bg-card/90 backdrop-blur-xl shadow-2xl border border-border ring-1 ring-primary/20 px-7 py-8 flex flex-col items-center transition-all duration-200 group-hover:shadow-[0_12px_50px_0px_#9b87f526] group-hover:border-primary/40 card-glow">
                <img src={featureImages[1]} alt="Revenue Optimization" className="w-20 h-20 object-cover rounded-xl mb-2 shadow-lg border border-white/50"/>
                <div className="bg-primary/10 p-3 rounded-lg mb-5 shadow-inner group-hover:bg-primary/20 transition-colors duration-200">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-150">Revenue Optimization</h3>
                <p className="text-muted-foreground mb-3 text-base text-center">
                  Maximize your income through advanced pricing models, upsells, and premium content strategies.
                </p>
                <Link to="/services" className="mt-auto text-primary text-sm font-medium inline-flex items-center hover:underline transition-all">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className="relative group transition-transform duration-300 hover:scale-[1.035]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e5deff]/60 via-white/50 to-[#D6BCFA]/10 blur-xl opacity-70 -z-10"></div>
              <div className="relative z-10 rounded-3xl bg-white/80 dark:bg-card/90 backdrop-blur-xl shadow-2xl border border-border ring-1 ring-primary/20 px-7 py-8 flex flex-col items-center transition-all duration-200 group-hover:shadow-[0_12px_50px_0px_#9b87f526] group-hover:border-primary/40 card-glow">
                <img src={featureImages[2]} alt="Community Growth" className="w-20 h-20 object-cover rounded-xl mb-2 shadow-lg border border-white/50"/>
                <div className="bg-primary/10 p-3 rounded-lg mb-5 shadow-inner group-hover:bg-primary/20 transition-colors duration-200">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-150">Community Growth</h3>
                <p className="text-muted-foreground mb-3 text-base text-center">
                  Tap into our network and growth systems to rapidly expand your following and visibility.
                </p>
                <Link to="/services" className="mt-auto text-primary text-sm font-medium inline-flex items-center hover:underline transition-all">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose VYRA?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our curated community of ambitious creators and gain access to premium support, tools, and results-driven strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col space-y-6">
              <div className="group flex items-start transition-all duration-200 hover:scale-105 animate-fade-in">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg">
                    <Check className="h-6 w-6 text-primary" />
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
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg">
                    <Check className="h-6 w-6 text-primary" />
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
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg">
                    <Check className="h-6 w-6 text-primary" />
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
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg">
                    <Check className="h-6 w-6 text-primary" />
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
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg">
                    <Check className="h-6 w-6 text-primary" />
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
                  <div className="bg-primary/10 p-3 rounded-full shadow-lg">
                    <Check className="h-6 w-6 text-primary" />
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
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent-foreground text-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Creator Journey?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join VYRA and unlock your full earning potential with a strategy built for creators, by creators.
            </p>
            <Link to="/apply">
              <Button size="lg" variant="secondary" className="text-primary font-medium shadow-xl relative after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_36px_#fff7,0_0_15px_#7E69AB] after:-z-10 after:opacity-20">
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

