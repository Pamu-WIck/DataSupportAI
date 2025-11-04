import { signOut } from "@/auth";

export async function POST() {
  await signOut();
  return new Response(null, { status: 204 });
}
