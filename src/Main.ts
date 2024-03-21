let mc = ModAPI.mcinstance;
ModAPI.addEventListener("update", function(){
    if(typeof ModAPI.player !== 'undefined'){
        alert(mc.$currentServerData);
    }
});