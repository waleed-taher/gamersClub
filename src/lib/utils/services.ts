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

export const Allplatforms = async () => {
    try {
        const fetchData = async () => {
            const res = await fetch(`https://api.rawg.io/api/platforms/lists/parents?key=00fd899fd2e24e168fc1cc8fa05d9235`, {
                next: { revalidate: 10 }
            })
            const data = await res.json()
           
            return data.results
        }
        const results = fetchData()
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const platformSortedGames = async (platform: number) => {
    try {
        const fetchData = async () => {
            const res = await fetch(`https://api.rawg.io/api/games?key=00fd899fd2e24e168fc1cc8fa05d9235&parent_platforms=${platform}`, {
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


export const orderingGames = async (order: string) => {
    try {
        const fetchData = async () => {
            const res = await fetch(`https://api.rawg.io/api/games?key=00fd899fd2e24e168fc1cc8fa05d9235&ordering=-${order}&page=2`, {
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

export const OrderByDifferentGenre = async (platform:number, order: string) => {
    try {
        const fetchData = async () => {
            const res = await fetch(`https://api.rawg.io/api/games?key=00fd899fd2e24e168fc1cc8fa05d9235&parent_platforms=${platform}&ordering=-${order}`, {
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



export const OrderByDifferentGenre2 = async (platform:number, genre: string) => {
    try {
        const fetchData = async () => {
            const res = await fetch(`https://api.rawg.io/api/games?key=00fd899fd2e24e168fc1cc8fa05d9235&parent_platforms=${platform}&genres=${genre}`, {
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

export const OrderByDifferentGenre3 = async (platform:number, genre: string, ordering: string) => {
    try {
        const fetchData = async () => {
            const res = await fetch(`https://api.rawg.io/api/games?key=00fd899fd2e24e168fc1cc8fa05d9235&parent_platforms=${platform}&genres=${genre}&ordering=-${ordering}`, {
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