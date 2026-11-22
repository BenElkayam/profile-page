# דף פרופיל – בן אלקיים

מטלה בקורס פיתוח ווב · HTML, CSS ו-**Vanilla JavaScript**

🌐 **Live:** https://ben-elkayam.netlify.app

## מבנה
| קובץ | תפקיד |
|---|---|
| `index.html` | שלד סמנטי בלבד: header, nav, sections, form |
| `data.js` | כל התוכן (פרופיל, ניסיון, כישורים, השכלה) כאובייקטים ומערכים |
| `app.js` | רינדור התוכן ל-DOM וכל האינטראקציות |
| `style.css` | עיצוב Mobile-first, RTL, אנימציות, מצב כהה/בהיר |

## JavaScript – מה בפנים
- רינדור דינמי עם `createElement` ו-`textContent` (ללא innerHTML)
- Typewriter מתחלף, מוני מספרים עם `requestAnimationFrame`
- `IntersectionObserver` לחשיפה בגלילה, מונים והדגשת קישור פעיל בתפריט
- סינון ומיון טבלת הכישורים (event delegation)
- תפריט המבורגר למובייל, מצב כהה/בהיר שנשמר ב-`localStorage`
- הטיית כרטיסים בתלת-ממד לפי העכבר, פס התקדמות גלילה, כפתור חזרה למעלה
- ולידציה חיה לטופס, מונה תווים, שליחה ב-`fetch` ל-Netlify Forms והודעת Toast
- העתקת אימייל וטלפון ללוח עם Clipboard API
- נגישות: `aria-expanded`, `aria-pressed`, `aria-live`, תמיכה ב-`prefers-reduced-motion`
