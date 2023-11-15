// app/api/route.js 👈🏽
import 'server-only'

import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request:NextApiRequest) {
  
  const response = await fetch(`${process.env.API_URL}/api/question`, {
    method: 'GET',
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  });
  const json = await response.json();

  console.log(json);

  return NextResponse.json(json, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: NextApiRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// Same logic to add a `PATCH`, `DELETE`...