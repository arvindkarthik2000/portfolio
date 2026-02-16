import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

export default function Section({
  id,
  title,
  subtitle,
  icon,
  children
}: {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  const [ref, visible] = useInView<HTMLElement>(0.1);

  return (
    <section
      id={id}
      className={`section reveal${visible ? " visible" : ""}`}
      ref={ref as React.Ref<HTMLElement>}
    >
      <div className="sectionHead">
        <h2>
          {icon && <span className="sectionIcon">{icon}</span>}
          {title}
        </h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
