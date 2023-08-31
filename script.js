const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input")

function data(result,word){

    var defination=result[0].meanings[0].definitions[0]
    wrapper.classList.add("active")
}

function fetchApi(word){
    var serverURL="https://api.dictionaryapi.dev/api/v2/entries/en/"
    fetch(serverURL).then(responce=>Response.json()).then(json => DataTransfer(json,word))
}

searchInput.addEventListener("keyup",e=>{
    if(e.key === "Enter" && e.target.value){
    fetchApi(e.target.value)

    }
});