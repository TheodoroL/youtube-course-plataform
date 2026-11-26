import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface IStartCourseProps {
  idCourse: string;
  idClass: string;
  urlImage: string;
}

export function StartCourse({
  idCourse,
  idClass,
  urlImage,
}: IStartCourseProps) {
  return (
    <div className="p-3 bg-paper rounded-md flex flex-col gap-2">
      <Link
        href={`/player/${idCourse}/${idClass}`}
        style={{
          backgroundImage: `url(${urlImage})`,
        }}
        className="bg-cover bg-no-repeat aspect-video bg-center rounded "
      >
        <div className="h-full w-full  flex items-center justify-center bg-background rounded opacity-0 hover:opacity-70 transition-opacity">
          <MdPlayCircleOutline size={58} />
        </div>
      </Link>
      <Link
        className="bg-primary p-2 px-3 rounded text-center"
        href={`/player/${idCourse}/${idClass}`}
      >
        Começar o curso
      </Link>
    </div>
  );
}
