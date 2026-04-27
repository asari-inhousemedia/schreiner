import { NextResponse } from "next/server";

export const runtime = "nodejs";

type FunnelPayload = {
  service?: string;
  object?: string;
  timing?: string;
  foerderung?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  honeypot?: string;
};

export async function POST(req: Request) {
  let body: FunnelPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (body.honeypot && body.honeypot.length > 0) {
    return NextResponse.json({ ok: true, spam: true });
  }

  if (!body.name || body.name.length < 2) {
    return NextResponse.json({ ok: false, error: "name_missing" }, { status: 400 });
  }
  if (!body.email || !/\S+@\S+\.\S+/.test(body.email)) {
    return NextResponse.json({ ok: false, error: "email_invalid" }, { status: 400 });
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    service: body.service ?? null,
    object: body.object ?? null,
    timing: body.timing ?? null,
    foerderung: body.foerderung ?? null,
    name: body.name,
    email: body.email,
    phone: body.phone ?? null,
    message: body.message ?? null,
  };

  console.log("[funnel-lead]", JSON.stringify(lead));

  return NextResponse.json({ ok: true });
}
