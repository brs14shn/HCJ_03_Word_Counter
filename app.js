const updateCount=() =>{
    let message=document.getElementById('message').value;
    let wordCount=(message).split(' ').length;

    document.getElementById("word_counter").innerText=wordCount;
    document.getElementById("character_count").innerText=message.length;

}