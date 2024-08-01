function rest(){ 
let inputconte = document.getElementById("form-control").value
let set =inputconte
if(set){
    localStorage.setItem("sud",set)
    window.location.href=""
    alert("merci a vous")
}
}