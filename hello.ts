import dayjs from 'dayjs';

const PATTERNS = {
  'M/D/YYYY': 'M/D/YYYY',
  'MM/DD/YYYY': 'MM/DD/YYYY',
  'YYYY-MM-DD': 'YYYY-MM-DD',
}

type DateFormatPattern = keyof typeof PATTERNS;

function formatDate(date: Date, pattern: DateFormatPattern): string {
  return dayjs(date).format(pattern)
}

const formattedDate = formatDate(new Date(), 'YYYY-MM-DD')
console.log("### formattedDate: ", formattedDate);

