export const handler = async (param: string) => {
    try {
        const fetchData = async () => {
            const res = await fetch(`https://api.rawg.io/api/${param}?key=00fd899fd2e24e168fc1cc8fa05d9235`, {
                next: { revalidate: 10 }
            })
            const data = await res.json()
            return data.results
        }
        const results = fetchData()
        return results
    } catch (err) {
        console.log(err)
    }
   
}

export const handler2 = async (genre: string) => {
    try {
        const fetchData = async () => {
            const res = await fetch(`https://api.rawg.io/api/games?key=00fd899fd2e24e168fc1cc8fa05d9235&genres=${genre}`, {
                next: { revalidate: 10 }
            })
            const data = await res.json()
           
            return data.results
        }
        const results = fetchData()
        
        return results
    } catch (error) {
        console.log('error')
    }
}