import { NextRequest, NextResponse } from 'next/server'

// offending line
export const runtime = 'edge'

export async function GET(request: NextRequest) {
  return NextResponse.json({ hello: 'world' });
}
