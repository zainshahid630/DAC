import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { About } from "~/welcome/about";
import { Services } from "~/welcome/services";
import { ContactUs } from "~/welcome/contactus";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ServicesPage() {

  return <Services />

}
