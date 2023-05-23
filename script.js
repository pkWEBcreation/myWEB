function navbar() {
    document.getElementById("nav").style.display="flex"
    document.getElementById("nav").style.left="0"
    document.getElementById("bar").style.display="none"
    // document.getElementById("bar").classList.add("hide")
    document.getElementById("cross").style.display="inline-block"
    
}
function navreturn() {
    document.getElementById("nav").style.left="-100%"
    document.getElementById("bar").style.display="inline-block"
    document.getElementById("cross").style.display="none"

    
}