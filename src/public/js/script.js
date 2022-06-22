const showActives = () => {
    let rows = document.getElementsByClassName("city-row");
    let page = document.getElementById("page-active").value;
    let end = page*10;
    let start = end-10;
    if(end >= rows.length){
        end = rows.length;
    }
    for(let i=0; i<rows.length; i++){
        rows[i].classList.remove('shown');
    }
    for(let i=start; i<end; i++){
        rows[i].classList.add('shown');
    }
}

window.onload = ()=>{

    document.addEventListener("keyup", e=>{
        if (e.target.matches("#search")){
            document.querySelectorAll(".city-row").forEach(city =>{
                city.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?city.classList.add("shown")
                :city.classList.remove("shown");
            });
            if(e.target.value == ""){
                showActives();
            }
        }
    });

    let paginator = document.getElementById("pages");
    let nrows = document.getElementById("numP").value;
    let npages = Math.ceil(nrows)/10;
    let button, txt;

    for(let i=0; i<npages; i++){
        button = document.createElement("button");
        txt = document.createTextNode(i+1);
        button.appendChild(txt);
        button.value = i+1;

        button.addEventListener("click", function(){
            document.getElementById("page-active").removeAttribute("id");
            this.setAttribute("id","page-active");
            showActives();
        });

        if(document.getElementById("page-active")==null){
            button.setAttribute("id","page-active");
        }
        paginator.appendChild(button);
    }

    showActives();
}


