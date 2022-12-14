const main = document.createElement("div")
main.id = "main"
document.body.appendChild(main)
document.write ('<script type="text/javascript" src="./js/total.js"></script>')
document.write ('<script type="text/javascript" src="./js/alert_task.js"></script>')
document.head.innerHTML += '<link rel="stylesheet" href="./css/total.css">'

function table_if(x,y,data){
    if (y === 3){
        if (data[0] == "+"){
            return "<span style = 'color:red'>"+"↑"+data.substring(1)+"</span>"
            // return data
        }else if (data[0] == "-"){
            return "<span style = 'color:green'>"+"↓"+data.substring(1)+"</span>"
        }
    }
    return data
}

function data_div(){
    const table_div = document.createElement("div")
    const samin_button = document.createElement("button")
    samin_button.innerHTML = "+添加"
    samin_button.classList.add("button_type")
    samin_button.id="task_blii"
    table_div.appendChild(samin_button)
    var data = [
        ["序号","类型","消费类型","金额","消费时间","剩余金额","对应剩余金额","操作"],
        ["1","正常餐饮","个人","-100.00","增值税","2022/32/22/11","识别完成","操作"],
        ["1","集体餐饮","公司","-3000","增值税","2022/32/22/11","识别完成","操作"],
        ["1","正常餐饮","个人","-100","增值税","2022/32/22/11","识别完成","操作"],
        ["1","正常餐饮","个人","-100","增值税","2022/32/22/11","识别完成","操作"],
    ] //报销画红
    create_table_data = create_table(data,table_if)  
    table_div.appendChild(create_table_data)
    table_div.classList.add("div_data")
    return table_div 
}




window.onload=function(){
    // alert("Window Onload");
    main.appendChild(data_div());
    task_blii.onclick = function (){
        full_screen.style.display = "block";
    }
    full_screen.click = function (){
        full_screen.style.display = "none";
    }
    alert_div();

}