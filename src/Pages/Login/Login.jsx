import React, { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const [success,setSuccess] = useState("")
    const [error,setError] = useState('')
    const {signIn} = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
      const handleUser =(e)=>{
        setSuccess('')
setError('')
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            console.log(result)
            if(result?.user?.email){
              const userInfo ={
                email:result?.user?.email,
                
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
        <div>
   <h1 className='text-center text-3xl font-extrabold '>Login Now</h1>
       <div className="hero min-h-screen bg-base-200 w-full">
       
        <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-28 ">
          <div >
           
           <img className='h-[350px] w-full' src="https://www.careerguide.com/career/wp-content/uploads/2021/02/gif.gif" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUser} className="card-body">
              
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
                  <a href="#" className="label-text-alt link link-hover">New To Here <Link className='btn btn-link' to='/register'>Register</Link></a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' button className='btn bg-green-500 hover:before:bg-green-900 hover:bg-green-900 text-white' >Login</button>
              </div>
              <SocialLogin/>
            </form>
          </div>
        </div>
      </div>
  </div>
    );
};

export default Login;