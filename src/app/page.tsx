import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Pagina inicial",
  description: "E ncontre o curso perfeito para você!",
};

export default function Home() {
  const courses = [
    {
      title: "Curso de Next.js",
      description: "Aprenda a criar aplicações modernas com Next.js.",
      imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
      href: "/cursos/nextjs",
    },
    {
      title: "Curso de React",
      description: "Aprenda a criar interfaces de usuário modernas com React.",
      imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
      href: "/cursos/react",
    },
    {
      title: "Curso de TypeScript",
      description: "Aprenda a usar TypeScript para aplicações robustas.",
      imageUrl: "https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg",
      href: "/cursos/typescript",
    },
  ];

  return (
    <main className="mt-8 flex justify-center">
      <div className="max-w-full min-[880px]:max-w-[880px]">
        <Section title="Veja mais cursos" variant="h-list" items={courses} />
      </div>
    </main>
  );
}
