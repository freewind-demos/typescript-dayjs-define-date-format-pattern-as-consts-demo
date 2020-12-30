TypeScript Dayjs Define Date Format Pattern as Consts Demo
========================================================

格式化日期时，通常需要定义格式，但由于变量名不能包含`/`及`-`等字符，只能定义成类似：

```
const YYYYMMDD_slash = 'YYYY-MM-DD`;
```

尝试结合object property name与type来解决这个问题

```
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
```

```
npm install
npm run demo
```
