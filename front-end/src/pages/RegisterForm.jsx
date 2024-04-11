import axios from 'axios'
import {useState} from "react";
import { Link } from 'react-router-dom';


export default function RegisterForm() {
  const [input, setInput] = useState({
    first_name : '',
    last_name: '',
    username: '',
    password: '',
    phone: '',
    email: '',
    gender: '',
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('สมัครสมาชิกสำเร็จ')
      }
    }catch(err) {
      console.log('เกิดข้อผิดพลาดในการดึงข้อมูล:', err.message)
    }

  }
  return (
    <div className="p-5 border w-4/6 min-w-[1000px] mx-auto rounded mt-5 ">
      <div className="text-3xl mb-10 text-center">สมัครสมาชิก</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>

      <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">ชื่อจริง</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="first_name"
            placeholder="ชื่อจริง"
            value={input.first_name}
            onChange={ hdlChange }
          />
          </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">นามสกุล</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="last_name"
            placeholder="นามสกุล"
            value={input.last_name}
            onChange={ hdlChange }
          />
          </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">เพศ</span>
          </div>
          <select
            className="select select-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="gender"
            value={input.gender}
            onChange={hdlChange}        
          >
            <option value="">เลือกเพศของคุณ</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="other">อื่นๆ</option>
          </select>
            
          </label>
          

        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="username"
            placeholder="Username"
            value={input.username}
            onChange={ hdlChange }
          />
        </label>
          
      
        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="password"
            placeholder="password"
            value={input.password}
            onChange={ hdlChange }
          />
        </label>


        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">เบอร์โทรศัพท์</span>
          </div>
          <input
            type="number"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="phone"
            placeholder="เบอร์โทรศัพท์"
            value={input.phone}
            onChange={ hdlChange }
          />
          </label>

        
        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">อีเมล</span>
          </div>
          <input
            type="email"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="email"
            placeholder="อีเมล"
            value={input.email}
            onChange={ hdlChange }
          />
        </label>


        <div className="flex justify-center gap-5">
           <button type="submit" className="btn bg-black border-white border-[2px] text-white shadow-md hover:bg-white hover:border-black hover:text-black pl-2 ml-3 mt-5 w-64 h-10">สมัครสมาชิก</button>
           <button type="reset" className="btn bg-red-500 border-white border-[2px] text-white shadow-md hover:bg-white hover:border-red-500 hover:text-red-500 pl-2 ml-3 mt-5 w-64 h-10">ยกเลิก</button>
      </div>
        <div className="flex items-center justify-center mt-5">
      <p >มีบัญชีแล้ว?</p>
      <Link to='/login' className='bg-black border-[2px] border-white rounded-[10px] w-[100px] h-[30px] text-center ml-3 text-white hover:bg-white hover:border-black hover:text-black'>เข้าสู่ระบบ</Link>
    </div>   
      </form>
    </div>
  );
}
