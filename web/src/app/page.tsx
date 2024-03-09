import { Button } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between p-24">
      <Link href={"/auth/signin"}>
        <Button variant={"default"}>Авторизоваться</Button>
      </Link>
    </section>
  );
}
