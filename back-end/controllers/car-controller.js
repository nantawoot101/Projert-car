const db = require("../models/db");

exports.getAllCar = async (req, res, next) => {
    try {
      const cars = await db.car.findMany();
      res.json(cars);
    } catch (err) {
      next(err);
    }
  };


  exports.getCarById = async (req, res, next) => {
    try {
      const { id } = req.params;

    // ตรวจสอบว่า id เป็น integer
    if (isNaN(id)) {
      return res.status(400).json({ error: "รหัสไม่ถูกต้อง" });
    }

    // ค้นหา Car โดยใช้ id
    const car = await db.car.findUnique({
      where: {
        id: parseInt(id),
      },
    });


    if (!car) {
      return res.status(404).json({ error: "ไม่พบข้อมูลรถยนต์" });
    }

    // ส่ง response car
    res.json(car);
  } catch (err) {
    next(err);
  }
};

exports.createCar = async (req, res, next) => {

        const { car_registration, car_brand, car_model, note, etc} = req.body;
        try {
            if (!(car_registration && car_brand && car_model && note )) {
                return res.status(404).json({ error: 'กรุณาระบุข้อมูลรถยนต์ที่จำเป็นทั้งหมด' });
            }

            const data = {
                car_registration ,
                car_brand ,
                car_model ,
                note ,
                etc ,
            };

            
            const rsb = await db.car.create({data});
            console.log(rsb);

            res.json({ msg: 'เพิ่มข้อมูลสำเร็จ' });
        } catch (err) {
            next(err);
        }
    }


    exports.updateCar = async (req, res, next) => {
        try {
          const updateData = {
            car_registration: req.body.car_registration,
            car_brand: req.body.car_brand,
            car_model: req.body.car_model,
            note: req.body.note,
            etc: req.body.etc
          }

          const car = await db.car.update({
            where: {
              id: parseInt(req.params.id)
            },
            data: updateData
          });
          if (!car) {
            return res.status(404).json({ error: 'ไม่พบข้อมูลรถยนต์' });
          }
          res.status(200).json(car);
        } catch (error) {
          next(error);
        }
      };


      exports.deleteCar = async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedCar = await db.car.delete({
                where: {
                    id: parseInt(id)
                }
            });
    
            if (!deletedCar) {
                return res.status(404).json({ error: 'ไม่พบข้อมูลรถยนต์' });
            }
    
            return res.json({ msg: 'ลบข้อมูลรถยนต์สำเร็จ' });
        } catch (err) {
            next(err);
        }
    };




