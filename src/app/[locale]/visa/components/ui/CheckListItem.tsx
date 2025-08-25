interface ChecklistItemProps {
  text: string;
}

export default function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-danube-mist/30 transition-colors">
      <div className="w-5 h-5 border-2 border-tricolor-blue rounded flex-shrink-0 mt-0.5"></div>
      <span className="text-transylvanian-stone">{text}</span>
    </div>
  );
}