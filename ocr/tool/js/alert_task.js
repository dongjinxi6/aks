const task_blii = document.getElementById("task_blii")
function createSelect(){
    mySelect=document.createElement("select");
    mySelect.classList.add("file_type");
    mySelect.options.add(new Option("显示的内容二","23"));
    mySelect.options.add(new Option("显示的内容三","23"));
    mySelect.options.add(new Option("显示的内容四","23"));
    const select_div = document.createElement("div")
    select_div.innerHTML= "文件类型："
    select_div.appendChild(mySelect)
    return select_div
}
function alert_div(){
    //虚拟背景
    const full_screen = document.createElement("div")
    document.body.appendChild(full_screen)
    full_screen.setAttribute("id", "full_screen");
    //弹框div
    const core_screen = document.createElement("div")
    core_screen.setAttribute("id", "add_task");
    //内容
    create_select = createSelect()
    create_select.classList.add("select_div")
    core_screen.appendChild(create_select)

    create_select = createSelect()
    create_select.classList.add("select_div")
    core_screen.appendChild(create_select)
    document.body.appendChild(core_screen)

    const upload_file = document.createElement("button")
    upload_file.innerHTML = "高拍仪图像上传"
    upload_file.classList.add("button_type")
    upload_file.id = "button_upload_file"
    core_screen.appendChild(upload_file)

}

task_blii.onclick = alert_div
