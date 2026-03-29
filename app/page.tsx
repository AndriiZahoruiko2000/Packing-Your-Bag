import Link from "next/link";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <section className={css["hero"]}>
        <div className={css["heroContent"]}>
          <p className={css["eyebrow"]}>Smart Pack</p>
          <h1 className={css["title"]}>Simple travel planning for your packing lists</h1>
          <p className={css["description"]}>
            Smart Pack helps you create packing lists for different trips, split
            them into categories, and add things with quantity so nothing gets
            forgotten before departure.
          </p>

          <div className={css["actions"]}>
            <Link href="/list-packing" className={css["primaryAction"]}>
              Open packing lists
            </Link>
          </div>
        </div>

        <div className={css["heroCard"]}>
          <p className={css["cardLabel"]}>What this site does</p>
          <ul className={css["featureList"]}>
            <li>Create separate packing lists for different trips.</li>
            <li>Group things by categories like clothes or documents.</li>
            <li>Add item quantities to keep preparation clear.</li>
            <li>Keep all trip essentials in one place.</li>
          </ul>
        </div>
      </section>

      <section className={css["infoGrid"]}>
        <article className={css["infoCard"]}>
          <p className={css["infoTitle"]}>For travelers</p>
          <p className={css["infoText"]}>
            Use the app before weekends away, business trips, or long vacations
            when you need a structured list instead of notes spread across
            different apps.
          </p>
        </article>

        <article className={css["infoCard"]}>
          <p className={css["infoTitle"]}>How it works</p>
          <p className={css["infoText"]}>
            First create a packing list, then add categories, and after that
            fill each category with the exact things you want to take.
          </p>
        </article>

        <article className={css["infoCard"]}>
          <p className={css["infoTitle"]}>Why it helps</p>
          <p className={css["infoText"]}>
            A clean structure makes it easier to review what is already planned
            and what still needs to be packed before leaving.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Page;
