import { useResume } from "../../context/ResumeContext";
import { IconImage, IconUser } from "../icons/Icons";
import { Field } from "./Field";
import { SectionCard } from "./SectionCard";

export function PersonalInfoSection() {
  const { resume, updatePersonal, setPhoto, expandedSections, toggleSection } =
    useResume();
  const { personal } = resume;

  return (
    <SectionCard
      title="Personal Info"
      icon={IconUser}
      expanded={expandedSections.personal}
      onToggle={() => toggleSection("personal")}
      collapsible={false}
    >
      <div className="section-card__grid">
        <Field
          id="first-names"
          label="First Name(s)"
          required
          value={personal.firstNames}
          onChange={(v) => updatePersonal("firstNames", v)}
          maxLength={15}
        />
        <Field
          id="last-name"
          label="Last Name"
          required
          value={personal.lastName}
          onChange={(v) => updatePersonal("lastName", v)}
          maxLength={10}
        />
        <Field
          id="mail"
          label="Email"
          required
          type="email"
          value={personal.email}
          onChange={(v) => updatePersonal("email", v)}
          placeholder="ever@example.com"
          maxLength={25}
        />
        <Field
          id="phone"
          label="Phone number"
          required
          type="tel"
          value={personal.phone}
          onChange={(v) => updatePersonal("phone", v)}
          placeholder="+(code)-●●●-●●●-●●●●"
          maxLength={18}
        />
        <Field
          id="country-personal"
          label="Country"
          optional
          value={personal.country}
          onChange={(v) => updatePersonal("country", v)}
          maxLength={20}
        />
        <Field
          id="city-personal"
          label="City"
          optional
          value={personal.city}
          onChange={(v) => updatePersonal("city", v)}
          maxLength={20}
        />
        <Field
          id="address"
          label="Address"
          optional
          value={personal.address}
          onChange={(v) => updatePersonal("address", v)}
          placeholder="A24/12 Hell Street"
          maxLength={25}
        />
        <div className="field field--upload">
          <label htmlFor="profile" className="field__upload-label">
            <IconImage size={18} />
            Upload Picture
          </label>
          <input
            type="file"
            id="profile"
            name="profile"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0])}
            className="field__file"
          />
        </div>
      </div>
    </SectionCard>
  );
}
