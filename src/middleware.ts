import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.cookies.has("kaderisasi-web-session")) {
    return NextResponse.redirect(new URL("/masuk", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/anggota/:path*", "/kegiatan/daftar/:path*"],
};
