import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='px-4'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> */}

          </div>
          <Link to='/' className=" text-xl bg-lime-800 font-bold text-white p-4 border-r-8">UserInfo</Link>
        </div>
        <div className="navbar-center hidden lg:flex">

        </div>
        <div className="navbar-end">
          <Link to='/showGrid' className="btn bg-green-700 text-white border-none">Show User</Link>
        </div>
      </div>

    </div>
  );
};

export default NavBar;