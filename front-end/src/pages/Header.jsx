import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const userMenu = [];

  return (
<div className="navbar bg-gray-950 h-20 mx-auto flex items-center justify-between">  
  {user ? (
    <div className="dropdown dropdown-end">
      <div className='flex items-center'>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-30 rounded-full">
            <button className="text-white">ยินดีต้อนรับ {user.username}</button>
          </div>
        </div>

        
        <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 h-[100px] absolute bottom-0 left-0 top-full">
          {userMenu.map(el => (
            <li key={el.to}>
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          <div>
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
          </div>
          <li>
            <a href="#contact">ติดต่อสอบถาม</a>
          </li>
          <li>
            <Link to='#' onClick={handleLogout} >ออกจากระบบ</Link>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className='flex gap-x-4'>
      <Link to='/login' className="btn bg-white shadow-md hover:bg-gray-400 pl-2 ml-3 mt-2 w-64 h-10">เข้าสู่ระบบ/สมัครสมาชิก</Link>
    </div>
  )}

  <div className="flex items-center justify-center flex-grow">
    <Link to="/home" className="text-white text-[36px]">บริษัทรถยนต์</Link>
  </div>
</div>


  );
}
