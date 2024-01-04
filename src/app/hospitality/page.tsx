import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
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
        <p className="text-lg max-w-prose text-bold text-muted-foreground">
          Choose a job from the dropdown and submit your responses to be scored
          by an executive recruiter
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 text-lg">
          <DropdownMenu>
            <DropdownMenuTrigger>Hospitality Jobs</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Hospitality</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/frontdesk">Front Desk Agent</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/restserv">Restaurant Server</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
