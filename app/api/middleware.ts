import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import NextCors from 'nextjs-cors';

export async function middleware(req: NextApiRequest, res: NextApiResponse) {
  // Run the CORS middleware
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: '*', // Adjust this to restrict the origin as needed
    optionsSuccessStatus: 200,
  });

  return NextResponse.next();
}
