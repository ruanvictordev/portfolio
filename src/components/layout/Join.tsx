import { Button } from "../ui/button";

export default function Join() {
  return (
    <div className="py-12 p-32 max-md:p-4" id="organizers">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Junte-se à Nossa Comunidade</h1>
        <p className="text-muted-foreground">
        Quer ser líder de projetos ou palestrante em nossos eventos? Preencha o formulário:
        </p>
      </div>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
        {/* Cartão de Líder de Projeto */}
        <div className="flex flex-col gap-4 bg-primary p-6 rounded-md text-secondary text-center h-full">
          <h1 className="text-lg font-bold">Líder de Projeto</h1>
          <p className="text-base text-muted-foreground flex-grow">
            Se você tem experiência em desenvolvimento e quer liderar uma equipe
            em projetos desafiadores e práticos, essa é a oportunidade perfeita
            para colocar suas habilidades à prova e guiar outros
            desenvolvedores.
          </p>
          <div className="mt-auto">
            <a href="" target="_blank">
              <Button variant="secondary">Formulário</Button>
            </a>
          </div>
        </div>

        {/* Cartão de Palestrante */}
        <div className="flex flex-col gap-4 bg-primary p-6 rounded-md text-secondary text-center h-full">
          <h1 className="text-lg font-bold">Palestrante</h1>
          <p className="text-base text-muted-foreground flex-grow">
            Tem paixão por compartilhar conhecimento? Junte-se a nós como
            palestrante e inspire a comunidade com suas experiências e ideias
            inovadoras.
          </p>
          <div className="mt-auto">
            <a href="" target="_blank">
              <Button variant="secondary">Formulário</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
