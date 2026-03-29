import css from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={css["footer"]}>
      <div className={css["inner"]}>
        <div className={css["lead"]}>
          <p className={css["eyebrow"]}>Smart Pack</p>
          <p className={css["title"]}>Плануй легше. Пакуй розумніше.</p>
          <p className={css["text"]}>
            Створюй списки під конкретні поїздки, тримай важливі речі під рукою
            та уникай хаосу в останній момент перед виїздом.
          </p>
        </div>

        <div className={css["linksBlock"]}>
          <p className={css["linksTitle"]}>Навігація</p>
          <div className={css["links"]}>
            <Link href="/">Головна</Link>
            <Link href="/list-packing">Списки</Link>
            <Link href="">Налаштування</Link>
          </div>
        </div>

        <p className={css["copy"]}>2026 Smart Pack. Створено для організованих подорожей.</p>
      </div>
    </footer>
  );
};

export default Footer;
