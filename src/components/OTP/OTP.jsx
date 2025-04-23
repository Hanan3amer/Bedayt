import React, { useRef } from "react";
import { Link } from "react-router-dom";
export default function OTP() {
  const inputRefs = useRef([]);
  return (
    <div className="  flex flex-col justify-center items-center bg-gray w-full">
      <div className="container mx-auto bg-white my-32 max-w-sm rounded-md px-10 py-20">
        <div className="my-4 text-center">
          <h3 className="font-bold text-darkGray text-3xl">
            <span className="text-mintGreen">تحقق</span> من رقم هاتفك
          </h3>
          <p className="text-darkGray max-w-sm my-3">
            لقد أرسلنا رمز تحقق مكونًا من 5 أرقام إلى رقمك. برجاء ادخال الرمز
            للمتابعة
          </p>
        </div>
        <div
          id="otp"
          className="flex flex-row justify-center text-center px-2 mt-5"
        >
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                className="m-2 h-12 w-12 text-center form-control rounded-xl bg-white border border-lightGray"
              />
            ))}
        </div>
        <button
          type="button"
          className="bg-mintGreen w-full p-2 text-white rounded-xl mt-4 cursor-pointer my-5"
        >
          تأكيد
        </button>
        <Link className="text-darkGray ">
          لم يصلك رمز ؟<span className="text-mintGreen">اعادة ارسال </span>
        </Link>
      </div>
    </div>
  );
}
