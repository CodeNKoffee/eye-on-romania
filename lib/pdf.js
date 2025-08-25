// lib/pdf.js
import jsPDF from 'jspdf';

export function exportChecklistPDF(filename, items, countryName = 'your country', isVisaFree = false) {
  const pdf = new jsPDF();
  
  // Set up the document
  pdf.setFontSize(20);
  pdf.setFont("helvetica", "bold");
  pdf.text('Romanian Visa Checklist', 20, 30);
  
  // Add country info
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "normal");
  pdf.text(`For citizens of: ${countryName}`, 20, 45);
  
  // Add visa type
  if (isVisaFree) {
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(0, 128, 0); // Green color
    pdf.text('✓ VISA-FREE ENTRY', 20, 55);
    pdf.text('Required for entry:', 20, 70);
  } else {
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(220, 38, 127); // Red color
    pdf.text('SHORT-STAY (C) VISA REQUIRED', 20, 55);
    pdf.text('Required documents:', 20, 70);
  }
  
  // Reset text color
  pdf.setTextColor(0, 0, 0);
  pdf.setFont("helvetica", "normal");
  
  // Add checklist items
  let yPosition = 85;
  const lineHeight = 8;
  const pageHeight = pdf.internal.pageSize.height;
  const margin = 20;
  
  items.forEach((item, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 30) {
      pdf.addPage();
      yPosition = 30;
    }
    
    // Add checkbox
    pdf.rect(20, yPosition - 3, 4, 4);
    
    // Add item text with word wrapping
    const textLines = pdf.splitTextToSize(item, 160);
    pdf.text(textLines, 30, yPosition);
    
    // Adjust y position based on number of lines
    yPosition += textLines.length * lineHeight + 5;
  });
  
  // Add footer with important notes
  const footerY = Math.max(yPosition + 20, pageHeight - 40);
  if (footerY > pageHeight - 40) {
    pdf.addPage();
    yPosition = 30;
  }
  
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "italic");
  pdf.text('Important Notes:', 20, footerY);
  pdf.text('• Requirements may vary based on individual circumstances', 20, footerY + 10);
  pdf.text('• Always confirm current requirements with the Romanian Embassy', 20, footerY + 18);
  pdf.text('• This checklist is for informational purposes only', 20, footerY + 26);
  
  // Add generation date
  pdf.setFontSize(8);
  pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, footerY + 40);
  
  // Save the PDF
  pdf.save(`${filename}.pdf`);
}