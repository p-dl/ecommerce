import { cart, items } from "./app.js"
import { tableCart } from "./components.js"

export const creator = (elemsCount, attribs) => {
    Object.keys(elemsCount).forEach(keyOut => {
        for (let i = 0; i < elemsCount[keyOut]; i++) {
            window.eval('var ' + keyOut + i + ' = document.createElement("' + keyOut + '");')
            Object.keys(attribs[keyOut]).forEach(keyIn => {
                keyIn !== "html" && keyIn !== "event" && eval(keyOut + i + '.setAttribute("' + keyIn + '", "' + attribs[keyOut][keyIn][i] + '");')
                keyIn === "html" && eval(keyOut + i + '.innerText= "' + attribs[keyOut][keyIn][i] + '";')
                keyIn === "event" && eval(keyOut + i + '.addEventListener("' + Object.keys(attribs[keyOut][keyIn][i])[0] + '", ' + '() => { ' + Object.values(attribs[keyOut][keyIn][i])[0] + '; });')
            })
        }
    })
}

export const appender = (appends) => {
    Object.keys(appends).forEach(keyOut => {
        for (let i = 0; i < appends[keyOut].length; i++) {
            eval(keyOut + ".appendChild(" + appends[keyOut][i] + ");")
            //keyOut.appendChild(appender[keyOut][i])
        }
    })
}
const add_item = itemId => {
    let newItem = items.filter(item => item.id === itemId)
    ++newItem[0].qty
    if (!cart.id.includes(itemId)) {
        cart.id.push(itemId)
        cart.qty.push(1)
        localStorage.setItem("id", cart.id)
        localStorage.setItem("qty", cart.qty)
    } else {
        let index = cart.id.indexOf(itemId)
        cart.qty[index] = (++cart.qty[index])
        localStorage.setItem('qty', cart.qty)
    }
    let cartItems = items.filter(item => cart.id.includes(item.id))
    cartItems.map(obj => newItem.find(o => o.id === obj.id) || obj)
    tableCart(cartItems)
}
const delete_item = itemId => {
    let index = cart.id.indexOf(itemId)
    let newItem = items.filter(item => item.id === itemId)
    cart.id.splice(index, 1)
    cart.qty.splice(index, 1)
    localStorage.setItem("id", cart.id)
    localStorage.setItem('qty', cart.qty)
    let cartItems = items.filter(item => cart.id.includes(item.id))
    newItem[0].qty = 0
    cartItems.map(obj => newItem.find(o => o.id === obj.id) || obj)
    tableCart(cartItems)
}
const subtract_item = itemId => {
    let newItem = items.filter(item => item.id === itemId)
    let id = itemId
    let cartItems = items.filter(item => cart.id.includes(item.id))
    --newItem[0].qty
    if (newItem[0].qty !== 0) {
        let index = cart.id.indexOf(itemId)
        cart.qty[index] = (--cart.qty[index])
        localStorage.setItem("qty", cart.qty)
        cartItems.map(obj => newItem.find(o => o.id === obj.id) || obj)
        tableCart(cartItems)
    } else {
        delete_item(itemId)
    }
}
const change_button = itemId => {
    document.getElementById(`add_to_cart${itemId}`).innerText = "Added"
}