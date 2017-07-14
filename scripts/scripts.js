function changeActive(element) {
    let list = element.parentElement.getElementsByTagName("li");
    for(let li of list) {
        li.classList.remove("active_menu");
    }
    element.classList.add("active_menu");

    let div = element.id.split("_")[1];
    let pages = document.getElementsByClassName("page");
    for(let page of pages) {
        page.style.display = "none";
    }
    document.getElementById(div).style.display = "block";
}