import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MusicPage = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Link href="/artist/create">
        <Button className="bg-indigo-500 rounded-full hover:bg-indigo-600">Create</Button>
      </Link>
    </div>
  );
};

export default MusicPage;
