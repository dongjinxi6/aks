const main = document.createElement("div")
main.id = "main"
document.body.appendChild(main)

function top_div(){
    const top_div = document.createElement("div");

    const task_input = document.createElement("input");
    top_div.innerHTML = "任务名称："
    top_div.appendChild(task_input)

    //文件按钮
    const upload_bill =document.createElement("button")
    upload_bill.innerHTML = "文件上传"
    top_div.appendChild(upload_bill)
    upload_bill.classList.add('button_type')
    upload_bill.setAttribute("id", "task_blii");

    //任务创建完成
    const Submit =document.createElement("button")
    Submit.innerHTML = "任务创建完成"
    top_div.appendChild(Submit)
    Submit.classList.add('button_type')
    Submit.setAttribute("id", "Submit");
    return top_div
}
top_div = top_div();
top_div.style.width="100%"
main.appendChild(top_div)

var data = [
    ["序号","文件名","文件类型","票据类型","上传时间","识别状态","操作"],
    ["1","001","金属类","增值税","2022/32/22/11","识别完成","操作"],
    ["2","001","金属类","增值税","2022/32/22/11","识别中","操作"],
    ["3","001","金属类","增值税","2022/32/22/11","正在识别","操作"],
    ["4","001","金属类","增值税","2022/32/22/11","正在识别","操作"],
]
table = create_table_td(data)
table.classList.add("div_data")
main.appendChild(table)
