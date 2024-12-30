
"use client"
import Nav from '../components/headcomponents/Nav'
import Image from 'next/image'
import { useStateAuthProvider } from '../context'

export default function VerifyEmail() {
  const context = useStateAuthProvider();
  if (!context) {
    return null;
  }

  const { formData: { email } } = context;
  console.log(" email", email);

  return (
    <div className='px-12 flex flex-col mx-auto justify-center  items-center'>
      <div className='py-4 self-start'>
        <Nav />
      </div>
      <div className='flex gap-4 py-3 justify-between flex-wrap-reverse sm:flex-nowrap w-full '>
        <div className='bg-[#212C4A] h-[600px] rounded-lg p-4 flex items-center justify-center flex-1'>
          <div className='flex flex-col gap-4 items-center justify-center text-white max-w-[400px] w-full text-center px-4'>
            <h1 className='text-3xl'>Join Futurelabs and Start Your Tech  Journey!</h1>
            <p>Kick start your tech join with us and learn from the industry best</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center text-center py-5'>
          <h2 className='text-3xl'>Verify Your Email Address!</h2>
          <Image
            src="/verifyemail.png"
            width={400}
            height={500}
            alt="verify email"
          />

          <p className='max-w-[400px] w-full text-center'>We&apos;ve sent a verification link to {email}. Please check your inbox and click on the link to verify your account</p>
        </div>
      </div>
    </div>
  )
}
