import { useState } from "react";
import { useResume } from "../../context/ResumeContext";
import { IconEdit, IconPlus, IconTrash } from "../icons/Icons";
import { Field, TextAreaField } from "./Field";
import { SectionCard } from "./SectionCard";

function EntryForm({
  section,
  index,
  entry,
  fields,
  onUpdate,
  onAdd,
  onClear,
  onClose,
}) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (section === "education") {
      if (!entry.school) next.school = true;
      if (!entry.degree) next.degree = true;
    } else {
      if (!entry.company) next.company = true;
      if (!entry.position) next.position = true;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleAdd = () => {
    if (validate()) {
      onAdd();
      onClose();
    }
  };

  return (
    <div className="entry-form">
      <div className="section-card__grid">
        {fields.map((f) =>
          f.type === "textarea" ? (
            <TextAreaField
              key={f.key}
              id={`${section}-${index}-${f.key}`}
              label={f.label}
              optional={f.optional}
              value={entry[f.key]}
              onChange={(v) => onUpdate(f.key, v)}
              placeholder={f.placeholder}
              maxLength={f.maxLength}
            />
          ) : (
            <Field
              key={f.key}
              id={`${section}-${index}-${f.key}`}
              label={f.label}
              required={f.required}
              optional={f.optional}
              type={f.type}
              value={entry[f.key]}
              onChange={(v) => onUpdate(f.key, v)}
              placeholder={f.placeholder}
              maxLength={f.maxLength}
              error={errors[f.key]}
            />
          ),
        )}
      </div>
      <div className="entry-form__actions">
        <button type="button" className="btn btn--ghost" onClick={onClear}>
          Clear
        </button>
        <button type="button" className="btn btn--primary" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export function EntrySection({ section, title, icon: Icon, fields, addLabel }) {
  const {
    resume,
    expandedSections,
    activeField,
    toggleSection,
    updateEntry,
    addEntry,
    clearEntry,
    removeEntry,
    editEntry,
    setActiveField,
  } = useResume();

  const entries = resume[section];
  const expanded = expandedSections[section];
  const active = activeField[section];
  const addedCount = entries.filter((e) => e.added).length;
  const canAddMore = addedCount < 2;

  const openNewEntry = () => {
    const idx = entries.findIndex((e) => !e.added);
    if (idx >= 0) setActiveField((prev) => ({ ...prev, [section]: idx }));
  };

  return (
    <SectionCard
      title={title}
      icon={Icon}
      expanded={expanded}
      onToggle={() => toggleSection(section)}
      footer={
        expanded && (
          <div className="section-card__footer">
            {canAddMore && active === null && (
              <button
                type="button"
                className="section-card__add-btn"
                onClick={openNewEntry}
              >
                <IconPlus size={16} />
                {addLabel}
              </button>
            )}
          </div>
        )
      }
    >
      {entries.map((entry, index) => {
        if (active === index) {
          return (
            <EntryForm
              key={entry.id}
              section={section}
              index={index}
              entry={entry}
              fields={fields}
              onUpdate={(key, value) => updateEntry(section, index, key, value)}
              onAdd={() => addEntry(section, index)}
              onClear={() => clearEntry(section, index)}
              onClose={() => setActiveField((prev) => ({ ...prev, [section]: null }))}
            />
          );
        }

        if (entry.added) {
          const label =
            section === "education" ? entry.school || "School" : entry.company || "Company";
          return (
            <div key={entry.id} className="entry-chip">
              <span className="entry-chip__label">{label}</span>
              <span className="entry-chip__actions">
                <button
                  type="button"
                  aria-label={`Remove ${label}`}
                  onClick={() => removeEntry(section, index)}
                >
                  <IconTrash size={16} />
                </button>
                <button
                  type="button"
                  aria-label={`Edit ${label}`}
                  onClick={() => editEntry(section, index)}
                >
                  <IconEdit size={16} />
                </button>
              </span>
            </div>
          );
        }

        return null;
      })}
    </SectionCard>
  );
}
