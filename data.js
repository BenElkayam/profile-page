/* ==========================================================
   data.js – כל התוכן של הדף במקום אחד
   כדי לעדכן את הפרופיל משנים רק כאן, בלי לגעת ב-HTML
   ========================================================== */

const profile = {
  name: "בן אלקיים",
  status: "זמין למשרה מלאה",
  titlePrefix: "PMO · מנהל פרויקטים טכנולוגיים ·",
  roles: ["Priority ERP", "Power BI", "AI & Automation", "UAT & Vendors"],
  lead:
    "מנהל פרויקטים טכנולוגיים עם רקע עסקי. מאפיין ומטמיע מערכות ERP, " +
    "מנהל ספקים חיצוניים ובדיקות UAT, ומתרגם צרכים של מחלקות לפתרונות שעובדים בשטח.",
  photo: "profile.webp",
  location: "כפר מעש, מרכז הארץ",
  cv: "cv.pdf",
  links: {
    linkedin: "https://linkedin.com/in/ben-elkayam",
    email: "benelkayam95@gmail.com",
    phone: "050-335-6009",
  },
};

const stats = [
  { value: 600, prefix: "~", suffix: "", label: "משתמשי Priority בארגון" },
  { value: 6, prefix: "", suffix: "+", label: "מחלקות שאני מלווה" },
  { value: 130, prefix: "", suffix: "", label: "חברות לקוח במקביל" },
  { value: 3, prefix: "", suffix: "+", label: "שנות ניהול פרויקטים" },
];

const about = {
  text:
    "הקריירה שלי התחילה במכירות B2B וניהול לקוחות, והמשיכה לניהול פרויקטים טכנולוגיים. " +
    "החיבור בין שני העולמות הוא היתרון שלי: אני מבין את השפה העסקית של המחלקות ואת השפה הטכנית " +
    "של הספקים והמפתחים, ויודע להביא את שני הצדדים לאותה מטרה.",
  cards: [
    { icon: "🧩", title: "אפיון והטמעה", text: "אפיון פונקציונלי וטכני למודולים חדשים ב-Priority, כולל רכש, מלאי, תקציבים והנהלת חשבונות." },
    { icon: "🤝", title: "ניהול ספקים ו-UAT", text: "עבודה מול ספקים חיצוניים, ניהול לוחות זמנים, תסריטי בדיקה ואישור מסירה." },
    { icon: "🧭", title: "ניהול בסביבות מורכבות", text: "ניהול פרויקטים מורכבים מול מחלקות, ספקים והנהלה, בסביבות עבודה מרובות ממשקים." },
    { icon: "💬", title: "יחסי אנוש", text: "יחסים בין-אישיים מצוינים, תקשורת פתוחה ויכולת לגייס אנשים לתהליכי שינוי." },
    { icon: "🤖", title: "AI ואוטומציה", text: "הטמעת מערכות AI ותהליכי אוטומציה לחברות, עם Claude, ‏n8n ו-Supabase." },
  ],
};

const experience = [
  {
    period: "2025 – היום · כשנה וחצי",
    role: "מנהל פרויקטים, מאפיין ומטמיע Priority",
    company: "מנדלסון תשתיות ותעשיות (קבוצת אמיליה) · צריפין",
    bullets: [
      "אפיון והטמעת תהליכים ב-Priority עבור מחלקת המכירות",
      "תיעוד טכני, בחירת ספקים וניהול מערכות כיבוי אש",
      "הפקת דוחות ובניית קטלוג מוצרים לתשתיות מים",
    ],
  },
  {
    period: "2023 – 2025 · כשנה וחצי",
    role: "מנהל פרויקטים טכנולוגיים",
    company: "מוסדות תל אביב",
    bullets: [
      "ניהול Priority ERP (כ-600 משתמשים), ‏Power BI ו-SharePoint בלמעלה מ-6 מחלקות",
      "כתיבת אפיונים פונקציונליים וטכניים לספקים חיצוניים וניהול שלבי UAT",
      "אפיון והטמעה של מודולים חדשים, ובהם תקציבים והנהלת חשבונות",
      "בניית דשבורדים ב-Power BI והגדרת הרשאות (RBAC)",
    ],
  },
  {
    period: "לפני כן",
    role: "מנהל תיקי לקוחות ו-Customer Success Manager",
    company: "Smarti HR",
    bullets: [
      "ניהול שוטף של 130 חברות לקוח במקביל",
      "אחריות על הצלחת הלקוח: קליטה, שימור והרחבת הקשר",
      "עבודה עם CRM פנימי, ניהול תקשורת ושירות מקצה לקצה",
    ],
  },
];

/* level: 3 = בלמידה, 4 = מתקדם, 5 = מומחה */
const skills = [
  { area: "ERP", category: "systems", tools: "Priority: רכש, מלאי, תקציבים, הנהלת חשבונות", level: 5 },
  { area: "ניהול פרויקטים", category: "management", tools: "אפיון, UAT, ניהול ספקים, MS Project, Jira", level: 5 },
  { area: "מיומנויות ניהול", category: "management", tools: "יחסי אנוש, ממשקים מרובים, ניהול בעלי עניין, הובלת שינוי", level: 5 },
  { area: "סייבר ואבטחת מידע", category: "systems", tools: "הסמכה מטעם מערך הסייבר הלאומי", level: 4 },
  { area: "BI ונתונים", category: "data", tools: "Power BI (דשבורדים, RBAC), Excel, SQL", level: 4 },
  { area: "שיתוף פעולה", category: "systems", tools: "SharePoint, Notion", level: 4 },
  { area: "AI ואוטומציה", category: "data", tools: "Claude, n8n, Supabase, Base44", level: 4 },
  { area: "פיתוח ווב", category: "data", tools: "HTML, CSS, JavaScript, Git, Netlify", level: 3 },
];

const skillCategories = [
  { id: "all", label: "הכול" },
  { id: "management", label: "ניהול" },
  { id: "systems", label: "מערכות" },
  { id: "data", label: "נתונים ו-AI" },
];

const levelNames = { 3: "בלמידה", 4: "מתקדם", 5: "מומחה" };

const education = [
  { icon: "🎓", title: "B.Sc. במערכות מידע", text: "המרכז האקדמי למשפט ולעסקים, רמת גן. לימודי ערב, רשימת דיקן. סיום צפוי בשנת הלימודים 2026–2027." },
  { icon: "🛡️", title: "הסמכת סייבר ואבטחת מידע", text: "מערך הסייבר הלאומי." },
  { icon: "📈", title: "בתהליך", tags: ["PL-300 Power BI", "הסמכת Priority", "SQL", "PSPO I"] },
];
