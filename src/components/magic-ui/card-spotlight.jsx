import { useRef, useState } from "react";
import { cn } from "../../lib/cn";

/**
 * CardSpotlight
 * Cria um "glow" radial que segue o cursor (só no hover),
 * usando radial-gradient com CSS vars.
 */
export function CardSpotlight({ className, children }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("relative group", className)}
      style={{ "--x": `${pos.x}px`, "--y": `${pos.y}px` }}
    >
      {/* camada do spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--x) var(--y), rgba(102,224,219,0.10), transparent 40%)",
        }}
      />
      {children}
    </div>
  );
}
