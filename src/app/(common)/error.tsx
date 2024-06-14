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
              Your session has expired. Please log in again.
            </h1>
            <Button variant="secondary" onClick={() => logout("/login")}>
              Login
            </Button>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-xl">
              The website is experiencing issues, please try again later!
            </h1>
            <Button variant="secondary" onClick={() => reset()}>
              Try Again
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
