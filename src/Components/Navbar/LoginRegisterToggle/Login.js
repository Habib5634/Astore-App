import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { SlUser,SlDoc,SlDocs } from 'react-icons/sl';

const Login = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="max-w-md px-4 mx-auto ">
      {showRegister ? (
        // Registration Form
        <div>
            <h1 className='text-center text-3xl -mt-10 text-gray-500'>SIGN UP</h1>
            <hr className='mt-2 mb-4'/>
          <label className="text-gray-500">
            First Name<span className='text-red-500'>*</span>
          </label>
          <div className="flex items-center p-1 border mb-4 border-gray-500">
            <SlDoc className="text-gray-500 w-7 h-7" />
            <input
              type="text"
              id="fName"
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
          </div>
          <label className="text-gray-500">
            Last Name<span className='text-red-500'>*</span>
          </label>
          <div className="flex items-center p-1 border mb-4 border-gray-500">
            <SlDocs className="text-gray-500 w-7 h-7" />
            <input
              type="text"
              id="lName"
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
          </div>
          <label className="text-gray-500">
            Email<span className='text-red-500'>*</span>
          </label>
          <div className="flex items-center p-1 border mb-4 border-gray-500">
            <AiOutlineMail className="text-gray-500 w-7 h-7" />
            <input
              type="email"
              id="email"
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
          </div>
          <label className="text-gray-500">
            Password<span className='text-red-500'>*</span>
          </label>
          <div className="relative flex items-center mb-4 p-1 border border-gray-500">
            <AiOutlineLock className="text-gray-500 w-7 h-7" />
            <input
              type={isPasswordHidden ? 'password' : 'text'}
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
            <button
              className="text-gray-500   absolute right-3 inset-y-0 my-auto active:text-gray-500"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              {isPasswordHidden ? (
                <AiFillEyeInvisible className="w-6 h-6" />
              ) : (
                <AiFillEye className="w-6 h-6" />
              )}
            </button>
          </div>
          <p className='text-gray-500 text-sm mb-4'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold cursor-pointer hover:underline text-black'>privacy policy</span>.</p>

          <button
            className='w-full flex border items-center justify-center p-2 font-bold bg-red-500 hover:bg-red-400 text-white transition-colors duration-300 mb-4'
          >
            Register
          </button>
          <hr className='mt-4' />
          <div className='flex flex-col justify-center items-center'>
            <SlUser className='text-6xl text-center opacity-10 mt-4' />
            <p className='text-gray-500 text-sm mb-4'>No account yet?</p>
            <p className='text-gray-500 text-sm mb-4'>
              Registering for this site allows you to access your order status and history. Just fill in the fields
              below, and we’ll get a new account set up for you in no time. We will only ask you for information
              necessary to make the purchase process faster and easier.
            </p>
            <span className='underline underline-offset-4 mb-4 text-gray-500 text-sm cursor-pointer' onClick={toggleForm}>
              Already Have an Account
            </span>
          </div>
        </div>
      ) : (
        // Login Form
        <div>
            <h1 className='text-center text-3xl -mt-10 text-gray-500'>SIGN IN</h1>
            <hr className='mt-2 mb-4'/>
          <label className="text-gray-500">
            Email<span className='text-red-500'>*</span>
          </label>
          <div className="flex items-center p-1 border mb-4 border-gray-500 ">
            <AiOutlineMail className="text-gray-500 w-7 h-7" />
            <input
              type="email"
              id="email"
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
          </div>

          <label className="text-gray-500">
            Password<span className='text-red-500'>*</span>
          </label>
          <div className="relative flex items-center mb-4 p-1 border border-gray-500">
            <AiOutlineLock className="text-gray-500 w-7 h-7" />
            <input
              type={isPasswordHidden ? 'password' : 'text'}
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
            <button
              className="text-gray-500   absolute right-3 inset-y-0 my-auto active:text-gray-500"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              {isPasswordHidden ? (
                <AiFillEyeInvisible className="w-6 h-6" />
              ) : (
                <AiFillEye className="w-6 h-6" />
              )}
            </button>
          </div>

          <button
            className='w-full flex border items-center justify-center p-2 font-bold bg-red-500 hover:bg-red-400 text-white transition-colors duration-300 mb-4'
          >
            Login
          </button>

          <label className='font-bold text-gray-500'>
            Forgot Your Password?
          </label>

          <hr className='mt-4' />
          <div className='flex flex-col justify-center items-center'>
            <SlUser className='text-6xl text-center opacity-10 mt-4' />
            <p className='text-gray-500 text-sm mb-4'>No account yet?</p>
            <p className='text-gray-500 text-sm mb-4'>
              Registering for this site allows you to access your order status and history. Just fill in the fields
              below, and we’ll get a new account set up for you in no time. We will only ask you for information
              necessary to make the purchase process faster and easier.
            </p>
            <span className='underline underline-offset-4 mb-4 text-gray-500 text-sm cursor-pointer' onClick={toggleForm}>
              Create an Account
            </span>
          </div>
        </div>
      )}
    </form>
  );
};

export default Login;
