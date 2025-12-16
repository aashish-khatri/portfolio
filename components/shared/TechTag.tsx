export default function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 bg-bg-tertiary text-text-secondary rounded-2xl font-medium text-sm transition-colors hover:bg-bg-quaternary">
      {children}
    </span>
  );
}
