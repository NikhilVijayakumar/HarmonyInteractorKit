//path src/common/utils/arrayUtils.ts

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * @param array - The array to be shuffled.
 * @returns A new shuffled array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const temp = shuffledArray[i]
    shuffledArray[i] = shuffledArray[randomIndex]
    shuffledArray[randomIndex] = temp
  }
  return shuffledArray
}
