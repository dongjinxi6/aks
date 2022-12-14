function create_table(data,table_if){
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
            var text = table_if(i,j,data[i][j])
            // var text = document.createTextNode(data[i][j])
            td.innerHTML = text
            // td.appendChild(text)
            tr.appendChild(td);
        }
        table_data.appendChild(tr);
    }
    table_div.appendChild(table_data)
    return table_div
}