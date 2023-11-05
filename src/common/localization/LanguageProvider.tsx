//path src/common/localization/LanguageProvider.tsx

import { useState } from 'react'
import { LanguageContext } from './languageContext'
import { LanguageContextValue, LanguageProviderProps } from './languageData'

export function LanguageProvider({
  children,
  currentLanguageCode,
  allLanguages,
}: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState(currentLanguageCode)
  const [literal, setLiteral] = useState(
    allLanguages.find((lang) => lang.languageCode === currentLanguageCode)
      ?.literals || {},
  )

  const updateLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode)
    setLiteral(
      allLanguages.find((lang) => lang.languageCode === languageCode)
        ?.literals || {},
    )
  }

  const contextValue: LanguageContextValue = {
    currentLanguage,
    updateLanguage,
    literal,
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}
