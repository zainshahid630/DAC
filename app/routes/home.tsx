import type { Route } from "./+types/home";
import { About } from "~/welcome/about";

import { ContactUs } from "~/welcome/contactus";
import { Welcome } from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return <Welcome />;
}
