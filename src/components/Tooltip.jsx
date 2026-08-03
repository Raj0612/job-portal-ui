export const Tooltip = ({ text, children, className = "" }) => {
  return (
    <span className={`group/tooltip relative inline-block ${className}`}>
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-48 sm:w-60 -translate-x-1/2 translate-y-1 rounded-lg bg-white px-3 py-2 text-xs font-normal normal-case leading-snug text-gray-700 text-center opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-300 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100"
      >
        {text}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white" />
      </span>
    </span>
  );
};
