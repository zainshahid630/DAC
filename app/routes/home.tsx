import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { About } from "~/welcome/about";

import { ContactUs } from "~/welcome/contactus";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // return <ContactUs />
  // return <Services />
  // return <About />
  return <Welcome />;
}
