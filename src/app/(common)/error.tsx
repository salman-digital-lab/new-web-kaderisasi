"use client";

import { Button } from "@/components/common";
import logout from "@/features/Auth/actions/logout";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const renderError = () => {
    switch (error.message) {
      case "Unauthorized":
        return (
          <>
            <h1 className="text-xl">
              Sesi anda sudah kadarluarsa. Silahkan masuk kembali.
            </h1>
            <Button variant="secondary" onClick={() => logout('/masuk')}>
              Masuk
            </Button>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-xl">
              Web sedang dalam masalah, silahkan coba kembali beberapa saat
              lagi!
            </h1>
            <Button variant="secondary" onClick={() => reset()}>
              Coba Lagi
            </Button>
          </>
        );
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-6  flex-col bg-white">
      {renderError()}
    </div>
  );
}
