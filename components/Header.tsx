"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Menus from "@/app/(dashboard)/_components/Menus";

export const Header = () => {
  return (
    <div>
      <header className="text-red-600 font-extrabold uppercase body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
            <span className="ml-3 text-xl">Spotify</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Button className="hover:bg-gray-100 hidden md:block mr-5 bg-white rounded-full text-sm font-semibold text-black">
              Get Premium
            </Button>
            <Button className="hover:bg-indigo-600 hidden lg:block mr-5 bg-indigo-500 rounded-full text-sm font-semibold text-white">
              Install App
            </Button>

            <div className="mr-5 hidden lg:block text-white cursor-pointer">
              <Bell />
            </div>

            <div className="mr-5 hidden lg:block text-white cursor-pointer">
              <UserButton afterSignOutUrl="/" />
            </div>
            <div className="m-0 md:mr-5 text-white cursor-pointer">
              <Menus />
            </div>
          </nav>
          <div className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"></div>
        </div>
      </header>
    </div>
  );
};
