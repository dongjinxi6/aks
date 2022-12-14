const main = document.createElement("div")
main.id = "main"
document.body.appendChild(main)
document.head.innerHTML += '<link rel="stylesheet" href="../style_css_js/css/total.css">'

const handleSwitch = (data) => {
    switch (data) {
        case '识别完成':
            return "<span style = 'color:red'>"+data+"</span>"
            break
        case '识别中':
            return "<span style = 'color:green'>"+data+"</span>"
            break
        case "操作":
            // return "<button style= 'background-color: red;height:30px;width:50px;border-radius: 8px;'>删除</button>"
            var operation = `
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Reorder Three</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Refresh</title><path d="M320 146s24.36-12-64-12a160 160 0 10160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 58l80 80-80 80"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                `
            return operation
        default:
            return "<span style = 'color:black'>"+data+"</span>"
    }
  }

function create_table(data){
    const table_div = document.createElement("div")
    table_div.innerText = "任务名称："
    table_div.appendChild(document.createElement("input"))
    const button_div =document.createElement("button")
    button_div.innerHTML = "搜索"
    table_div.appendChild(button_div)
    const table_data = document.createElement("table")
    for (var i = 0; i<data.length;i++){
        var tr = document.createElement("tr");
        if (i == 0){
            var table_head = "th"
        }else{
            var table_head = "td"
        }
        var str = ``
        for (var item =0;item<= data[i].length-2;item++){
            var str_data = `<${table_head}>${handleSwitch(data[i][item])}<${table_head}>`
            str += str_data
        }

        tr.innerHTML = str
        table_data.appendChild(tr);
        if (table_head === "td" ){
            tr.addEventListener('click', function () {
                console.log("id_"+this.innerText[0])
                const open_state =document.getElementById("id_"+this.innerText[0])
                if (open_state.style.display == "none"){
                    open_state.style.display = "block"
                }else{
                    open_state.style.display = "none"

                }
                // document.getElementById("id_"+this.innerText[0]).style.display = "block"
            })
            var data_childs = data[i][8]
            var tr = document.createElement("tr");
            var table_childs = document.createElement("table");
            var td_childs = document.createElement("td");

            for (var j = 0; j<=data_childs.length-1;j++){
                var tr_childs = document.createElement("tr");
                const str = `
                <td>${data_childs[j][0]}</td>
                <td>${data_childs[j][1]}</td>
                <td>${data_childs[j][2]}</td>
                <td>${data_childs[j][3]}</td>
                `
                tr_childs.innerHTML = str
                table_childs.appendChild(tr_childs)
            }
            td_childs.colSpan = "10"
            table_childs.style.display = "none";
            td_childs.appendChild(table_childs)
            tr.appendChild(td_childs)
            // tr.style.display = "none";
            table_childs.id ="id_"+i
            table_data.appendChild(tr);
        }
    }
    table_div.appendChild(table_data)
    return table_div
}

function div_table(){
    var data = [
        ["序号","任务名","发起时间","操作人","总文件数","全部识别/部门识别/识别失败文件数","状态","操作s","childs"],
        ["1","1211_2827270_001","2022/11/04","张三","120","11/0/0","识别完成","操作",[["1","金属类","总文件数：30","数量：90"],["2","金属类","总文件数：30","数量：90"]]],
        ["2","1211_2827270_001","2022/11/04","张三","120","11/0/0","识别中","操作",[["1","金属类","总文件数：30","数量：90"],["2","金属类","总文件数：30","数量：90"]]],
        ["3","1211_2827270_001","2022/11/04","张三","120","11/0/0","识别完成","操作",[["1","金属类","总文件数：30","数量：90"],["2","金属类","总文件数：30","数量：90"]]],
        ["4","1211_2827270_001","2022/11/04","张三","120","11/0/0","识别完成","操作",[["1","金属类","总文件数：30","数量：90"],["2","金属类","总文件数：30","数量：90"]]],
        ["5","1211_2827270_001","2022/11/04","张三","120","11/0/0","识别完成","操作",[["1","金属类","总文件数：30","数量：90"],["2","金属类","总文件数：30","数量：90"]]],
        ["6","1211_2827270_001","2022/11/04","张三","120","11/0/0","识别完成","操作",[["1","金属类","总文件数：30","数量：90"],["2","金属类","总文件数：30","数量：90"]]],
    ]
    table = create_table(data)
    table.classList.add("div_data")
    main.appendChild(table)
}
div_table()