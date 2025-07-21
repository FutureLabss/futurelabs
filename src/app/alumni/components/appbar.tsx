"use client";

import Link from "next/link";
import { navigation } from "./core/const/navdata";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Nav from "@/app/components/headcomponents/Nav";
import { IoIosArrowDown } from "react-icons/io";

export default function AppBarComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white w-full">
      <nav
        className="container mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="sr-only">Start Innovation Hub</span>
          <Nav />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label="Open main menu"
            role="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-md font-semibold leading-6 text-gray-900 hover:text-gray-600 flex gap-1"
                >
                  {item.name}
                  <span className="mt-1">
                    <IoIosArrowDown size={18} />
                  </span>
                </Link>
                <div
                  className="absolute left-0 hidden group-hover:block
                            bg-white shadow-lg border-black border-t-4 rounded-md mt-0 z-50 w-52"
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-5 border-gray-300 border-b-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-md font-semibold leading-6 text-gray-900 hover:text-gray-600"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </nav>
      <div className={`lg:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Nav />
            <button
              type="button"
              role="button"
              aria-label="Close menu"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.submenu ? (
                    <div key={item.name} className="space-y-1">
                      <span className="block text-base font-semibold leading-7 text-gray-900">
                        {item.name}
                      </span>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block pl-4 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    //     <header className="bg-white w-full ">
    //   <nav className="container mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    //     <div className="flex lg:flex-1">
    //         <span className="sr-only">Start Innovation Hub</span>
    //         <Nav />
    //     </div>
    //     <div className="flex lg:hidden">
    //       <button
    //         type="button"
    //         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //         onClick={() => setMobileMenuOpen(true)}
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <Menu className="h-6 w-6" aria-hidden="true" />
    //       </button>
    //     </div>
    //     <div className="hidden lg:flex lg:gap-x-10">
    //       {navigation.map((item) => (
    //         <Link
    //           key={item.name}
    //           href={item.href}
    //           className="text-md font-semibold leading-6 text-gray-900 hover:text-gray-600"
    //         >
    //           {item.name}
    //         </Link>
    //       ))}
    //     </div>
    //   </nav>
    //   <div className={`lg:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
    //     <div className="fixed inset-0 z-50" />
    //     <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //       <div className="flex items-center justify-between">
    //         <Link href="/" className="-m-1.5 p-1.5">
    //           <span className="sr-only">Start Innovation Hub</span>
    //           <Nav />
    //         </Link>
    //         <button
    //           type="button"
    //           className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //           onClick={() => setMobileMenuOpen(false)}
    //         >
    //           <span className="sr-only">Close menu</span>
    //           <X className="h-6 w-6" aria-hidden="true" />
    //         </button>
    //       </div>
    //       <div className="mt-6 flow-root">
    //         <div className="-my-6 divide-y divide-gray-500/10">
    //           <div className="space-y-2 py-6">
    //             {navigation.map((item) => (
    //               <Link
    //                 key={item.name}
    //                 href={item.href}
    //                 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //               >
    //                 {item.name}
    //               </Link>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
