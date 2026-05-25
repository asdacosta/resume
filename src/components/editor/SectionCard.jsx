import { IconChevron } from "../icons/Icons";

export function SectionCard({
  title,
  icon: Icon,
  expanded,
  onToggle,
  collapsible = true,
  children,
  footer,
}) {
  return (
    <section className={`section-card ${expanded ? "section-card--open" : ""}`}>
      <button
        type="button"
        className="section-card__header"
        onClick={collapsible ? onToggle : undefined}
        aria-expanded={collapsible ? expanded : undefined}
        disabled={!collapsible}
      >
        {Icon && <Icon size={22} className="section-card__icon" />}
        <span className="section-card__title">{title}</span>
        {collapsible && (
          <IconChevron
            size={18}
            direction={expanded ? "up" : "down"}
            className="section-card__chevron"
          />
        )}
      </button>
      {expanded && <div className="section-card__body">{children}</div>}
      {footer}
    </section>
  );
}
