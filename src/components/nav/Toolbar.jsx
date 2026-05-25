import { useCallback, useEffect, useRef, useState } from "react";
import { useResume } from "../../context/ResumeContext";
import { PALETTES } from "../../data/palettes";
const DIALOG_OPEN_TRANSITION =
  "height 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 2s ease-in-out";
const DIALOG_CLOSE_TRANSITION =
  "height 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.55s ease-in-out";

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function Toolbar({ resumeRef }) {
  const {
    paletteId,
    setPaletteId,
    layout,
    setLayout,
    resumeVisible,
    setResumeVisible,
    sampleMode,
    toggleSample,
    palette,
  } = useResume();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [caretOpen, setCaretOpen] = useState(false);
  const [eyesRaised, setEyesRaised] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const [sampleLabel, setSampleLabel] = useState("Clear");
  const [knobLeft, setKnobLeft] = useState(false);
  const [sampleTextHidden, setSampleTextHidden] = useState(false);

  const menuOverlayRef = useRef(null);
  const dialogRef = useRef(null);
  const outsideListenerRef = useRef(false);

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
    setCaretOpen(false);
    if (dialogRef.current) {
      dialogRef.current.style.transition = DIALOG_CLOSE_TRANSITION;
    }
  }, []);

  const openDialog = useCallback(() => {
    setDialogOpen(true);
    setCaretOpen(true);
    if (dialogRef.current) {
      dialogRef.current.style.transition = DIALOG_OPEN_TRANSITION;
    }
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const dialog = dialogRef.current;
      const overlay = menuOverlayRef.current;
      if (!dialog || !overlay) return;
      if (!dialog.contains(event.target) && event.target !== overlay) {
        closeDialog();
        document.removeEventListener("click", handleOutsideClick);
        outsideListenerRef.current = false;
      }
    };

    if (dialogOpen && !outsideListenerRef.current) {
      const id = window.setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
        outsideListenerRef.current = true;
      }, 0);
      return () => {
        clearTimeout(id);
        document.removeEventListener("click", handleOutsideClick);
        outsideListenerRef.current = false;
      };
    }

    return undefined;
  }, [dialogOpen, closeDialog]);

  const handleMenuClick = () => {
    if (!dialogOpen) {
      openDialog();
      return;
    }
    closeDialog();
  };

  const handleDownload = async () => {
    if (!resumeRef?.current || downloading) return;
    setDownloading(true);
    const { exportResumePdf } = await import("../../utils/pdfExport");
    await exportResumePdf(resumeRef.current);
    setDownloading(false);
  };

  const handleSampleClick = async () => {
    if (!knobLeft) {
      setKnobLeft(true);
      setSampleTextHidden(true);
      await wait(400);
      setSampleTextHidden(false);
      setSampleLabel("Sample");
      toggleSample();
      return;
    }

    setKnobLeft(false);
    setSampleTextHidden(true);
    await wait(400);
    setSampleTextHidden(false);
    setSampleLabel("Clear");
    toggleSample();
  };

  const layoutPreviewStyle = (side) => ({
    background:
      side === "left"
        ? `linear-gradient(to left, white 50%, ${palette.accent} 50%)`
        : `linear-gradient(to right, white 50%, ${palette.accent} 50%)`,
  });

  return (
    <header className="toolbar" role="banner">
      <section
        className="menu"
        style={{
          background: palette.light,
          borderColor: palette.accent,
        }}
        onMouseEnter={() => setEyesRaised(true)}
        onMouseLeave={() => setEyesRaised(false)}
      >
        <div
          ref={menuOverlayRef}
          role="button"
          tabIndex={0}
          aria-expanded={dialogOpen}
          aria-controls="personalize-dialog"
          aria-label="Open personalization menu"
          onClick={handleMenuClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleMenuClick();
            }
          }}
        />
        <i
          className="fa-solid fa-circle menu__eye"
          style={{ transform: eyesRaised ? "translateY(-0.2rem)" : "translateY(0)" }}
          aria-hidden
        />
        <i
          className={`fa-solid fa-caret-down menu__caret ${caretOpen ? "menu__caret--open" : ""}`}
          aria-hidden
        />
        <i
          className="fa-solid fa-circle menu__eye"
          style={{ transform: eyesRaised ? "translateY(-0.2rem)" : "translateY(0)" }}
          aria-hidden
        />
      </section>

      <section
        id="personalize-dialog"
        ref={dialogRef}
        className={`dialog ${dialogOpen ? "reveal" : ""}`}
        style={{ background: palette.accent }}
        role="region"
        aria-label="Personalization"
        aria-hidden={!dialogOpen}
      >
        <h2>Personalize</h2>
        <ul>
          <li>
            Palette <i className="fa-solid fa-angle-down" aria-hidden />
          </li>
          <div className="palette" role="group" aria-label="Color palette">
            {PALETTES.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`${p.legacyClass} ${paletteId === p.id ? "chosen" : ""}`}
                aria-label={`${p.name} palette`}
                aria-pressed={paletteId === p.id}
                onClick={() => setPaletteId(p.id)}
              />
            ))}
          </div>
          <li>
            Layout <i className="fa-solid fa-angle-down" aria-hidden />
          </li>
          <div className="layout" role="group" aria-label="Resume layout">
            <button
              type="button"
              className={`left-align ${layout === "left" ? "chosen" : ""}`}
              style={layoutPreviewStyle("left")}
              aria-label="Sidebar on left"
              aria-pressed={layout === "left"}
              onClick={() => setLayout("left")}
            />
            <button
              type="button"
              className={`right-align ${layout === "right" ? "chosen" : ""}`}
              style={layoutPreviewStyle("right")}
              aria-label="Sidebar on right"
              aria-pressed={layout === "right"}
              onClick={() => setLayout("right")}
            />
          </div>
        </ul>
      </section>

      <section
        className={`sample-bar ${knobLeft ? "sample-bar--knob-left" : ""}`}
        style={{
          background: palette.light,
          borderColor: palette.accent,
        }}
        role="button"
        tabIndex={0}
        aria-label={sampleMode === "sample" ? "Clear resume content" : "Load sample resume"}
        onClick={handleSampleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSampleClick();
          }
        }}
      >
        <span className={`sample-bar__text ${sampleTextHidden ? "hideSampleText" : ""}`}>
          {sampleLabel}
        </span>
        <i className="fa-solid fa-circle sample-bar__knob" aria-hidden />
      </section>

      <section
        className="download"
        style={{ background: palette.light }}
      >
        <button
          type="button"
          className={`download__btn ${downloading ? "download__btn--loading" : ""}`}
          aria-label="Download resume as PDF"
          onClick={handleDownload}
          disabled={downloading}
        >
          <i className={`fa-solid fa-arrow-down ${downloading ? "rotate" : ""}`} aria-hidden />
        </button>
      </section>

      <section className="view">
        <button
          type="button"
          className="view__btn"
          style={{ background: palette.light }}
          aria-label={resumeVisible ? "Hide resume preview" : "Show resume preview"}
          aria-pressed={resumeVisible}
          onClick={() => setResumeVisible((v) => !v)}
        >
          <i
            className={`fa-solid ${resumeVisible ? "fa-eye" : "fa-eye-low-vision"}`}
            aria-hidden
          />
        </button>
      </section>
    </header>
  );
}
