import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let email: string;
  try {
    const body = await req.json();
    email = (body.email ?? "").trim();
  } catch {
    return NextResponse.json({ error: "无效请求" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "邮箱格式不对" }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from("waitlist").insert({ email });
    // 23505 = unique violation (duplicate email) — treat as success
    if (error && error.code !== "23505") {
      console.error("[waitlist]", error.message);
      return NextResponse.json({ error: "服务器错误，请稍后重试。" }, { status: 500 });
    }
  } else {
    // Supabase not configured yet — log locally, still return success
    console.log("[waitlist] new signup:", email);
  }

  return NextResponse.json({ ok: true });
}
