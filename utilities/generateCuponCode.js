 function generateDiscountCode(amount) {
  // generate a random discount code
  const code = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  // create an object to store the discount code and amount
  const discount = {
    code,
    amount,
    valid: true
  };
  return discount;
}

module.exports=generateDiscountCode