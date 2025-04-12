import { useContext } from 'react'
import { faHtml5 , faCss3, faReact, faJs} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LanguageContext } from '../../LanguageContext/LanguageContext';

export default function About() {

  const { isArabic } = useContext(LanguageContext); 
  return (
    <div className=' min-h-screen bg-gray-200 dark:bg-gray-900 pb-5'>
  <h1 className='w-1/3 m-auto text-center text-3xl p-6 border-b-4 border-dashed border-onPrimary dark:text-white dark:border-emerald-700 '>{isArabic ? "عن الموقع" : "About Section"}</h1>
    <div className='flex justify-center gap-10 mt-10'>
    <img 
  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
  alt="Tailwind CSS Logo" 
  className="w-12 h-12"
/>
<FontAwesomeIcon icon={faHtml5} size="3x" color="#E34F26" />
<FontAwesomeIcon icon={faCss3} size="3x" color="#1572B6" />
<FontAwesomeIcon icon={faJs} size="3x" className='text-amber-400' />
<FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" />

    </div>
<div className='w-3/4 m-auto '>
<div className='grid md:grid-cols-1 mt-10 gap-2'>
  <p className='col md:w-3/4  m-auto bg-onPrimary p-2 rounded-lg dark:bg-emerald-700 dark:text-white'>
  
    {isArabic ? " مرحبًا! أنا إيمان، مبرمجة متحمسة وعاشقة لتجربة الأفكار الجديدة وتحويل الرؤى الإبداعية إلى واقع ملموس باستخدام React. هذا المشروع هو بمثابة معرض ممتع لبعض الميزات والوظائف الرائعة، وقد تم بناؤه بهدف الاستكشاف والتعلم. أؤمن أن البرمجة مش مجرد كتابة أكواد، بل هي عملية حل المشاكل، وخلق تجارب مميزة، والاستمتاع بكل لحظة فيها. كل تحدي أواجهه هو فرصة للنمو الشخصي والمهني، وكل خطأ أتعامل معه هو لغز جديد ينتظر الحل.من خلال هذا المشروع، كان هدفى دفع حدود معرفتي لأبعد نقطة، وتجربة مفاهيم وتقنيات جديدة، والأهم من كل هذا، الاستمتاع بكل خطوة في العملية. ما بين الكتابة والتجريب والتطوير، كانت الرحلة مليئة بالتحديات والفرص لاكتساب مهارات جديدة. سواء كنت هنا بدافع الفضول لمعرفة المزيد عن المشروع أو تبحث عن مصدر إلهام لأفكارك الخاصة، أمل أن تجد شيئًا مثيرًا يعجبك ويحفزك للاستمرار في رحلتك البرمجية.ترقبوا المزيد من التجارب الشيقة والتحديات التي سأخوضها في المستقبل، ودعونا نواصل معًا في بناء أشياء رائعة ومبتكرة. الرحلة لم تنتهِ بعد، فهي مليئة بالفرص للاستكشاف والتعلم، وأنا متحمسة لكل خطوة جديدة نخطوها معًا. في النهاية، عملية التعلم هي مسار مستمر لا نهاية له" : "Hey there! I'm Eman, a passionate developer who loves experimenting with new ideas and bringing creative visions to life through React. This project is a fun showcase of some cool features and functionalities, built purely for exploration and learning. I believe coding is not just about writing lines of code—it's about solving problems, creating engaging experiences, and having fun along the way. Every challenge is an opportunity to grow, and every bug is just a puzzle waiting to be solved!Through this project, I wanted to push the boundaries of what I know, play around with different concepts, and, most importantly, enjoy the process. Whether you’re here out of curiosity or looking for inspiration, I hope you find something interesting. Stay tuned for more exciting experiments, and let’s keep building awesome things together. After all, the journey of learning never really ends! "}

  </p>
 
  
  
</div>

</div>

</div>

  )
}
