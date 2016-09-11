export const round = (n, alg) => Number(Math.round(n + 'e' + alg) + 'e-' + alg)

export const square = n => round(n * n, 2)

export const divide = (a, b) => {
  if (b === 0) return 0
  return round(a / b, 2)
}
