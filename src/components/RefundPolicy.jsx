import React from 'react';
import Footer from "./Footer";

const RefundPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-20 ">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-20">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-900">Cancellation & Refund Policy</h1>
          <p className="mt-1 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="py-4 sm:py-5 sm:px-6">
            <p className="text-sm text-gray-900 mb-4">
              At IMC B Solutions LLP, we strive to provide excellent service. Please review our cancellation and refund policy carefully before making a purchase.
            </p>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">1. Cancellation Policy</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Standard Orders:</strong> Orders may be cancelled within 3 hours of placement by emailing us at info@imcbsglobal.com with your order number and payment details.
                </li>
                <li>
                  <strong>Shipped Orders:</strong> No cancellations are accepted once the consignment has been shipped.
                </li>
                <li>
                  <strong>Custom Orders:</strong> Cancellations are not accepted for custom-made products/services under any circumstances.
                </li>
                <li>
                  <strong>Digital Products:</strong> Due to the nature of digital products, cancellations are not permitted after purchase.
                </li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">2. Return Policy</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-2">We accept returns under the following conditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Incorrect/Different Items:</strong> If the received product doesn't match your order, you may request a return within 7 days of delivery.
                </li>
                <li>
                  <strong>Damaged Items:</strong> If your order arrives damaged, do not accept the delivery. Immediately email us clear images of the damaged product along with your order number.
                </li>
                <li>
                  <strong>Return Process:</strong> To initiate a return:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Email us at info@imcbsglobal.com with your order number, reason for return, and images of the product</li>
                    <li>Wait for our confirmation and return shipping instructions</li>
                    <li>Ship the item back to the provided address</li>
                  </ul>
                </li>
                <li>
                  <strong>Non-Returnable Items:</strong> Custom-made products, digital products, and services are not eligible for return unless received damaged.
                </li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">3. Refund Policy</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Refund Amounts:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Orders under ₹2000: Store credit voucher will be issued</li>
                    <li>Orders above ₹2000: Refund to original payment method</li>
                  </ul>
                </li>
                <li>
                  <strong>Processing Time:</strong> Refunds are processed within 10 business days after we receive and verify the returned item.
                </li>
                <li>
                  <strong>Payment Method:</strong> Refunds will be issued to the original payment method unless otherwise specified.
                </li>
                <li>
                  <strong>Non-Refundable Items:</strong> Custom orders, digital products, and services are generally non-refundable.
                </li>
                <li>
                  <strong>Shipping Costs:</strong> Original shipping charges are non-refundable. Return shipping costs are the customer's responsibility unless the return is due to our error.
                </li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">4. Special Cases</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Digital Services:</strong> No refunds are available once services have been rendered or digital products have been accessed.
                </li>
                <li>
                  <strong>Subscription Services:</strong> Cancellations will take effect at the end of the current billing cycle. No prorated refunds for partial months.
                </li>
                <li>
                  <strong>Dispute Resolution:</strong> Any disputes regarding refunds will be resolved on a case-by-case basis at our discretion.
                </li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">5. Contact Us</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>For any questions regarding our cancellation and refund policy, please contact:</p>
              <p className="mt-2 font-medium">IMC B Solutions LLP</p>
              <p>Email: info@imcbsglobal.com</p>
              <p className="mt-2">We typically respond to refund requests within 2 business days.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default RefundPolicy;