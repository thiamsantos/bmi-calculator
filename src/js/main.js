import { isUnitSI, BMI } from './components/bmi'

const $ = document.querySelector.bind(document)

const weightInput = $('#weight')

const heightInput = $('#height')

const resultValue = $('.result__value')

const resultStatus = $('.result__status')

const getBmiStatus = bmi => {
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal'
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight'
  } else if (bmi >= 30 && bmi < 35) {
    return 'Obesity Grade I'
  } else if (bmi >= 35 && bmi < 40) {
    return 'Obesity Grade II (Severe)'
  } else if (bmi >= 40) {
    return 'Obesity Grade III (Morbid)'
  }
}

const typedWeight = () => Number(weightInput.value)

const typedHeight = () => Number(heightInput.value)

const typeOfUnits = () => $('.unit-options:checked').value

const addUnitsToLabel = units => {
  const weightUnit = $('#weight-unit')
  const heightUnit = $('#height-unit')

  if (isUnitSI(units)) {
    weightUnit.textContent = '(in Kilograms)'
    heightUnit.textContent = '(in Meters)'
    return false
  }

  weightUnit.textContent = '(in pounds)'
  heightUnit.textContent = '(in inches)'
}

const showResult = () => {
  if (!typedWeight() || !typedHeight()) {
    if (resultValue.textContent !== '') {
      resultValue.textContent = ''
      resultStatus.textContent = ''
    }
    return false
  }

  const bmi = BMI(typedWeight(), typedHeight(), typeOfUnits())

  resultValue.textContent = bmi
  resultStatus.textContent = getBmiStatus(bmi)
}

const showUnits = () => {
  showResult()
  addUnitsToLabel(typeOfUnits())
}

weightInput.addEventListener('input', showResult)
heightInput.addEventListener('input', showResult)

document
  .querySelectorAll('.unit-options')
  .forEach(node => node.addEventListener('click', showUnits))

showUnits()
