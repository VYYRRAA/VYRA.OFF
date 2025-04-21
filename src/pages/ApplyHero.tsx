
const ApplyHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary pt-20 pb-20 md:pt-28 md:pb-28">
    <div className="absolute inset-0 bg-grid-white/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/20"></div>
    <div className="container mx-auto px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="inline">Apply to Join </span>
          <span className="inline bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">VYRA</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Take the first step toward transforming your creator career by applying to join our exclusive community.
        </p>
      </div>
    </div>
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3/4 h-40 bg-gradient-to-r from-primary/20 to-accent-foreground/20 blur-3xl rounded-full"></div>
  </section>
);

export default ApplyHero;
