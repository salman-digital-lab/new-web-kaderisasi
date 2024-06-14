import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  cookies().delete("kaderisasi-web-session");
  cookies().delete("kaderisasi-web-name");

  return Response.json({ ok: true });
}
