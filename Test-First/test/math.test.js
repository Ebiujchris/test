
describe('multiply', function() {
  let chai, expect, multiply;

  before(async function() {
    chai = await import('chai');
    expect = chai.expect;
    multiply = await import('../math.js').then(module => module.default);
  });

  it('should return the product of two numbers', function() {
    const result = multiply(5, 3);
    expect(result).to.equal(15);
  });

//   it('should return 0 when one of the numbers is 0', function() {
//     const result = multiply(5, 0);
//     expect(result).to.equal(0);
//   });

//   it('should return a negative number when one of the numbers is negative', function() {
//     const result = multiply(5, -3);
//     expect(result).to.equal(-15);
//   });

//   it('should return a positive number when both numbers are negative', function() {
//     const result = multiply(-5, -3);
//     expect(result).to.equal(15);
//   });
});
