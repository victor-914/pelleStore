import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import dashboardNav from "../../utils/dashboardarray";
import { useRouter } from "next/router";
function DashboardLayout({ children }) {
  const router = useRouter();
  return (
    <div>
      <section>
        {" "}
        {/* <!-- Header --> */}
        <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
          <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
            <img
              class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
              src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
            />
            <span class="hidden md:block">ADMIN</span>
          </div>
          <div class="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
  
            <ul class="flex items-center ">
           
            </ul>
          </div>
        </div>
        {/* <!-- ./Header --> */}
        {/* <!-- Sidebar --> */}
        <div class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul class="flex flex-col py-4 space-y-1">
              <li class="px-5 hidden md:block">
                <div class="flex flex-row items-center h-8">
                  <div class="text-sm font-light tracking-wide text-gray-400 uppercase">
                    Main
                  </div>
                </div>
              </li>
              {dashboardNav.map((item) => (
                <li onClick={() => router.push(`/admin/${item.link}`)}>
                  <a
                    href="#"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      {item?.icon}
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">
              Copyright @2023
            </p>
          </div>
        </div>
      </section>
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
