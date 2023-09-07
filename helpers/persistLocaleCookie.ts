import { setCookie } from "cookies-next";

type ILocales = "en" | "pt";

export function persistLocaleCookie(locale: ILocales) {
  setCookie("NEXT_LOCALE", locale, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
}
