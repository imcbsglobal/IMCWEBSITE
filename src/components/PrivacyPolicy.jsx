import React from 'react';
import Footer from "./Footer";


const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-20 ">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-20">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-1 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">1. Information We Collect</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-4">We may collect the following types of information:</p>
              
              <h3 className="font-semibold mb-2">Personal Information:</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Contact details (name, email address, phone number)</li>
                <li>Company/organization information</li>
                <li>Payment information (for paid services)</li>
                <li>Communication preferences</li>
              </ul>
              
              <h3 className="font-semibold mb-2">Non-Personal Information:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Browser type and version</li>
                <li>IP address</li>
                <li>Pages visited and time spent on our website</li>
                <li>Device information</li>
                <li>Cookies and tracking data</li>
              </ul>
            </div>
          </div>
          
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">2. How We Use Your Information</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide and maintain our services</li>
                <li>Communicate with you about our products and services</li>
                <li>Improve our website and user experience</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Detect and prevent fraudulent activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>
          
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">3. Data Security</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-2">We implement appropriate security measures to protect your personal information, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Encryption of sensitive data</li>
                <li>Secure servers and networks</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication procedures</li>
              </ul>
              <p className="mt-2">While we strive to protect your personal information, no method of transmission over the Internet is 100% secure.</p>
            </div>
          </div>
          
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">4. Cookies and Tracking</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-2">We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Remember user preferences</li>
                <li>Analyze website traffic</li>
                <li>Improve website functionality</li>
              </ul>
              <p className="mt-2">You can control cookies through your browser settings, but disabling them may affect website functionality.</p>
            </div>
          </div>
          
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">5. Third-Party Services</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>We may use third-party services that collect information to provide:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Analytics services</li>
                <li>Payment processing</li>
                <li>Customer support tools</li>
                <li>Marketing automation</li>
              </ul>
              <p className="mt-2">These third parties have their own privacy policies governing their use of information.</p>
            </div>
          </div>
          
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">6. Your Rights</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us at info@imcbsglobal.com.</p>
            </div>
          </div>
          
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">7. Changes to This Policy</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website and updating the "Last Updated" date.</p>
            </div>
          </div>
          
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-gray-50">
            <div className="text-sm font-medium text-gray-500">8. Contact Us</div>
            <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;