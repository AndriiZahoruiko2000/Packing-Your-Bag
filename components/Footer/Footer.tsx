import css from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={css["footer"]}>
      <div className={css["inner"]}>
        <div className={css["lead"]}>
          <p className={css["eyebrow"]}>Smart Pack</p>
          <p className={css["title"]}>Plan lighter. Pack smarter.</p>
          <p className={css["text"]}>
            Build trip-specific lists, keep essentials visible, and avoid
            last-minute chaos before departure.
          </p>
        </div>

        <div className={css["linksBlock"]}>
          <p className={css["linksTitle"]}>Navigation</p>
          <div className={css["links"]}>
            <Link href="/">Home</Link>
            <Link href="/list-packing">Packing Lists</Link>
            <Link href="">Settings</Link>
          </div>
        </div>

        <p className={css["copy"]}>2026 Smart Pack. Built for organized travel.</p>
      </div>
    </footer>
  );
};

export default Footer;
