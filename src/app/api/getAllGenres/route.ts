import { NextResponse } from "next/server"

export async function GET() {
    try {
        const res = await fetch(`${process.env.BASE_URL}genres?key=${process.env.RAWG_API_KEY}`, {
            next: {revalidate: 10},
        })
        const data = await res.json()
        return NextResponse.json({
            data: data.results
        })
    } catch (error) {
        throw new Error("Genres Fetch Failed")
    }   
}