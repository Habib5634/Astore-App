import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { SlUser,SlDoc,SlDocs } from 'react-icons/sl';
import { handleLogin, handleRegister } from '../../../service/authService';
import { toast } from 'react-toastify';

const Login = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleRegister(e, name, email, password, setLoading);
      toast("Registration Successfull")
      toggleForm();
    } catch (error) {
      setLoading(false);
toast("Something Went Wrong")
      console.error('Registration failed:', error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleLogin(e, email, password, setLoading);
      toast("Login Successfull")
    } catch (error) {
      setLoading(false);
      toast("Email or password are wrong")
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast("Logout Successfull")
    setIsLoggedIn(false);
  };

  return (
    <div className="max-w-md px-4 mx-auto ">
      
      {isLoggedIn ? (
        <div>
          <button
            onClick={handleLogout}
            className="w-full flex border items-center justify-center p-2 font-bold bg-red-500 hover:bg-red-400 text-white transition-colors duration-300 mb-4"
          >
            Logout
          </button>
        </div>
      ) : (
      <form onSubmit={showRegister ? handleRegisterSubmit : handleLoginSubmit}>
      {showRegister ? (
        // Registration Form
        <div>
            <h1 className='text-center text-3xl -mt-10 text-gray-500'>SIGN UP</h1>
            <hr className='mt-2 mb-4'/>
          <label className="text-gray-500">
             Name<span className='text-red-500'>*</span>
          </label>
          <div className="flex items-center p-1 border mb-4 border-gray-500">
            <SlDoc className="text-gray-500 w-7 h-7" />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
                  onChange={(e) => setName(e.target.value)}
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent border"
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
              name='email'
              value={email}
                  onChange={(e) => setEmail(e.target.value)}
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
          </div>
          <label className="text-gray-500">
            Password<span className='text-red-500'>*</span>
          </label>
          <div className="relative flex items-center mb-4 p-1 border border-gray-500">
            <AiOutlineLock className="text-gray-500 w-7 h-7" />
            <input
value={password}
onChange={(e) => setPassword(e.target.value)}
            name="password"
              type={isPasswordHidden ? 'password' : 'text'}
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
            <span
              className="text-gray-500   absolute right-3 inset-y-0 my-auto active:text-gray-500"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
              
            >
              {isPasswordHidden ? (
                <AiFillEyeInvisible className="w-6 h-6" />
              ) : (
                <AiFillEye className="w-6 h-6" />
              )}
            </span>
          </div>
          <p className='text-gray-500 text-sm mb-4'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold cursor-pointer hover:underline text-black'>privacy policy</span>.</p>

          <button
          type="submit"
          disabled={loading}
            className='w-full flex border items-center justify-center p-2 font-bold bg-red-500 hover:bg-red-400 text-white transition-colors duration-300 mb-4'
          >
                          {loading ? 'Wait...' : 'SignUp'}

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
              name="email"
              value={email}
                  onChange={(e) => setEmail(e.target.value)}
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
          </div>

          <label className="text-gray-500">
            Password<span className='text-red-500'>*</span>
          </label>
          <div className="relative flex items-center mb-4 p-1 border border-gray-500">
            <AiOutlineLock className="text-gray-500 w-7 h-7" />
            <input
            name="password"
              type={isPasswordHidden ? 'password' : 'text'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
            />
            <span
              className="text-gray-500   absolute right-3 inset-y-0 my-auto active:text-gray-500"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              {isPasswordHidden ? (
                <AiFillEyeInvisible className="w-6 h-6" />
              ) : (
                <AiFillEye className="w-6 h-6" />
              )}
            </span>
          </div>

          <button
          type='submit'
          disabled={loading}
            className='w-full flex border items-center justify-center p-2 font-bold bg-red-500 hover:bg-red-400 text-white transition-colors duration-300 mb-4'
          >
            {loading ? 'Wait...' : 'SignIn'}
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
      )}
    </div>
  );
};

export default Login;
