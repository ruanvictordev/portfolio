import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export default function CommunityFooter() {
  return (
    <div className="p-12 w-full sticky top-0 z-10 border-t-[1px] border-solid border-neutral-100 py-2 dark:border-neutral-900 max-md:p-4">
      <div className="max-w-5xl mx-auto flex flex-row md:flex-row justify-between items-center">
        <div className="flex flex-col gap-1 md:text-left mb-4 md:mb-0">
          <p className="text-sm">Ruan Victor © {new Date().getFullYear()}</p>
        </div>
        <div className="flex gap-4">
          <Button className="px-2" variant="outline" onClick={() => window.open('https://github.com/ruanvictordev', '_blank')}>
            <GitHubLogoIcon />
          </Button>
          <Button className="px-2" variant="outline" onClick={() => window.open('https://instagram.com/ruanvictordev', '_blank')}>
            <InstagramLogoIcon />
          </Button>
          <Button className="px-2" variant="outline" onClick={() => window.open('https://www.linkedin.com/company/ruanvictordev/', '_blank')}>
            <LinkedInLogoIcon/>
          </Button>
        </div>
      </div>
    </div>
  );
}
