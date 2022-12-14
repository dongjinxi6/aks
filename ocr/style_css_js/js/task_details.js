const main = document.createElement("div")
main.id = "main"
document.body.appendChild(main)
document.head.innerHTML += '<link rel="stylesheet" href="../style_css_js/css/total.css">'
document.head.innerHTML += '<link rel="stylesheet" href="../style_css_js/css/task_details.css">'

console.log("asd")
function top_div(){
    const top_div = document.createElement("div")
    const task_name = document.createElement("div")
    var task = {
        "任务名称：":"20221112_34563_001",
        "任务发起时间：":"2022/11/12",
        "任务发起人：":"282727",
        "任务统计情况：":"成功",
    }
    for (var key in task){
        console.log(key + task[key])
        task_name.innerText=task_name.innerText + " " + key + task[key];
        // task_name.style.paddingLeft = "2em"
    }

    const upload_bill =document.createElement("button")
    upload_bill.innerHTML = "继续追加"
    top_div.appendChild(upload_bill)
    upload_bill.setAttribute("id", "task_blii");
    top_div.appendChild(task_name)
    return top_div
}
function show_tasj(){
    // const table_div = document.createElement("div");

    // th_data = ["序号","文件名","文件类型","票据类型","上传时间","识别状态","操作"]

    // var table = document.createElement("table");

    // var tr = document.createElement("tr"); //trtable建立之后，创建tr标签，
    // for (var j = 0; j < th_data.length; j++) { //针对每个tr(行) 进行td（列）插入
    //     var th = document.createElement("th") //创建td标签
    //     var text = document.createTextNode(th_data[j]) //创建文本内容
    //     th.appendChild(text) //之后再进行丰富td标签
    //     tr.appendChild(th); //丰富tr标签
    // }
    // table.appendChild(tr); //将tr插入table内，丰富table内容
    // table_div.appendChild(table)
    // table_div.classList.add("div_data")
    // table.classList.add('table_data')

    // th_data = ["1","001","金属类","增值税","2022/32/22/11","识别中","操作"]


    // for (var i = 0; i<=3;i++){
    //     var tr = document.createElement("tr"); //trtable建立之后，创建tr标签，
    //     for (var j = 0; j < th_data.length-1; j++) { //针对每个tr(行) 进行td（列）插入
    //         var th = document.createElement("td") //创建td标签
    //         var text = document.createTextNode(th_data[j]) //创建文本内容
    //         th.appendChild(text) //之后再进行丰富td标签
    //         tr.appendChild(th); //丰富tr标签
    //     }
    //     table.appendChild(tr);
    // }
    //  //将tr插入table内，丰富table内容
    // table_div.appendChild(table)
    // return table_div
    var data = [
        ["序号","文件名","文件类型","票据类型","上传时间","识别状态","操作"],
        ["1","001","金属类","增值税","2022/32/22/11","识别完成","操作"],
        ["2","001","金属类","增值税","2022/32/22/11","识别中","操作"],
        ["3","001","金属类","增值税","2022/32/22/11","正在识别","操作"],
        ["4","001","金属类","增值税","2022/32/22/11","正在识别","操作"],
    ]
    table = create_table(data)
    table.classList.add("div_data")
    main.appendChild(table)
}

window.onload=function(){
    main.appendChild(top_div())
    main.appendChild(show_tasj())
}