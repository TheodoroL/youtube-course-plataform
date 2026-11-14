import { Card } from "@/components/card/Card";

interface ISectionProps {
  title: string;
  variant?: "grid" | "h-list";
}

const courses = [
  {
    id: "1",
    title: "Curso de Next.js",
    description: "Aprenda a criar aplicações modernas com Next.js.",
    imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
    href: "/cursos/nextjs",
  },
  {
    id: "2",
    title: "Curso de React",
    description: "Aprenda a criar interfaces de usuário modernas com React.",
    imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
    href: "/cursos/react",
  },
  {
    id: "3",
    title: "Curso de TypeScript",
    description: "Aprenda a usar TypeScript para aplicações robustas.",
    imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
    href: "/cursos/typescript",
  },
];

export function Section({ title, variant = "grid" }: ISectionProps) {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="text-xl font-bold">{title}</h2>

      <ul
        data-variant={variant}
        className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        {courses.map((course) => (
          <li
            key={course.id}
            data-variant={variant}
            className="w-full data-[variant=h-list]:sm:w-72"
          >
            <Card
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl} // Ajustado para 'image' (confira se o seu Card usa 'image' ou 'imageUrl')
              href={course.href}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
