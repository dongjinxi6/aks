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
            operation = [
                '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Reorder Three</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/></svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Refresh</title><path d="M320 146s24.36-12-64-12a160 160 0 10160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 58l80 80-80 80"/></svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>',
            ]
            return operation.join()
        default:
            return "<span style = 'color:black'>"+data+"</span>"

    }
  }
function create_table(data){
    const table_div = document.createElement("div")
    const table_data = document.createElement("table")
    for (var i = 0; i<=data.length-1;i++){
        var tr = document.createElement("tr");
        for (var j = 0; j < data[i].length; j++) {
            if (i == 0){
                var td = document.createElement("th")
            }else{
                var td = document.createElement("td")
            }
            if (i != 0){
                text = handleSwitch(data[i][j])
            }else{
                text = "<span style = 'color:black'>"+data[i][j]+"</span>"
            }
            
            // var text = document.createTextNode(data[i][j])
            // td.appendChild(text)
            td.innerHTML = text
            tr.appendChild(td);
        }
        table_data.appendChild(tr);
    }
    table_div.appendChild(table_data)
    return table_div
}