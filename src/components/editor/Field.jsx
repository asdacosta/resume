export function Field({
  id,
  label,
  required,
  optional,
  type = "text",
  value,
  onChange,
  placeholder,
  maxLength,
  error,
}) {
  const statusId = `${id}-status`;

  return (
    <div className={`field ${error ? "field--error" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required && (
          <span className="field__badge field__badge--required" id={statusId}>
            Required
          </span>
        )}
        {optional && (
          <span className="field__badge field__badge--optional" id={statusId}>
            Optional
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        aria-describedby={required || optional ? statusId : undefined}
        aria-invalid={error || undefined}
      />
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  optional,
  value,
  onChange,
  placeholder,
  maxLength,
}) {
  const statusId = `${id}-status`;

  return (
    <div className="field field--full">
      <label htmlFor={id}>
        {label}
        {optional && (
          <span className="field__badge field__badge--optional" id={statusId}>
            Optional
          </span>
        )}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={4}
        aria-describedby={optional ? statusId : undefined}
      />
    </div>
  );
}
