import ResponseError from "@/error/response-error";
import { ResponsePayload } from "@/types";
import { NextRequest, NextResponse } from "next/server";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const redirect_uri =
  process.env.NODE_ENV === "production"
    ? "https://portfolio-three-azure-71.vercel.app/api/callback"
    : "http://localhost:3000/api/callback";
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const code = req.nextUrl.searchParams.get("code");
    if (!code) {
      throw new ResponseError(400, "Code is required");
    }

    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
          ).toString("base64"),
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri,
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("Error callback route:", error);
    if (error instanceof ResponseError) {
      return NextResponse.json<ResponsePayload>({
        status: "failed",
        statusCode: error.status,
        message: error.message,
      });
    }

    return NextResponse.json<ResponsePayload>({
      status: "failed",
      statusCode: 500,
      message: "An error ocured",
    });
  }
}
