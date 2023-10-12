import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchQuery = request.headers.get('search');
    const searchByGenre = request.headers.get('genres');
   

    try {
        let apiUrl = `${process.env.BASE_URL}games?key=${process.env.RAWG_API_KEY}`;

        if(searchQuery && searchByGenre) {
            apiUrl += `&search=${searchQuery}&genres=${searchByGenre}`;
        }else if (searchQuery && searchQuery.trim() !== "") {
            apiUrl += `&search=${searchQuery}`;
        }else if (searchByGenre && searchByGenre.trim() !== "") {
            apiUrl += `&genres=${searchByGenre}`;
        } 
     
        const res = await fetch(apiUrl, {
            next: { revalidate: 10 },
        });

        const data = await res.json();
        return NextResponse.json({
            data: data.results
        });
    } catch (error) {
        throw new Error("API request failed");
    }
}
