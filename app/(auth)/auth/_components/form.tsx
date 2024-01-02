"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AiOutlineRollback } from 'react-icons/ai';
import Link from 'next/link';

const Form = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isLoginDisabled = email.trim() === '' || password.trim() === '';

  const handleLogin = () => {
    // Add your login logic here
    alert('Logging in...');
  };

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
          <Link href="/">
            <div className="mb-4 flex justify-start items-center gap-x-2">
              <AiOutlineRollback />
              <h3 className="font-[Kalnia]">Home</h3>
            </div>
          </Link>
          <div className="mb-8">
            <h3 className="text-4xl text-[#1f1841] font-extrabold font-[Kalnia]">Login</h3>
          </div>
          <div className="py-6">
            <label htmlFor="email" className="block text-base font-medium text-gray-900 dark:text-white">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md px-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-1000"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-900 dark:text-white">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md px-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-1000"
              required
            />
          </div>
          <div className="mt-10 flex justify-between">
            <Button
              type="button"
              variant="hadi"
              className={`px-14 py-6 rounded-xl font-bold text-base ${isLoginDisabled ? 'bg-black cursor-not-allowed ' : 'ml-2'}`}
              disabled={isLoginDisabled}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Link href="/auth/register">
              <Button
                type="button"
                variant="hadi"
                className='bg-gradient-to-r from-[#0f3f5d] via-[#1b785f]0f3f5d to-[#31af98] px-14 py-6 rounded-xl font-bold text-base hover:text-white'
              >
                Register
              </Button>
            </Link>
          </div>
          <Link href="/auth/request-forget-password">
            <p className="my-4 text-sm text-start">Forgotten password?</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Form;
