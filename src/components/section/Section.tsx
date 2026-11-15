import { Card, ICardProps } from "@/components/card/Card";

interface ISectionProps {
  title: string;
  variant?: "grid" | "h-list";
  items: ICardProps[];
}

export function Section({ title, variant = "grid", items }: ISectionProps) {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="text-xl font-bold">{title}</h2>

      <ul
        data-variant={variant}
        className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
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
      </ul>
    </section>
  );
}
