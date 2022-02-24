import fetchData from "./fetchItems.js"
import { carouselItems, tableCart } from "./components.js"
/* localStorage.clear() */
const items = await fetchData('https://fakestoreapi.com/products')
const cart = { id: localStorage.id && JSON.parse("[" + localStorage.id + "]") || [], qty: localStorage.qty && JSON.parse("[" + localStorage.qty + "]") || [] }
for (let i = 0; i < items.length; i++) {
    if (!cart.id.includes(items[i].id)) items[i]['qty'] = 0
    else items[i]['qty'] = parseInt(cart.qty[cart.id.indexOf(items[i].id)])
}
export { cart, items }
carouselItems(items)
const cartItems = items.filter(item => cart.id.includes(item.id))
cartItems && tableCart(cartItems)