import React from "react";
import img from "../../assets/img.png";

export default function Appointment() {
  return (
    <section id="appointment" className="my-32">
      <div className="flex md:flex-row flex-col items-center justify-between md:ps-32 px-5 md:gap-32 gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-darkGray font-bold text-3xl p-5">
            احجز موعدك الآن بكل سهولة
          </h2>
          <p className="text-sm text-darkGray p-5">
            خطوتك الأولى نحو حياة نفسية أفضل تبدأ هنا!
          </p>
          <form className="max-w-sm my-5" dir="rtl">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-md font-normal text-darkGray py-2 ps-2"
              >
                الاسم بالكامل
              </label>
              <input
                type="text"
                id="name"
                className="bg-white outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white shadow-sm shadow-gray-400"
                placeholder=""
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="tel"
                className="block mb-2 text-md font-normal text-darkGray py-2 ps-2"
              >
                رقم الهاتف
              </label>
              <input
                type="tel"
                id="tel"
                className="bg-white outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white shadow-sm shadow-gray-400"
                placeholder=""
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="consultant"
                className="block mb-2 text-md font-normal text-darkGray py-2 ps-2"
              >
                اختار استشاري
              </label>
              <select
                id="consultant"
                className="bg-white outline-none text-darkGray text-sm rounded-lg block w-full p-2.5   shadow-sm shadow-gray-400"
              >
                <option value=""> </option>
                <option value="consultant1">أ. منيرة سعد القحطاني</option>
                <option value="consultant2">د. أسماء مصطفى الشخيبي</option>
                <option value="consultant3">د. مها الخطيب</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-md font-normal text-darkGray py-2 ps-2"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                className="bg-white outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white shadow-sm shadow-gray-400"
                placeholder=""
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="datetime"
                className="block mb-2 text-md font-normal text-darkGray py-2 ps-2"
              >
                التاريخ والوقت
              </label>
              <input
                type="datetime-local"
                id="datetime"
                className="bg-white outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white shadow-sm shadow-gray-400"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-md font-normal text-darkGray py-2 ps-2"
              >
                ملاحظات إضافية
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-white outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white shadow-sm shadow-gray-400"
                defaultValue={"اكتب رسالتك..."}
              />
            </div>

            <button
              type="button"
              className="text-white hover:bg-gray-100 hover:text-mintGreen bg-mintGreen focus:outline-none rounded-md text-sm px-5 py-3 text-center cursor-pointer"
            >
              حجز موعد
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2">
          <img src={img} alt="Appointment" />
        </div>
      </div>
    </section>
  );
}
