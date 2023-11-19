import React from "react";
import { LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Menus = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  return (
    <Sheet>
      <SheetTrigger className="pr-4 mt-2 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="p-0 border-0 bg-zinc-800 h-fit w-[10rem] mt-20  mr-4"
      >
        <Button className="mx-8 mt-8 hover:bg-zinc-700 text-white font-semibold p-3">
          Account
        </Button>
        <Button className="mx-8 mt-2 hover:bg-zinc-700 text-white font-semibold p-3">
          Profile
        </Button>
        <Button className="mx-8 mt-2 hover:bg-zinc-700 text-white font-semibold p-3">
          Premium
        </Button>
        <Button className="mx-8 mt-2 hover:bg-zinc-700 text-white font-semibold p-3">
          Support
        </Button>
        <Button className="mx-8 mt-2 hover:bg-zinc-700 text-white font-semibold p-3">
          Download
        </Button>
        <Button className="mx-8 mt-2 hover:bg-zinc-700 text-white font-semibold p-3">
          Settings
        </Button>
        <div className="">
          {isTeacherPage || isPlayerPage ? (
            <Link href="/home">
              <Button className="mx-8 mt-2 hover:bg-zinc-700 text-white font-semibold p-3">
                <LogOut className="h-4 w-4 mr-2" /> EXIT
              </Button>
            </Link>
          ) : (
            <Link href="/artist/music">
              <Button className="mx-8 mt-2 hover:bg-zinc-700 text-white font-semibold p-3">
                Artist
              </Button>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menus;
