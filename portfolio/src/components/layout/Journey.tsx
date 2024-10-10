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
    <div className="w-full" id="journey">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Journey</h1>
        <p className="text-muted-foreground">
          A little bit about my journey and experiences
        </p>
      </div>

      <section className="w-full flex justify-center items-center my-12">
        <Tabs defaultValue="formation" className="w-1/2 max-md:w-full">
          <TabsList className="flex w-full justify-evenly">
            <TabsTrigger value="formation" className="flex-1">Formation</TabsTrigger>
            <TabsTrigger value="experience" className="flex-1">Experience</TabsTrigger>
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
                    <AccordionTrigger className="text-left">
                      (2021-2024) Systems Analysis and Development.
                    </AccordionTrigger>
                    <AccordionContent className="min-h-[100px]">
                      In this course, I learned:
                      <ul>
                        <li>- Software development methodologies, including Agile and Waterfall.</li>
                        <li>- Programming languages like Java, JavaScript, and Python.</li>
                        <li>- Database management using SQL and NoSQL databases.</li>
                        <li>- Systems analysis techniques, such as UML and DFD.</li>
                        <li>- Web applications development (React and Node.js).</li>
                        <li>- Software testing and quality assurance practices.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      (2018-2020) Computer Technician.
                    </AccordionTrigger>
                    <AccordionContent className="min-h-[100px]">
                      In this course, I learned:
                      <ul>
                        <li>- Hardware troubleshooting and maintenance.</li>
                        <li>- Network configuration and management (LANs).</li>
                        <li>- Operating system installation and optimization.</li>
                        <li>- Basic programming logic using Bash and Python.</li>
                        <li>- Cybersecurity fundamentals.</li>
                        <li>- Customer service and support skills.</li>
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
                    <AccordionTrigger className="text-left">
                      (2024 - Today) Freelancer.
                    </AccordionTrigger>
                    <AccordionContent className="min-h-[100px]"> 
                      In this experience, I learned:
                      <ul>
                        <li>- Managing client expectations and delivering quality work under tight deadlines.</li>
                        <li>- Fullstack development focusing on React, Node.js, and MongoDB.</li>
                        <li>- Improved communication and problem-solving skills with clients.</li>
                        <li>- Implementing modern web design principles using Tailwind CSS and Shadcn UI.</li>
                        <li>- Applying clean code and component reuse best practices.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      (2024 - Today) Community Leader - Code Warriors.
                    </AccordionTrigger>
                    <AccordionContent className="min-h-[100px]"> 
                      In this experience, I learned:
                      <ul>
                        <li>- Leadership and team-building skills.</li>
                        <li>- Fostering collaboration and knowledge sharing in a developer community.</li>
                        <li>- Public speaking and presentation skills during meetups.</li>
                        <li>- Project management using SCRUM and agile methodologies.</li>
                        <li>- Strategies for engaging and growing a community.</li>
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
