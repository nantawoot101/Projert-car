import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CarForm() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8889/car');
        setCars(response.data);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8889/car/${id}`);
      const response = await axios.get('http://localhost:8889/car/');
      alert("ลบข้อมูลสำเร็จ")
      setCars(response.data);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการลบข้อมูล:', error);
      alert("เกิดข้อผิดพลาดในการลบข้อมูล");
    }
  };

  return (
    <div>
      <div className="flex justify-between mt-5 ml-3">
        <h2 className="text-xl font-bold">ข้อมูลรถยนต์</h2>
        <Link to='/add-car' className="btn bg-black text-white shadow-md hover:bg-white hover:text-black hover:border-black pl-2 ml-3 mt-2 w-64 h-10">เพิ่มข้อมูลรถยนต์</Link>
      </div>
      <div className="overflow-x-auto mt-20">
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">ทะเบียนรถยนต์</th>
              <th className="border px-4 py-2">ยี่ห้อรถ</th>
              <th className="border px-4 py-2">รุ่นรถ</th>
              <th className="border px-4 py-2">หมายเหตุ</th>
              <th className="border px-4 py-2">etc...</th>
              <th className="border px-4 py-2">แก้ไขข้อมูล</th>
              <th className="border px-4 py-2">ลบข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index} className="border-b border-gray-400">
                <td className="border px-4 py-2">{car.id}</td>
                <td className="border px-4 py-2">{car.car_registration}</td>
                <td className="border px-4 py-2">{car.car_brand}</td>
                <td className="border px-4 py-2">{car.car_model}</td>
                <td className="border px-4 py-2">{car.note}</td>
                <td className="border px-4 py-2">{car.etc}</td>
                <td className="border px-4 py-2">
                  <Link to={`/car-edit/${car.id}`} className="text-white btn bg-yellow-600 hover:bg-white hover:border-yellow-600 hover:text-yellow-600 ">แก้ไข</Link>
                </td>
                <td><button onClick={() => handleDelete(car.id)} className="ml-2 text-white btn bg-red-600 hover:bg-white hover:border-red-600 hover:text-red-600 ">ลบ</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
