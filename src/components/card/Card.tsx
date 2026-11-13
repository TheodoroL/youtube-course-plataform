import Image from "next/image";
import Link from "next/link";
export function Card() {
  return (
    <Link href="/cursos" className="hover:no-underline ">
      <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
        <Image
          className="aspect-video object-cover rounded-xl"
          src="https://i.ytimg.com/vi/XHrbg2iYNCg/hqdefault.jpg"
          alt="Card image"
          width={1000}
          height={0}
          draggable={false}
        />
        <h1 className="font-extrabold text-lg">Curso de Next js</h1>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          voluptatem. Voluptas, sint enim libero voluptates rerum ex non, ullam
          perferendis quam deserunt adipisci praesentium quae tempore alias
          aspernatur iure dolorem.
        </p>
      </article>
    </Link>
  );
}
