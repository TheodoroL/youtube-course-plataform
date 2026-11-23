import { Metadata } from "next";

interface PageDetalhesCursoProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageDetalhesCursoProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `CodarSe - Curso ${id}`,
    description: `Detalhes do curso ${id}`,
  };
}

// export const metadata: Metadata = {
//   title: "CodarSe - Cursos de Next JS",
//   description: "E ncontre o curso perfeito para você!",
// };

export default async function PageDetalhesCurso({
  params,
}: PageDetalhesCursoProps) {
  const { id } = await params;
  return (
    <>
      <h1>Detalhes do Curso</h1>
      <p>ID: {id}</p>
    </>
  );
}
