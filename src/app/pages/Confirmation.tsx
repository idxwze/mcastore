import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, Package, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Confirmation() {
  const location = useLocation();
  const { t, isRTL } = useLanguage();
  const { orderNumber, orderData, total } = location.state || {};

  if (!orderNumber || !orderData) {
    return <Navigate to="/" replace />;
  }

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 4);
  const deliveryDate = estimatedDelivery.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-8 md:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Success Icon */}
        <div className={`text-center mb-8 ${isRTL ? 'text-right' : ''}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2E7D32] rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-3">
            Thank You!
          </h1>
          <p className="text-xl text-[#6B7280]">
            Your order has been confirmed
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 mb-6">
          <div className={`grid md:grid-cols-2 gap-6 mb-8 ${isRTL ? 'text-right' : ''}`}>
            <div>
              <p className="text-sm text-[#6B7280] mb-1">Order Number</p>
              <p className="text-xl font-bold text-[#111827]">{orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-[#6B7280] mb-1">Estimated Delivery</p>
              <p className="text-xl font-bold text-[#2E7D32]">{deliveryDate}</p>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB] pt-6 mb-6">
            <h2 className={`font-bold text-[#111827] mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <MapPin className="w-5 h-5" />
              Delivery Address
            </h2>
            <div className={`bg-[#F9FAFB] rounded-lg p-4 ${isRTL ? 'text-right' : ''}`}>
              <p className="font-medium text-[#111827]">{orderData.fullName}</p>
              <p className="text-sm text-[#6B7280] mt-1">{orderData.address}</p>
              <p className="text-sm text-[#6B7280]">
                {orderData.city}, {orderData.postalCode}
              </p>
              <p className="text-sm text-[#6B7280] mt-2">{orderData.phone}</p>
              <p className="text-sm text-[#6B7280]">{orderData.email}</p>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB] pt-6">
            <h2 className={`font-bold text-[#111827] mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Package className="w-5 h-5" />
              Order Total
            </h2>
            <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-[#6B7280]">Total Amount</span>
              <span className="text-2xl font-bold text-[#111827]">
                {total.toLocaleString()} DZD
              </span>
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className={`bg-[#F0F9FF] border border-[#BFDBFE] rounded-xl p-4 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-sm font-medium text-[#1E40AF] mb-1">Track Your Order</p>
            <p className="text-xs text-[#6B7280]">
              You'll receive tracking details via email and SMS
            </p>
          </div>
          <div className={`bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-sm font-medium text-[#2E7D32] mb-1">Need Help?</p>
            <p className="text-xs text-[#6B7280]">
              Contact our support team for any questions
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <Link
            to="/shop"
            className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-xl font-semibold transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('btn.continueShopping')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
          <Link
            to="/contact"
            className="flex-1 px-8 py-4 bg-white border-2 border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#111827] rounded-xl font-semibold text-center transition-colors"
          >
            Track Order
          </Link>
        </div>

        {/* Email Confirmation */}
        <p className={`text-center text-sm text-[#6B7280] mt-8 ${isRTL ? 'text-right' : ''}`}>
          A confirmation email has been sent to{' '}
          <span className="font-medium text-[#111827]">{orderData.email}</span>
        </p>
      </div>
    </div>
  );
}
