export function CourseHeader() {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-2xl font-extrabold">Detalhes do Curso</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis veniam
        sit quos quo, minima ab perferendis nam necessitatibus, quasi iusto
        dignissimos reiciendis quaerat nisi id repellendus. Aperiam labore
        voluptates quae.
      </p>

      <div className="flex items-center flex-row gap-2">
        <button className="py-2 px-4 bg-paper rounded-full">
          Compartilhar
        </button>
        <span>48 aulas</span>
      </div>
    </section>
  );
}
