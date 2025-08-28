import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectPisselToPuzzel() {
  const router = useRouter();
  useEffect(() => { router.replace("/puzzelpagina"); }, [router]);
  return null;
}
