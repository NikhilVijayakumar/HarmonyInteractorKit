//src/common/localization/languageContext.ts

import { createContext, useContext } from 'react'
import { LanguageContextValue } from './languageData'

export const LanguageContext = createContext<LanguageContextValue>(
  {} as LanguageContextValue,
)

export function useLanguage() {
  return useContext(LanguageContext)
}
