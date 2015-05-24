var server = null;
var port = 80;
var appRoot = './public';
var status = true;
var statusDefualtImage = './img/pod_default.jpg';
var statusAlertImage = './img/pod_alert.jpg';
//var statusDefualtImage = './img/laundry_default.jpg';
//var statusAlertImage = './img/laundry_alert.jpg';

function init() {
    console.log("load start");

    server = new HttpServer();
    server.get("/", appRoot);
    server.get("/xhr", function xhrres(req, res, oncomplete) {
        console.log(req);
        var ret = status == "null" ? 'NG' : 'OK';
        res.write(ret); // not send?
        oncomplete();
    });
    server.start(port);

    var msg = 'Running on ' + server._host + ':' + port;

    console.log(msg);

    document.getElementById("port").innerHTML=msg;

    //status = new WasherStatus();

    var statusButton = document.getElementById("status-button");

    //statusButton.innerHTML="status OK";
    statusButton.style.backgroundImage = "url(" + statusDefualtImage +")";

    statusButton.addEventListener("click", function (e) {
        console.log("click start");
        console.log("status:" + status);

        if (status == "null") {
            //this.innerHTML="status OK";
            statusButton.style.backgroundImage = "url(" + statusDefualtImage +")";
            status = true;
        } else {
            //this.innerHTML="status NG";
            statusButton.style.backgroundImage = "url(" + statusAlertImage +")";
            status = null;
        }
    } , false );

    console.log("load complete");
}

window.addEventListener('load', init);
