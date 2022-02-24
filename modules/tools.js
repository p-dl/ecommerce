export const cls = id => {
    document.getElementById(id).innerHTML = ""
}
export const total = () => {
    let table = document.getElementById("cartTable"), sumQty = 0, sumPrice = 0
    for (let i = 1; i < table.rows.length; i++) {
        sumQty = sumQty + parseInt(table.rows[i].cells[2].innerHTML)
        sumPrice = sumPrice + parseInt(table.rows[i].cells[3].innerHTML)
    }
    document.getElementById("totalItems").innerText = sumQty
    document.getElementById("totalPrice").innerText = sumPrice.toFixed(2)
}