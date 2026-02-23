import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  // const tag = request.nextUrl.searchParams.get("tag");
  // const expire = 60 * 60 * 24 // 1 day
  // revalidateTag(tag!, {expire})

  // return NextResponse.json({ revalidated: true, now: Date.now() });

  const tag = request.nextUrl.searchParams.get('tag')

  if (tag) {
    revalidateTag(tag, 'max')
    return Response.json({ revalidated: true, now: Date.now() })
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing tag to revalidate',
  })
}