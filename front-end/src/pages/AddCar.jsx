import axios from 'axios'
import {useState} from "react";


export default function AddCar() {
  const [car, setCar] = useState({
                car_registration: '' ,
                car_brand: '' ,
                car_model: '' ,
                note: '' ,
                etc: '' ,
  })

  const hdlChange = e => {
    setCar( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      const rs = await axios.post('http://localhost:8889/car/add', car)
      console.log(rs)
      if(rs.status === 200) {
        alert('เพิ่มข้อมูลสำเร็จ')
      }
    }catch(err) {
      console.log('เกิดข้อผิดพลาดในการดึงข้อมูล:', err.message)
      alert('เพิ่มข้อมูลผิดพลาด')
    }

  }
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
            placeholder="ทะเบียนรถยนต์"
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
            placeholder="ยี่ห้อรถ"
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
            placeholder="รุ่นรถ"
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
            placeholder="หมายเหตุ"
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
           <button type="submit" className="btn bg-black border-white border-[2px] text-white shadow-md hover:bg-white hover:border-black hover:text-black pl-2 ml-3 mt-5 w-64 h-10">เพิ่มข้อมูลรถยนต์</button>
           <button type="reset" className="btn bg-red-500 border-white border-[2px] text-white shadow-md hover:bg-white hover:border-red-500 hover:text-red-500 pl-2 ml-3 mt-5 w-64 h-10">ยกเลิก</button>
      </div>
      </form>
    </div>
  );
}
