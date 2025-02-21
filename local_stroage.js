let senddata=()=>{
    localStorage.setItem("Name","Ishika")
localStorage.setItem("age","20")
localStorage.setItem("city","bhopal")
localStorage.setItem("state","M.P")

// jumping to new pae 
location.href="math.html"
return false
}

let show=document.querySelector("#show")

show.innerHTML=localStorage.getItem("age")


let remove=()=>{
//for one iteam
    // localStorage.removeItem("Name") 

    //for all data 
 localStorage.clear()

 //this refresh the page
 location.reload()
}


