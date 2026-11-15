"use client";

import { Card, ICardProps } from "@/components/card/Card";
import { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface ISectionProps {
  title: string;
  variant?: "grid" | "h-list";
  items: ICardProps[];
}

export function Section({ title, variant = "grid", items }: ISectionProps) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [scrollAt, setScrollAt] = useState<"start" | "middle" | "end">("start");

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    console.log(e.currentTarget.scrollLeft);
    if (e.currentTarget.scrollLeft === 0) setScrollAt("start");
    else if (
      e.currentTarget.scrollWidth - e.currentTarget.clientWidth ===
      e.currentTarget.scrollLeft
    )
      setScrollAt("end");
    else setScrollAt("middle");
  };

  const handleSetScroll = (scrollAmout: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({
      behavior: "smooth",
      left: currentScrollLeft + scrollAmout,
    });
  };

  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="text-xl font-bold">{title}</h2>

      <ul
        onScroll={handleScroll}
        ref={scrollRef}
        data-variant={variant}
        className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        {variant === "h-list" && (
          <button
            disabled={scrollAt === "start"}
            onClick={() => handleSetScroll(-350)}
            className="h-14 w-14 bg-primary rounded-full hidden sm:flex 
        items-center justify-center sticky my-auto left-0 -ml-14 transition-opacity disabled:opacity-0 active:opacity-80"
          >
            <MdKeyboardArrowLeft size={32} />
          </button>
        )}
        {items.map((card) => (
          <li
            key={card.title}
            data-variant={variant}
            className="w-full data-[variant=h-list]:sm:w-72"
          >
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              href={card.href}
            />
          </li>
        ))}
        {variant === "h-list" && (
          <button
            disabled={scrollAt === "end"}
            onClick={() => handleSetScroll(350)}
            className="h-14 w-14 bg-primary rounded-full hidden sm:flex
           
        items-center justify-center sticky my-auto right-0 -ml-14 transition-opacity disabled:opacity-0 active:opacity-80 "
          >
            <MdKeyboardArrowRight size={32} />
          </button>
        )}
      </ul>
    </section>
  );
}
