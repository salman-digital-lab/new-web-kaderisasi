import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  request.cookies.delete("kaderisasi-web-session");
  request.cookies.delete("kaderisasi-web-name");
}
