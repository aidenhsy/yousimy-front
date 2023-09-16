import dayjs from "dayjs";
import { checkDateGroup } from "./checkDateGroup";

export interface TranslationDictionary {
  [key: string]: {
    label: string;
    values: {
      [key: string]: string;
    };
  };
}

type OriginalObject = Record<string, any>;

export const translateObject = (
  obj: OriginalObject,
  translationDict: TranslationDictionary
): Record<string, string> => {
  const translatedObject: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (translationDict.hasOwnProperty(key)) {
      const translationInfo = translationDict[key];
      const translatedKey = translationInfo.label;
      let translatedValue: string;
      if (key === 'birthday_range' || key === 'actual_conversion_time') {
        translatedValue = checkDateGroup(key === 'actual_conversion_time' ? dayjs(value[0]).format('MM-DD') : value[0])
      } else if (key.includes('months')) {
        translatedValue = value.map((item: any) => translationInfo.values[item]).join('、');
      } else if (key.includes('date') || key.includes('day')) {
        if (Array.isArray(value)) {
          translatedValue = value.map((date: any) => dayjs(date).format('YYYY-MM-DD')).join(' - ');
        } else {
          translatedValue = value ? dayjs(value).format('YYYY-MM-DD') : value;
        }
      } else {
        translatedValue = Array.isArray(value)
          ? value.map((item: any) => translationInfo.values[item]).join('、')
          : translationInfo.values[value as string] || value;
      }

      translatedObject[translatedKey] = translatedValue;
    } else {
      translatedObject[key] = value?.toString();
    }
  }

  return translatedObject;
};

