export const getInitials = (word: string): string => {
  if (!word) return ''

  const initialLetters = word
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
  return initialLetters
}
