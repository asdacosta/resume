import { useResume } from "../../context/ResumeContext";

export function Background() {
  const { resumeVisible } = useResume();

  return (
    <div aria-hidden="true">
      <div className={`background ${resumeVisible ? "" : "background--center"}`}>
        <span>R</span>
        <span>É</span>
        <span>S</span>
        <span>U</span>
        <span>M</span>
        <span>É</span>
      </div>
      <div className="first-circle" />
      <div className="sec-circle" />
      <div className="last-circle" />
    </div>
  );
}
