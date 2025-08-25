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
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {pillars.map((p, i) => {
        const cls = iconClasses[i % iconClasses.length];
        return (
          <div
            key={p.title}
            className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-danube-mist hover:bg-white/70 transition-all duration-300"
          >
            <div className={`w-12 h-12 ${cls.outer} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <div className={`w-6 h-6 ${cls.inner} rounded-full`}></div>
            </div>
            <h3 className="font-semibold text-transylvanian-stone">{p.title}</h3>
            <p className="text-sm text-transylvanian-stone/60 mt-1">{p.description}</p>
          </div>
        );
      })}
    </div>
  );
};
