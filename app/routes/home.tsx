import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
<div className="text-red-500 text-4xl font-bold p-10">
  Tailwind is working!
</div>

export default function Home() {
  return <Welcome />;
}
