import { Metadata } from "next";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/start-course/StartCourser";

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

export default async function PageDetalhesCurso({
  params,
}: PageDetalhesCursoProps) {
  const { id } = await params;

  return (
    <main className="mt-8 flex justify-center">
      <div className=" w-full min-[800px]:max-w-220 flex flex-col gap-4">
        <StartCourse
          title="Curso de Next.js"
          idCourse={id}
          idClass="1"
          urlImage="https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg"
        />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
      </div>
    </main>
  );
}
