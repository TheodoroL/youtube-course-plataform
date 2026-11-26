import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/start-course/StartCourser";
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
    <main className="mt-8 flex justify-center">
      <div className=" w-full min-[800px]:max-w-220 flex flex-col gap-4">
        <StartCourse
          idCourse={id}
          idClass="1"
          urlImage="https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg"
        />
        <CourseHeader />
      </div>
    </main>
  );
}
