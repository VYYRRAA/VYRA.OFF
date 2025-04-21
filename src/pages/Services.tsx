
import { MessageSquare, Users, Wallet, Zap, BarChart, Calendar, Search, Heart, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Daily Chatting & Fan Engagement",
      description: "Build authentic connections with your audience through personalized messaging strategies that increase loyalty and drive revenue.",
      features: [
        "Customized messaging templates",
        "Engagement scheduling tools",
        "Response optimization",
        "Audience retention strategies"
      ]
    },
    {
      icon: <Wallet className="h-6 w-6 text-primary" />,
      title: "Revenue Optimization",
      description: "Maximize your earning potential with data-driven pricing strategies and exclusive monetization techniques.",
      features: [
        "Tiered pricing strategy",
        "Premium content planning",
        "Upselling opportunities",
        "Revenue analytics dashboard"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Community Growth",
      description: "Expand your audience with strategic promotional campaigns and cross-platform visibility tactics.",
      features: [
        "Targeted growth strategies",
        "Cross-promotion opportunities",
        "Community building tools",
        "Audience analytics"
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Content Strategy",
      description: "Develop high-performing content plans that resonate with your audience and drive consistent engagement.",
      features: [
        "Content calendar planning",
        "Trend analysis and forecasting",
        "Performance optimization",
        "A/B testing frameworks"
      ]
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Analytics & Insights",
      description: "Make data-driven decisions with comprehensive analytics that reveal what's working and where to improve.",
      features: [
        "Performance dashboards",
        "Audience behavior insights",
        "Revenue tracking",
        "Competitive analysis"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Content Scheduling",
      description: "Plan and automate your content delivery for maximum impact and consistency.",
      features: [
        "Automated publishing",
        "Optimal timing analysis",
        "Cross-platform coordination",
        "Content batch preparation"
      ]
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Discoverability Enhancement",
      description: "Improve your visibility across platforms with optimization techniques that put you in front of new audiences.",
      features: [
        "Keyword optimization",
        "Algorithm trend adaptation",
        "Discoverability audits",
        "Platform-specific strategies"
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Brand Protection",
      description: "Safeguard your digital presence and intellectual property with proactive monitoring and protection strategies.",
      features: [
        "Content protection tools",
        "Brand monitoring",
        "Anti-piracy measures",
        "Crisis management planning"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="absolute inset-0 bg-grid-white/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="inline">Our </span>
              <span className="inline bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive solutions designed to help you grow your audience, increase revenue, and build a sustainable creator business.
            </p>
          </div>
        </div>
        
        {/* Creative visual element */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-primary/20 to-accent-foreground/20 blur-3xl rounded-full"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-xl border border-border flex flex-col transition-all hover:shadow-md"
              >
                <div className="bg-primary/10 p-3 rounded-lg inline-flex mb-5">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <h4 className="font-medium mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Heart className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Process</h2>
            
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute top-0 left-[21px] bottom-0 w-[2px] bg-border md:left-1/2 md:-ml-[1px]"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start mb-12 relative">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-lg z-10">1</div>
                  <div className="md:hidden ml-4 text-xl font-semibold">Application & Assessment</div>
                </div>
                <div className="pl-14 md:pl-0 md:w-1/2 md:pl-8">
                  <div className="hidden md:block text-xl font-semibold mb-3">Application & Assessment</div>
                  <p className="text-muted-foreground">
                    We review your application to understand your goals, audience, and current challenges, then develop a tailored strategy for your growth.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start mb-12 relative">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-lg z-10">2</div>
                  <div className="md:hidden ml-4 text-xl font-semibold">Strategy Development</div>
                </div>
                <div className="pl-14 md:pl-0 md:w-1/2 md:pl-8">
                  <div className="hidden md:block text-xl font-semibold mb-3">Strategy Development</div>
                  <p className="text-muted-foreground">
                    Our team creates a customized action plan focused on your specific niche, platform requirements, and revenue goals.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start mb-12 relative">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-lg z-10">3</div>
                  <div className="md:hidden ml-4 text-xl font-semibold">Implementation</div>
                </div>
                <div className="pl-14 md:pl-0 md:w-1/2 md:pl-8">
                  <div className="hidden md:block text-xl font-semibold mb-3">Implementation</div>
                  <p className="text-muted-foreground">
                    We work together to put your strategy into action with consistent support and guidance from our expert team.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start relative">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-lg z-10">4</div>
                  <div className="md:hidden ml-4 text-xl font-semibold">Ongoing Optimization</div>
                </div>
                <div className="pl-14 md:pl-0 md:w-1/2 md:pl-8">
                  <div className="hidden md:block text-xl font-semibold mb-3">Ongoing Optimization</div>
                  <p className="text-muted-foreground">
                    We continuously analyze your performance data, making adjustments to maximize growth and revenue over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2">How long until I see results?</h3>
              <p className="text-muted-foreground">
                Most creators begin seeing measurable improvements in engagement and revenue within the first 4-6 weeks of implementing our strategies, with significant growth typically occurring within 3 months.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2">What platforms do you support?</h3>
              <p className="text-muted-foreground">
                We work with creators across all major platforms including Instagram, TikTok, YouTube, OnlyFans, Patreon, and more. Our strategies are customized to optimize for each platform's specific algorithms and audience behaviors.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2">Do I need a large following to join?</h3>
              <p className="text-muted-foreground">
                No. We work with creators at various stages of their journey. While we have minimum requirements, we're more interested in your commitment, content quality, and growth potential than your current follower count.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2">How much time will I need to commit?</h3>
              <p className="text-muted-foreground">
                Successful creators typically dedicate at least 15-20 hours weekly to content creation and audience engagement. Our tools and strategies help make this time more efficient and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Creator Career?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Apply today to join our community of successful creators and start maximizing your potential.
            </p>
            <Link to="/apply">
              <Button size="lg" variant="secondary" className="text-primary font-medium">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
