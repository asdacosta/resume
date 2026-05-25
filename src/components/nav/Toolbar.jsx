import { useRef, useState } from "react";
import { useResume } from "../../context/ResumeContext";
import { PALETTES } from "../../data/palettes";
import {
  IconChevron,
  IconDownload,
  IconEye,
  IconMenu,
} from "../icons/Icons";

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
  } = useResume();

  const [panelOpen, setPanelOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(true);
  const [layoutOpen, setLayoutOpen] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const panelRef = useRef(null);

  const handleDownload = async () => {
    if (!resumeRef?.current || downloading) return;
    setDownloading(true);
    const { exportResumePdf } = await import("../../utils/pdfExport");
    await exportResumePdf(resumeRef.current);
    setDownloading(false);
  };

  return (
    <header className="toolbar" role="banner">
      <div className="toolbar__group">
        <button
          type="button"
          className="toolbar__menu-btn"
          aria-expanded={panelOpen}
          aria-controls="personalize-panel"
          aria-label="Open personalization menu"
          onClick={() => setPanelOpen((o) => !o)}
        >
          <IconMenu size={22} />
          <IconChevron
            size={16}
            className={`toolbar__caret ${panelOpen ? "toolbar__caret--open" : ""}`}
          />
        </button>

        <div
          id="personalize-panel"
          ref={panelRef}
          className={`toolbar__panel ${panelOpen ? "toolbar__panel--open" : ""}`}
          role="region"
          aria-label="Personalization"
          hidden={!panelOpen}
        >
          <h2 className="toolbar__panel-title">Personalize</h2>

          <button
            type="button"
            className="toolbar__accordion"
            aria-expanded={paletteOpen}
            onClick={() => setPaletteOpen((o) => !o)}
          >
            Palette
            <IconChevron direction={paletteOpen ? "up" : "down"} size={16} />
          </button>
          {paletteOpen && (
            <div className="toolbar__palette" role="group" aria-label="Color palette">
              {PALETTES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`toolbar__swatch ${paletteId === p.id ? "toolbar__swatch--active" : ""}`}
                  style={{
                    background: `linear-gradient(135deg, ${p.light} 50%, ${p.accent} 50%)`,
                  }}
                  aria-label={`${p.name} palette`}
                  aria-pressed={paletteId === p.id}
                  onClick={() => setPaletteId(p.id)}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            className="toolbar__accordion"
            aria-expanded={layoutOpen}
            onClick={() => setLayoutOpen((o) => !o)}
          >
            Layout
            <IconChevron direction={layoutOpen ? "up" : "down"} size={16} />
          </button>
          {layoutOpen && (
            <div className="toolbar__layout" role="group" aria-label="Resume layout">
              <button
                type="button"
                className={`toolbar__layout-btn ${layout === "left" ? "toolbar__layout-btn--active" : ""}`}
                aria-label="Sidebar on left"
                aria-pressed={layout === "left"}
                onClick={() => setLayout("left")}
              >
                <span className="toolbar__layout-preview toolbar__layout-preview--left" />
              </button>
              <button
                type="button"
                className={`toolbar__layout-btn ${layout === "right" ? "toolbar__layout-btn--active" : ""}`}
                aria-label="Sidebar on right"
                aria-pressed={layout === "right"}
                onClick={() => setLayout("right")}
              >
                <span className="toolbar__layout-preview toolbar__layout-preview--right" />
              </button>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        className="toolbar__sample"
        onClick={toggleSample}
        aria-label={sampleMode === "sample" ? "Clear resume content" : "Load sample resume"}
      >
        <span className="toolbar__sample-label">
          {sampleMode === "sample" ? "Clear" : "Sample"}
        </span>
        <span
          className={`toolbar__sample-knob ${sampleMode !== "sample" ? "toolbar__sample-knob--left" : ""}`}
          aria-hidden
        />
      </button>

      <button
        type="button"
        className={`toolbar__action ${downloading ? "toolbar__action--loading" : ""}`}
        aria-label="Download resume as PDF"
        onClick={handleDownload}
        disabled={downloading}
      >
        <IconDownload size={20} />
      </button>

      <button
        type="button"
        className="toolbar__action"
        aria-label={resumeVisible ? "Hide resume preview" : "Show resume preview"}
        aria-pressed={resumeVisible}
        onClick={() => setResumeVisible((v) => !v)}
      >
        <IconEye off={!resumeVisible} size={20} />
      </button>
    </header>
  );
}
