const Discount = require("../modal/Discount");


function saveDiscountCodeToDb(discount) {
    // Create a new discount object
    const newDiscount = new Discount(discount);

    // Save the discount to the database
    newDiscount.save()
        .then(() => {
            console.log(`Discount code ${discount.code} saved to the database.`);
        })
        .catch(err => {
            console.error(`Error saving discount code ${discount.code} to the database: ${err}`);
        });
}
module.exports=saveDiscountCodeToDb