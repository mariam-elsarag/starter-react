import Cookies from "js-cookie";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { handleLanguageChange } from "./utils/helper";
import { Route, Routes } from "react-router-dom";
// Routes
const AppLayout = lazy(() => import("./pages/AppLayout"));

// language
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
];
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const currentLanguageCode = Cookies.get("i18next") || "ar";

  // for language
  const { t } = useTranslation();
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    Cookies.set("i18next", currentLanguageCode);
  }, [currentLanguage, currentLanguageCode, t]);

  return (
    <Suspense>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </Suspense>
  );
};

export default App;
