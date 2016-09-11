import {round, square, divide} from './utils'

export const convertSI = w => round(w * 703, 2)

export const isUnitSI = unit => unit === 'si'

export const calculatesBmi = (w, h) => round(divide(w, square(h)), 1)

export const BMI = (w, h, typeOfUnits) => {
  if (!isUnitSI(typeOfUnits)) {
    return calculatesBmi(convertSI(w), h)
  }

  return calculatesBmi(w, h)
}
