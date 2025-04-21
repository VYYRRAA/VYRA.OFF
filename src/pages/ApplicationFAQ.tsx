
export default function ApplicationFAQ() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Application FAQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold mb-2">How long is the application process?</h3>
            <p className="text-muted-foreground">
              After submission, our team typically reviews applications within 3-5 business days. If approved, you'll receive an onboarding email with next steps.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold mb-2">What are the minimum requirements?</h3>
            <p className="text-muted-foreground">
              While we consider creators at various stages, we typically look for consistent content production, engagement with your audience, and a clear niche or direction.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold mb-2">Is there a fee to apply or join?</h3>
            <p className="text-muted-foreground">
              There's no fee to apply. If accepted, we'll discuss our partnership structure during onboarding, which is designed to align with your success.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold mb-2">What happens after I'm accepted?</h3>
            <p className="text-muted-foreground">
              Our team will schedule an onboarding call to discuss your goals, create a customized strategy, and introduce you to our community and resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
