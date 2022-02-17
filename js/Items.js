class Items {
    constructor() {
        this.quantity = 0
    }
    static async bring() {
        const res = await fetch('https://fakestoreapi.com/products/1')
        const item = await res.json()
        console.log('items fetched')
        document.getElementById('carousel-loop').innerHTML = item.title + "<br> More items to come <br>"
    }
}
export { Items }