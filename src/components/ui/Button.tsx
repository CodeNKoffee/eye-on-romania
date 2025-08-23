export default function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="px-4 py-2 rounded bg-tricolor-blue text-white hover:brightness-95">
      {children}
    </button>
  );
}
