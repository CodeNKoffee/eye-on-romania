import jsPDF from 'jspdf';

export type PDFOptions = {
  countryName?: string;
  isVisaFree?: boolean;
  disclaimer?: string;
  action?: 'download' | 'preview';
  strings?: {
    header?: string;
    subTitle?: string;
    visaFreeBadge?: string;
    visaRequiredBadge?: string;
    notesLabel?: string;
  };
};

export async function exportChecklistPDF(title: string, items: string[], options: PDFOptions = {}) {
  const { countryName = 'your country', isVisaFree = false, disclaimer, action = 'download' } = options;
  const strings = options.strings || {};
  const headerText = strings.header || 'Romanian Visa Checklist';
  const subTitleText = strings.subTitle || title;
  const visaFreeBadge = strings.visaFreeBadge || 'VISA-FREE ENTRY';
  const visaRequiredBadge = strings.visaRequiredBadge || 'SHORT-STAY (C) VISA REQUIRED';
  const notesLabel = strings.notesLabel || 'Important Notes:';

  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.width;

  // Header
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(headerText, 40, 60);

  // Subheader / title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(subTitleText, 40, 82);

  // Country info
  doc.setFontSize(12);
  doc.text(`For citizens of: ${countryName}`, 40, 100);

  // Visa-free or required badge
  doc.setFont('helvetica', 'bold');
  if (isVisaFree) {
    doc.setTextColor(0, 128, 0);
    doc.text(visaFreeBadge, pageWidth - 150, 100, { align: 'right' });
  } else {
    doc.setTextColor(220, 38, 127);
    doc.text(visaRequiredBadge, pageWidth - 170, 100, { align: 'right' });
  }

  // Reset color
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');

  // Items list
  let y = 130;
  const left = 40;
  const maxWidth = pageWidth - left - 40;
  const lineHeight = 14;

  // Normalize items: remove any existing leading numbering like "1.", "1)" or repeated sequences
  const cleanItems = items.map(it => {
    if (typeof it !== 'string') return String(it);
    let s = it;

    // Normalize common Unicode whitespace to simple space
    s = s.replace(/\u00A0/g, ' ');

    // Remove repeated leading numbering groups like "1. ", "1) ", "1. 2. ", etc.
    s = s.replace(/^((\s*\d+[\.\)\-–—:]\s*)+)+/, '');

    // Remove leading bullets or common bullet characters
    s = s.replace(/^[\s\u2022\u2023\u25E6\u2043\-–—]+/, '');

    // Trim remaining whitespace
    return s.trim();
  });

  cleanItems.forEach((it, idx) => {
    // Word wrap the line
    const lines = doc.splitTextToSize(`${idx + 1}. ${it}`, maxWidth);

    // New page if necessary
    if (y + lines.length * lineHeight > doc.internal.pageSize.height - 120) {
      doc.addPage();
      y = 60;
    }

    // Draw bullet/number
    doc.setFont('helvetica', 'bold');
    doc.text(`${idx + 1}.`, left, y + 3);
    doc.setFont('helvetica', 'normal');

    // Draw text
    doc.text(lines, left + 18, y + 3);

    y += lines.length * lineHeight + 8;
  });

  // Add disclaimer and notes near the bottom
  const notes = [] as string[];
  if (disclaimer) notes.push(disclaimer);
  notes.push('Requirements may vary based on individual circumstances.');
  notes.push('Always confirm current requirements with the Romanian Embassy before applying.');
  notes.push('This checklist is for informational purposes only.');

  // Move to bottom or new page
  if (y + notes.length * lineHeight + 60 > doc.internal.pageSize.height) {
    doc.addPage();
    y = 60;
  }

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(10);
  doc.text(notesLabel, left, y + 10);
  notes.forEach((n, i) => {
    const lines = doc.splitTextToSize(`• ${n}`, maxWidth - 20);
    doc.text(lines, left + 6, y + 28 + i * (lineHeight + 2));
  });

  // Generation date
  const genY = doc.internal.pageSize.height - 30;
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, left, genY);

  if (action === 'preview') {
    // Return a blob URL that can be opened in a new tab
    const blob = doc.output('blob');
    const url = URL.createObjectURL(blob);
    return url;
  }

  // Default: download
  doc.save(`${title.replace(/\s+/g, '_')}.pdf`);
  return undefined;
}
