import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext'; 
import { faLinkedin, faGithub, faFacebook , faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Footer() {
const { isArabic } = useContext(LanguageContext); 
  return (
    <div className='grid md:grid-cols-3 bg-onPrimary dark:bg-emerald-700 dark:text-white p-10'>
      <div className='col-span-1 text-center mb-10'>
        <h3>{isArabic ? "الموقع" : "Location"}</h3>
        <p>{isArabic ? "مصر, القاهره" : "Egypt, cairo"}</p>
      </div>
      <div className='col-span-1 text-center mb-10'>
        <h3>{isArabic ? "مواقع التواصل الاجتماعي" : "social media sites"}</h3>
        <div className='flex justify-center gap-2 mt-2'>
          <Link to="https://www.linkedin.com/in/eman-aymanl/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='xl' className='border p-1 rounded-full'/> </Link> 
          <Link to="https://github.com/eman-aymanL" target='_blank'><FontAwesomeIcon icon={faGithub} size='xl' className='border p-1 rounded-full'/> </Link>
          <Link to="https://www.facebook.com/profile.php?id=100089646141548" target='_blank'><FontAwesomeIcon icon={faFacebook} size='xl' className='border p-1 rounded-full'/> </Link>
          <Link to="https://www.youtube.com/" target='_blank'><FontAwesomeIcon icon={faYoutube} size='xl' className='border p-1 rounded-full'/> </Link>
        </div>
      </div>
      <div className='col-span-1 text-center mb-5'>
        <h3>{isArabic ? "عن المستقل" : "ABOUT FREELANCER"}</h3>
        <p>{isArabic ? "بصفتي مستقلاً، أقدم مجموعة واسعة من الخدمات لمساعدتك في مشاريعك. دعنا نعمل معًا لتحقيق رؤيتك بجودة وإبداع." : "As a freelancer I offer a wide range of services to help you with your projects. Let's work together to bring your vision to life with quality and creativity."}</p>
      </div>
    </div>
  );
}
