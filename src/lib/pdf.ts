import jsPDF from 'jspdf';

export function exportChecklistPDF(title: string, items: string[]) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  doc.setFontSize(18);
  doc.text(title, 40, 60);
  doc.setFontSize(12);
  let y = 100;
  items.forEach((it, i) => {
    doc.text(`${i + 1}. ${it}`, 40, y);
    y += 20;
  });
  doc.save(`${title.replace(/\s+/g, '_')}.pdf`);
}
