"use client";

import { Button } from "@/components/common";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-6  flex-col bg-white">
      <h1 className="text-xl">
        The website is experiencing issues, please try again later!
      </h1>
      <Button variant="secondary" onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  );
}
