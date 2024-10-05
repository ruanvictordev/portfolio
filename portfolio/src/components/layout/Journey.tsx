import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Journey() {
  return (
    <div className="p-24 max-md:p-4" id="journey">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Journey</h1>
        <p className="text-muted-foreground">
          A little bit about my journey and experiences
        </p>
      </div>
      <section className="w-full flex justify-center items-center my-12">
        <Tabs defaultValue="formation" className="w-6/12 max-md:w-full">
          <TabsList className="flex w-full justify-evenly">
            <TabsTrigger value="formation">Formation</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          <TabsContent value="formation">
            <Card>
              <CardHeader>
                <CardTitle>Formation</CardTitle>
                <CardDescription>
                  See my formation as Developer.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                    (2021-2024) Systems Analysis and Development.
                    </AccordionTrigger>
                    <AccordionContent>
                      In this course, I learned:
                      <ul>
                        <li>
                          - Software development methodologies, including Agile
                          and Waterfall, to plan and manage projects
                          efficiently.
                        </li>
                        <li>
                          - Programming languages such as Java, JavaScript, and
                          Python to build and maintain software systems.
                        </li>
                        <li>
                          - Database management using SQL and NoSQL databases,
                          and how to design scalable and efficient data
                          structures.
                        </li>
                        <li>
                          - Systems analysis techniques, such as UML and DFD, to
                          understand and model business processes.
                        </li>
                        <li>
                          - How to develop web applications, focusing on
                          front-end and back-end integration using technologies
                          like React and Node.js.
                        </li>
                        <li>
                          - Software testing and quality assurance practices to
                          ensure reliable and bug-free applications.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                    (2018-2020) Computer Technician.
                    </AccordionTrigger>
                    <AccordionContent>
                      In this course, I learned:
                      <ul>
                        <li>
                          - Hardware troubleshooting and maintenance, including
                          the assembly and repair of computer systems.
                        </li>
                        <li>
                          - Network configuration and management, focusing on
                          local area networks (LANs) and basic server setup.
                        </li>
                        <li>
                          - Operating system installation, configuration, and
                          optimization, including Windows and Linux
                          environments.
                        </li>
                        <li>
                          - Basic programming logic and automation using
                          scripting languages like Bash and Python.
                        </li>
                        <li>
                          - Cybersecurity fundamentals, focusing on protecting
                          data and networks from common threats.
                        </li>
                        <li>
                          - Customer service and support skills, working
                          directly with clients to solve technical issues.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
                <CardDescription>
                  See my experience as Developer.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                    (2024 - Today) Freelancer.
                    </AccordionTrigger>
                    <AccordionContent>
                      In this experience, I learned:
                      <ul>
                        <li>
                          - How to manage client expectations and deliver
                          quality work under tight deadlines.
                        </li>
                        <li>
                          - Developed proficiency in fullstack development,
                          focusing on technologies like React, Node.js, and
                          MongoDB.
                        </li>
                        <li>
                          - Enhanced communication and problem-solving skills
                          through direct interaction with clients and adapting
                          to their needs.
                        </li>
                        <li>
                          - Learned to implement modern web design principles
                          using Tailwind CSS and Shadcn UI.
                        </li>
                        <li>
                          - Improved code quality and maintainability by
                          applying industry best practices like clean code and
                          component reuse.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                    (2024 - Today) Community Leader - Code Warriors.
                    </AccordionTrigger>
                    <AccordionContent>
                      In this experience, I learned:
                      <ul>
                        <li>
                          - Leadership and team-building skills by organizing
                          meetups and guiding community members in open-source
                          projects.
                        </li>
                        <li>
                          - How to foster collaboration and knowledge sharing in
                          a growing developer community, enhancing collective
                          learning.
                        </li>
                        <li>
                          - Improved public speaking and presentation skills by
                          leading discussions and hosting technical talks during
                          meetups.
                        </li>
                        <li>
                          - Gained experience in project management using agile
                          methodologies, particularly SCRUM, to deliver
                          consistent results.
                        </li>
                        <li>
                          - Developed strategies for engaging community members
                          and growing the Code Warriors community through
                          outreach and social media.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
