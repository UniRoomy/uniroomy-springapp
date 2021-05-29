import headerStyles from "../styles/web/Header.module.css";

interface Props {}

export default function Header({}: Props) {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Clean</span>erz
      </h1>
      <p className={headerStyles.description}>Keep track of and book cleans!</p>
    </div>
  );
}
