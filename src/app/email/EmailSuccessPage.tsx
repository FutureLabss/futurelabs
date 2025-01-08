"use client"
import Nav from '../components/headcomponents/Nav'
import Image from 'next/image'
import { useStateAuthProvider } from '../context'

export default function EmailSuccessPage() {
  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { formData: { email } } = context;
  return (

    <div className='flex gap-4 justify-between md:flex-row flex-col-reverse w-full min-h-screen'>
      <div className='bg-[#212C4A] p-4 flex flex-col gap-4 items-center justify-center flex-1'>
        <Image
          src="/images/successmail.png"
          width={500}
          height={500}
          alt="verify email"
        />
        <div className='flex flex-col gap-4 items-center justify-center text-white max-w-[400px] w-full text-center px-4'>
          <h1 className='text-3xl'>Join Futurelabs and Start Your Tech  Journey!</h1>
          <p>Kick start your tech join with us and learn from the industry best</p>
        </div>
      </div>
      <div className='flex flex-col flex-1 gap-4 justify-between px-4'>
        <div className=' self-start ml-auto py-5'>
          <Nav />
        </div>
        <div className='flex flex-col flex-1 gap-4 items-center justify-center text-center'>

          <h2 className='text-3xl'>Verify Your Email Address!</h2>
          <Image
            src="/verifyemail.png"
            width={400}
            height={500}
            alt="verify email"
          />

          <p className='max-w-[430px] w-full text-center text-[20px]'>We&apos;ve sent a verification link to {email}. Please check your inbox and click on the link to verify your account</p>
        </div>
      </div>
    </div>
  )
}
