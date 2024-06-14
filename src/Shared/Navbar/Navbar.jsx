import React, { useContext } from 'react';
import ActiveLink from '../../Components/ActiveLink';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
     console.log(error.message)
    })
  }

const navitem =<>
<li className='hover:bg-green-500 px-4 py-2 rounded-lg'><ActiveLink to='/'>Home</ActiveLink></li>
<li className='hover:bg-green-500 px-4 py-2 rounded-lg'><ActiveLink to='/about'>About</ActiveLink></li>
<li className='hover:bg-green-500 px-4 py-2 rounded-lg'><ActiveLink to='/contact'>Contact</ActiveLink>
</li> 
<li className='hover:bg-green-500 px-4 py-2 rounded-lg'><ActiveLink to='/dashboard'>Dashboard</ActiveLink>
</li>

{
  user?<>
  <li ><ActiveLink ><button className='btn bg-green-500 hover:before:bg-green-900 hover:bg-green-900 text-white' onClick={handleLogOut}>LogOut</button></ActiveLink>
</li>
<li className='rounded-full'><img className='rounded-full w-14 h-10' src={user?.photoURL} alt="" /></li>
  </>
  :
  <>
   <li ><ActiveLink to='/register'><button className='btn bg-green-500 hover:before:bg-green-900 hover:bg-green-900 text-white' >Register</button></ActiveLink>
</li>
   <li ><ActiveLink to='/login'><button className='btn bg-green-500 hover:before:bg-green-900 hover:bg-green-900 text-white' >Login</button></ActiveLink>
</li>
  </>
}


</>

    return (
        <div>
           
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navitem}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex flex-row justify-evenly gap-8  px-1">
     {navitem}
     
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>   
        </div>
    );
};

export default Navbar;