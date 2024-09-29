import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";

export default function CommunityFooter() {
  return (
    <div className="bg-secondary p-32 max-md:p-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-1 md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Code Warriors</h2>
          <p className="text-sm">Unindo desenvolvedores para crescimento e aprendizado.</p>
          <p className="text-sm">© {new Date().getFullYear()} Code Warriors. Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-4">
          <Button className="px-2" variant="outline" onClick={() => window.open('https://github.com/codewarriorsdevs', '_blank')}>
            <GitHubLogoIcon />
          </Button>
          <Button className="px-2" variant="outline" onClick={() => window.open('https://youtube.com/codewarriorsdevs', '_blank')}>
            <YoutubeIcon />
          </Button>
          <Button className="px-2" variant="outline" onClick={() => window.open('https://instagram.com/codewarriorsdevs', '_blank')}>
            <InstagramLogoIcon />
          </Button>
          <Button className="px-2" variant="outline" onClick={() => window.open('https://www.linkedin.com/company/codewarriorsdevs/', '_blank')}>
            <LinkedInLogoIcon/>
          </Button>
        </div>
      </div>
    </div>
  );
}
