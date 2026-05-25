import { IconBriefcase } from "../icons/Icons";
import { EntrySection } from "./EntrySection";

const PROFESSIONAL_FIELDS = [
  { key: "company", label: "Company Name", required: true, maxLength: 30 },
  {
    key: "position",
    label: "Position",
    required: true,
    placeholder: "Software Engineer",
    maxLength: 30,
  },
  { key: "startDate", label: "Start Date", optional: true, type: "date" },
  { key: "endDate", label: "End Date", optional: true, type: "date" },
  { key: "country", label: "Country", optional: true, maxLength: 20 },
  { key: "city", label: "City", optional: true, maxLength: 20 },
  {
    key: "description",
    label: "Description",
    optional: true,
    type: "textarea",
    placeholder: "As a software engineer, ...",
    maxLength: 160,
  },
];

export function ProfessionalSection() {
  return (
    <EntrySection
      section="professional"
      title="Professional Experience"
      icon={IconBriefcase}
      fields={PROFESSIONAL_FIELDS}
      addLabel="Experience"
    />
  );
}
