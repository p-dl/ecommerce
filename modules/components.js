import { appender, creator } from "./processor.js"
import { cls, total } from "./tools.js"

export const carouselItems = items => {
    cls('carouselLoop')
    let parent = document.getElementById("carouselLoop")
    items.forEach(item => {
        let elemsCount = {
            'div': 3,
            'img': 1,
            'h5': 1,
            'p': 2,
            'a': 1
        }
        let attribs = {
            'div': {
                'class': ['carousel-item', 'card', 'card-body']
            },
            'img': {
                'class': ['card-img-top'],
                'src': [item.image],
                'alt': ["Product Photo"]
            },
            'h5': {
                'class': ['card-title'],
                'html': [`Price Rs.: ${item.price}`]
            },
            'p': {
                'class': ['card-text', 'card-text fs-5'],
                'html': [item.title, item.description]
            },
            'a': {
                'id': [`add_to_cart${item.id}`],
                'class': ['col-8 offset-2 btn btn-dark'],
                'type': ['button'],
                'html': ["Add to cart"],
                'event': [{ 'click': `add_item(${item.id}), change_button(${item.id})` }]
            }
        }
        let appends = {
            "div2": ["h50", "p0", "p1", "a0"],
            "div1": ["img0", "div2"],
            "div0": ["div1"],
        }
        creator(elemsCount, attribs)
        appender(appends)
        item.id == "1" && div0.classList.add("active")
        parent.appendChild(div0)
    })
}

export const tableCart = cartItems => {
    cls('cartTable')
    let parent = document.getElementById("cartTable")
    cartItems.forEach(item => {
        let elemsCount = {
            'tr': 1,
            'td': 5,
            'button': 3,
            'i': 3
        }
        let attribs = {
            'tr': {
                'scope': ['row']
            },
            'td': {
                'html': [item.id, item.title, item.qty, (item.price * item.qty).toFixed(2), '']
            },
            'button': {
                'class': ["btn btn-secondary", "btn btn-primary", "btn btn-danger"],
                'event': [{ 'click': `subtract_item(${item.id})` }, { 'click': `add_item(${item.id})` }, { 'click': `delete_item(${item.id})` }]
            },
            'i': {
                'class': ['fa-solid fa-minus', 'fa-solid fa-plus', 'fa-solid fa-trash-can']
            },
        }
        let appends = {
            'button0': ['i0'],
            'button1': ['i1'],
            'button2': ['i2'],
            'td4': ['button0', 'button1', 'button2'],
            'tr0': ['td0', 'td1', 'td2', 'td3', 'td4'],
        }
        creator(elemsCount, attribs)
        appender(appends)
        parent.appendChild(tr0)
        total()
    })
}