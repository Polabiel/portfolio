import { NextResponse } from 'next/server'

export async function GET() {

  const repo = await fetch('https://api.github.com/users/polabiel')

  const data = await repo.json()

  return new NextResponse(data.avatar_url)
};