import React from 'react'
import SwiperComponent from '../ui/Swiper'

export default function Stories() {
  return (
    <div className='bg-[#fff] gap-[1.875rem] flex flex-col px-[20px] md:px-[40px] xl:px-[80px] py-[25px] md:py-[40px] xl:py-[137px]'>
      <div className='flex flex-col gap-2 w-full max-w-[495px]  md:pl-[4.25rem] relative z-[2]' >
        <h2 className='absolute z-[-1] top-[-30px] xl:top-[-65px]  hidden md:block left-[-12px]'><svg xmlns="http://www.w3.org/2000/svg" width="143" height="120" viewBox="0 0 143 120" fill="none">
          <g clipPath="url(#clip0_147_4095)">
            <path fillRule="evenodd" clipRule="evenodd" d="M142.373 18.7419C121.049 29.1541 110.387 41.3882 110.387 55.4447C119.476 56.4859 126.992 60.1735 132.934 66.5076C138.877 72.8417 141.849 80.1735 141.849 88.5033C141.849 97.3536 138.965 104.816 133.197 110.889C127.428 116.963 120.175 120 111.435 120C101.647 120 93.1701 116.052 86.0037 108.156C78.8374 100.26 75.2542 90.6725 75.2542 79.3926C75.2542 45.553 94.306 19.089 132.41 0L142.373 18.7419ZM67.1186 18.7419C45.6196 29.1541 34.8702 41.3882 34.8702 55.4447C44.134 56.4859 51.7373 60.1735 57.6801 66.5076C63.6229 72.8417 66.5943 80.1735 66.5943 88.5033C66.5943 97.3536 63.6666 104.816 57.8112 110.889C51.9557 116.963 44.6584 120 35.919 120C26.1308 120 17.6973 116.052 10.6184 108.156C3.53942 100.26 0 90.6725 0 79.3926C0 45.553 18.9643 19.089 56.8935 0L67.1186 18.7419Z" fill="#EFF2FA" />
          </g>
          <defs>
            <clipPath id="clip0_147_4095">
              <rect width="143" height="120" fill="white" />
            </clipPath>
          </defs>
        </svg></h2>
        <h2 className='text-[1.5rem] md:text-[3rem] text-[#093851] font-semibold '>Real Stories from Futurists</h2>
        <p className='text-[0.875rem] md:text-[1.25rem] text-[#105F89]'>Get inspired by these stories.</p>
      </div>

      <div className=''>
        <SwiperComponent />
      </div>
    </div>
  )
}
