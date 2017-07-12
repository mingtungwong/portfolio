function changeActive(element) {
    let list = element.parentElement.getElementsByTagName("li");
    for(li of list) {
        li.classList.remove("active_menu");
    }
    element.classList.add("active_menu");
}