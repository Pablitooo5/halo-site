import Reveal from "./Reveal.jsx";

export default function SectionHead({ eyebrow, children, lead }) {
  return (
    <Reveal className="mx-auto mb-9 max-w-[720px] text-center md:mb-14">
      <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      <h2 className="text-[clamp(1.7rem,3.6vw,2.6rem)] font-bold">{children}</h2>
      {lead && <p className="mt-4 text-[1.08rem] text-dim">{lead}</p>}
    </Reveal>
  );
}
