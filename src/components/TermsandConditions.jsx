import React from 'react';
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-20 ">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-20">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
          <p className="mt-1 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="py-4 sm:py-5 sm:px-6">
            <p className="text-sm text-gray-900 mb-4 font-medium">
              Please read these terms carefully before using our services or the online payment facility. 
              Using our services or the online payment facility on this website indicates that you accept these terms. 
              If you do not accept these terms, do not use our services or this facility.
            </p>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">1. General Terms</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>These terms govern your use of IMC B Solutions LLP services and website</li>
                <li>By accessing or using our services, you agree to be bound by these terms</li>
                <li>We reserve the right to modify these terms at any time without prior notice</li>
                <li>Continued use after changes constitutes acceptance of the modified terms</li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">2. Online Payment Terms</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-2">All payments are subject to the following conditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The description of services is specific to your needs when you log in with your unique credentials</li>
                <li>Payment is normally required in advance (before commencing your activity)</li>
                <li>All fees quoted are in Indian Rupees (INR)</li>
                <li>IMC B Solutions LLP reserves the right to change fees at any time</li>
                <li>Payments typically reach our account within two working days</li>
                <li>We cannot accept liability for payments not reaching our account due to incorrect payment details provided by you</li>
                <li>We are not liable if payment is refused or declined by your card issuer</li>
                <li>If your payment is declined, we are not obligated to notify you - you should verify with your bank</li>
                <li>All transactions are subject to validation checks and may be declined at our discretion</li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">3. Refund Policy</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>Refund requests must be made in writing to info@imcbsglobal.com</li>
                <li>Refunds are processed within 7-10 business days of approval</li>
                <li>Service fees may be non-refundable depending on the stage of service delivery</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Processing fees may be deducted from refund amounts</li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">4. Service Usage</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>Services are provided "as is" without warranties of any kind</li>
                <li>You agree to provide accurate and complete information for our services</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>Unauthorized use of our services is prohibited</li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">5. Limitation of Liability</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-2">In no event will IMC B Solutions LLP be liable for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Any damages arising from use or inability to use our services</li>
                <li>The results of use of our services or website</li>
                <li>Any websites linked to our site or their content</li>
                <li>Any indirect, incidental, or consequential damages</li>
              </ul>
              <p className="mt-2">This applies whether based on warranty, contract, tort, or any other legal theory.</p>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">6. Intellectual Property</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>All content on our website is our property or used with permission</li>
                <li>You may not reproduce, distribute, or create derivative works without permission</li>
                <li>Our trademarks and logos may not be used without written consent</li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">7. Governing Law</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>These terms are governed by the laws of India</li>
                <li>Any disputes will be subject to the exclusive jurisdiction of courts in [Your Jurisdiction]</li>
                <li>If any provision is found invalid, the remaining provisions remain in effect</li>
              </ul>
            </div>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">8. Contact Information</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>For questions about these terms, please contact:</p>
              <p className="mt-2 font-medium">IMC B Solutions LLP</p>
              <p>Email: info@imcbsglobal.com</p>
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

export default TermsAndConditions;