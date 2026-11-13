import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Pagina inicial",
  description: "E ncontre o curso perfeito para você!",
};

export default function Home() {
  return (
    <main className="bg-background">
      <Section />
    </main>
  );
}
