
import { MessageSquare, Users, Shield, Calendar, BarChart, Heart, Search, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceData = [
  {
    icon: <MessageSquare className="h-7 w-7 text-primary" />,
    title: "Daily Chatting & Fan Engagement",
    description: "Foster deep, lasting connections with your audience through expertly crafted messaging strategies that boost loyalty and maximize revenue.",
    features: [
      "Personalized conversation templates",
      "Fan retention workflows",
      "Scheduled engagement system",
      "Response optimization tools",
    ],
    animation: "animate-fade-in"
  },
  {
    icon: <BarChart className="h-7 w-7 text-primary" />,
    title: "Revenue Optimization",
    description: "Unlock your full earning potential with proven pricing models and premium upselling techniques.",
    features: [
      "Tiered pricing strategies",
      "Exclusive content monetization",
      "High-converting upsell systems",
      "Real-time revenue insights",
    ],
    animation: "animate-fade-in"
  },
  {
    icon: <Users className="h-7 w-7 text-primary" />,
    title: "Community Growth",
    description: "Accelerate your fanbase growth through strategic promotion and multi-platform expansion.",
    features: [
      "Targeted growth blueprints",
      "Strategic cross-promotion",
      "Niche audience building",
      "Fanbase analytics & segmentation",
    ],
    animation: "animate-fade-in"
  },
  {
    icon: <Zap className="h-7 w-7 text-primary" />,
    title: "Content Strategy",
    description: "Create high-performing content consistently with our data-backed planning and trend forecasting.",
    features: [
      "Personalized content calendar",
      "Trend scouting & forecasting",
      "Creative optimization techniques",
      "A/B testing frameworks",
    ],
    animation: "animate-fade-in"
  },
  {
    icon: <BarChart className="h-7 w-7 text-primary" />,
    title: "Analytics & Insights",
    description: "Leverage smart data to refine your performance, scale what works, and eliminate what doesn’t.",
    features: [
      "Performance dashboards",
      "Audience behavior insights",
      "Revenue breakdowns",
      "Competitor benchmarking",
    ],
    animation: "animate-fade-in"
  },
  {
    icon: <Calendar className="h-7 w-7 text-primary" />,
    title: "Content Scheduling",
    description: "Maintain a consistent posting rhythm without lifting a finger.",
    features: [
      "Automated publishing",
      "Timing optimization",
      "Cross-platform syncing",
      "Batch content preparation",
    ],
    animation: "animate-fade-in"
  },
  {
    icon: <Search className="h-7 w-7 text-primary" />,
    title: "Discoverability Enhancement",
    description: "Boost your visibility with platform-optimized tactics that put your profile in front of the right people.",
    features: [
      "Algorithm-based optimization",
      "Keyword & hashtag strategies",
      "Platform-specific audits",
      "Trend adaptation systems",
    ],
    animation: "animate-fade-in"
  },
  {
    icon: <Shield className="h-7 w-7 text-primary" />,
    title: "Brand Protection",
    description: "Protect your identity, content, and reputation with proactive digital security systems.",
    features: [
      "Content protection & watermarking",
      "Brand monitoring tools",
      "Anti-piracy enforcement",
      "Reputation/crisis management",
    ],
    animation: "animate-fade-in"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Application & Assessment",
    description: "We review your profile to understand your goals, audience, and pain points — and map out a clear path forward."
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "You’ll get a custom growth strategy built around your niche, style, and revenue targets."
  },
  {
    step: 3,
    title: "Full Implementation",
    description: "We execute the plan alongside you, managing every moving part with ongoing support."
  },
  {
    step: 4,
    title: "Performance Optimization",
    description: "We monitor, adapt, and scale — ensuring your income and audience keep growing."
  },
];

const faqs = [
  {
    question: "When will I start seeing results?",
    answer: "Most creators experience noticeable improvements within 4–6 weeks, with more significant growth typically occurring by month 3."
  },
  {
    question: "What platforms do you support?",
    answer: "We work across OnlyFans, Instagram, TikTok, Twitter/X, YouTube, Patreon, and more — with tailored strategies for each."
  },
  {
    question: "Do I need a large following to join?",
    answer: "Nope. We work with emerging and established creators alike. What matters most is your content quality and drive to grow."
  },
  {
    question: "How much time do I need to invest?",
    answer: "We recommend 15–20 hours a week. We streamline the backend, so you can focus more on creating, less on managing."
  },
];

const Services = () => {
  return (
    <Layout>
      {/* HERO + image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-secondary to-black pt-20 pb-20 md:pt-28 md:pb-32">
        {/* Decorative blurred pink blob */}
        <div className="absolute -top-20 left-10 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl z-0 animate-pulse"></div>
        <div className="absolute -bottom-16 right-0 w-[350px] h-[180px] bg-pink-600/40 rounded-full blur-3xl z-0 animate-fade-in"></div>
        {/* Main */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight slide-in">
              <span className="text-gradient">Our Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
              Comprehensive, high-impact solutions built to grow your audience, increase revenue, and scale your creator business — effortlessly.
            </p>
            <Link to="/apply">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Apply Now
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Professional hero image illustration: using placeholder for now */}
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80"
              alt="Professional creators strategy"
              className="rounded-2xl shadow-2xl w-[350px] h-[350px] object-cover animate-fade-in"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/20 pointer-events-none"></div>
      </section>

      {/* Services Feature Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceData.map((service, index) => (
              <div 
                key={index} 
                className={`bg-card p-7 rounded-2xl border border-pink-600/30 shadow-md flex flex-col h-full hover:shadow-xl transform hover:-translate-y-1 transition duration-300 slide-in ${service.animation}`}
                style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
              >
                <div className="bg-primary/15 p-4 rounded-full inline-flex mb-5 animate-fade-in">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <h4 className="font-semibold text-pink-400 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Heart className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0 animate-pulse" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient slide-in">Our Process</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line connector for desktop */}
            <div className="hidden md:block absolute top-0 left-1/2 -ml-1 w-0.5 h-full bg-pink-600/30"></div>
            <div className="space-y-16">
              {processSteps.map((step, idx) => (
                <div 
                  key={step.step}
                  className={`flex flex-col md:flex-row items-start relative animate-fade-in`}
                  style={{ animationDelay: `${idx * 0.17}s` }}
                >
                  <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 mb-5 md:mb-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="md:hidden ml-4 text-xl font-semibold">{step.title}</div>
                  </div>
                  <div className="pl-14 md:pl-0 md:w-1/2 md:pl-8">
                    <div className="hidden md:block text-xl font-semibold mb-2">{step.title}</div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient slide-in">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-7">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-pink-700/30 shadow-sm animate-fade-in" style={{ animationDelay: `${idx * 0.10}s` }}>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Build the Brand You Deserve?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in">
              Apply now to join VYRA and start scaling your creator business with a dedicated team behind you.
            </p>
            <Link to="/apply">
              <Button size="lg" variant="secondary" className="text-primary font-medium hover:scale-110 transition-transform animate-fade-in">
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
