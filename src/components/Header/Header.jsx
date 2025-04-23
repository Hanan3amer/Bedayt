import React from "react";
import hero from "../../assets/hero.png";
export default function Header() {
  return (
    <header className="flex justify-center items-center h-lvh bg-gray my-10">
      <div className="flex md:flex-row flex-col  items-center justify-between md:ps-32 px-5 md:gap-32 gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-5xl text-darkGray my-5">
            صحتك النفسية... هي
            <br />
            مفتاح
            <span className="text-mintGreen"> لحياة سعيدة </span>
          </h1>
          <p className="text-lightGray text-sm  my-5">
            نحن هنا لمساعدتك في رحلتك نحو السلام النفسي، من خلال أحدث أساليب
            العلاج النفسي والسلوكي، على يد نخبة من المتخصصين في دعم جميع الفئات
            العمرية.
          </p>
          <a
            href="/#appointment"
            type="button"
            className="text-white hover:bg-gray-100 hover:text-mintGreen bg-mintGreen focus:outline-none  rounded-md text-sm px-5 py-3 text-center cursor-pointer"
          >
            حجز موعد
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <img src={hero} />
        </div>
      </div>
    </header>
  );
}
