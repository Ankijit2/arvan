import { NextResponse } from "next/server";


// Define paths that require admin access


export async function middleware() {
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.next();
    }
    // Existing middleware logic here
  }
  