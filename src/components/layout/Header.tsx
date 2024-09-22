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
  return (
    <nav className="w-full sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2 dark:border-neutral-900 dark:bg-black/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/148078462?s=200&v=4" />
            </Avatar>
            <h1 className="text-lg font-semibold max-md:text-base">Code Warriors</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                <NavigationMenuItem>
                  <a href="#about">Sobre</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#projects">Projetos</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#events">Eventos</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#organizers">Organizadores</a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="https://forms.gle/ePTMgwdr3e9WMQg87" target="_blank" rel="noopener noreferrer"><Button>Discord</Button></a>
            <ModeToggle />
          </div>

          <div className="md:hidden flex gap-4 items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="px-2">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col gap-4">
                    <NavigationMenuItem>
                      <a href="#about">Sobre</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a href="#projects">Projetos</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a href="#events">Eventos</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a href="#join">Participe</a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a href="#organizers">Organizadores</a>
                    </NavigationMenuItem>
                    <a href="https://forms.gle/ePTMgwdr3e9WMQg87" target="_blank" rel="noopener noreferrer"><Button>Discord</Button></a>
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
