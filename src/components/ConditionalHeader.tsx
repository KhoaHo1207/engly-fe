"use client";

import { usePathname } from "next/navigation";
import Header from "./Homepage/Header";

const HIDDEN_HEADER_ROUTES = ["/login", "/register", "/forgot-password"];

export default function ConditionalHeader() {
  const pathname = usePathname();
  const hide = HIDDEN_HEADER_ROUTES.some((r) => pathname.startsWith(r));

  if (hide) return null;
  return <Header />;
}
