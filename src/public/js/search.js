document.addEventListener("keyup", e=>{
    if (e.target.matches("#search")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".city-row").forEach(city =>{
            city.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?city.style.display = ''
            :city.style.display = 'none'
        });
    }
});