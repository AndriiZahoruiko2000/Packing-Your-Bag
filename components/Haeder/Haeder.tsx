import Link from "next/link";
import css from "./Haeder.module.css";

const Haeder = () => {
  return (
    <header className={css["haeder"]}>
      <div className={css["inner"]}>
        <Link href="/" className={css["brand"]}>
          <span className={css["brandMark"]}>SP</span>
          <span className={css["brandText"]}>
            <strong>Smart Pack</strong>
            <span>Планувальник речей для подорожей</span>
          </span>
        </Link>

        <nav className={css["nav"]} aria-label="Головна навігація">
          <ul className={css["navList"]}>
            <li>
              <Link href="/" className={css["navLink"]}>
                Головна
              </Link>
            </li>
            <li>
              <Link href="/list-packing" className={css["navLink"]}>
                Списки
              </Link>
            </li>
            <li>
              <Link href="" className={css["navLink"]}>
                Налаштування
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Haeder;
