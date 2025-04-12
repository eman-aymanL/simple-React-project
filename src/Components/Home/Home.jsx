import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import avatar from '../../assets/avatar2.png';

export default function Home() {
  const { isArabic } = useContext(LanguageContext); 

  return (
    <div className="pb-5 bg-gray-200 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center px-4 py-10 gap-8">
  <div className="flex justify-center w-full">
    <img src={avatar} alt="avatar" className="w-100 sm:w-100 md:w-1/3 p-4 rounded-full shadow-lg" />
  </div>

  <div className="text-center w-full max-w-xl bg-onPrimary dark:bg-emerald-700 p-6 rounded-lg shadow-md">
    <h3 className="text-base sm:text-lg leading-relaxed">
      {isArabic
        ? "أهلاً بالجميع! معكم إيمان، أقدم لكم مشروعاً مليئاً بالمرح والإبداع والحب! هذا المشروع هو مجرد استعراض لبعض الميزات الرائعة المتوفرة في مكتبه ريأكت. يدور المشروع حول استكشاف بعض وظائف مكتبه ريأكت الرائعة والاستمتاع بها. آمل أن تستمتعوا به بقدر ما استمتعت به أنا! ترقبوا المزيد من الأشياء الرائعة. لنجعل هذه الرحلة لا تُنسى معاً!"
        : "Hey everyone! It's Eman here, bringing you a project full of fun, creativity, and a lot of love! This project is just a showcase of a few cool features available in React. It's all about exploring and having fun with some awesome React functionalities. Hope you're ready to enjoy it as much as I did creating it! Stay tuned for some cool stuff coming your way. Let's make this an unforgettable journey together!"
      }
    </h3>
  </div>
</div>

  );
}
