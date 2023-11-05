//path src/common/localization/languageData.ts

import { ReactNode } from 'react'

export type LanguageContextValue = {
  currentLanguage: string
  updateLanguage: (languageCode: string) => void
  literal: Record<string, string>
}

export type LiteralDetails = {
  languageCode: string
  literals: Record<string, string>
}

export type LanguageProviderProps = {
  children: ReactNode
  currentLanguageCode: string
  allLanguages: LiteralDetails[]
}
