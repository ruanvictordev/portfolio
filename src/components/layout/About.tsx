import { Badge } from "../ui/badge";

export default function About() {
  return (
    <div className="bg-secondary p-32 max-md:p-4" id="about">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Sobre a Comunidade</h1>
        <p className="text-muted-foreground">
          Conheça mais sobre nossa história
        </p>
      </div>
      <section className="w-full flex justify-around gap-6 items-center my-12 max-md:flex-col">
        <div>
          <img
            className="w-full h-full rounded-full"
            src="https://github.com/user-attachments/assets/bba49041-5374-469a-891a-763066518db0"
            alt="peoples in space"
          />
        </div>
        <div className="flex flex-col gap-2 max-w-lg">
          <p className="text-base leading-relaxed text-justify">
            A comunidade <Badge>Code Warriors</Badge> foi criada no IFPI Campus Pedro II com o
            objetivo de unir estudantes apaixonados por tecnologia.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Aqui, promovemos o desenvolvimento de projetos com mentoria,
            networking e incentivo a apresentações em eventos, oferecendo um
            ambiente colaborativo e enriquecedor. Os membros têm acesso a
            mentoria especializada, aprimorando suas habilidades e expandindo
            suas redes de contatos.
          </p>
          <p className="text-base leading-relaxed text-justify">
            Se você busca um espaço para crescer e se conectar com outros
            apaixonados por tecnologia, junte-se à comunidade Code Warriors.
            Venha fazer parte dessa jornada incrível!
          </p>
        </div>
      </section>
    </div>
  );
}
