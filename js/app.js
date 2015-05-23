var server = null;
var port = 80;
var appRoot = './public';
var status = true;;

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

    //status = new WasherStatus();

    var statusButton = document.getElementById("status-button");

    statusButton.innerHTML="status OK";
    statusButton.addEventListener("click", function (e) {
        console.log("click start");
        console.log("status:" + status);

        if(status == null) {
            this.innerHTML="status OK";
            status = true;
        } else {
            this.innerHTML="status NG";
            status = null;
        }
    } , false );

    console.log("load complete");
}

window.addEventListener('load', init);
