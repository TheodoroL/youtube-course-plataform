import { Card } from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Pagina inicial",
  description: "E ncontre o curso perfeito para você!",
};

export default function Home() {
  return (
    <main className="bg-background">
      <Card
        title="Curso de Next.js"
        description="Aprenda a criar aplicações web modernas com Next.js"
        imageUrl="https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg"
        href="/cursos"
      />
    </main>
  );
}
