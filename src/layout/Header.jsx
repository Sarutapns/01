import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../layout/styles.css';


function AuthenticatedHeader({ user, handleLogout }) {
  return (
    <div className="navbar bg-purple-600">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Hello, {user.firstName}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/profile">โปรไฟล์ของฉัน</Link>
          </li>
          <li>
            <Link to="/settings">ตั้งค่า</Link>
          </li>
          <li>
            <Link to='/' onClick={handleLogout}>ออกจากระบบ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function AdminHeader({ user, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <div className="navbar bg-yellow-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/add">Homepage</a></li>
            <li><a href="พอร์ตโฟลิโอ">Portfolio</a></li>
            <li><a href="เกี่ยวกับ">About</a></li>
          </ul>

        </div>
      </div>
      <div className="flex-1 d-flex">
        <a className="btn btn-ghost text-xl">สวัสดี {user.firstName}</a>
      </div>
      <div>
        <li>
          <button onClick={handleLogoutClick} style={{ fontWeight: 'bold', cursor: 'pointer' }}>ออกจากระบบ</button>
        </li>
      </div>
    </div>
  );
}



function GuestHeader() {
  
  return (
   < div className="relative">
    <div className="navbar1 z-10 w-full ">
       <div className= "flex-1">
        <img src="../photo/logo.jpg" alt="Logo" className='logo'/>
       </div>
       <div className="flex-1 flex justify-center gap-40 ">
         <NavLink exact to="/" className="mx-6 font-semibold "style={{ color : '#ffff'}}>หน้าหลัก</NavLink>
         <NavLink to="/dresses" className="mx-6 font-semibold" activeClassName="text-red-600 ">สินค้า</NavLink> 
         <NavLink to="/reviews" className="mx-6 font-semibold" activeClassName="text-red-600 ">รีวิวจากลูกค้า</NavLink>
         <NavLink to="/contact" className="mx-6 font-semibold" activeClassName="text-red-600 ">ติดต่อเรา</NavLink> 
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
             <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '1rem' }}>
               <li>
                 <NavLink to="/login" className="mx-3 text-sm" style={{ color: '#ffff' }}>เข้าสู่ระบบ</NavLink>
               </li>
               <li> 
                 <NavLink to="/register" className="mx-5 text-sm" style={{ color: '#ffff' }}>สมัครใช้งาน</NavLink>
               </li>
              </ul>
          </div>

        <div className='bg01 w-full fixed'>
          <video autoPlay muted loop playsInline>
            <source src="./photo/v02.mp4" type="video/mp4"/>
          </video>
        </div>
        <p className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{fontSize:'50px',color:'#fff',fontFamily:'fantasy'}}>บริการเช่าชุดราตรี</p>
      </div>
    </div>
  );
}

function Header() {
  const { user, logout } = useAuth();

  if (user?.role === 'ADMIN') {
    return <AdminHeader user={user} handleLogout={logout} />;
  }

  return user?.id ? (
    <AuthenticatedHeader user={user} handleLogout={logout} />

  ) : (
    <GuestHeader />
  );
}

export default Header;