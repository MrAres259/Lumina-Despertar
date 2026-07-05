const SectionDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center py-2 ${className}`} aria-hidden="true">
      {/* Left line */}
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-accent/50" />

      {/* Center ornament — golden diamond */}
      <div className="mx-3 flex items-center gap-1.5">
        <span className="block w-1 h-1 rotate-45 bg-accent/40" />
        <span className="block w-2 h-2 rotate-45 bg-accent" />
        <span className="block w-1 h-1 rotate-45 bg-accent/40" />
      </div>

      {/* Right line */}
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-accent/50" />
    </div>
  );
};

export default SectionDivider;
