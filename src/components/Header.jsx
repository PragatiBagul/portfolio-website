import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-6">
      <ThemeToggle />
    </header>
  );
}
