import { useRef } from "react";
import { ResumeProvider, useResume } from "./context/ResumeContext";
import { Background } from "./components/layout/Background";
import { Toolbar } from "./components/nav/Toolbar";
import { EditorPanel } from "./components/editor/EditorPanel";
import { ResumePreview } from "./components/resume/ResumePreview";
import { usePlaceholderAnimation } from "./hooks/usePlaceholderAnimation";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/app.css";

function AppContent() {
  const { palette, resumeVisible } = useResume();
  const resumeRef = useRef(null);

  usePlaceholderAnimation(true);

  return (
    <div
      className={`app ${resumeVisible ? "" : "app--editor-focus"}`}
      style={{
        "--theme-light": palette.light,
        "--theme-accent": palette.accent,
        "--theme-surface": palette.surface,
        "--theme-ink": palette.ink,
      }}
    >
      <Background />
      <main className="app__workspace">
        <section className="app__editor" aria-label="Editor workspace">
          <Toolbar resumeRef={resumeRef} />
          <EditorPanel />
        </section>
        {resumeVisible && (
          <ResumePreview ref={resumeRef} />
        )}
      </main>
    </div>
  );
}

export function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  );
}
