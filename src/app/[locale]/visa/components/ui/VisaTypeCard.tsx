interface VisaTypeCardProps {
  type: string;
  duration: string;
  purpose: string;
  color: "tricolor-blue" | "tricolor-red" | "carpathian-forest";
}

export default function VisaTypeCard({ type, duration, purpose, color }: VisaTypeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${color}/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
        <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-${color} rounded-full`}></div>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-transylvanian-stone mb-2">{type}</h3>
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex justify-between items-start gap-2">
          <span className="text-transylvanian-stone/60 flex-shrink-0">Duration:</span>
          <span className="font-medium text-transylvanian-stone text-right">{duration}</span>
        </div>
        <div className="text-transylvanian-stone/70 leading-relaxed">{purpose}</div>
      </div>
    </div>
  );
}