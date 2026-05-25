import html2canvas from "html2canvas";
import jsPDF from "jspdf";

let isExporting = false;

export async function exportResumePdf(element) {
  if (!element || isExporting) return;
  isExporting = true;

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const width = element.offsetWidth + 5;
    const height = element.offsetHeight;
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [width, height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  } finally {
    isExporting = false;
  }
}
