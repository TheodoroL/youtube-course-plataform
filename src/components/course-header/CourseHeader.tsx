import { MdShare } from "react-icons/md";
import { CollapsebleText } from "./componets/CollapsebleText";
import { ContentCopy } from "./componets/ContentCopy";

export function CourseHeader() {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-2xl font-extrabold">Detalhes do Curso</h1>

      <CollapsebleText numberOfLinesWhenCollapsed={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est placeat
        dolore eligendi voluptates odit eos cupiditate veritatis unde? Sint,
        quasi libero qui quam illo veniam iste enim sunt nam! Aperiam labore,
        modi voluptate sequi quia expedita, earum magnam laboriosam nulla
        laborum, quo atque molestiae nemo numquam incidunt eaque porro natus
        odit dolore aliquam? Labore voluptatum veritatis magni vero libero.
        Possimus non accusantium quo eos assumenda, dolore eius fugiat aut quae
        a, dolor voluptatibus ab doloremque sequi? Ducimus veritatis mollitia
        fuga odit. Error facilis, molestias modi illum quisquam quis qui.
        Laboriosam distinctio voluptatibus magni quisquam dolor quam aperiam,
        quae ducimus deleniti inventore animi nobis? Modi, harum explicabo? Nemo
        dolorum eveniet non commodi soluta iste nesciunt a, laudantium veniam.
        Esse, soluta? Esse quas iure accusamus rem porro reprehenderit, deleniti
        iusto beatae impedit dolore facilis architecto, numquam perspiciatis!
        Consequatur totam deleniti in voluptas, a repellat porro, commodi quod
        autem expedita enim voluptate! Sed, fugit a. Officiis, blanditiis
        soluta. Ipsa ducimus delectus minus vel enim possimus nulla, id,
        deserunt dolorem suscipit blanditiis mollitia repellat totam neque iure
        reprehenderit nemo, debitis fugit. Enim, molestiae! Consectetur itaque
        nobis magnam, beatae repellat tempora illo impedit debitis enim id
        temporibus quo dolorem amet commodi pariatur eaque ipsa veritatis
        aspernatur vel, optio ullam numquam magni est perspiciatis. Aspernatur?
        Reprehenderit est tempora voluptatibus dignissimos minima natus nulla
        fugit id deserunt, cumque quam reiciendis eum. Quisquam, saepe?
        Similique voluptates numquam amet illum possimus enim iure est eius,
        nemo veniam non. Ullam ipsum odit esse, quis nisi ratione temporibus
        perspiciatis nostrum earum voluptates aperiam, quo quia. Dicta aliquam
        dolor, ad mollitia amet impedit beatae distinctio aliquid iure a
        blanditiis similique doloribus! Quos saepe error sed omnis voluptatibus,
        odio quas nobis modi, veniam rerum minima inventore cum provident
        facere, porro non in atque laborum quia accusamus consequatur. Dolore
        aspernatur iste iure debitis?
      </CollapsebleText>

      <div className="flex items-center flex-row gap-2">
        <ContentCopy title="copiar o conteudo" content="qdwwqdq">
          <button className=" flex items-center gap-2 py-2 px-4 bg-paper rounded-full">
            <MdShare />
            Compartilhar
          </button>
        </ContentCopy>
        <span>48 aulas</span>
      </div>
    </section>
  );
}
