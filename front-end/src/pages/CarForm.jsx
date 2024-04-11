import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CarForm() {
  const [car, setCar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8889/car');
        const filteredUsers = response.data.filter(user => user.role === 'User');
        setCar(filteredUsers);
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
      setUsers(response.data);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการลบข้อมูล:', error);
      alert("เกิดข้อผิดพลาดในการลบข้อมูล");
    }
  };



    
    return (
        <div>
            <h2 className="text-xl font-bold">ข้อมูลผู้ใช้</h2>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border  px-4 py-2">ID</th>
                        <th className="border px-4 py-2">ทะเบียนรถยนต์</th>
                        <th className="border px-4 py-2">ยี่ห้อรถ</th>
                        <th className="border px-4 py-2">รุ่นรถ</th>
                        <th className="border  px-4 py-2">หมายเหตุ</th>
                        <th className="border px-4 py-2">etc...</th>
                    </tr>
                </thead>
                <tbody>
                    {car.map((car, index) => (
                        <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2">{car.id}</td>
                            <td className="border border-gray-400 px-4 py-2">{car.car_registration}</td>
                            <td className="border border-gray-400 px-4 py-2">{car.car_brand}</td>
                            <td className="border border-gray-400 px-4 py-2">{car.car_model}</td>
                            <td className="border border-gray-400 px-4 py-2">{car.note}</td>
                            <td className="border border-gray-400 px-4 py-2">{car.etc}</td>
                            <td className="border border-gray-400 px-4 py-2">
                            <Link to={`/car-edit/${car.id}`} className="text-white bnt bg-yellow-600 hover:underline">แก้ไข</Link>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white hover:underline">ลบ</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>                                                         
    );
}
