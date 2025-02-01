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
              during the <strong>Computer Technician</strong> course at IFPI -
              Pedro II Campus and, later, I started higher education in{" "}
              <strong>Systems Analysis and Development</strong> at the same
              institution. Since then, I have been improving myself,
              participating in events, meeting people, and exploring the entire
              world of technology.
            </p>
            <p className="text-base leading-relaxed text-justify">
              My main technical skills involving Frontend Development include:{" "}
              <strong>ReactJS</strong>, <strong>TypeScript</strong>,{" "}
              <strong>JavaScript</strong>, <strong>CSS</strong>,{" "}
              <strong>Tailwind</strong>,{" "}
              <strong>Bootstrap</strong>. In addition to these, in Backend, I
              have basic knowledge through personal projects with{" "}
              <strong>NodeJS</strong>, <strong>PHP</strong>,{" "}
              <strong>MySQL</strong>, <strong>MongoDB</strong>. I have slight
              experience with design (creating web application layouts with the{" "}
              <strong>Figma</strong> tool), I also have knowledge of agile
              development (<strong>SCRUM</strong> and <strong>Kanban</strong>{" "}
              methodologies) and soft skills for collaborative work aimed at
              communication and the delivery of valuable products.
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
