import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DEFAULT_PALETTE_ID, PALETTES } from "../data/palettes";
import {
  EMPTY_RESUME,
  PLACEHOLDER_RESUME,
  SAMPLE_RESUME,
} from "../data/sampleData";

const ResumeContext = createContext(null);

function cloneResume(data) {
  return JSON.parse(JSON.stringify(data));
}

export function ResumeProvider({ children }) {
  const [paletteId, setPaletteId] = useState(DEFAULT_PALETTE_ID);
  const [layout, setLayout] = useState("left");
  const [resumeVisible, setResumeVisible] = useState(true);
  const [sampleMode, setSampleMode] = useState("sample");
  const [resume, setResume] = useState(() => cloneResume(SAMPLE_RESUME));
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    education: false,
    professional: false,
  });
  const [activeField, setActiveField] = useState({
    education: null,
    professional: null,
  });

  const palette = useMemo(
    () => PALETTES.find((p) => p.id === paletteId) ?? PALETTES[0],
    [paletteId],
  );

  const updatePersonal = useCallback((field, value) => {
    setResume((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  }, []);

  const updateEntry = useCallback((section, index, field, value) => {
    setResume((prev) => {
      const list = [...prev[section]];
      list[index] = { ...list[index], [field]: value };
      return { ...prev, [section]: list };
    });
  }, []);

  const addEntry = useCallback((section, index) => {
    setResume((prev) => {
      const list = [...prev[section]];
      list[index] = { ...list[index], added: true };
      return { ...prev, [section]: list };
    });
    setActiveField((prev) => ({ ...prev, [section]: null }));
  }, []);

  const clearEntry = useCallback((section, index) => {
    const empty =
      section === "education"
        ? {
            school: "",
            degree: "",
            honors: "",
            startDate: "",
            endDate: "",
            country: "",
            city: "",
          }
        : {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            country: "",
            city: "",
            description: "",
          };

    setResume((prev) => {
      const list = [...prev[section]];
      list[index] = { ...list[index], ...empty, added: false };
      return { ...prev, [section]: list };
    });
    setActiveField((prev) => ({ ...prev, [section]: index }));
  }, []);

  const removeEntry = useCallback((section, index) => {
    clearEntry(section, index);
  }, [clearEntry]);

  const editEntry = useCallback((section, index) => {
    setActiveField((prev) => ({ ...prev, [section]: index }));
  }, []);

  const toggleSection = useCallback((key) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const toggleSample = useCallback(() => {
    setSampleMode((mode) => {
      if (mode === "sample") {
        setResume(cloneResume(PLACEHOLDER_RESUME));
        return "placeholder";
      }
      setResume(cloneResume(SAMPLE_RESUME));
      return "sample";
    });
  }, []);

  const clearAll = useCallback(() => {
    setResume(cloneResume(EMPTY_RESUME));
    setSampleMode("empty");
  }, []);

  const setPhoto = useCallback((file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setResume((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        photoUrl: url,
        usePlaceholderPhoto: false,
      },
    }));
  }, []);

  const value = useMemo(
    () => ({
      palette,
      paletteId,
      setPaletteId,
      layout,
      setLayout,
      resumeVisible,
      setResumeVisible,
      sampleMode,
      resume,
      expandedSections,
      activeField,
      updatePersonal,
      updateEntry,
      addEntry,
      clearEntry,
      removeEntry,
      editEntry,
      toggleSection,
      toggleSample,
      clearAll,
      setPhoto,
      setActiveField,
    }),
    [
      palette,
      paletteId,
      layout,
      resumeVisible,
      sampleMode,
      resume,
      expandedSections,
      activeField,
      updatePersonal,
      updateEntry,
      addEntry,
      clearEntry,
      removeEntry,
      editEntry,
      toggleSection,
      toggleSample,
      clearAll,
      setPhoto,
    ],
  );

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
}
