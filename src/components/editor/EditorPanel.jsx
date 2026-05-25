import { EducationSection } from "./EducationSection";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { ProfessionalSection } from "./ProfessionalSection";

export function EditorPanel() {
  return (
    <div className="editor" role="form" aria-label="Resume editor">
      <PersonalInfoSection />
      <EducationSection />
      <ProfessionalSection />
    </div>
  );
}
