import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const shippingCost = cartTotal > 5000 ? 0 : 500;
  const total = cartTotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = 'MCA' + Math.random().toString(36).substr(2, 9).toUpperCase();
    clearCart();
    navigate('/confirmation', { state: { orderNumber, orderData: formData, total } });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-8 md:py-12">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 text-sm mb-6">
          <span className="text-[#6B7280]">Cart</span>
          <ChevronRight className="w-4 h-4 text-[#6B7280]" />
          <span className="text-[#D32F2F] font-semibold">Checkout</span>
          <ChevronRight className="w-4 h-4 text-[#6B7280]" />
          <span className="text-[#6B7280]">Confirmation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] text-center">Checkout</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        {/* Shipping & Payment */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Information */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#111827] mb-6">Shipping Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F]"
                  placeholder="+213 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F]"
                  placeholder="123 Main Street, Apartment 4B"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F]"
                  placeholder="Algiers"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Postal Code *
                </label>
                <input
                  type="text"
                  name="postalCode"
                  required
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#D32F2F]"
                  placeholder="16000"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#111827] mb-6">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-[#F9FAFB]"
                style={{
                  borderColor: paymentMethod === 'card' ? '#D32F2F' : '#E5E7EB',
                  backgroundColor: paymentMethod === 'card' ? '#FEF2F2' : 'transparent'
                }}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                  className="w-5 h-5 accent-[#D32F2F]"
                />
                <CreditCard className="w-5 h-5 text-[#6B7280]" />
                <div className="flex-1">
                  <p className="font-medium text-[#111827]">Credit / Debit Card</p>
                  <p className="text-sm text-[#6B7280]">Secure payment via CIB</p>
                </div>
              </label>

              <label className="flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-[#F9FAFB]"
                style={{
                  borderColor: paymentMethod === 'cash' ? '#D32F2F' : '#E5E7EB',
                  backgroundColor: paymentMethod === 'cash' ? '#FEF2F2' : 'transparent'
                }}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'cash')}
                  className="w-5 h-5 accent-[#D32F2F]"
                />
                <Wallet className="w-5 h-5 text-[#6B7280]" />
                <div className="flex-1">
                  <p className="font-medium text-[#111827]">Cash on Delivery</p>
                  <p className="text-sm text-[#6B7280]">Pay when you receive</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-[#F9FAFB] rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-bold text-[#111827] mb-6">Order Summary</h2>

            {/* Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                  <div className="w-16 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/100x150/?${encodeURIComponent(item.product.image)}`}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#111827] truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      Size: {item.size} • Qty: {item.quantity}
                    </p>
                    <p className="text-sm font-semibold text-[#111827] mt-1">
                      {(item.product.price * item.quantity).toLocaleString()} DZD
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6 border-t border-[#E5E7EB] pt-4">
              <div className="flex justify-between text-[#6B7280]">
                <span>Subtotal</span>
                <span>{cartTotal.toLocaleString()} DZD</span>
              </div>
              <div className="flex justify-between text-[#6B7280]">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `${shippingCost} DZD`}</span>
              </div>
              <div className="border-t border-[#E5E7EB] pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-[#111827]">Total</span>
                  <span className="font-bold text-xl text-[#111827]">
                    {total.toLocaleString()} DZD
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-xl font-semibold transition-colors"
            >
              Confirm Order
            </button>

            <p className="text-xs text-[#6B7280] text-center mt-4">
              By placing your order, you agree to our Terms and Conditions
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
