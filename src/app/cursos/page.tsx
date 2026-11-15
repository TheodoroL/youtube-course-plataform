import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",
  description: "E ncontre o curso perfeito para você!",
};
const courses = [
  {
    title: "Curso de Next.js 1",
    description: "Aprenda a criar aplicações modernas com Next.js.",
    imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
    href: "/cursos/nextjs",
  },
  {
    title: "Curso de React 2",
    description: "Aprenda a criar interfaces de usuário modernas com React.",
    imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
    href: "/cursos/react",
  },
  {
    title: "Curso de TypeScript 3",
    description: "Aprenda a usar TypeScript para aplicações robustas.",
    imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
    href: "/cursos/typescript",
  },
  {
    title: "Curso de TypeScript 4",
    description: "Aprenda a usar TypeScript para aplicações robustas.",
    imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
    href: "/cursos/typescript",
  },
];

export default function PageCursos() {
  return (
    <main className="mt-8 flex justify-center">
      <div className=" min-[800px]:max-w-220">
        <Section title="Todos os Cursos" variant="grid" items={courses} />
      </div>
    </main>
  );
}
