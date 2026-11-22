/* ==========================================================
   utils.js – פונקציות שכתבנו לפי שיעור 2: פונקציות
   https://noawebdevcourse.netlify.app/lessons/lesson-02/functions.html

   כל פונקציה כאן מסומנת בנושא מהשיעור שהיא מדגימה,
   וכל אחת מהן נמצאת בשימוש אמיתי בדף (ראו "שימוש ב:").

   הקובץ נטען לפני data.js ו-app.js, כי פונקציות שמוגדרות
   עם const (arrow functions) אי אפשר לקרוא לפני ההגדרה (Hoisting).
   ========================================================== */


/* 1. Function declaration + early return + פונקציה שמחזירה Boolean (קידומת is)
      שימוש ב: app.js – בדיקת שדה האימייל בטופס */
function isValidEmail(email) {
  if (email === undefined) return false;       // early return – ארגומנט חסר הוא undefined
  const clean = email.trim();
  if (clean === "") return false;              // early return – שדה ריק

  const atIndex = clean.indexOf("@");
  const dotIndex = clean.lastIndexOf(".");
  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < clean.length - 2;
}


/* 2. Function expression + קידומת format + return של ערך חדש
      "050-335-6009" → "+972503356009"
      שימוש ב: app.js – קישור החיוג tel: בפרטי הקשר */
const formatPhone = function (phone) {
  const digits = phone.split("-").join("");    // מסירים מקפים
  return "+972" + digits.slice(1);             // מורידים את ה-0 ומוסיפים קידומת מדינה
};


/* 3. Arrow function עם גוף בלוק + Default parameter + קידומת get
      שימוש ב: app.js – תווית הרמה בטבלת הכישורים */
const getLevelName = (level = 3) => {
  if (level >= 5) return "מומחה";
  if (level === 4) return "מתקדם";
  return "בלמידה";
};


/* 4. Pure function + קידומת calculate
      אותו קלט תמיד מחזיר אותו פלט, בלי לשנות שום דבר מחוץ לפונקציה
      שימוש ב: data.js – המספר "שנות ניהול פרויקטים" מחושב ולא כתוב ידנית */
const calculateYears = (startYear, currentYear) => currentYear - startYear;   // implicit return


/* 5. Arrow function עם implicit return + קידומת is + Default parameter
      שימוש ב: app.js – צביעת מונה התווים כשמתקרבים למגבלה */
const isNearLimit = (length, max = 500) => length > max * 0.9;


/* 6. לולאה בתוך פונקציה – אותה לוגיקה כמו בתרגיל countChar(text, char)
      שימוש ב: app.js – מונה המילים בטופס */
function countChar(text, char) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) count++;
  }
  return count;
}


/* 7. Composition – פונקציה שקוראת לפונקציות אחרות (כמו getReport בבונוס)
      שימוש ב: app.js – הטקסט של מונה התווים והמילים */
function formatCounter(text, max = 500) {
  const words = text.trim() === "" ? 0 : countChar(text.trim(), " ") + 1;   // ternary
  const warning = isNearLimit(text.length, max) ? " ⚠️" : "";
  return `${text.length}/${max} · ${words} מילים${warning}`;
}


/* 8. Composition + Default parameters
      שימוש ב: app.js – תצוגת המספרים בזמן הספירה (~600, ‏6+) */
const formatStat = (value, prefix = "", suffix = "") => prefix + Math.round(value) + suffix;
