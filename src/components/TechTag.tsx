import { useRef, useState } from "react";

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TechTag({ children, className = "", onClick }: TechTagProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseDown = () => setIsHovered(false);

  return (
    <span
      ref={ref}
      className={`relative inline-flex items-center justify-center px-4 py-2 text-sm text-white/70 overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        backgroundColor: "rgba(255,255,255,0.03)",
        border: isHovered ? "1px solid #c084fc" : "none",
        borderRadius: "10px",
        transition: "box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease, border-width 0.3s ease",
        boxShadow: isHovered
          ? "0 8px 32px rgba(192, 132, 252, 0.15), 0 4px 16px rgba(192, 132, 252, 0.1)"
          : "none",
      }}
    >
      {/* 角括号 - 左上 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "14px",
          height: "14px",
          borderTop: "3px solid transparent",
          borderLeft: "3px solid transparent",
          borderRight: "none",
          borderBottom: "none",
          borderRadius: "10px 0 0 0",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          pointerEvents: "none",
          transform: isHovered ? "translate(-16px, -16px)" : "translate(0, 0)",
          borderColor: isHovered ? "#c084fc" : "transparent",
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? "0 0 20px #c084fc, 0 0 40px rgba(192,132,252,0.25)" : "none",
        }}
      />
      {/* 角括号 - 右上 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "14px",
          height: "14px",
          borderTop: "3px solid transparent",
          borderRight: "3px solid transparent",
          borderLeft: "none",
          borderBottom: "none",
          borderRadius: "0 10px 0 0",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          pointerEvents: "none",
          transform: isHovered ? "translate(16px, -16px)" : "translate(0, 0)",
          borderColor: isHovered ? "#c084fc" : "transparent",
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? "0 0 20px #c084fc, 0 0 40px rgba(192,132,252,0.25)" : "none",
        }}
      />
      {/* 角括号 - 右下 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "14px",
          height: "14px",
          borderBottom: "3px solid transparent",
          borderRight: "3px solid transparent",
          borderLeft: "none",
          borderTop: "none",
          borderRadius: "0 0 10px 0",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          pointerEvents: "none",
          transform: isHovered ? "translate(16px, 16px)" : "translate(0, 0)",
          borderColor: isHovered ? "#c084fc" : "transparent",
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? "0 0 20px #c084fc, 0 0 40px rgba(192,132,252,0.25)" : "none",
        }}
      />
      {/* 角括号 - 左下 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "14px",
          height: "14px",
          borderBottom: "3px solid transparent",
          borderLeft: "3px solid transparent",
          borderRight: "none",
          borderTop: "none",
          borderRadius: "0 0 0 10px",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          pointerEvents: "none",
          transform: isHovered ? "translate(-16px, 16px)" : "translate(0, 0)",
          borderColor: isHovered ? "#c084fc" : "transparent",
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered ? "0 0 20px #c084fc, 0 0 40px rgba(192,132,252,0.25)" : "none",
        }}
      />
      {/* 文字内容 */}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}