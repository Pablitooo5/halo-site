import { useInView } from "../hooks.js";

/** Apparition au défilement. Neutralisée en reduced-motion via le CSS. */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, seen] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
