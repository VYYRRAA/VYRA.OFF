
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  const stories = [
    {
      name: "Jamie Davis",
      role: "Content Creator",
      initials: "JD",
      quote: "Joining VYRA was the best decision for my creator career. Within three months, I doubled my followers and increased my revenue by 320%. The team's support and strategies have been invaluable.",
      stats: [
        { label: "Revenue Growth", value: "320%" },
        { label: "Follower Growth", value: "2x" },
        { label: "Engagement Rate", value: "30%" }
      ]
    },
    {
      name: "Sophia Williams",
      role: "Lifestyle Influencer",
      initials: "SW",
      quote: "VYRA helped me transform my hobby into a full-time career. Their strategies for audience engagement and content optimization completely changed my approach and results.",
      stats: [
        { label: "Monthly Income", value: "5x" },
        { label: "Subscriber Growth", value: "245%" },
        { label: "Brand Partnerships", value: "12+" }
      ]
    },
    {
      name: "Michael Torres",
      role: "Fitness Creator",
      initials: "MT",
      quote: "The personalized support and revenue strategies from VYRA allowed me to quit my day job in just 5 months. Now I'm earning more than ever while having complete creative freedom.",
      stats: [
        { label: "Audience Growth", value: "400%" },
        { label: "Average Order Value", value: "+87%" },
        { label: "Content Engagement", value: "42%" }
      ]
    },
    {
      name: "Emily Chen",
      role: "Digital Artist",
      initials: "EC",
      quote: "As a creator in a niche market, I struggled to find my audience. VYRA's targeted growth strategies helped me connect with the right people and build a sustainable income stream.",
      stats: [
        { label: "Conversion Rate", value: "18%" },
        { label: "Community Growth", value: "3.5x" },
        { label: "Monthly Retention", value: "92%" }
      ]
    },
    {
      name: "Daniel Johnson",
      role: "Educational Content Creator",
      initials: "DJ",
      quote: "The analytics and insights provided by VYRA gave me a clear understanding of what my audience wanted. This data-driven approach has completely transformed my content strategy.",
      stats: [
        { label: "Earnings Increase", value: "260%" },
        { label: "Watch Time", value: "4.2x" },
        { label: "Channel Growth", value: "185%" }
      ]
    },
    {
      name: "Aisha Patel",
      role: "Fashion & Beauty Creator",
      initials: "AP",
      quote: "VYRA's team understood exactly what my brand needed. Their personalized approach and constant support have been crucial to my success in the competitive fashion niche.",
      stats: [
        { label: "Brand Deals", value: "10+" },
        { label: "Audience Growth", value: "280%" },
        { label: "Engagement Rate", value: "25%" }
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
              <span className="inline">Success </span>
              <span className="inline bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how creators like you have transformed their digital presence and income with VYRA.
            </p>
          </div>
        </div>
        
        {/* Creative visual element */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-primary/20 to-accent-foreground/20 blur-3xl rounded-full"></div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border">
                <div className="mb-6">
                  <div className="text-4xl text-primary mb-2">"</div>
                  <blockquote className="text-lg italic mb-6">
                    {story.quote}
                  </blockquote>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-medium">
                    {story.initials}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {story.stats.map((stat, idx) => (
                    <div key={idx} className="bg-secondary p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Featured Creator Story</h2>
          
          <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-xl border border-border">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-4xl font-medium text-primary">JD</span>
                </div>
                
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-lg">Jamie Davis</h3>
                  <p className="text-muted-foreground">Content Creator</p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">From Part-Time to Six Figures</h3>
                
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p>
                    When I joined VYRA, I was juggling a full-time job with my passion for content creation. I had around 10,000 followers but struggled to monetize effectively.
                  </p>
                  
                  <p>
                    Within my first month working with the VYRA team, they identified several key opportunities I was missing. They completely restructured my content strategy and introduced me to monetization techniques I had never considered.
                  </p>
                  
                  <p>
                    The results were immediate and dramatic. My engagement rate tripled within weeks, and my revenue began to grow steadily. By month three, I was earning more from my creator business than from my day job.
                  </p>
                  
                  <p>
                    Six months in, I took the leap to become a full-time creator. Now, a year later, I've built a six-figure business with multiple revenue streams and a thriving, engaged community.
                  </p>
                  
                  <p>
                    The ongoing support from VYRA has been invaluable—they're always ahead of platform changes and industry trends, ensuring my business continues to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The VYRA Difference</h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our creators consistently outperform industry benchmarks across key metrics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <p className="text-4xl font-bold text-primary mb-2">280%</p>
              <p className="text-muted-foreground">Average Revenue Growth in First 6 Months</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <p className="text-4xl font-bold text-primary mb-2">3.5x</p>
              <p className="text-muted-foreground">Typical Audience Growth Rate</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <p className="text-4xl font-bold text-primary mb-2">90%</p>
              <p className="text-muted-foreground">Creator Retention Rate</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <p className="text-4xl font-bold text-primary mb-2">25%+</p>
              <p className="text-muted-foreground">Average Engagement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join our community of thriving creators and transform your digital presence.
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

export default SuccessStories;
