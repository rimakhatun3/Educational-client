import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googgleSignIn} = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const handleSubmit =()=>{
        googgleSignIn()
        .then(result=>{
            console.log(result)
           
            navigate(from,{replace:true})
          })
          .catch(error=>{
            console.log(error.message)
           
          })
    }
    return (
        <div>
           <div className="form-control mt-6">
                <button onClick={handleSubmit} type='submit' button className='btn bg-green-500 hover:before:bg-green-900 hover:bg-green-900 text-white' >Goggle Login</button>
              </div>  
        </div>
    );
};

export default SocialLogin;