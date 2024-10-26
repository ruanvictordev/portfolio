import { Badge } from "../ui/badge";

export default function About() {
  return (
    <section className="w-full" id="about">
      <div className="mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">About me</h1>
          <p className="text-muted-foreground">
            Learn more about who I am and what I do
          </p>
        </div>
        <div className="w-full flex flex-col items-center my-12 max-md:gap-4">
          <div className="hidden max-md:block w-full">
            <img
              className="rounded-full mx-auto max-w-[250px]"
              src="https://i.ibb.co/Jq0M7hW/1000038608.jpg"
              alt="Ruan Victor profile"
            />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <p className="text-base leading-relaxed text-justify">
              Hello, world! My name is <Badge>Ruan Victor</Badge>, and I’m a passionate frontend developer based in Brazil. I specialize in crafting engaging and dynamic web applications with a keen focus on user experience and modern design principles. My goal is to create intuitive and accessible interfaces that users enjoy interacting with.
            </p>
            <p className="text-base leading-relaxed text-justify">
              At the moment, I work as a freelancer, delivering tailor-made digital solutions for clients, while also taking on the role of a community organizer and leader with Code Warriors, a vibrant community focused on collaboration, open-source contributions, and growing as developers together. I’m proud to be at the helm of this initiative, fostering an environment where both new and experienced developers can share knowledge and grow their skills.
            </p>
            <p className="text-base leading-relaxed text-justify">
              In addition to that, I actively mentor and support other developers by participating in various coding communities. I love helping others solve challenges, improve their code, and guide them in their professional journey.
            </p>
            <p className="text-base leading-relaxed text-justify">
              I’m also passionate about agile methodologies and project management. Collaborating with teams, refining workflows, and delivering projects iteratively with a clear focus on goals and quality is something I deeply enjoy.
            </p>
            <p className="text-base leading-relaxed text-justify">
              Beyond coding, I’m a big fan of mobile games, and I like to engage in the strategic thinking that comes with playing chess. Of course, I never miss a chance to indulge in some delicious pizza because who doesn’t love pizza? 😄🍕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
