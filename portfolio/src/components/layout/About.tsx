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
              Hello world! Welcome to my Portfolio! My name is Ruan Victor, born
              and raised in Pedro II - PI. I am currently a Frontend Developer
              and one of the organizers of the Code Warriors developer
              community, a community focused on sharing knowledge in the tech
              area.
            </p>
            <p className="text-base leading-relaxed text-justify">
              I started in the area in 2018 when I had contact with programming
              during the Computer Science Technician course at IFPI - Pedro II
              Campus and, later, I started higher education in Systems Analysis
              and Development at the same institution, since then I have been
              improving myself, participating in events and meeting people and
              the whole world of the area.
            </p>
            <p className="text-base leading-relaxed text-justify">
              My main technical skills involving Frontend Development include:
              <u>ReactJS</u>, <u>TypeScript</u>, <u>JavaScript</u>, <u>CSS</u>,{" "}
              <u>SCSS</u>, <u>Tailwind</u>, <u>Bootstrap</u>. In addition to
              these, in Backend, I have basic knowledge through personal
              projects with <u>NodeJS</u>, <u>PHP</u>, <u>MySQL</u>, <u>MongoDB</u>. I have
              slight experience with design (creating web application layouts
              with the <u>Figma</u> tool), I also have knowledge of agile
              development (<u>SCRUM</u> and <u>Kanban</u> methodologies) and
              soft skills for collaborative work aimed at communication and the
              delivery of valuable products.
            </p>
            <p className="text-base leading-relaxed text-justify">
              In addition to coding, I am a big fan of mobile games, books and
              dabbling in chess. And, of course, I like to have a coffee while I
              do all this! After all, who doesn't like coffee? ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
