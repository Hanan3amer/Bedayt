import React from "react";
import child from "../../assets/child.png";
import teenager from "../../assets/teenager.png";
import elderly from "../../assets/elderly.png";
import adult from "../../assets/adult.png";
import getMarry from "../../assets/getMarry.png";
import married from "../../assets/married.png";

export default function Targetgroup() {
  const targets = [
    { name: "الأطفال", img: child },
    { name: "مراهقين", img: teenager },
    { name: "كبار السن", img: elderly },
    { name: "الراشدين", img: adult },
    { name: "مقبلين علي الزواج", img: getMarry },
    { name: "المتزوجين", img: married },
  ];
  return (
    <>
      <section id="targetgroup" className=" my-10">
        <div className="text-center my-5">
          <h2 className="text-darkGray text-3xl font-bold py-2">
            الفئات المستهدفة
          </h2>
          <p className="text-lightGray text-sm">
            نحن نهتم بصحتك النفسية في كل مرحلة من حياتك!
          </p>
        </div>
        <div className="flex justify-center items-stretch text-center  mx-auto flex-wrap">
          {targets.map((target) => (
            <div key={target.name} className="md:w-1/3 w-1/2 text-center my-5">
              <div className="flex items-center gap-3 justify-center">
                <div className="bg-gray-100 rounded-full w-14 h-14 ">
                  <img src={target.img} className="mx-auto text-center" />
                </div>
                <h3 className="text-darkGray">{target.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
