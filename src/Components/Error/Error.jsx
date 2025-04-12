import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../LanguageContext/LanguageContext';
export default function Error() {
  const { isArabic } = useContext(LanguageContext); 
  return (
    <div className='h-screen bg-gray-200 dark:bg-gray-900 dark:text-white'>
      <div className='text-center p-10 flex-col content-center h-screen'>
      <h1 className='text-5xl '>{isArabic ? "لم يتم العثور " : "Not Found"} </h1>
      <h2 className='text-2xl mt-4'>{isArabic ? "هذه الصفحة غير موجودة" : "This page doesn’t exist"} </h2>
      <FontAwesomeIcon icon={faCircleExclamation} className='text-7xl mt-4 text-red-700 dark:text-red-900' />
      </div>
    </div>
  )
}
