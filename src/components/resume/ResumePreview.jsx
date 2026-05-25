import { forwardRef } from "react";
import { useResume } from "../../context/ResumeContext";
import {
  formatEducationYears,
  formatLocation,
  formatProfessionalDates,
  fullName,
} from "../../utils/formatters";
import { IconMail, IconPhone, IconPin } from "../icons/Icons";

function ContactRow({ icon: Icon, children }) {
  if (!children || children === "Email" || children === "Phone") return null;
  return (
    <p className="resume-preview__contact-row">
      <Icon size={14} />
      <span>{children}</span>
    </p>
  );
}

function EducationBlock({ entry }) {
  if (!entry.added) return null;
  return (
    <article className="resume-preview__block">
      <p className="resume-preview__block-head">
        <span className="resume-preview__emphasis">{entry.school || "School"}</span>
        <span className="resume-preview__date">
          {formatEducationYears(entry.startDate, entry.endDate)}
        </span>
      </p>
      <p>
        <span>{entry.degree || "Degree"}</span>
        {entry.honors && (
          <>
            {" "}
            <span className="resume-preview__muted">| {entry.honors}</span>
          </>
        )}
      </p>
      <p className="resume-preview__muted">
        {formatLocation(entry.country, entry.city)}
      </p>
    </article>
  );
}

function ProfessionalBlock({ entry }) {
  if (!entry.added) return null;
  return (
    <article className="resume-preview__block">
      <p className="resume-preview__block-head">
        <span className="resume-preview__emphasis">{entry.company || "Company"}</span>
        <span className="resume-preview__date">
          {formatProfessionalDates(entry.startDate, entry.endDate)}
        </span>
      </p>
      <p className="resume-preview__role">{entry.position || "Position"}</p>
      <p className="resume-preview__muted">
        {formatLocation(entry.country, entry.city)}
      </p>
      {entry.description && (
        <p className="resume-preview__description">{entry.description}</p>
      )}
    </article>
  );
}

export const ResumePreview = forwardRef(function ResumePreview(_, ref) {
  const { resume, layout, palette } = useResume();
  const { personal, education, professional } = resume;

  const lastPosition =
    professional.filter((e) => e.added).at(-1)?.position ||
    professional.filter((e) => e.added)[0]?.position ||
    "Software Engineer";

  const photoStyle = personal.photoUrl
    ? { backgroundImage: `url('${personal.photoUrl}')` }
    : undefined;

  return (
    <aside
      ref={ref}
      className={`resume-preview resume-preview--${layout}`}
      aria-label="Resume preview"
      style={{
        "--resume-light": palette.light,
        "--resume-accent": palette.accent,
        "--resume-surface": palette.surface,
        "--resume-ink": palette.ink,
      }}
    >
      <header className="resume-preview__sidebar">
        <div
          className={`resume-preview__photo ${personal.usePlaceholderPhoto && !personal.photoUrl ? "resume-preview__photo--placeholder" : ""}`}
          style={photoStyle}
          role="img"
          aria-label="Profile photo"
        />
        <div className="resume-preview__identity">
          <p className="resume-preview__name">
            {fullName(personal.firstNames, personal.lastName)}
          </p>
          <p className="resume-preview__headline">{lastPosition}</p>
        </div>
        <section className="resume-preview__contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <ContactRow icon={IconPhone}>{personal.phone}</ContactRow>
          <ContactRow icon={IconMail}>{personal.email}</ContactRow>
          <ContactRow icon={IconPin}>
            {formatLocation(personal.country, personal.city)}
          </ContactRow>
          {personal.address && (
            <p className="resume-preview__contact-row">
              <span className="resume-preview__address-icon" aria-hidden>
                ↗
              </span>
              <span>{personal.address}</span>
            </p>
          )}
        </section>
      </header>

      <div className="resume-preview__main">
        <section aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          {education.map((entry) => (
            <EducationBlock key={entry.id} entry={entry} />
          ))}
        </section>
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading">Professional Experience</h2>
          {professional.map((entry) => (
            <ProfessionalBlock key={entry.id} entry={entry} />
          ))}
        </section>
      </div>
    </aside>
  );
});
