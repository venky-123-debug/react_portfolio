/**
 * Calculates years of experience dynamically from a start date (and optional end date).
 * Returns a string formatted to one decimal place (e.g. "3.6").
 */
export function calculateExperience(startDateStr: string, endDateStr?: string): string {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const decimalYears = years + (months / 12);
  return decimalYears.toFixed(1);
}
