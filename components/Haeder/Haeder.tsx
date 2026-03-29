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
            <span>Travel packing planner</span>
          </span>
        </Link>

        <nav className={css["nav"]} aria-label="Main navigation">
          <ul className={css["navList"]}>
            <li>
              <Link href="/" className={css["navLink"]}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/list-packing" className={css["navLink"]}>
                Packing Lists
              </Link>
            </li>
            <li>
              <Link href="" className={css["navLink"]}>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Haeder;
