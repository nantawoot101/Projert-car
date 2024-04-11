import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function CarEdit() {
  const { id } = useParams();
  const [car, setCar] = useState({
                car_registration: '' ,
                car_brand: '' ,
                car_model: '' ,
                note: '' ,
                etc: '' ,
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('ไม่พบ token ใน localStorage');
          return;
        }
        const response = await axios.get(`http://localhost:8888/car/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCar(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    
    if (id) {
      fetchUser();
    }
  }, [id]);
  
  const hdlChange = (e) => {
    const { name, value } = e.target;
    setCar((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('ไม่พบ token ใน localStorage');
        return;
      }
  
      const response = await axios.put(
        `http://localhost:8888/car/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      if (response.status === 200) {
        alert('แก้ไขข้อมูลสำเร็จ');
      } else {
        console.error('เกิดข้อผิดพลาด:', response.data);
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการแก้ไขข้อมูล:', error.message);
      alert('เกิดข้อผิดพลาดในการแก้ไขข้อมูลสำเร็จ');
    }
  };

  return (
    <div className="p-5 border w-4/6 min-w-[1000px] mx-auto rounded mt-5 ">
      <div className="text-3xl mb-10 text-center">บันทึกข้อมูลรถยนต์</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>

      <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">ทะเบียนรถยนต์</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="car_registration"
            value={car.car_registration}
            onChange={ hdlChange }
          />
          </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">ยี่ห้อรถ</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="car_brand"
            value={car.car_brand}
            onChange={ hdlChange }
          />
          </label>     

        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">รุ่นรถ</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="car_model"
            value={car.car_model}
            onChange={ hdlChange }
          />
        </label>
          
      
        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">note</span>
          </div>
          <input
            type="texy"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="note"
            value={car.note}
            onChange={ hdlChange }
          />
        </label>


        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">etc...</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="etc"
            placeholder="etc..."
            value={car.etc}
            onChange={ hdlChange }
          />
          </label>


        <div className="flex justify-center gap-5">
           <button type="submit" className="btn bg-black border-white border-[2px] text-white shadow-md hover:bg-white hover:border-black hover:text-black pl-2 ml-3 mt-5 w-64 h-10">บันทึกข้อมูลรถยนต์</button>
           <button type="reset" className="btn bg-red-500 border-white border-[2px] text-white shadow-md hover:bg-white hover:border-red-500 hover:text-red-500 pl-2 ml-3 mt-5 w-64 h-10">ยกเลิก</button>
      </div>
      </form>
    </div>
  );

  }