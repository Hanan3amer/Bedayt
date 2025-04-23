import React from "react";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Password() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center bg-gray w-full">
        <div className="container mx-auto bg-white my-32 max-w-sm rounded-md px-10 py-20">
          <div className="my-4 text-center">
            <h3 className="font-bold text-darkGray text-3xl">
              <span className="text-mintGreen">إنشاء</span> كلمة المرور
            </h3>
            <p className="text-darkGray max-w-sm my-3">
              تأكد من اختيار كلمة مرور قوية للحفاظ على أمان حسابك
            </p>
          </div>
          <form className="max-w-md mx-auto" dir="rtl">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-darkGray">
                كلمة المرور الجديدة
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <CiLock size={20} className="text-lightGray" />
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-e-lg bg-white border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 "
                  placeholder="@Bedaya1"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-darkGray">
                تأكيد كلمة المرور
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-white border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <CiLock size={20} className="text-lightGray" />
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-e-lg bg-white border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 "
                  placeholder="@Bedaya1"
                />
              </div>
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50"
                  required
                />
              </div>
              <label className="ms-2 text-sm font-medium text-darkGray dark:text-gray-300">
                اوافق على
                <span className="text-mintGreen"> الشروط والأحكام</span> و
                <span className="text-mintGreen"> سياسةالخصوصية</span>
              </label>
            </div>
          </form>
          <button
            type="button"
            className="bg-mintGreen w-full p-2 text-white rounded-xl cursor-pointer my-5"
          >
            إنشاء حساب
          </button>
          <Link className="text-darkGray ">
            لديك حساب بالفعل؟ <span className="text-mintGreen">سجل الدخول</span>
          </Link>
        </div>
      </div>
    </>
  );
}
