interface PillarProps {
  title: string;
  description: string;
};

export default function ValuePillars({ pillars }: { pillars: PillarProps[] }) {
  const iconClasses = [
    { outer: 'bg-tricolor-blue/10', inner: 'bg-tricolor-blue' },
    { outer: 'bg-carpathian-forest/10', inner: 'bg-carpathian-forest' },
    { outer: 'bg-tricolor-red/10', inner: 'bg-tricolor-red' },
    { outer: 'bg-tricolor-yellow/20', inner: 'bg-tricolor-yellow border border-tricolor-yellow/30' },
  ];

  return (
    <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
      {pillars.map((p, i) => {
        const cls = iconClasses[i % iconClasses.length];
        return (
          <div
            key={p.title}
            className="text-center p-4 sm:p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-danube-mist hover:bg-white/70 active:bg-white/80 transition-all duration-300 touch-manipulation"
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 ${cls.outer} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
              <div className={`w-5 h-5 sm:w-6 sm:h-6 ${cls.inner} rounded-full`}></div>
            </div>
            <h3 className="font-semibold text-transylvanian-stone text-sm sm:text-base">{p.title}</h3>
            <p className="text-xs sm:text-sm text-transylvanian-stone/60 mt-1 leading-relaxed">{p.description}</p>
          </div>
        );
      })}
    </div>
  );
};
