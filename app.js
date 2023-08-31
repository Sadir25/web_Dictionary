var btnMeaning= document.querySelector("#btn-meaning")
var txtInput=document.querySelector("#txtInput")
var outputTxt= document.querySelector(".output")

var serverURL="https://api.dictionaryapi.dev/api/v2/entries/en/"
btnMeaning.addEventListener("click",btnClickHandler)

function generateURL(word){
    return serverURL+word
}

function fetchMeaning(result,inputTxt){
    
    var meaning = result[0].meanings[0].definitions[0].definition

    var phonetics = result[0].phonetic

    var synonyms = result[0].meanings[0].synonyms

    // console.log("Meaning:",meaning)
    // console.log("Phonetics:",phonetics)
    // console.log("Synonyms:",synonyms)
    outputTxt.innerText = "Meaning: "+meaning +"\n" + "Phonetics: " + phonetics + "\n" + "Synonyms: " + synonyms
    

}

function btnClickHandler(){
    var inputTxt = txtInput.value
    fetch(generateURL(inputTxt))
    .then(response => response.json())
    .then(json => fetchMeaning(json,inputTxt))
}