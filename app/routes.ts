import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // `/`

  route("about", "routes/AboutPage.tsx"), // `/about`
  route("services", "routes/ServicesPage.tsx"), // `/services`
  route("contact", "routes/ContactPage.tsx"),   // `/contact`
] satisfies RouteConfig;
