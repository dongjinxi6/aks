const add_today_data = document.getElementById("add_today_data");
const show_data = document.getElementById("show_data");
// var table = document.createElement("table");
// th_data = ["商品号","支出","上架费",]


// var tr = document.createElement("tr"); //trtable建立之后，创建tr标签，
// for (var j = 0; j < th_data.length; j++) { //针对每个tr(行) 进行td（列）插入
//     var th = document.createElement("th") //创建td标签
//     var text = document.createTextNode(th_data[j]) //创建文本内容
//     th.appendChild(text) //之后再进行丰富td标签
//     tr.appendChild(th); //丰富tr标签
// }
// table.appendChild(tr); //将tr插入table内，丰富table内容

data = [
    [{ "商品号": 2022, "总支出": 2022 }, { "商品费": 203, "上架费": 346 }],
    [{ "商品号": 2023, "总支出": 2022 }, { "商品费": 203, "上架费": 346 }],
    [{ "商品号": 2024, "总支出": 2022 }, { "商品费": 203, "上架费": 346 }],
    [{ "商品号": 2024, "总支出": 2022 }, { "商品费": 203, "上架费": 346 }],
    [{ "商品号": 2024, "总支出": 2022 }, { "商品费": 203, "上架费": 346 }],
]
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    var table = document.createElement("table");
    // div.innerHTML = "商品号："+details_data[i][0]+"&nbsp;&nbsp;&nbsp;"+"总支出："+(details_data[i][1]+details_data[i][2])+"<br>"+"支出费："+details_data[i][1]+"&nbsp;&nbsp;&nbsp;&nbsp;"+"上架费："+details_data[i][2];
    for (var j = 0; j <= data[i].length - 1; j++) {
        var tr = document.createElement("tr");
        for (const [key, value] of Object.entries(data[i][j])) {
            var td = document.createElement("td");
            var text_key = document.createTextNode(key + "：");
            td.appendChild(text_key);
            tr.appendChild(td);
            var td = document.createElement("td");
            var text_key = document.createTextNode(value);
            td.appendChild(text_key);
            td.style.width = "60px"
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
    div.classList.add('add_data')
    add_today_data.appendChild(div);
}




var table = document.createElement("table");
th_data = ["商品号", "支出", "上架费", "收入", "利润", "本周收入"]


var tr = document.createElement("tr"); //trtable建立之后，创建tr标签，
for (var j = 0; j < th_data.length; j++) { //针对每个tr(行) 进行td（列）插入
    var th = document.createElement("th") //创建td标签
    var text = document.createTextNode(th_data[j]) //创建文本内容
    th.appendChild(text)
    tr.appendChild(th);
}
table.appendChild(tr);

data = [
    ["00282", "1000", "130", "0", "0", "0", "0"],
    ["00282", "1000", "130", "0", "0", "0", "0"],
    ["00282", "1000", "130", "0", "0", "0", "0"],
    ["00282", "1000", "130", "0", "0", "0", "0"],
    ["00282", "1000", "130", "0", "0", "0", "0"]
]
for (var i = 0; i <= data.length - 1; i++) {
    var tr = document.createElement("tr"); //trtable建立之后，创建tr标签，
    for (var j = 0; j < th_data.length; j++) { //针对每个tr(行) 进行td（列）插入
        var th = document.createElement("td") //创建td标签
        var text = document.createTextNode(data[i][j]) //创建文本内容
        th.appendChild(text) //之后再进行丰富td标签
        tr.appendChild(th); //丰富tr标签

        if (i % 2 === 0) {
            tr.style.background = "#f5b185"
        } else {
            tr.style.background = "#ec988b"
        }
    }
    table.appendChild(tr); //将tr插入table内，丰富table内容
}
show_data.appendChild(table)
table.classList.add('data_details')
