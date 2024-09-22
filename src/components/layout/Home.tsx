import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Home() {
  return (
    <section className="w-full h-5/6 px-32 py-28 flex justify-around gap-6 items-center max-md:flex-col max-md:py-30 max-md:px-4">
      <div className="flex flex-col gap-4 max-w-lg max-md:text-center">
        <h1 className="text-3xl font-bold">Code Warriors</h1>
        <p className="text-base leading-relaxed"> 
          Uma comunidade dedicada ao networking, colaboração em projetos e realização de eventos. Junte-se a nós e faça parte dessa jornada!
        </p>
        <div className="flex gap-4 max-md:flex-col max-md:w-full">
          <a href="#about"><Button className="max-md:w-3/5">Sobre nós</Button></a>
          <a href="https://forms.gle/ePTMgwdr3e9WMQg87" target="_blank" rel="noopener noreferrer"><Button className="max-md:w-3/5" variant={"outline"}>Discord</Button></a>
        </div>
      </div>
      <div className="flex-shrink-0 max-md:hidden">
        <img className="w-64 rounded-full" src="https://avatars.githubusercontent.com/u/148078462?s=200&v=4" alt="Code Warriors" />
      </div>
    </section>
  );
}
