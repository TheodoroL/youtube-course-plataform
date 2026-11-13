import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

export function Card({ imageUrl, title, description, href }: ICardProps) {
  return (
    <Link href={href} className="hover:no-underline ">
      <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
        <Image
          className="aspect-video object-cover rounded-xl"
          src={imageUrl}
          alt={title}
          width={1000}
          height={0}
          draggable={false}
        />
        <h1 className="font-extrabold text-lg">{title}</h1>
        <p className="line-clamp-3">{description}</p>
      </article>
    </Link>
  );
}
