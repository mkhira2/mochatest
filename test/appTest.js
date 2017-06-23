const assert = require('chai').assert
const app = require('../app')

sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(5,5)
isTrueResult = app.isTrue()
isObjectResult = app.isObject()
countBikesResult = app.countBikes()
goodEnoughResult = app.goodEnough(8)

describe('App', function() {
  describe('sayHello()', function() {
    it('sayHello should return hello', function() {
      assert.equal(sayHelloResult, 'hello')
    })

    it('sayHello should return type string', function() {
      assert.typeOf(sayHelloResult, 'string')
    })
  })

  describe('addNumbers()', function() {
    it('addNumbers should be above 5', function() {
      assert.isAbove(addNumbersResult, 5)
    })

    it('addNumbers should return type number', function() {
      assert.typeOf(addNumbersResult, 'number')
    })
  })

  describe('isTrue()', function() {
    it('isTrue should return true', function() {
      assert.isTrue(isTrueResult)
    })

    it('isTrue should return a boolean', function() {
      assert.typeOf(isTrueResult, 'boolean')
    })
  })

  describe('isObject()', function() {
    it('isObject should return an object', function() {
      assert.isObject(isObjectResult)
    })
  })

  describe('countBikes()', function() {
    it('countBikes should return 3 bikes', function() {
      assert.lengthOf(countBikesResult, 3)
    })
  })

  describe('goodEnough()', function() {
    it('goodEnough should be good enough', function() {
      assert.approximately(goodEnoughResult, 10, 2)
    })
  })
})
