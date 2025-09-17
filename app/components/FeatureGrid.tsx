import Image from 'next/image';

export default function FeatureGrid({ dict }: { dict: any }) {

  return (
    <section id="features" className="py-16 lg:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Care Plans & Tasks */}
          <article className="flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-card dark:shadow-cardDark hover:shadow-lg dark:hover:shadow-xl transition-shadow p-4 md:p-5 min-h-[420px]">
            <figure className="w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 mb-4">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/family_care.png"
                  alt={dict.features.carePlans.title || "Fallback"}
                  fill
                  className="object-cover dark:brightness-95 dark:contrast-100"
                  loading="lazy"
                />
              </div>
            </figure>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold leading-tight text-slate-700 dark:text-slate-200">
                {dict.features.carePlans.title || "Fallback"}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {dict.features.carePlans.description || "Fallback"}
              </p>
              <div className="mt-auto" />
            </div>
          </article>
          
          {/* Predictive Insights */}
          <article className="flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-card dark:shadow-cardDark hover:shadow-lg dark:hover:shadow-xl transition-shadow p-4 md:p-5 min-h-[420px]">
            <figure className="w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 mb-4">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/images/elderly_couple.png"
                  alt={dict.features.predictiveInsights.title || "Fallback"}
                  fill
                  className="object-cover dark:brightness-95 dark:contrast-100"
                  loading="lazy"
                />
              </div>
            </figure>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold leading-tight text-slate-700 dark:text-slate-200">
                {dict.features.predictiveInsights.title || "Fallback"}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {dict.features.predictiveInsights.description || "Fallback"}
              </p>
              <div className="mt-auto" />
            </div>
          </article>
          
          {/* AI Assistance */}
          <article className="flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-card dark:shadow-cardDark hover:shadow-lg dark:hover:shadow-xl transition-shadow p-4 md:p-5 min-h-[420px]">
            <figure className="w-full overflow-hidden rounded-2xl bg-blue-50 dark:bg-blue-900/20 mb-4">
              <div className="aspect-[4/3] w-full p-3 relative">
                <Image
                  src="/images/AL_Assistance.png"
                  alt={dict.features.aiAssistance.title || "Fallback"}
                  fill
                  className="object-contain dark:brightness-95 dark:contrast-100"
                  loading="lazy"
                />
              </div>
            </figure>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold leading-tight text-slate-700 dark:text-slate-200">
                {dict.features.aiAssistance.title || "Fallback"}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {dict.features.aiAssistance.description || "Fallback"}
              </p>
              <div className="mt-auto" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
