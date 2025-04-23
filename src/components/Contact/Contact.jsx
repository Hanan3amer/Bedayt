import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
export default function Contact() {
  return (
    <section id="contact" className="bg-gray my-32 p-10">
      <h1 className="text-darkGray text-3xl font-bold text-center py-10">
        تواصل معنا - نحن هنا لدعمك!
      </h1>
      <div className="flex flex-col md:flex-row mx-auto items-center justify-center text-center px-10 gap-5">
        <div className="md:w-1/3 w-full">
          <div className="bg-white mx-auto p-3 rounded-xl w-[50px] text-center">
            <RiInstagramLine className=" mx-auto" size={25} />
          </div>
          <h3 className="text-2xl font-bold text-darkGray my-3">انستجرام</h3>
          <p className="text-sm text-darkGray max-w-sm my-3">
            تابعنا على إنستجرام للاطلاع على آخر التحديثات، النصائح النفسية،
            والأنشطة التي نقدمها.
          </p>
          <p className="text-darkGray">@bedayt_alskon</p>
        </div>
        <div className="md:w-1/3 w-full">
          <div className="bg-white mx-auto p-3 rounded-xl w-[50px] text-center">
            <FiPhone className=" mx-auto" size={25} />
          </div>
          <h3 className="text-2xl font-bold text-darkGray my-3">رقم الهاتف</h3>
          <p className="text-sm text-darkGray max-w-sm my-3">
            تواصل معنا مباشرة لحجز موعد أو الاستفسار عن خدماتنا تحت امرك علي
            مدار اليوم.
          </p>
          <p className="text-darkGray">+053 902 9001</p>
        </div>
        <div className="md:w-1/3 w-full">
          <div className="bg-white mx-auto p-3 rounded-xl w-[50px] text-center">
            <SlLocationPin className=" mx-auto" size={25} />
          </div>
          <h3 className="text-2xl font-bold text-darkGray my-3">العنوان</h3>
          <p className="text-sm text-darkGray max-w-sm my-3">
            موقعنا سهل الوصول، يمكنك زيارتنا في أي وقت للحصول على الدعم النفسي
            والاستشارات.
          </p>
          <p className="text-darkGray">الرياض - الخرج - حي الورود</p>
        </div>
      </div>
    </section>
  );
}
