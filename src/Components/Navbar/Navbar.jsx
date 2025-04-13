import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext/LanguageContext'; 

export default function Navbar() {
  const { isArabic, toggleLanguage, isDarkMode, toggleTheme } = useContext(LanguageContext); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-onPrimary dark:bg-emerald-700 dark:text-white p-5 shadow-md transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white ">
            {isArabic ? 'مكتبة ريأكت' : 'React Library'}
          </span>
        </NavLink>

        {/* زر الهامبرجر */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* القائمة الجانبية */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-multi-level">
          <ul className="md:h-12 rounded-lg text-center flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 bg-onPrimary dark:bg-emerald-700 dark:text-white">
            <li className='flex items-center h-12'>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `rounded-sm md:border-0 px-2 py-1 dark:text-white 
                  ${isActive ? "bg-amber-300 rounded-md text-green-700 dark:text-green-500" : "text-gray-900 hover:text-gray-600 dark:hover:bg-gray-700"}`
                }
              >
                {isArabic ? 'عن الموقع' : 'About'}
              </NavLink>
            </li>

            <li className='flex items-center h-12'>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `rounded-sm md:border-0 px-2 py-1 dark:text-white 
                  ${isActive ? "bg-amber-300 rounded-md text-green-700 dark:text-green-500" : "text-gray-900 hover:text-gray-600 dark:hover:bg-gray-700"}`
                }
              >
                {isArabic ? 'المعرض' : 'Portfolio'}
              </NavLink>
            </li>

            <li className='flex items-center h-12'>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `rounded-sm md:border-0 px-2 py-1 dark:text-white 
                  ${isActive ? "bg-amber-300 rounded-md text-green-700 dark:text-green-500" : "text-gray-900 hover:text-gray-600 dark:hover:bg-gray-700"}`
                }
              >
                {isArabic ? 'تواصل معنا' : 'Contact'}
              </NavLink>
            </li>

            <li className="flex items-center h-12 m-auto space-x-3 rtl:space-x-reverse">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-bqlue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
              </label>

              <button
                onClick={toggleLanguage}
                className="m-2 px-3 py-1 text-sm font-semibold text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-emerald-700 transition"
              >
                {isArabic ? 'EN' : 'AR'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
