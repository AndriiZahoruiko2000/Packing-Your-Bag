"use client";

import { useEffect } from "react";

const TelegramWebAppInit = () => {
  useEffect(() => {
    const webApp = window.Telegram?.WebApp;

    if (!webApp) {
      return;
    }

    webApp.ready();
    webApp.expand();
  }, []);

  return null;
};

export default TelegramWebAppInit;
