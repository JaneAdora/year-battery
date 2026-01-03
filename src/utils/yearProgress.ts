/**
 * Check if a year is a leap year
 * Leap years are divisible by 4, except centuries unless divisible by 400
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Get the day of year (1-366) for a given date
 */
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Calculate the elapsed days with sub-day precision
 * elapsedDays = (dayOfYear - 1) + (hours + minutes/60 + seconds/3600) / 24
 */
export function getElapsedDays(date: Date): number {
  const dayOfYear = getDayOfYear(date);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const fractionOfDay = (hours + minutes / 60 + seconds / 3600) / 24;
  return (dayOfYear - 1) + fractionOfDay;
}

/**
 * Calculate the percentage of the year remaining
 * Returns a value between 0 and 100
 */
export function getYearRemainingPercentage(date: Date): number {
  const year = date.getFullYear();
  const totalDays = isLeapYear(year) ? 366 : 365;
  const elapsedDays = getElapsedDays(date);
  
  const remainingPercentage = ((totalDays - elapsedDays) / totalDays) * 100;
  
  // Clamp between 0 and 100
  return Math.max(0, Math.min(100, remainingPercentage));
}

/**
 * Format date as "Month DD, YYYY" (e.g., "January 02, 2026")
 */
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Get the color for the battery based on remaining percentage
 * Green: >50% remaining
 * Yellow: 20-50% remaining
 * Red: <20% remaining
 */
export function getBatteryColor(percentage: number): string {
  if (percentage > 50) {
    return '#4ade80'; // Green
  } else if (percentage >= 20) {
    return '#facc15'; // Yellow
  } else {
    return '#ef4444'; // Red
  }
}
