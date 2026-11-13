import { Card } from "@/components/card/Card";

export function Section() {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="text-xl font-bold">Todos os cursos</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <Card
            title="Curso de Next.js"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg"
            href="/cursos"
          />
        </li>
        <li>
          <Card
            title="Curso de React"
            description="Aprenda a criar interfaces de usuário modernas com React"
            imageUrl="https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg"
            href="/cursos"
          />
        </li>
        <li>
          <Card
            title="Curso de TypeScript"
            description="Aprenda a usar TypeScript para criar aplicações mais robustas"
            imageUrl="https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg"
            href="/cursos"
          />
        </li>
      </ul>
    </section>
  );
}
