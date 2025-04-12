import { useState } from 'react'
import img1 from '../../assets/mikasa.jfif'
import img2 from '../../assets/eren.jfif'
import img3 from '../../assets/armin.jfif'
import img4 from '../../assets/erwen.jfif'
import img5 from '../../assets/rainer.jfif'
import img6 from '../../assets/levi.jfif'

const images = [img1, img2, img3, img4, img5, img6]

export default function Portfolio() {
  const [selectedImg, setselectedImg] = useState(null)

  return (
    <div className='min-h-screen pb-5 bg-gray-200 dark:bg-gray-900 pt-10 '>
      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 m-auto w-3/4'>
        {images.map((img, index) => (
          <img
            src={img}
            className=' w-full h-full object-cover cursor-pointer rounded-lg shadow-md transition-transform transform hover:scale-105'
            key={index}
            onClick={() => {
              setselectedImg(img)
            }}
          />
        ))}
      </div>

      {selectedImg && (
        <div
          className=' fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
          onClick={() => {
            setselectedImg(null)
          }}
        >
          <div className='relative'>
            <img
              src={selectedImg}
              alt='selected'
              className='max-w-[90%] m-auto max-h-[90%] rounded-lg shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
