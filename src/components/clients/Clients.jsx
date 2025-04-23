import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
export default function Clients() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute  right-[-50px] transform translate-y-9 border border-gray-800 text-gray-800 p-1 rounded-full cursor-pointer"
        onClick={onClick}
      >
        <IoIosArrowRoundForward size={20} className="text-mintGreen" />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute  right-0 translate-y-[64.9px] transform bottom-0 border border-gray-800 text-gray-800 p-1 rounded-full  cursor-pointer"
        onClick={onClick}
      >
        <IoIosArrowRoundBack size={20} className="text-mintGreen" />
      </button>
    );
  }
  const settings = {
    centerMode: true,
    centerPadding: "10%",
    dots: true,
    infinite: true,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        className="absolute"
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            transform: "translate(0, 19px)",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <>
      <h2 className="text-3xl text-darkGray font-bold my-5 flex flex-start ps-10">
        آراء العملاء وتجارب النجاح
      </h2>
      <div className="w-full overflow-hidden px-4 py-10">
        <div className="max-w-xs  md:max-w-5xl mx-auto slider-container py-10">
          <Slider {...settings}>
            <div className="px-3 text-center" dir="rtl">
              <div className="shadow-sm max-w-sm p-3">
                <div className="flex  items-center flex-start">
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                </div>
                <p className="text-darkGray text-xs my-3">
                  كنت أعاني من القلق والتوتر المستمر بسبب ضغط العمل، ولكن بعد
                  جلسات العلاج النفسي في مجمع بداية، تعلمت كيفية التحكم في
                  مشاعري والتعامل مع الضغوط بطريقة أفضل.
                </p>
                <div className="flex items-center gap-3">
                  <img src={client1} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col">
                    <h5 className="font-semibold text-xs text-darkGray">
                      أحمد سالم
                    </h5>
                    <p className="font-medium text-xs text-darkGray">
                      مهندس برمجيات
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3" dir="rtl">
              <div className="shadow-sm max-w-sm p-3">
                <div className="flex  items-center flex-start">
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                </div>
                <p className="text-darkGray text-xs my-3">
                  تعاملت مع مشكلات أسرية أثرت على استقراري النفسي، وبفضل
                  استشارات مجمع بداية، أصبحت قادرة على إدارة الأمور بطريقة
                  إيجابية، وتحسنت علاقتي بأسرتي كثيرًا.
                </p>
                <div className="flex items-center gap-3">
                  <img src={client2} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col">
                    <h5 className="font-semibold text-xs text-darkGray">
                      نهى عبدالعزيز
                    </h5>
                    <p className="font-medium text-xs text-darkGray">معلمة</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3" dir="rtl">
              <div className="shadow-sm max-w-sm p-3">
                <div className="flex  items-center flex-start">
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                  <FaStar className="text-amber-300" />
                </div>
                <p className="text-darkGray text-xs my-3">
                  كنت مترددًا في الحصول على استشارة قبل الزواج، لكن التجربة كانت
                  رائعة! تعلمت الكثير عن فنون التواصل مع شريك الحياة وإدارة
                  التوقعات ، وتحسنت علاقتي بأسرتي كثيرًا.
                </p>
                <div className="flex items-center gap-3">
                  <img src={client3} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col">
                    <h5 className="font-semibold text-xs text-darkGray">
                      أحمد سالم
                    </h5>
                    <p className="font-medium text-xs text-darkGray">
                      مهندس برمجيات
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
