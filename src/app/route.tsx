import { NextResponse } from 'next/server'

export default function GET() {
  return new NextResponse(JSON.stringify({ message: 'world'}))
}
