import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  try {
    // Get the absolute path to the public directory
    const publicDirectory = path.join(process.cwd(), "public")

    // Read the widget.js file content
    const fileContent = await fs.readFile(
      path.join(publicDirectory, "widget.js"),
      "utf8"
    )

    return new Response(fileContent, {
      headers: {
        "Content-Type": "application/javascript",
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
  } catch (error) {
    console.error("Error serving widget script:", error)
    return new Response('console.error("Widget script loading error");', {
      status: 500,
      headers: { "Content-Type": "application/javascript" },
    })
  }
}
