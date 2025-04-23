import React from "react";
import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon2.png";
import icon3 from "../../assets/Icon3.png";
import icon4 from "../../assets/Icon4.png";
import icon5 from "../../assets/Icon5.png";
import icon6 from "../../assets/Icon6.png";
import icon7 from "../../assets/Icon7.png";
import icon8 from "../../assets/Icon8.png";
export default function Services() {
  return (
    <section id="services" className="my-32">
      <h2 className="text-darkGray text-3xl font-bold text-center my-10">
        خدماتنا طريقك نحو الراحة النفسية والتوازن
      </h2>
      <div className="flex justify-center items-center text-center flex-wrap md:ps-32">
        <div className=" lg:w-1/4 md:w-1/2  sm:w-full text-center  mx-auto  my-5">
          <div className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm pt-3">
            <img className="mx-auto" src={icon1} alt />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold  text-darkGray">
                مشكلات اجتماعية
              </h5>
              <p className="mb-3  text-lightGray text-xs">
                دعم الأفراد في التعامل مع العزلة الاجتماعية، ضعف الثقة بالنفس،
                وصعوبات التواصل من خلال جلسات استشارية فردية وجماعية.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/4 md:w-1/2  sm:w-full  text-center mx-auto  my-5">
          <div className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm pt-3">
            <img className="mx-auto" src={icon2} alt />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold  text-darkGray">
                اضطرابات نفسية و سلوكية
              </h5>
              <p className="mb-3  text-lightGray text-xs">
                تقديم علاج متخصص لمشكلات مثل القلق، الاكتئاب، الوسواس القهري،
                اضطرابات فرط الحركة، وصعوبات التحكم في الغضب ومساعدة الناس في
                حلول مشاكل حياتهم كلها.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/4 md:w-1/2  sm:w-full  text-center mx-auto  my-5">
          <div className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm pt-3">
            <img className="mx-auto" src={icon3} alt />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold  text-darkGray">
                تعديل و تحسين
                <br />
                السلوك
              </h5>
              <p className="mb-3  text-lightGray text-xs">
                عملية تهدف إلى تعزيز السلوكيات الإيجابية والتقليل من السلوكيات
                غير المرغوبة من خلال أساليب علمية مدروسة. يتم ذلك عبر
                استراتيجيات مثل التعزيز الإيجابي والتدريب التدريجي لمساعدة
                الأفراد .
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/4 md:w-1/2  sm:w-full  text-center mx-auto  my-5">
          <div className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm pt-3">
            <img className="mx-auto" src={icon4} alt />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold  text-darkGray">
                مشكلات تربوية
              </h5>
              <p className="mb-3  text-lightGray text-xs">
                مساعدة الآباء في فهم أساليب التربية الإيجابية، وحل المشكلات
                المتعلقة بسلوك الأطفال والمراهقين بطرق علمية حديثة.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/4 md:w-1/2  sm:w-full  text-center mx-auto  my-5">
          <div className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm pt-3">
            <img className="mx-auto" src={icon5} alt />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold  text-darkGray">
                مشكلات أسرية
              </h5>
              <p className="mb-3  text-lightGray text-xs">
                تقديم استشارات للأسر لتعزيز الترابط الأسري، وحل الخلافات بين
                أفراد العائلة بأساليب تواصل فعّالة.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/4 md:w-1/2  sm:w-full  text-center mx-auto  my-5">
          <div className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm pt-3">
            <img className="mx-auto" src={icon6} alt />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold  text-darkGray">
                برامج تأهيلية للمقبلين على الزواج
              </h5>
              <p className="mb-3  text-lightGray text-xs">
                توفير برامج متخصصة لإعداد المقبلين على الزواج، تشمل فهم التوقعات
                الزوجية، وإدارة الخلافات، وبناء علاقة قائمة على الاحترام
                والتفاهم.
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/4 md:w-1/2  sm:w-full  text-center mx-auto  my-5">
          <div className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm pt-3">
            <img className="mx-auto" src={icon7} alt />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold  text-darkGray">
                الارشاد و التوجيه الوظيفي
              </h5>
              <p className="mb-3  text-lightGray text-xs">
                التوجيه الوظيفي يساعدك على اختيار المسار المهني المناسب وتطوير
                مهاراتك لتحقيق أهدافك المهنية ويساعدك في بناء مستقبل مهني ناجح.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 md:1/2 sm:w-full  text-center my-5">
          <div className="max-w-3xs bg-white border border-gray-200 rounded-lg shadow-sm pt-3">
            <img className="mx-auto" src={icon8} alt />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold  text-darkGray">
                مشكلات زوجية{" "}
              </h5>
              <p className="mb-3  text-lightGray text-xs">
                دعم الأزواج في تجاوز المشكلات العاطفية، وتحسين التواصل بينهم
                لبناء علاقة زوجية صحية ومستقرة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
