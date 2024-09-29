import { Button } from "../ui/button";

export default function Wiki() {
  return (
    <div className="bg-secondary p-32 max-md:p-4" id="about">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Dúvidas</h1>
        <p className="text-muted-foreground">
          Ainda tem dúvidas sobre a comunidade? Acesse nossa wiki.
        </p>
      </div>
      <section className="w-full flex flex-col text-center justify-center items-center max-w-3xl gap-6 mx-auto my-12">
        <h1 className="text-xl font-bold w-full">Nossa Wiki</h1>
        <p>
          Nós criamos um guia para te ajudar a entender como a comunidade está
          organizada desde o Discord, Projetos e Eventos. Confira. Caso ainda
          tenha dúvidas, entre em contato com a Organização.
        </p>
        <a href="https://github.com/codewarriorsdevs/guia" target="_blank">
          <Button>Acessar Wiki</Button>
        </a>
      </section>
    </div>
  );
}
