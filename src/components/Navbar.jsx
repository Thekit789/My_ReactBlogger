import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-32 bg-white border-b ">
      <a href="/" className="text-2xl font-bold text-gray-800 no-underline">
        Thomson P<span className="text-green-500">.</span>
      </a>
      <div className="md:flex space-x-9 hidden">
        <a
          href="/login"
          className="px-9 py-2  rounded-full border no-underline text-gray-800 hover:text-gray-500"
        >
          Log in
        </a>
        <a
          href="/signup"
          className="px-8 py-2 bg-gray-900 text-white rounded-full no-underline hover:bg-gray-700 transition-colors"
        >
          Sign up
        </a>
      </div>
      <div className="md:hidden">
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 border-none m-0 p-0">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem className="bg-black">Login</DropdownMenuItem>
            <DropdownMenuItem>Sign up</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen rounded-none mt-4 flex flex-col gap-6 py-10 px-6 bg-white">
            <a
              href="/login"
              // className="px-8 py-4 rounded-full text-center text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors"
              className="w-max-full h-12 px-10 py-3 rounded-full flex justify-center items-center text-base font-medium border border-solid no-underline text-[#26231E] border-black bg-white hover:text-gray-500 transition-colors"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="w-max-full h-12 px-10 py-3 rounded-full flex justify-center items-center text-base font-medium border border-solid no-underline text-white border-black bg-[#26231E] hover:bg-gray-700 transition-colors"
            >
              Sign up
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
