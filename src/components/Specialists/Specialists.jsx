import React from "react";
import doc1 from "../../assets/doc1.png";
import doc2 from "../../assets/doc2.png";
import doc3 from "../../assets/doc3.png";
import doc4 from "../../assets/doc4.png";
export default function Specialists() {
  const doctors = [
    {
      img: doc1,
      name: "أ. منيرة سعد القحطاني",
      title: "أخصائية اجتماعية ومستشارة أسرية",
      info: ` خبرة تتجاوز 7 سنوات, معتمدة في عدة جهات رسمية, متخصصة في دراسة المشكلات الاجتماعية والأسرية والنفسية, ممارسة للعلاج المعرفي السلوكي, لها ظهور إعلامي مميز 
ساهمت في تقديم استشارات عبر منصات معتمدة, ولجهات وجامعات مختلفة.`,
    },
    {
      img: doc2,
      name: "د. أسماء مصطفى الشخيبي ",
      title: "",
      info: `مدرب دولي معتمد من هيئة المعرفة والتنمية البشرية – حكومة دبي. استشاري نفسي إكلينيكي مصنف من الهيئة السعودية للتخصصات الصحية. أستاذ مشارك في علم النفس – جامعة كفر الشيخ. استشاري نفسي في مركز بداية السكون للإرشاد النفسي والأسري. عضو فاعل في رابطة الأخصائيين النفسيين المصرية والجمعية المصرية للمعالجين النفسيين. رئيس سابق لقسم علم النفس ووحدة الإرشاد النفسي والاجتماعي – جامعة الأمير سطام`,
    },
    {
      img: doc3,
      name: "د. مها الخطيب ",
      title: " استشارية نفسية تربوية وأسرية ",
      info: `  أستاذ مشارك في علم النفس, متخصصة في مشكلات الطفولة والمراهقة, استشارية في مركز بداية السكون ومراكز اخري, خبرة في تقديم الاستشارات النفسية والتربوية وتعديل السلوك, عملت في جامعة الأمير سطام بن عبد العزيز كمنسقة للعمل الطلابي والتربية الميدانية.قدمت دورات تدريبية في مجالات نفسية وتربوية مختلفة. رئيسة سابقة لقسم الإرشاد النفسي في مدارس ساندي الدولية.`,
    },
    {
      img: doc4,
      name: "د. منى الشافعي ",
      title: "",
      info: `مدرب دولي معتمد ومستشار تغذية أطفال الإعاقة. أستاذ مساعد سابق في جامعة الملك سعود – كليات العلوم الطبية التطبيقية. أستاذ مشارك في التغذية العلاجية – كليات الغد الدولية. أستاذ مشارك في تغذية المجتمع – جامعة باشن بأمريكا. مستشار التخطيط والجودة في مركز EGY TURK التعليمي. مستشار تدريب في مركز جلوبال إكسبيرت.مستشار الجمعية السعودية للتثقيف والتعزيز الصحي.`,
    },
  ];
  return (
    <section id="specialists" className="bg-gray my-10 p-10">
      <h3 className="text-darkGray text-2xl font-bold text-center my-3">
        فريقنا النفسي
      </h3>
      <p className="text-sm text-lightGray text-center max-w-2xl mx-auto mb-10">
        نخبة من الاستشاريين والمتخصصين في مجال العلاج النفسي، نعمل معًا لمساعدتك
        على تحقيق التوازن النفسي والعاطفي من خلال أحدث الأساليب العلاجية
      </p>
      <div className="flex justify-center items-stretch text-center gap-5 mx-auto flex-wrap">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="flex flex-col justify-between max-w-3xs w-[250px] bg-white rounded-t-full  pb-10"
          >
            <img
              src={doc.img}
              className="mx-auto w-[220px] py-3"
              alt={doc.name}
            />
            <div className="flex-grow p-5 flex flex-col justify-around items-center">
              <div>
                <h5 className="text-md font-bold tracking-tight text-darkGray">
                  {doc.name}
                </h5>
                <p className=" text-sm tracking-tight text-darkGray">
                  {doc.title}
                </p>
              </div>
              <p className=" text-xs text-darkGray">{doc.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
