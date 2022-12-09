const main = document.createElement("div")
main.id = "main"
document.body.appendChild(main)

function top_div(){
    const top_div = document.createElement("div")
    const search_input = document.createElement("input")
    const search_submit = document.createElement("button")
    search_submit.innerHTML= "搜 索"
    top_div.innerHTML="任务名称："
    top_div.appendChild(search_input)
    search_submit.classList.add('button_type')
    top_div.appendChild(search_submit)
    search_submit.style.float ="right"
    top_div.id = "top_div"
    return top_div
}
main.appendChild(top_div());

var data = [
    ["序号","任务名","发起时间","操作人","总文件数","全部识别/部门识别/识别失败文件数","状态","操作"],
    ["1","001","金属类","增值税","2022/32/22/11","识别完成","操作"],
    ["2","001","金属类","增值税","2022/32/22/11","识别中","操作"],
    ["3","001","金属类","增值税","2022/32/22/11","正在识别","操作"],
    ["4","001","金属类","增值税","2022/32/22/11","正在识别","操作"],
]
table = create_table_td(data)
table.classList.add("div_data")
main.appendChild(table)

