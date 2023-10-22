import { userLogin,userRegister } from '../redux/features/auth/authAction';
import store from '../redux/store';

export const handleLogin = async (e, email, password,setLoading) => {
  e.preventDefault();
  try {
    if (!email || !password) {
      return alert('Please provide all fields');
    }

    setLoading(true); // Set loading to true when the form is submitted

    await store.dispatch(userLogin({ email, password }));

    setLoading(false); // Set loading to false after successful login
  } catch (error) {
    setLoading(false); // Set loading to false if there is an error during login
    console.error('Login failed:', error);
  }
};



export const handleRegister = async(e,  name, email, password,setLoading) => {
    e.preventDefault();
    try {
        if (!email || !password || !name) {
            return alert('Please provide all fields');
          }
          setLoading(true); 
          await store.dispatch(userRegister({  name, email, password }))
          setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error)
        
    }
}