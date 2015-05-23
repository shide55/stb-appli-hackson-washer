//var server = new GetServer();

var server = null;
var port = 80;
var appRoot = './public';
var status = true;

function init() {
    console.log("load start");

    server = new HttpServer();
    server.get("/", appRoot);
    server.get("/xhr", function xhrres(req, res, oncomplete) {
        console.log(req);
        var ret = status ? 'あたり' : 'はずれ';
        res.write(ret); // not send?
        oncomplete();
    });
    server.start(port);

    var msg = 'Running on ' + server._host + ':' + port;

    console.log(msg);

    document.getElementById("port").innerHTML=msg;

    var statusButton = document.getElementById("statusButton");

    statusButton.innerHTML="status ON";
    statusButton.addEventListener("click", function (e) {
        if(status) {
            this.innerHTML="status OFF";
            status = false;
        } else {
            this.innerHTML="status ON";
            status = true;
        }
    } , false );

    console.log("load complete");
}

window.addEventListener('load', init);
