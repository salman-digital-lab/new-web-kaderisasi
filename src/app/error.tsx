"use client";

import { Button } from "@/components/common";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-6  flex-col bg-white">
      <h1 className="text-xl">
        Web sedang dalam masalah, silahkan coba kembali beberapa saat lagi!
      </h1>
      <Button variant="secondary" onClick={() => reset()}>
        Coba Lagi
      </Button>
    </div>
  );
}
