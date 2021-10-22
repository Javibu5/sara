const DATE_UNITS = {
  year: 31104000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000;
const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
};

export const getTimeAgo = (timestamp) => {
  const rtf = new Intl.RelativeTimeFormat('es');

  const secondsElapsed = getSecondsDiff(timestamp);
  const { value, unit } = getUnitAndValueDate(secondsElapsed);
  return rtf.format(value, unit as Intl.RelativeTimeFormatUnit);
};

export const getDateString = (timestamp) => {
  const formatter = new Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return formatter.format(timestamp);
};

export const getTimeString = (timestamp: Date) => {
  const formatter = new Intl.DateTimeFormat('es', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return formatter.format(timestamp);
};

export const getNextDay = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
};
