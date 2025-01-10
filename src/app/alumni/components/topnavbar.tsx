import React from 'react'
import { MapPin } from 'lucide-react'
import Link from "next/link"

export default function TopNavBarComponents() {
  return (
    <div className="bg-black text-white pl-[5rem] pr-[4rem] py-2 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row xsm:gap-y-5 justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>07080343781 | No. 3, Chubb Road, Ikot Ekpene, Akwa Ibom State.</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://twitter.com/FutureLabsNG" className="hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
          <Link href="https://facebook.com/starthubng" className="hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/futurelabshq/" className="hover:text-gray-300" passHref>
            <span className="sr-only">Instagram</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/" className="hover:text-gray-300" passHref>
            <span className="sr-only">LinkedIn</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM0 22h5V7H0v15zm7.75 0h5V13c0-2.5 1.48-3.75 3.5-3.75 2 0 3.25 1.25 3.25 3.75v9h5v-9.5c0-4.5-2.5-6.5-5.75-6.5-2.25 0-3.5 1-4.25 2V7H7.75v15z" />
            </svg>
          </Link>

          <Link href="mailto:example@example.com" className="hover:text-gray-300" passHref>
            <span className="sr-only">Mail</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 7l7-5H5l7 5zm-7 7h14V8l-7 5-7-5v10z" />
            </svg>
          </Link>

          <Link href="https://medium.com/" className="hover:text-gray-300" passHref>
            <span className="sr-only">Medium</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V4zm5.5 1.5c-.83 0-1.5.67-1.5 1.5v10c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-9zM10 12l2.5 2.5L15 12l-2.5-2.5L10 12z" />
            </svg>
          </Link>




        </div>
      </div>
    </div>
  )
}
