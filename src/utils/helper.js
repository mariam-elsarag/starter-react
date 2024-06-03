import cookies from "js-cookie";
import i18n from "../../I18next";

export let currentLanguageCode = cookies.get("i18next") || "ar";

// This function help us to toggle between languages
export const handleLanguageChange = () => {
  const targetLanguage = currentLanguageCode === "en" ? "ar" : "en";
  cookies.set("i18next", targetLanguage);
  currentLanguageCode = targetLanguage;
  i18n.changeLanguage(targetLanguage);
};
