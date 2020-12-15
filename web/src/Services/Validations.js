import Translations from "../Settings/Translations";

export const required = (value,) =>
  value || typeof value === "number" ? undefined : Translations.fieldRequired;

export const integer = (value) =>
  `${value}`.replace(/ /g, "").match(/^([0-9])?[0-9]+$/g) || value === undefined
    ? undefined
    : Translations.passInteger;

export const maxLength50 = (value="") =>
  value.toString().length < 50
    ? undefined
    : Translations.max50;

export const maxLength100 = (value="") =>
  value.toString().length < 100
    ? undefined
    : Translations.max150;