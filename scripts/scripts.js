function changeActive(element) {
    let list = element.parentElement.getElementsByTagName("li");
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove("active_menu");
    }
    element.classList.add("active_menu");

    let div = element.id.split("_")[1];
    
    let pages = document.getElementsByClassName("page");
    for(let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    document.getElementById(div).style.display = "block";
}

function copyClipboard() {
    let email = document.getElementById("email_address")
    email.select();
    try {
        document.execCommand('copy');
        document.getElementById("copy_message").style.visibility = "visible";
    }
    catch(err) {
        console.log(`There was an error. ${err}`);
    }
}