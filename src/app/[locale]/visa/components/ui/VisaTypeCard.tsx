interface VisaTypeCardProps {
  type: string;
  duration: string;
  purpose: string;
  color: "tricolor-blue" | "tricolor-red" | "carpathian-forest";
}

export default function VisaTypeCard({ type, duration, purpose, color }: VisaTypeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-6 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 bg-${color}/10 rounded-lg flex items-center justify-center mb-4`}>
        <div className={`w-6 h-6 bg-${color} rounded-full`}></div>
      </div>
      <h3 className="text-lg font-semibold text-transylvanian-stone mb-2">{type}</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-transylvanian-stone/60">Duration:</span>
          <span className="font-medium text-transylvanian-stone">{duration}</span>
        </div>
        <div className="text-transylvanian-stone/70">{purpose}</div>
      </div>
    </div>
  );
}