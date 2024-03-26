"use client";

import { Button } from "@/components/common";
import logout from "../actions/logout";

export default function LogoutButton() {
  return (
    <Button
      onClick={() => {
        logout();
      }}
      variant="secondary"
      className="mt-4"
    >
      Keluar
    </Button>
  );
}
