ModAPI.addEventListener("sendchatmessage", function(event){
    let spam: NodeJS.Timeout;

    if (event.message.includes("/deeznuts")) {

        event.preventDefault = true;

        setTimeout(function() {
            spam = setInterval(function(){
                ModAPI.player.sendChatMessage({msg: event.message.split("/deeznuts")[1].trim() + Math.floor(Math.random() * 1000)});
            }, 1000);
        }, 1000);
        ModAPI.addEventListener("keypress", function(event){
            if (event.key == 2) {
                clearInterval(spam);
            }
        });
    }
});