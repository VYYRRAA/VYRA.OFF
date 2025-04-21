
import { Users, Star, Bulb, Handshake } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black to-pink-900 pt-20 pb-20 md:pt-28 md:pb-28 slide-in">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))] dark:bg-grid-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
              About <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">VYRA</span>
            </h1>
            <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-2xl mx-auto fade-in">
              Empowering digital creators to build sustainable, profitable careers through innovation, strategy, and community.
            </p>
          </div>
        </div>
        {/* Pink creative visual element */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-pink-500/30 to-fuchsia-500/30 blur-3xl rounded-full"></div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-white">
              <p>
                VYRA was launched in 2024 with one mission: to help creators turn their passion into lasting, lucrative careers. What began as a small, driven collective of marketing professionals and creators has since evolved into a global ecosystem supporting talent across all major platforms.
              </p>
              <p>
                Our founder, Akhil M, built VYRA after navigating the challenges of content creation firsthand. Despite growing an engaged audience, he found monetization elusive and the support system lacking. Determined to change that, he brought together experts in growth strategy, platform dynamics, and digital marketing to form a full-service support system for creators.
              </p>
              <p>
                Today, VYRA supports hundreds of creators worldwide — helping them grow their brands, scale their income, and reclaim their time through strategic, hands-on partnership.
              </p>
              <blockquote className="border-l-4 border-pink-500 pl-4 italic my-6">
                "We believe creators deserve more. More support. More strategy. More control over their careers — and the freedom to focus on doing what they love."
                <footer className="mt-2 not-italic text-pink-300 font-bold">— Akhil M, Founder & CEO</footer>
              </blockquote>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center fade-in">
            <img
              src="/vyra-founder.jpg"
              alt="Akhil M, Founder"
              className="w-64 h-64 rounded-2xl object-cover shadow-lg border-4 border-pink-500 animate-[fadeIn_1.2s_ease]"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-black to-fuchsia-800/80 text-white fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-400">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-black/50 p-6 rounded-xl border border-pink-500/30 glass-morphism hover-scale shadow-2xl transition-shadow">
                <div className="mb-3 flex items-center gap-2">
                  <Users className="h-6 w-6 text-pink-400" />
                  <span className="font-bold text-lg">Empower Creators</span>
                </div>
                <p className="text-pink-100">
                  We equip creators with tools, strategies, and expert support to take full control of their digital careers.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-pink-500/30 glass-morphism hover-scale shadow-2xl transition-shadow">
                <div className="mb-3 flex items-center gap-2">
                  <Handshake className="h-6 w-6 text-pink-400" />
                  <span className="font-bold text-lg">Foster Community</span>
                </div>
                <p className="text-pink-100">
                  We believe growth happens faster together — so we create spaces for creators to connect, share, and collaborate.
                </p>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-pink-500/30 glass-morphism hover-scale shadow-2xl transition-shadow">
                <div className="mb-3 flex items-center gap-2">
                  <Bulb className="h-6 w-6 text-pink-400" />
                  <span className="font-bold text-lg">Drive Innovation</span>
                </div>
                <p className="text-pink-100">
                  We stay ahead of trends and platform changes to ensure our creators are always a step ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-pink-400">Our Values</h2>
          <p className="text-lg text-center text-pink-100 mb-12 max-w-2xl mx-auto">
            These core values guide our work and our community every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="flex items-start fade-in">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-pink-500/20 p-3 rounded-full">
                  <Star className="h-6 w-6 text-pink-400" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-pink-200">Authenticity</h3>
                <p className="text-pink-100">
                  We prioritize real connections and transparent communication in all our partnerships.
                </p>
              </div>
            </div>
            <div className="flex items-start fade-in">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-pink-500/20 p-3 rounded-full">
                  <Bulb className="h-6 w-6 text-pink-400" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-pink-200">Innovation</h3>
                <p className="text-pink-100">
                  We embrace change, test new ideas, and adapt quickly in an ever-evolving industry.
                </p>
              </div>
            </div>
            <div className="flex items-start fade-in">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-pink-500/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-pink-400" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-pink-200">Inclusivity</h3>
                <p className="text-pink-100">
                  We welcome creators from every background, identity, and niche.
                </p>
              </div>
            </div>
            <div className="flex items-start fade-in">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-pink-500/20 p-3 rounded-full">
                  <Star className="h-6 w-6 text-pink-400" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-pink-200">Growth-Focused</h3>
                <p className="text-pink-100">
                  We succeed when our creators succeed. Everything we do is designed to drive sustainable growth.
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

