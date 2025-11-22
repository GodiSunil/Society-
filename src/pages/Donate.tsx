import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';

const Donate = () => {
  return (
    <Layout>
      <Breadcrumb title="Donate" />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#f15a24] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Donate to Our Cause</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your generous contribution will help us continue our mission to support those in need. 
              Every contribution makes a difference.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bank Transfer Details</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  For those interested in supporting our cause, you can directly transfer funds to our bank account 
                  using the details below. We appreciate your generosity and commitment to helping those in need.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-[#f15a24] mb-4">Bank Account Information</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Account Holder Name:</span>
                      <span className="mt-1 sm:mt-0">Development Society for Poor</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Bank Name:</span>
                      <span className="mt-1 sm:mt-0">State Bank of India</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Account Number:</span>
                      <span className="mt-1 sm:mt-0 font-mono">1234567890123456</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">IFSC Code:</span>
                      <span className="mt-1 sm:mt-0 font-mono">SBIN0002499</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Branch:</span>
                      <span className="mt-1 sm:mt-0">New Delhi Main Branch</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2">
                      <span className="font-medium text-gray-700">Account Type:</span>
                      <span className="mt-1 sm:mt-0">Savings</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Important Instructions</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>After completing the transfer, please email us the transaction details at <strong>donate@poordevelopment.org</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Include your name and contact information in the email for our records</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You will receive a confirmation receipt from us within 2 business days</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-2">
                    For any questions regarding donations, please contact us at:
                  </p>
                  <p className="font-medium text-lg">
                    donate@poordevelopment.org | +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
