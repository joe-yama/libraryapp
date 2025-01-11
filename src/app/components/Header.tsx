import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Library, Plus, BookCopy } from "lucide-react";

function Header() {
  return (
    <nav className="flex items-center justify-between bg-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 text-gray-600 mr-12">
        <Library />
        <Link href="/" className="mx-1 font-semibold text-xl tracking-tight">
          CoCo Library
        </Link>
      </div>
      {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> */}
      <div className="flex items-center justify-end gap-3">
        <Link href="/books" className="">
          <Button variant={"ghost"}>
            <BookCopy />
            Book List
          </Button>
        </Link>
        <Link href="/books/add" className="">
          <Button className="bg-gray-600">
            <Plus />
            Register Book
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
