import assert  from 'assert'
import {divide, round, square} from '../src/js/components/utils'

describe('Utils', () => {
  describe('divide', () => {
    it('should divide integers', () =>
      assert.equal(divide(4, 2), 2))
    it('should divide numbers with zero', () =>
      assert.equal(divide(1, 0), 0))
    it('should divide zero', () =>
      assert.equal(divide(0, 2), 0))
    it('should result float numbers', () =>
      assert.equal(divide(1, 3), 0.33))
    it('should divide negative numbers', () =>
      assert.equal(divide(-2, 2), -1))
  })

  describe('round', () => {
    describe('with one algorism', () => {
      it('should round negative numbers', () =>
        assert.equal(round(-0.889, 1), -0.9))
      it('should round repeating decimal', () =>
        assert.equal(round(0.333333, 1), 0.3))
      it('should round to up', () =>
        assert.equal(round(0.469, 1), 0.5))
    })

    describe('with two algorisms', () => {
      it('should round negative numbers', () =>
        assert.equal(round(-0.899, 2), -0.9))
      it('should round repeating decimal', () =>
        assert.equal(round(0.333333, 2), 0.33))
      it('should round to up', () =>
        assert.equal(round(0.469, 2), 0.47))
    })
  })

  describe('square', () => {
    it('should square integers', () =>
      assert.equal(square(2), 4))
    it('should square floats', () =>
      assert.equal(square(2.5), 6.25))
    it('should square negatives integers', () =>
      assert.equal(square(-3), 9))
    it('should square negatives floats', () =>
      assert.equal(square(-0.8), 0.64))
  })

  describe('convertSI', () => {
    it
  })
})

