"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { MdPlayCircleOutline } from "react-icons/md";

interface IStartCourseProps {
  title: string;
  idCourse: string;
  idClass: string;
  urlImage: string;
}

export function StartCourse({
  idCourse,
  idClass,
  urlImage,
  title,
}: IStartCourseProps) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    initialInView: true,
  });
  return (
    <>
      <div ref={ref} className="p-3 bg-paper rounded-md flex flex-col gap-2">
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
          Começar curso
        </Link>
      </div>
      {!inView && (
        <div className="p-3 bg-paper rounded-2xl flex  flex-col gap-4 absolute left-0 right-0 top-14">
          <h1 className="text-xl font-extrabold">{title}</h1>
          <Link
            className="bg-primary p-2 px-3 rounded text-center"
            href={`/player/${idCourse}/${idClass}`}
          >
            Começar curso
          </Link>
        </div>
      )}
    </>
  );
}
