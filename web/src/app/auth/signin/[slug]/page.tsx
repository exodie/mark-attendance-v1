import { Button, Input } from "@/components/ui";
import Link from "next/link";

export default function SignInWithSlugs() {
  return (
    <form className="w-8/12 lg:w-4/12 flex flex-col mt-80 gap-2">
      <h1 className="mx-auto text-xl">Авторизация</h1>
      <Input
        minLength={4}
        maxLength={16}
        type="text"
        placeholder="Логин"
        className="w-full text-lg"
      />
      <Input
        minLength={8}
        maxLength={32}
        type="password"
        placeholder="Пароль"
        className="w-full text-lg"
      />
      <Button className="w-full text-lg">Продолжить</Button>
      <hr />
      <div className="flex flex-row items-center ml-0 gap-2">
        <label>Хотите добавить группу?</label>
        <Link href={"/addGroup"}>
          <Button size={"default"}>Добавить</Button>
        </Link>
      </div>
    </form>
  );
}
