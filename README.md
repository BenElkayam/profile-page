# דף פרופיל – בן אלקיים

מטלה בקורס פיתוח ווב · HTML, CSS ו-**Vanilla JavaScript**

🌐 **Live:** https://ben-elkayam.netlify.app

## מבנה הקבצים
| קובץ | תפקיד |
|---|---|
| `index.html` | שלד סמנטי בלבד |
| `utils.js` | 🟢 פונקציות שכתבנו לפי **שיעור 2: פונקציות** |
| `data.js` | כל התוכן כאובייקטים ומערכים |
| `app.js` | 🔵 רינדור הדף והאינטראקציות |
| `style.css` | עיצוב, RTL, אנימציות, מצב כהה/בהיר |

סדר הטעינה: `utils.js` ← `data.js` ← `app.js`. ‏`utils.js` ראשון כי arrow functions שמוגדרות עם `const` לא עוברות Hoisting.

---

## 🟢 פונקציות שכתבנו לפי שיעור 2 (`utils.js`)

| פונקציה | נושא מהשיעור | איפה בשימוש |
|---|---|---|
| `isValidEmail(email)` | Function declaration, ‏early return, ‏Boolean עם קידומת `is`, ארגומנט חסר = `undefined` | בדיקת האימייל בטופס |
| `formatPhone(phone)` | Function expression, קידומת `format`, ‏`return` | קישור החיוג בפרטי הקשר |
| `getLevelName(level = 3)` | Arrow עם גוף בלוק, ‏Default parameter, קידומת `get` | תוויות הרמה בטבלת הכישורים |
| `calculateYears(start, current)` | Pure function, ‏implicit return, קידומת `calculate` | המספר "שנות ניהול פרויקטים" |
| `isNearLimit(length, max = 500)` | Arrow עם implicit return, ‏Boolean, ‏Default parameter | צביעת מונה התווים |
| `countChar(text, char)` | לולאה, אינדקס במחרוזת `text[i]`, ‏local scope | ספירת מילים בטופס |
| `formatCounter(text, max)` | Composition (קוראת ל-`countChar` ו-`isNearLimit`), ‏ternary | טקסט מונה התווים |
| `formatStat(value, prefix, suffix)` | Arrow, ‏Default parameters | המספרים בזמן הספירה |

נושאים נוספים מהשיעור שמופיעים ב-`app.js`:
- **Callback:** ‏`setTimeout(tick, delay)` מעביר פונקציה בלי סוגריים
- **Functions as values:** האובייקט `validators` מחזיק פונקציות
- **Block scope:** ‏`roleIndex` ו-`charIndex` קיימים רק בתוך `startTypewriter`

---

## 🔵 פונקציות שכתבנו ב-`app.js`

| קבוצה | פונקציות |
|---|---|
| עזר | `$`, ‏`$$`, ‏`el`, ‏`showToast` |
| בניית הדף | `renderHero`, ‏`renderStats`, ‏`createCard`, ‏`renderAbout`, ‏`renderExperience`, ‏`renderEducation`, ‏`renderContact`, ‏`renderSkills` |
| אינטראקציות | `startTypewriter`, ‏`animateCount`, ‏`initCounters`, ‏`initSkillFilters`, ‏`initScrollEffects`, ‏`initMenu`, ‏`initTheme`, ‏`initPointerEffects`, ‏`validateField`, ‏`initForm` |

---

## ⚙️ פונקציות כלליות (מובנות ב-JavaScript ובדפדפן)

| תחום | פונקציות |
|---|---|
| מחרוזות ומספרים | `trim`, ‏`indexOf`, ‏`lastIndexOf`, ‏`split`, ‏`join`, ‏`slice`, ‏`Math.round`, ‏`Math.min`, ‏`Math.pow`, ‏`Number` |
| מערכים ואובייקטים (שיעור 3) | `map`, ‏`filter`, ‏`forEach`, ‏`sort`, ‏`find`, ‏`every`, ‏`Object.keys`, ‏`Object.entries` |
| DOM | `querySelector`, ‏`createElement`, ‏`append`, ‏`replaceChildren`, ‏`setAttribute`, ‏`classList`, ‏`closest`, ‏`getBoundingClientRect` |
| אירועים | `addEventListener`, ‏`preventDefault` |
| תזמון | `setTimeout`, ‏`clearTimeout`, ‏`requestAnimationFrame`, ‏`performance.now` |
| Web APIs | `IntersectionObserver`, ‏`matchMedia`, ‏`localStorage`, ‏`navigator.clipboard`, ‏`fetch`, ‏`FormData`, ‏`URLSearchParams` |
| תאריך | `new Date().getFullYear()` |

בקוד עצמו כל פונקציה מסומנת בהערה: 🟢 ‏`[שיעור 2]`, ‏🔵 ‏`[שלנו]` או ⚙️ ‏`[מובנה]`.
