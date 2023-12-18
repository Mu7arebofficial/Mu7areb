import React, { useState } from 'react'
import LayoutForm from './LayoutForm'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { AdduserData, LogIn } from '../RTK/Slices/CartSlice'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '../Loaders/Loader'
import Inpute from '../inputs/Inpute'
const SignupForm = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(false)
    const [image1 , setImage1] = useState('')
    const image1Handler = (e) => {
        setImage1(e.target.files[0])
    }
    const [err , setError] = useState(false)
    const {value: firstName , isValid: isFirstNameValid ,
        isTouched: isFirstNameTouched ,inputHandler: fNameInputHandler 
        , blurInputHandler: fNameBlurHandler } = useInput(value => value.trim() !== '')
    const {value: lastName , isValid: isLastNameValid ,
        isTouched: isLastNameTouched ,inputHandler: lNameInputHandler 
        , blurInputHandler: lNameBlurHandler } = useInput(value => value.trim() !== '')
    const {value: mail , isValid: isEmailValid ,
        isTouched: isEmailTouched ,inputHandler: emailInputHandler ,
        blurInputHandler: emailBlurHandler } = useInput(value => value.includes('@'))
    const {value: pass ,  isTouched: isPassTouched ,
        isValid: isPassValid , inputHandler: passInputHandler 
        , inputBlurHandler: passBlurHandler 
    } = useInput( value => value.trim() !== '')
    let formValidate = false 
    if (isEmailValid && isFirstNameValid && isPassValid && isLastNameValid){
        formValidate = true
    }    
    const formHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!formValidate){
            setLoading(false)
            return;
        }
        const form = new FormData();
        form.append("firstName" , firstName)
        form.append("lastName" , lastName)
        form.append("password" , pass)
        form.append("email" , mail)
        form.append("avatar" , image1)
        try {
            const res = await axios.post('https://e-commerce-hh3m.onrender.com/api/signUp' , form)
            console.log(res)
            await dispatch(LogIn(res.data.data.newUser.token))   
            await dispatch(AdduserData({
                email: res.data.data.newUser.email,
                id: res.data.data.newUser._id,
                role: res.data.data.newUser.role
            }))   
            setLoading(false)
            toast.success('Sign up successfully')
            Navigate('/')          
            
        
        }catch(error) {
            setError(true)
            setLoading(false)
        }


    }
    return (
        <>


        <LayoutForm header='Signup'>
            <form className='w-100 p-4 text-white' onSubmit={formHandler}>
                
                <Inpute name={'fname'} label={'First Name'} type='text' message={"Your first name can't be empty"} value={firstName} isValueTouched={isFirstNameTouched} 
                isValueValid={isFirstNameValid} handleFunction={fNameInputHandler} blurFunction={fNameBlurHandler}/>
                <Inpute name={'lname'} label={'Last Name'} type='text' message={"Your last name can't be empty"} value={lastName} isValueTouched={isLastNameTouched} 
                isValueValid={isLastNameValid} handleFunction={lNameInputHandler} blurFunction={lNameBlurHandler}/>
                <Inpute name={'mail'} label={'Email'} type='text' message={"Your Email must be valid"} value={mail} isValueTouched={isEmailTouched} 
                isValueValid={isEmailValid} handleFunction={emailInputHandler} blurFunction={emailBlurHandler}/>
                <Inpute name={'pass'} label={'Password'} type='password' message={"Your pass Can't be empty"} value={pass} isValueTouched={isPassTouched} 
                isValueValid={isPassValid} handleFunction={passInputHandler} blurFunction={passBlurHandler}/>
                
                {err && <p className='text-danger'>somthing went wrong please try again</p>}
                <div className='productCustomizeImage d-flex flex-column justify-content-center w-100 mt-4 align-items-center'>  
                        {image1 ? <img src={URL.createObjectURL(image1)} alt='img1' />: <img src="https://pbs.twimg.com/media/FtsxswzaUAAZXJj?format=jpg&name=small" alt='img1'/>}
                        <label  className='btn  btn-danger mt-4' htmlFor='image-upload1'>Add Profile Image</label>                              
                </div>
                <input className='d-none' type='file' onChange={image1Handler} id='image-upload1' accept='image/jpeg, image/png, image/jpg' />
                <div className='buttons'>
                    <button className='btn btn-lg btn-primary d-block w-100 mt-3'>SignUp</button>
                    <Link to='/login' className='text-white'><button className='btn btn-lg btn-dark d-block w-100 mt-3'>Login</button></Link>
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

export default SignupForm