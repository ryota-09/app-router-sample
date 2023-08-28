import { type NextRequest } from "next/server";

// NOTE: 「GET」は予約語。変更不可。
export async function GET(req: NextRequest) {
  
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (response.status !== 200) {
      return new Response(
        JSON.stringify({
          error: `${response.statusText}`,
        }),
        {
          status: response.status,
          statusText: response.statusText,
        }
      );
    }

    const totoList = await response.json();

    return new Response(JSON.stringify(totoList), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=300, stale-while-revalidate",
      },
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: `${error}` }), {
      status: 500,
      statusText: "🔥🔥🔥Internal Server Error",
    });
  }
}
