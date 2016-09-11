import assert  from 'assert'
import * as bmi from '../src/js/components/bmi'

describe('bmi functions', () => {
  describe('convert to SI', () => {
    it('should convert to si', () =>
      assert.equal(bmi.convertSI(140), 98420))
    it('should convert float numbers', () =>
      assert.equal(bmi.convertSI(52.3), 36766.9))
  })

  describe('is unit in SI', () => {
    it('should return false', () =>
      assert.equal(bmi.isUnitSI('us'), false))
    it('should return true', () =>
      assert.equal(bmi.isUnitSI('si'), true))
  })

  describe('calculate bmi', () => {
    it('should calculate bmi with floats', () =>
      assert.equal(bmi.calculatesBmi(65.6, 1.8), 20.3))
    it('should calculate bmi with integers', () =>
      assert.equal(bmi.calculatesBmi(80, 2), 20))
  })

  describe('bmi main function', () => {
    it('should calculate in SI', () =>
      assert.equal(bmi.BMI(65, 1.8, 'si'), 20.1))
    it('should calculate in US measure', () =>
      assert.equal(bmi.BMI(143.3, 70.86, 'us'), 20.1))
  })
})
