import { useInView } from "../hooks.js";

/**
 * Apparition au défilement. Neutralisée en reduced-motion via le CSS.
 * `style` passé par l'appelant est conservé : on y ajoute seulement le délai.
 */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...rest }) {
  const [ref, seen] = useInView();
  const merged = delay ? { transitionDelay: `${delay}ms`, ...style } : style;

  return (
    <Tag ref={ref} className={`reveal ${seen ? "is-visible" : ""} ${className}`} style={merged} {...rest}>
      {children}
    </Tag>
  );
}
