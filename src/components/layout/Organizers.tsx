import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";

export default function Organizers() {
  return (
    <div className="py-12 p-32 max-md:p-4" id="organizers">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Organizadores</h1>
        <p className="text-muted-foreground">
          São as pessoas que são responsáveis por dirigir a comunidade
        </p>
      </div>
      <section className="w-full flex justify-center items-center my-12 max-md:flex-col">
        <div className="grid grid-cols-3 gap-x-32 gap-y-16 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-2 mx-auto">
          <div className="flex flex-col justify-center items-center gap-4">
            <Avatar className="w-32 h-32">
                <AvatarImage src="https://i.ibb.co/QYLW68t/Whats-App-Image-2024-09-17-at-14-42-47.jpg" alt="Organizador da Comunidade" />
            </Avatar>
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold">Ruan Victor</h1>
                <p>Desenvolvedor Frontend</p>
                <p>Organizer</p>
                <a href="https://www.linkedin.com/in/ruanvictordev/"><Button className="px-2" variant={"outline"}><LinkedInLogoIcon/></Button></a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Avatar className="w-32 h-32">
                <AvatarImage src="https://i.ibb.co/xqgYcfr/Whats-App-Image-2024-09-22-at-11-17-04.jpg" alt="Organizadora da Comunidade" />
            </Avatar>
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold">Kely Soares</h1>
                <p>Desenvolvedora Frontend</p>
                <p>Organizer</p>
                <a href="https://www.linkedin.com/in/kelysoare5/"><Button className="px-2" variant={"outline"}><LinkedInLogoIcon/></Button></a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Avatar className="w-32 h-32">
                <AvatarImage src="https://i.ibb.co/VYQ9vRH/Whats-App-Image-2024-09-22-at-11-17-03.jpg" alt="Co-Organizador da Comunidade" />
            </Avatar>
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-bold">Bruno Lima</h1>
                <p>Desenvolvedor Frontend</p>
                <p>Co-Organizer</p>
                <a href="https://www.linkedin.com/in/bruno-lima-05aba3241/"><Button className="px-2" variant={"outline"}><LinkedInLogoIcon/></Button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
