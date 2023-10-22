import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../../service/API'
import { toast } from 'react-toastify'



export const userLogin = createAsyncThunk(
    'auth/login',
    async ({  email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('https://enchanting-capris-jay.cyclic.app/signin', {  email, password })
            //store token
            if (data) {
                localStorage.setItem('token', data.token);
                toast.success("Login Successfull")
                
                
                    window.location.replace('/')
              
            }
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
    }
)

//register  

export const userRegister = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('https://enchanting-capris-jay.cyclic.app/signup', { name, email, password })
            if (data) {
                
                toast.success(data.success);
                
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
    }
)


//current user

// export const getCurrentUser = createAsyncThunk(
//     'aith/getCurrentUser',
//     async ({ rejectWithValue }) => {
//         try {
//             const res = await API.get('/auth/current-user')
//             if (res?.data) {
//                 return res?.data
//             }
//         } catch (error) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     }
// )