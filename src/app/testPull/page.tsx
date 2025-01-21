import { createClient } from "@/utils/server";

export default async function testPull() {
  const supabase = await createClient();
  const { data: users } = await supabase.from("transactions").select();

  return <pre>{JSON.stringify(users, null, 2)}</pre>
}