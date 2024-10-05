import { useState } from "react";
import {
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Button } from "../ui/button";
import { NavigationMenu } from "../ui/navigation-menu";
import { Avatar } from "../ui/avatar";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <nav className="w-full sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2 dark:border-neutral-900 dark:bg-black/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-2 max-sm:px-6 max-lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/62728646?v=4" />
            </Avatar>
            <h1 className="text-lg font-semibold max-md:text-base">Ruan Victor</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                <NavigationMenuItem>
                  <a href="#about">About</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#projects">Projects</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#journey">Journey</a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>

          <div className="md:hidden flex gap-4 items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button className="px-2">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col gap-4">
                    <NavigationMenuItem>
                      <a href="#about" onClick={closeSheet}>About</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a href="#projects" onClick={closeSheet}>Projects</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a href="#journey" onClick={closeSheet}>Journey</a>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetContent>
            </Sheet>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
