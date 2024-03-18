import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Dresses = () => {
  // สร้าง state เพื่อเก็บข้อมูลเสื้อผ้า
  const [dresses, setDresses] = useState([]);

  // เรียกใช้ useEffect เพื่อโหลดข้อมูลเสื้อผ้า
  useEffect(() => {
    const fetchDresses = async () => {
      try {
        // เรียกใช้ Axios เพื่อดึงข้อมูลจาก API
        const response = await axios.get('http://localhost:8888/dresses');
        // อัปเดต state เพื่อเก็บข้อมูลเสื้อผ้าที่ได้รับ
        setDresses(response.data.dresses);
      } catch (error) {
        console.error('Error fetching dresses:', error);
      }
    };

    fetchDresses();
  }, []); // ใช้วงเล็บว่างเพื่อให้ useEffect ทำงานเฉพาะครั้งแรกเท่านั้น

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="navbar1 top-0 z-10 w-full ">
        {/* Logo */}
        <div className="flex-1">
          <img src="../photo/logo.jpg" alt="Logo" className='logo'/>
        </div>
        {/* ลิงก์ Navbar */}
        <div className="flex-1 flex justify-center gap-40">
          <NavLink exact to="/" className="mx-6 font-semibold">หน้าหลัก</NavLink>
          <NavLink to="/dresses" className="mx-6 font-semibold" activeClassName="text-red-600" style={{ color: '#ffff' }}>สินค้า</NavLink>
          <NavLink to="/reviews" className="mx-6 font-semibold" activeClassName="text-red-600">รีวิวจากลูกค้า</NavLink>
          <NavLink to="/contact" className="mx-6 font-semibold" activeClassName="text-red-600">ติดต่อเรา</NavLink>
        </div>
        {/* ลิงก์เข้าสู่ระบบ */}
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
      </div>
      {/* แสดงรายการเสื้อผ้า */}
      <div className='bg'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {dresses.map((dress) => (
            <div key={dress.id} className="p-2 border rounded-md shadow-md sm:p-1 text-center mt-20">
              {/* ลิงก์ไปยังหน้าเสื้อผ้าแต่ละชิ้น */}
              <NavLink to={`/dresses/${dress.id}`}>
                <img src={dress.image} alt={dress.dressesName} style={{ width: '50%', marginLeft: '26%' }} />
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#dc2626' }}>{dress.dressesName}</h3>
                <p className="text-sm mb-2" style={{ color: 'green' }}>{dress.color}</p>
                <p className="text-sm mb-2" style={{ color: 'black' }}>{dress.price}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content" style={{ marginTop:'10%' }}>
        <aside>
          {/* ไอคอนและข้อความ Footer */}
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </aside>
        {/* โซเชียลมีเดีย */}
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Dresses;
โดยโค้ดนี้ได้แบ่งเป็นส่วนต่างๆ ตามลำดับดังนี้:

การใช้ useState เพื่อเก็บข้อมูลเสื้อผ้าและ setDresses เพื่ออัปเดตข้อมูล
การใช้ useEffect เพื่อโหลดข้อมูลเสื้อผ้าเมื่อคอมโพเนนต์ถูกโหลดครั้งแรก
ส่วนของ Navbar ด้านบนที่ประกอบด้วย Logo และลิงก์ไปยังหน้าหลัก, สินค้า, รีวิวจากลูกค้า, และติดต่อเรา
ส่วนของรายการเสื้อผ้าที่แสดงในรูปแบบกริด
ส่วนของ Footer ที่ประกอบด้วยข้อความและไอคอนลิงก์ไปยังโซเชียลมีเดียต่างๆ
