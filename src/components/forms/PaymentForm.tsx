"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';

// Define the form schema using yup
const paymentSchema = yup.object({
  invoiceNumber: yup.string().required('Invoice number is required'),
  amount: yup.number()
    .required('Payment amount is required')
    .positive('Amount must be greater than zero'),
  cardholderName: yup.string().required('Cardholder name is required'),
  cardNumber: yup.string()
    .required('Card number is required')
    .matches(/^[0-9]{16}$/, 'Card number must be 16 digits'),
  expiryDate: yup.string()
    .required('Expiry date is required')
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Expiry date must be in MM/YY format'),
  cvv: yup.string()
    .required('CVV is required')
    .matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
  billingAddress: yup.string().required('Billing address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup.string()
    .required('ZIP code is required')
    .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'ZIP code must be valid'),
  email: yup.string()
    .email('Invalid email format')
    .required('Email is required for receipt'),
});

type PaymentFormData = yup.InferType<typeof paymentSchema>;

const PaymentForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<PaymentFormData>({
    resolver: yupResolver(paymentSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: PaymentFormData) => {
    setIsSubmitting(true);
    
    // Simulate payment processing
    console.log('Payment data:', data);
    
    // In a real implementation, you would:
    // 1. Tokenize the card information using a secure payment processor
    // 2. Send the token and other details to your backend
    // 3. Process the payment server-side
    // 4. Return success/failure to the client
    
    setTimeout(() => {
      setIsSubmitting(false);
      setPaymentComplete(true);
    }, 2000);
  };

  if (paymentComplete) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your payment has been processed successfully. A receipt has been sent to your email address.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pay-online/statements"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Statements
            </a>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Payment</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Invoice Details */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Invoice Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Invoice Number*
                  </label>
                  <input
                    type="text"
                    id="invoiceNumber"
                    {...register('invoiceNumber')}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.invoiceNumber ? 'border-red-300' : ''}`}
                  />
                  {errors.invoiceNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.invoiceNumber.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Amount ($)*
                  </label>
                  <input
                    type="number"
                    id="amount"
                    step="0.01"
                    min="0.01"
                    {...register('amount')}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.amount ? 'border-red-300' : ''}`}
                  />
                  {errors.amount && (
                    <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
              
              <div className="mb-6">
                <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-1">
                  Cardholder Name*
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  {...register('cardholderName')}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.cardholderName ? 'border-red-300' : ''}`}
                />
                {errors.cardholderName && (
                  <p className="mt-1 text-sm text-red-600">{errors.cardholderName.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number*
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  {...register('cardNumber')}
                  placeholder="1234 5678 9012 3456"
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.cardNumber ? 'border-red-300' : ''}`}
                />
                {errors.cardNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date (MM/YY)*
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    {...register('expiryDate')}
                    placeholder="MM/YY"
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.expiryDate ? 'border-red-300' : ''}`}
                  />
                  {errors.expiryDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.expiryDate.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV*
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    {...register('cvv')}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.cvv ? 'border-red-300' : ''}`}
                  />
                  {errors.cvv && (
                    <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Billing Information */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Billing Information</h3>
              
              <div className="mb-6">
                <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Billing Address*
                </label>
                <input
                  type="text"
                  id="billingAddress"
                  {...register('billingAddress')}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.billingAddress ? 'border-red-300' : ''}`}
                />
                {errors.billingAddress && (
                  <p className="mt-1 text-sm text-red-600">{errors.billingAddress.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register('city')}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.city ? 'border-red-300' : ''}`}
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State*
                  </label>
                  <input
                    type="text"
                    id="state"
                    {...register('state')}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.state ? 'border-red-300' : ''}`}
                  />
                  {errors.state && (
                    <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code*
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    {...register('zipCode')}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.zipCode ? 'border-red-300' : ''}`}
                  />
                  {errors.zipCode && (
                    <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email (for receipt)*
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.email ? 'border-red-300' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            {/* Security Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Your payment information is secure. We use industry-standard encryption to protect your data.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Make Payment'
                )}
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
