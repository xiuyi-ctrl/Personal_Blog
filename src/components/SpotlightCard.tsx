import { forwardRef } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ title, description, icon, className = "", children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`group relative p-8 border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 ${className}`}
        style={{
          background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(192, 132, 252, 0.08) 0%, transparent 70%)",
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
          e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty("--mouse-x", "50%");
          e.currentTarget.style.setProperty("--mouse-y", "50%");
        }}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        {...props}
      >
        <div className="w-10 h-10 flex items-center justify-center border border-white/[0.06] text-white/60 mb-6">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white/90 mb-3">{title}</h3>
        <p className="text-sm text-white/40 leading-relaxed">
          {description}
        </p>
        {children}
      </motion.div>
    );
  }
);

SpotlightCard.displayName = "SpotlightCard";
export default SpotlightCard;