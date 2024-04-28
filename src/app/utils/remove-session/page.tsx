"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RemoveClient() {
  const router = useRouter();

  useEffect(() => {
    fetch("api/remove-session").then(() => router.push("/"));
  }, [router]);
  return <div></div>;
}
