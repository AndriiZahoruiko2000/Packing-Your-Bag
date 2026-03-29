import Link from "next/link";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <section className={css["hero"]}>
        <div className={css["heroContent"]}>
          <p className={css["eyebrow"]}>Smart Pack</p>
          <h1 className={css["title"]}>Просте планування подорожей і списків речей</h1>
          <p className={css["description"]}>
            Smart Pack допомагає створювати списки речей для різних поїздок,
            розділяти їх на категорії та додавати кількість предметів, щоб
            нічого не забути перед виїздом.
          </p>

          <div className={css["actions"]}>
            <Link href="/list-packing" className={css["primaryAction"]}>
              Відкрити списки
            </Link>
          </div>
        </div>

        <div className={css["heroCard"]}>
          <p className={css["cardLabel"]}>Що вміє сайт</p>
          <ul className={css["featureList"]}>
            <li>Створює окремі списки речей для різних подорожей.</li>
            <li>Групує предмети за категоріями, наприклад одяг чи документи.</li>
            <li>Додає кількість речей для точнішої підготовки.</li>
            <li>Зберігає всі важливі речі для поїздки в одному місці.</li>
          </ul>
        </div>
      </section>

      <section className={css["infoGrid"]}>
        <article className={css["infoCard"]}>
          <p className={css["infoTitle"]}>Для мандрівників</p>
          <p className={css["infoText"]}>
            Користуйся застосунком перед поїздкою на вихідні, відрядженням чи
            довгою відпусткою, коли потрібен структурований список замість
            нотаток у різних місцях.
          </p>
        </article>

        <article className={css["infoCard"]}>
          <p className={css["infoTitle"]}>Як це працює</p>
          <p className={css["infoText"]}>
            Спочатку створи список для поїздки, потім додай категорії, а після
            цього заповни кожну категорію речами, які хочеш взяти.
          </p>
        </article>

        <article className={css["infoCard"]}>
          <p className={css["infoTitle"]}>Чому це зручно</p>
          <p className={css["infoText"]}>
            Зрозуміла структура допомагає швидко побачити, що вже підготовлено,
            а що ще потрібно покласти перед виїздом.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Page;
