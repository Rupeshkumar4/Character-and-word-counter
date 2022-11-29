const textArea = document.getElementById('content');
const characterCount = document.getElementById('cCounter'); 
const wordCount = document.getElementById('wCounter');

textArea.oninput = ()=> {
    let characters = textArea.value;
    characterCount.textContent = characters.replace(/\s/g, "").length;

    let words = textArea.value.split( ' ').filter((item) => {
        return  item != '';
    });
    wordCount.textContent = words.length;


}