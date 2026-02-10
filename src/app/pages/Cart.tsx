import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const shippingCost = cartTotal > 5000 ? 0 : 500;
  const total = cartTotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 bg-[#F9FAFB] rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-[#6B7280]" />
          </div>
          <h1 className="text-3xl font-bold text-[#111827] mb-3">Your cart is empty</h1>
          <p className="text-[#6B7280] mb-8">
            Start shopping to add items to your cart
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-xl font-semibold transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-8 md:py-12">
      <div className="mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#111827] mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827]">Shopping Cart</h1>
        <p className="text-[#6B7280] mt-2">{cartItems.length} items in your cart</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="bg-white border border-[#E5E7EB] rounded-xl p-4 md:p-6"
            >
              <div className="flex gap-4">
                {/* Image */}
                <div className="w-24 h-32 bg-[#F9FAFB] rounded-lg overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/200x300/?${encodeURIComponent(item.product.image)}`}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#111827] truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-[#6B7280] mt-1">Size: {item.size}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="p-2 text-[#6B7280] hover:text-[#D32F2F] hover:bg-[#F9FAFB] rounded-lg transition-colors flex-shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-4 mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-[#E5E7EB] rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="px-3 py-2 hover:bg-[#F9FAFB] transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="px-3 py-2 hover:bg-[#F9FAFB] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="font-semibold text-[#111827]">
                        {(item.product.price * item.quantity).toLocaleString()} DZD
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-[#6B7280]">
                          {item.product.price.toLocaleString()} DZD each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-[#F9FAFB] rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-bold text-[#111827] mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-[#6B7280]">
                <span>Subtotal</span>
                <span>{cartTotal.toLocaleString()} DZD</span>
              </div>
              <div className="flex justify-between text-[#6B7280]">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `${shippingCost} DZD`}</span>
              </div>
              {cartTotal < 5000 && (
                <p className="text-sm text-[#2E7D32]">
                  Add {(5000 - cartTotal).toLocaleString()} DZD more for free shipping
                </p>
              )}
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
              onClick={() => navigate('/checkout')}
              className="w-full px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-xl font-semibold transition-colors mb-3"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="block w-full px-8 py-4 bg-white border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#111827] rounded-xl font-semibold text-center transition-colors"
            >
              Continue Shopping
            </Link>

            <div className="mt-6 pt-6 border-t border-[#E5E7EB] space-y-2 text-sm text-[#6B7280]">
              <p>✓ Secure checkout</p>
              <p>✓ Free returns within 30 days</p>
              <p>✓ Authentic merchandise guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
