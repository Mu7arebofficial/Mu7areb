
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput';
import LayoutForm from './LayoutForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AdduserData, LogIn  } from '../RTK/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer , toast } from 'react-toastify';
import Loader from '../Loaders/Loader'
import Inpute from '../inputs/Inpute'

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(false)
    const [faildLogin , setFaildLogin] = useState(false)
    const {value: email ,  isTouched: isEmailTouched ,
        isValid: isEmailValid  ,
        inputHandler: emailInputHandler , inputBlurHandler: emailBlurHandler 
    } = useInput( value => value.trim() !== '')
    const {value: pass ,  isTouched: isPassTouched ,
        isValid: isPassValid  ,
        inputHandler: passInputHandler , inputBlurHandler: passBlurHandler 
    } = useInput( value => value.trim() !== '')
    let formValidate = false
    if (isEmailValid && isPassValid) {
        formValidate = true
    }
    const submitFormHandler = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (!formValidate) {
            setLoading(false)
            return;
        }
        try {
            const res = await axios.post('https://e-commerce-hh3m.onrender.com/api/logIn' , {
                email: email,
                password: pass,
                returnSecureToken: true
            })
            dispatch(LogIn(res.data.data.token))
            dispatch(AdduserData({
                email: email,
                id: res.data.data.id,
                role: res.data.data.role,
                brand: res.data?.data?.brand || "none"
            }))
            toast.success('Login successfully')
            navigate('/')               
            
        
        }catch(err) {
            setFaildLogin(true)
        }
        setLoading(false)
    }
    return (
        <>
        <LayoutForm header='Login' >
            <form className='form w-100 p-4 text-white' onSubmit={submitFormHandler}>
            <Inpute name={'email'} label={'Email'} type='text' message={"Your email Cant be empty"} value={email} isValueTouched={isEmailTouched} 
                isValueValid={isEmailValid} handleFunction={emailInputHandler} blurFunction={emailBlurHandler}/>
            <Inpute name={'pass'} label={'Password'} type='password' message={"Your pass Cant be empty"} value={pass} isValueTouched={isPassTouched} 
                isValueValid={isPassValid} handleFunction={passInputHandler} blurFunction={passBlurHandler}/>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link className=' forget text-white d-flex  mt-3'>Forget password?</Link>           
                </div>
                {faildLogin && <p className='text-danger'>Your userName or password is incorrect</p>}
                <div className='buttons'>
                    <button className='btn btn-lg btn-primary d-block w-100 mt-3'>Login</button>
                    <Link to='/signup' className='text-white'><button className='btn btn-lg btn-dark d-block w-100 mt-3'>SignUp</button></Link>
                </div>
            </form>
        </LayoutForm>     
        <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />   
        {loading && <Loader />}
        </>


    )
}

export default LoginForm