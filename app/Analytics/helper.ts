export const handleExportReport = (reportData: (string | number)[][]): void => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    reportData.map((row) => row.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Execution_Report.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
