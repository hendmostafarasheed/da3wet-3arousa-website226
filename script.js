/* Da3wet 3arousa Landing Page
   Add your Google Form responder URL below after creating the form.
   Example: const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/FORM_ID/viewform";
*/
const GOOGLE_FORM_URL = "";

const orderButton = document.getElementById("orderButton");
const formHint = document.getElementById("formHint");
const languageToggle = document.getElementById("languageToggle");
document.getElementById("year").textContent = new Date().getFullYear();

function updateOrderButton() {
  if (GOOGLE_FORM_URL && /^https:\/\/docs\.google\.com\/forms\//.test(GOOGLE_FORM_URL)) {
    orderButton.href = GOOGLE_FORM_URL;
    orderButton.target = "_blank";
    orderButton.rel = "noopener noreferrer";
    formHint.hidden = true;
  } else {
    orderButton.href = "#";
    formHint.hidden = false;
  }
}
updateOrderButton();

orderButton.addEventListener("click", (event) => {
  if (!GOOGLE_FORM_URL || !/^https:\/\/docs\.google\.com\/forms\//.test(GOOGLE_FORM_URL)) {
    event.preventDefault();
    formHint.textContent = document.documentElement.lang === "ar"
      ? "رابط الطلب لم يُضف بعد. أضيفيه في ملف script.js بعد إنشاء Google Form."
      : "The form link is not set yet. Add it in script.js after creating your Google Form.";
  }
});

const translated = document.querySelectorAll("[data-ar][data-en]");
function setLanguage(lang) {
  const arabic = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = arabic ? "rtl" : "ltr";
  translated.forEach(el => { el.innerHTML = arabic ? el.dataset.ar : el.dataset.en; });
  languageToggle.textContent = arabic ? "EN" : "عربي";
  document.title = arabic ? "دعوة عروسة | دعوات إلكترونية" : "Da3wet 3arousa | Digital Invitations";
  document.querySelector('meta[name="description"]').content = arabic
    ? "دعوات إلكترونية فاخرة للخطوبة والفرح والمناسبات الخاصة"
    : "Elegant digital invitations for weddings, engagements and special events.";
}
languageToggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "ar" ? "en" : "ar"));
