//path : src\common\theme\themeContext.ts

import { createContext, useContext } from 'react'
import { ThemeContextValue } from './themeData'

export const ThemeContext = createContext<ThemeContextValue>(
  {} as ThemeContextValue,
)

export function useTheme() {
  return useContext(ThemeContext)
}
