import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Prepare for your job interview,{" "}
          <span className="text-blue-600">FREE</span>!
        </h1>
        <p className="text-xl mt-6 max-w-prose text-bold text-muted-foreground">
          Welcome to InterPrep
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <DropdownMenu>
            <DropdownMenuTrigger>Jobs</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Technology</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/webdev">Web Developer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Software Engineer</DropdownMenuItem>
              <DropdownMenuItem>App Developer</DropdownMenuItem>
              <DropdownMenuLabel>Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Executive Assistant</DropdownMenuItem>
              <DropdownMenuLabel>Sales</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>BDR</DropdownMenuItem>
              <DropdownMenuItem>Large Account Management</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
