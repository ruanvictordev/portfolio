import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
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
              I contribute mainly in{" "}
              <a
                className="underline font-semibold"
                href="https://codewarriorsdevs.vercel.app/"
              >
                Code Warriors
              </a>{" "}
              community organizing events and projects open source.
            </p>
            <div className="flex gap-4 max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center">
              <a
                href="https://docs.google.com/document/d/1_3D13fmxLZLi8p-KkfWOLuDqGZg0GAFC/edit?usp=sharing&ouid=112805369781832032718&rtpof=true&sd=true"
                target="_blank"
              >
                <Button className="max-md:w-full">See my CV</Button>
              </a>
              <div className="flex gap-4">
                <Button
                  className="px-2"
                  variant="outline"
                  onClick={() =>
                    window.open("https://github.com/ruanvictordev", "_blank")
                  }
                >
                  <GitHubLogoIcon />
                </Button>
                <Button
                  className="px-2"
                  variant="outline"
                  onClick={() =>
                    window.open("https://instagram.com/ruanvictordev", "_blank")
                  }
                >
                  <InstagramLogoIcon />
                </Button>
                <Button
                  className="px-2"
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/ruanvictordev/",
                      "_blank"
                    )
                  }
                >
                  <LinkedInLogoIcon />
                </Button>
              </div>
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
