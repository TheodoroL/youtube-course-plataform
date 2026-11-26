"use client";
import { useState } from "react";
interface CollapsebleTextProps {
  numberOfLinesWhenCollapsed: number;
  children: React.ReactNode;
}

export function CollapsebleText({
  children,
  numberOfLinesWhenCollapsed,
}: CollapsebleTextProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="flex flex-col items-end">
      <p
        data-collapsed={isCollapsed}
        style={
          {
            "--number-of-lines": numberOfLinesWhenCollapsed,
          } as React.CSSProperties
        }
        className="data-[collapsed=true]:line-clamp-(--number-of-lines)"
      >
        {children}
      </p>

      <button
        data-collapsed={isCollapsed}
        className="px-1 bg-paper rounded-full border border-primary data-[collapsed=false]:-mt-7"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "Ver mais" : "Ver menos"}
      </button>
    </div>
  );
}
