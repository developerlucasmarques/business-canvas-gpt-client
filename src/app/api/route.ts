// app/api/route.js 👈🏽
import 'server-only'

import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

// To handle a GET request to /api
export async function GET(request: NextApiRequest) {
  const response = await fetch(`${process.env.API_URL}/question`, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  })
  const json = await response.json()
  return NextResponse.json(json, { status: 200 })
}

// To handle a POST request to /api
export async function POST(request: NextApiRequest) {
  const response = await fetch(`${process.env.API_URL}/business-canvas`, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  })
  const json = await response.json()
  return NextResponse.json(json, { status: 201 })
}

// Same logic to add a `PATCH`, `DELETE`...
