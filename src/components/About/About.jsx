import React from "react";
import group from "../../assets/Group.png";
export default function About() {
  return (
    <section id="about" className=" my-32 ">
      <div className="flex flex-col md:flex-row justify-between items-center md:px-32 px-10">
        <div className="md:w-1/2 w-full">
          <img src={group} />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="font-bold text-3xl text-darkGray my-5">
            "بداية" ... رحلتك نحو التوازن النفسي تبدأ هنا
          </h1>
          <p className="text-lightGray text-sm  my-5  md:max-w-md w-full">
            في مجمع بداية للعلاج النفسي، نؤمن بأن الصحة النفسية هي حجر الأساس
            لحياة متوازنة وسعيدة. نحن مركز متخصص في تقديم الدعم النفسي والعلاج
            السلوكي والمعرفي للأفراد من مختلف الفئات العمرية، بدءًا من الأطفال
            والمراهقين، وصولًا إلى البالغين وكبار السن والمقبلين على الزواج.
          </p>
          <button
            type="button"
            className="text-white hover:bg-gray-100 hover:text-mintGreen bg-mintGreen focus:outline-none  rounded-md text-sm px-5 py-3 text-center cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
