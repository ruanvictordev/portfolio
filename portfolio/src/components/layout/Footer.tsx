import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export default function CommunityFooter() {
  return (
    <div className="px-40 max-md:px-4 max-lg:px-11 w-full sticky top-0 z-10 border-t-[1px] border-solid border-neutral-100 py-2 dark:border-neutral-900">
      <div className="mx-auto flex max-md:flex-row justify-between items-center gap-4">
        <div className="flex text-center justify-center items-center md:text-left">
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
            <LinkedInLogoIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
