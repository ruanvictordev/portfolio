import { Button } from "../ui/button";
import ReactAudioPlayer from "react-audio-player";

export default function Home() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <div className="flex justify-between items-center h-5/6 max-md:flex-col">
          <div className="flex flex-col gap-4 max-w-lg max-md:text-center max-md:justify-center max-md:items-center">
            <h1 className="flex gap-2 text-2xl font-bold max-md:justify-center">
              <span>Hey, I'm Ruan Victor!</span>
              <span className="inline-block origin-[70% 70%] animate-wave">
                👋🏻
              </span>
            </h1>
            <p className="text-base leading-relaxed">
              I am a frontend developer living in Pedro II - PI. Focused on
              studying, creating and sharing knowledge.
            </p>
            <p className="text-base leading-relaxed">
              I work mainly in the{" "}
              <a
                className="underline font-semibold"
                href="https://codewarriorsdevs.vercel.app/"
              >
                Code Warriors
              </a>{" "}
              community as an organizer and founder organizing events and open
              source projects.
            </p>
            <p className="text-base leading-relaxed">
              Listen my CV with AI in podcast format:
            </p>
            <ReactAudioPlayer className="max-md:w-2/3" src="/audio/ia_audio.wav" controls />
            <div className="flex gap-4 max-md:flex-col max-md:w-full">
              <a href="https://github.com/user-attachments/files/17500566/Ruan-Curriculo-ATS.EN-US.pdf" download>
                <Button className="max-md:w-3/5">Download CV</Button>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 max-md:hidden">
            <img
              className="w-64 rounded-full"
              src="https://i.ibb.co/Jq0M7hW/1000038608.jpg"
              alt="Ruan Victor profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
