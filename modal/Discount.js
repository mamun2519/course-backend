const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  code: { type: String, required: true },
  amount: { type: Number, required: true },
  valid: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date },
  usageLimit: { type: Number, default: 1 },
  usageCount: { type: Number, default: 0 },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;