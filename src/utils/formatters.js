export function formatEducationYears(startDate, endDate) {
  const start = startDate ? new Date(startDate).getFullYear() : "";
  const end = endDate ? new Date(endDate).getFullYear() : "";
  if (!start && !end) return "Start – End";
  if (!start) return `– ${end}`;
  if (!end) return `${start} –`;
  return `${start} – ${end}`;
}

export function formatProfessionalDates(startDate, endDate) {
  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;

  const fmt = (d) => {
    if (!d || Number.isNaN(d.getTime())) return "";
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getFullYear();
    return `${month}, ${year}`;
  };

  const s = fmt(start);
  const e = fmt(end);
  if (!s && !e) return "Start – End";
  if (!s) return `– ${e}`;
  if (!e) return `${s} –`;
  return `${s} – ${e}`;
}

export function formatLocation(country, city) {
  if (!country && !city) return "Country · City";
  if (!country) return city;
  if (!city) return country;
  return `${country} · ${city}`;
}

export function fullName(firstNames, lastName) {
  const parts = [firstNames, lastName].filter(Boolean);
  return parts.length ? parts.join(" ") : "Full Name";
}
