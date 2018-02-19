console.log('Loaded!');



/*var element = document.getElementById('main-text');


element.innerHTML = 'New Value';



var img = document.getElementById('madi');
var marginLeft = 0;
function moveright(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};
*/
    
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //Create a request
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
            if(request.readyState === XMLHttpRequest.DONE){
                //Take some action
                if(request.status === 200) {
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                    
                }
            }
    }
//Make the request
request.open('GET', 'http://svejay1999.imad.hasura-app.io/counter', true);
request.send(null);
  
};