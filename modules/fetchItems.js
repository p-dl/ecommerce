async function fetchData(url) {
    const res = await fetch(url)
    const items = await res.json()
    return items
}
export default fetchData