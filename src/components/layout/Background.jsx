import { useResume } from "../../context/ResumeContext";

export function Background() {
  const { resumeVisible } = useResume();

  return (
    <div
      className={`ambient ${resumeVisible ? "" : "ambient--centered"}`}
      aria-hidden="true"
    >
      <div className="ambient__orb ambient__orb--1" />
      <div className="ambient__orb ambient__orb--2" />
      <div className="ambient__orb ambient__orb--3" />
      <div className="ambient__wordmark">
        <span>R</span>
        <span>É</span>
        <span>S</span>
        <span>U</span>
        <span>M</span>
        <span>É</span>
      </div>
    </div>
  );
}
