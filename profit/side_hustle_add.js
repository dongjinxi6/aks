const add =  document.getElementById("add") // 捕获按钮
const main =  document.getElementById("main") // 捕获按钮
function alert_div_data(){
    const alert_div = document.createElement("div")
    const input_goods_numbey = document.createElement("input")
    alert_div.appendChild(input_goods_numbey)
    alert_div.style.zIndex="-1"
    alert_div.style.background="red"
    main.appendChild(alert_div)
    console.log("测试中")
}

add.onclick = alert_div_data
