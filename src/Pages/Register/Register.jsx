import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import SocialLogin from '../../Components/SocialLogin';
import Swal from 'sweetalert2';

const Register = () => {
  const [success,setSuccess] = useState("")
  const [error,setError] = useState('')
const {createUser} = UseAuth()
const location = useLocation()
const navigate = useNavigate()
const from = location?.state?.from?.pathname || '/'
  const handleUser =(e)=>{
setSuccess('')
setError('')
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email,password)
    .then(result=>{
      console.log(result)
      if(result?.user?.email){
        const userInfo ={
          email:result?.user?.email,
          name: name,
          password: password,
         
        }
        fetch(`https://assinment-server-alpha.vercel.app/user/${result?.user?.email}`,{
          method:"PUT",
          headers:{ "content-type":"application/json",
          
          },
          body:JSON.stringify(userInfo)
        })
        .then(result=>{
          console.log(result)
      })
      .catch(error=>{
          console.log(error.message)
      })
      }

      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Done",
          showConfirmButton: false,
          timer: 1500
        });
      setSuccess("Successfully Register ")
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
    })

  }

    return (
  <div className='bg-base-200 mb-36 pt-12'>
   <h1 className='text-center text-3xl font-extrabold mb-16 '>Register Now</h1>
       <div className="hero min-h-screen bg-base-200 w-full">
       
        <div className="hero-content flex-col lg:flex-row-reverse justify-center gap-28 mx-auto items-center">
          <div >
           
           <img className=' w-3/5 h-[100vh]' src="https://www.careerguide.com/career/wp-content/uploads/2021/02/gif.gif" alt="" />
          </div>
          <div className="card shrink-0 w-full h-[100vh] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                 {success&& <p className='text-green-600'>{success}</p>}
                </label>
                <label className="label">
                 {error&& <p className='text-red-600'>{error}</p>}
                </label>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Already Have an account Please <Link className='btn btn-link' to='/login'>Login</Link></a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' button className='btn bg-green-500 hover:before:bg-green-900 hover:bg-green-900 text-white' >Register</button>
              </div>
              <SocialLogin/>
            </form>
          </div>
        </div>
      </div>
  </div>

    );
};

export default Register;