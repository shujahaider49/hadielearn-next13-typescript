import React from 'react';
import { Button } from '@/components/ui/button';
import { AiOutlineRollback } from 'react-icons/ai';
import Link from 'next/link';

const ReqForm = () => {
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
            <h3 className="text-4xl text-[#1f1841] font-extrabold font-[Kalnia]">Reset Password</h3>
          </div>
          <div className="py-6">
            <label htmlFor="email" className="block text-base font-medium text-gray-900 dark:text-white">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md px-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-1000"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mt-5 flex justify-between">
            <Button
              type="button"
              variant="hadi"
              className="px-14 py-6 rounded-xl font-bold text-base"
            >
              Send OTP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReqForm;
