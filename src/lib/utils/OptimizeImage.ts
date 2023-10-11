export function OptimizeImage(url : string) {
    const target = 'media/'
    const index =  url.indexOf(target) + target.length
    const newUrl = url.slice(0,index) + 'crop/600/400/' + url.slice(index,url.length)
    return newUrl
}