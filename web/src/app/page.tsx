import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between p-24">
      <Link href={"/groups"}>Тест: Выбор группы</Link>
    </section>
  );
}
