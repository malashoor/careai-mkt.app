export default function Testimonial({ dict }: { dict: any }) {

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 p-8 md:p-12 ring-1 ring-brand-border">
          <blockquote className="text-xl md:text-2xl leading-relaxed text-brand-fg">
            {dict.testimonial.quote || "Fallback"}
          </blockquote>
          <div className="mt-6 text-sm text-brand-muted">
            {dict.testimonial.attribution || "Fallback"}
          </div>
        </div>
      </div>
    </section>
  );
}
