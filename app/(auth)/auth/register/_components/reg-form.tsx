import React from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const RegForm = () => {
  return (
    <div className="font-[sans-serif] text-[#333] bg-gray-50">
      <div className="grid md:grid-cols-3 items-center lg:gap-10 gap-4">
        <div className="max-md:order-1 h-screen min-h-full invisible md:visible">
          <img
            src="/asset/formImage.webp"
            className="w-full h-full object-cover"
            alt="login-image"
          />
        </div>
        <form className="md:col-span-2 max-w-2xl w-full p-6 mx-auto">
          <Link href="/auth/login" passHref>
            <div className="mb-4 flex justify-start items-center gap-x-2 cursor-text">
              <AiOutlineRollback />
              <h3 className="font-[Kalnia]">Back</h3>
            </div>
          </Link>
          <div className="mb-8">
            <h3 className="text-4xl text-[#1f1841] font-extrabold font-[Kalnia]">Register</h3>
          </div>
          <div className="py-6">
            {['Name', 'Email'].map((field, index) => (
              <div key={index} className="py-6">
                <label htmlFor={`${field.toLowerCase()}`} className="block text-base font-medium text-gray-900 dark:text-white">
                  {field}<span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  id={`${field.toLowerCase()}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md px-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-1000"
                  placeholder={`Enter ${field.toLowerCase()}`}
                  required
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Password', 'Confirm Password'].map((field, index) => (
              <div key={index}>
                <label htmlFor={`${field.toLowerCase().replace(/\s+/g, '_')}`} className="block text-base font-medium text-gray-900 dark:text-white">
                  {field}<span className='text-red-500'>*</span>
                </label>
                <input
                  type="password"
                  id={`${field.toLowerCase().replace(/\s+/g, '_')}`}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md px-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-between">
            <Button
              type="button"
              variant="hadi"
              className='px-14 py-6 rounded-xl font-bold text-base'
            >
              Register
            </Button>
            <Link href="/auth/login" passHref>
              <Button
                type="button"
                variant="hadi"
                className='bg-gradient-to-r from-[#0f3f5d] via-[#1b785f]0f3f5d to-[#31af98] px-14 py-6 rounded-xl font-bold text-base hover:text-white'
              >
                Login
              </Button>
            </Link>
          </div>
          <Link href="/auth/request-forget-password" passHref>
            <p className="my-4 text-sm text-start cursor-pointer">Forgotten password?</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
