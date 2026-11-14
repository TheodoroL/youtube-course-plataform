import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",
  description: "E ncontre o curso perfeito para você!",
};
export default function PageCursos() {
  return (
    <>
      <Section title="Todos os Cursos" variant="grid" />
    </>
  );
}
