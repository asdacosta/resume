import { IconGraduation } from "../icons/Icons";
import { EntrySection } from "./EntrySection";

const EDUCATION_FIELDS = [
  { key: "school", label: "School", required: true, maxLength: 30 },
  {
    key: "degree",
    label: "Degree",
    required: true,
    placeholder: "Bachelor of Science",
    maxLength: 35,
  },
  {
    key: "honors",
    label: "Class Honors",
    optional: true,
    placeholder: "First Class",
    maxLength: 25,
  },
  { key: "startDate", label: "Start Date", optional: true, type: "date" },
  { key: "endDate", label: "End Date", optional: true, type: "date" },
  { key: "country", label: "Country", optional: true, maxLength: 20 },
  { key: "city", label: "City", optional: true, maxLength: 20 },
];

export function EducationSection() {
  return (
    <EntrySection
      section="education"
      title="Education"
      icon={IconGraduation}
      fields={EDUCATION_FIELDS}
      addLabel="Education"
    />
  );
}
