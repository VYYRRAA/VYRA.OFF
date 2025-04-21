
import { Users, Star, Lightbulb, Handshake } from "lucide-react";
import Layout from "@/components/layout/Layout";

/*
  Helper component for an animated left-to-right gradient border
*/
const AnimatedGradientBorder = ({ children }: { children: React.ReactNode }) => (
  <div className="relative p-1 rounded-3xl mb-8 overflow-hidden">
    <div className="absolute inset-0 animate-[borderGlow_4s_linear_infinite] bg-gradient-to-r from-pink-500 via-fuchsia-500/60 to-pink-400 opacity-60 blur-lg" />
    <div className="relative rounded-3xl bg-black/90 p-8 md:p-12 shadow-2xl">{children}</div>
  </div>
);

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black to-pink-900 pt-20 pb-20 md:pt-28 md:pb-28 slide-in">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.3))] dark:bg-grid-black/20" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-32 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-pink-300/30 blur-2xl pulse z-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gradient animate-fade-in-down">
              About <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">VYRA</span>
            </h1>
            <p className="text-lg md:text-xl text-pink-100 mb-8 fade-in animate-fade-in-up transition-all duration-700 max-w-2xl mx-auto">
              Empowering digital creators to build sustainable, profitable careers through innovation, strategy, and community.
            </p>
          </div>
        </div>
        {/* Animated visual element */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-pink-500/30 to-fuchsia-500/30 blur-3xl rounded-full z-0 animate-fade-in" />
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black text-white transition-colors fade-in">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-5/6 mx-auto fade-in space-y-6 animate-fade-in-up">
            <AnimatedGradientBorder>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-pink-400 animate-gradient-text from-pink-400 to-fuchsia-400">
                Our Story
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-white animate-fade-in-up space-y-4">
                <p>
                  VYRA was launched in 2024 with one mission: to help creators turn their passion into lasting, lucrative careers.
                  What began as a small, driven collective of marketing professionals and creators has since evolved into a global ecosystem supporting talent across all major platforms.
                </p>
                <p>
                  Our founder, Akhil M, built VYRA after navigating the challenges of content creation firsthand. Despite growing an engaged audience, he found monetization elusive and the support system lacking.
                  Determined to change that, he brought together experts in growth strategy, platform dynamics, and digital marketing to form a full-service support system for creators.
                </p>
                <p>
                  Today, VYRA supports hundreds of creators worldwide — helping them grow their brands, scale their income, and reclaim their time through strategic, hands-on partnership.
                </p>
                <blockquote className="border-l-4 border-pink-500 pl-4 italic my-6 animate-fade-in-up">
                  "We believe creators deserve more. More support. More strategy. More control over their careers — and the freedom to focus on doing what they love."
                  <footer className="mt-2 not-italic text-pink-300 font-bold">— Akhil M, Founder & CEO</footer>
                </blockquote>
              </div>
            </AnimatedGradientBorder>
          </div>
          {/* Founder image block has been removed */}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-black to-fuchsia-800/80 text-white fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-400 animate-fade-in-down">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-black/60 p-6 rounded-xl border border-pink-500/30 glass-morphism hover-scale shadow-2xl transition-shadow animate-fade-in-up hover:shadow-pink-500/20 hover:scale-105">
                <div className="mb-3 flex items-center gap-2">
                  <Users className="h-6 w-6 text-pink-400 animate-bounceOnce" />
                  <span className="font-bold text-lg">Empower Creators</span>
                </div>
                <p className="text-pink-100">
                  We equip creators with tools, strategies, and expert support to take full control of their digital careers.
                </p>
              </div>
              <div className="bg-black/60 p-6 rounded-xl border border-pink-500/30 glass-morphism hover-scale shadow-2xl transition-shadow animate-fade-in-up delay-150 hover:shadow-fuchsia-600/30 hover:scale-105">
                <div className="mb-3 flex items-center gap-2">
                  <Handshake className="h-6 w-6 text-pink-400 animate-pulse" />
                  <span className="font-bold text-lg">Foster Community</span>
                </div>
                <p className="text-pink-100">
                  We believe growth happens faster together — so we create spaces for creators to connect, share, and collaborate.
                </p>
              </div>
              <div className="bg-black/60 p-6 rounded-xl border border-pink-500/30 glass-morphism hover-scale shadow-2xl transition-shadow animate-fade-in-up delay-300 hover:shadow-pink-600/20 hover:scale-105">
                <div className="mb-3 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-pink-400 animate-fade-in-down" />
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
      <section className="py-20 bg-black text-white fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-pink-400 animate-fade-in-down">
            Our Values
          </h2>
          <p className="text-lg text-center text-pink-100 mb-12 max-w-2xl mx-auto animate-fade-in-up">
            These core values guide our work and our community every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="flex items-start fade-in animate-fade-in-up">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-pink-500/20 p-3 rounded-full animate-pulse">
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
            <div className="flex items-start fade-in animate-fade-in-up delay-100">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-pink-500/20 p-3 rounded-full animate-bounceOnce">
                  <Lightbulb className="h-6 w-6 text-pink-400" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-pink-200">Innovation</h3>
                <p className="text-pink-100">
                  We embrace change, test new ideas, and adapt quickly in an ever-evolving industry.
                </p>
              </div>
            </div>
            <div className="flex items-start fade-in animate-fade-in-up delay-150">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-pink-500/20 p-3 rounded-full animate-fade-in-down">
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
            <div className="flex items-start fade-in animate-fade-in-up delay-200">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-pink-500/20 p-3 rounded-full animate-pulse">
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

      {/* Animations keyframes for About page */}
      <style>
        {`
        @keyframes borderGlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-text {
          background: linear-gradient(90deg, #ed64a6, #a78bfa, #ed64a6 90%);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-text 5s ease-in-out infinite alternate;
        }
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s;
        }
        @keyframes fadeInDown {
          from { opacity:0; transform:translateY(-30px);}
          to { opacity:1; transform:translateY(0);}
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s;
        }
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(40px);}
          to { opacity:1; transform:translateY(0);}
        }
        .animate-bounceOnce {
          animation: bounceOnce 1.0s cubic-bezier(0.5,1.8,0.3,1) 0s 1;
        }
        @keyframes bounceOnce {
          0% { transform: scale(1);}
          30% { transform: scale(1.3);}
          55% { transform: scale(.88);}
          70% { transform: scale(1.05);}
          100% { transform: scale(1);}
        }
        `}
      </style>
    </Layout>
  );
};

export default About;
