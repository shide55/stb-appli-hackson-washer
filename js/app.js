var server = null;
var port = 80;
var appRoot = './public';
var status = true;
//var statusDefualtImage = './img/pod_default.jpg';
//var statusAlertImage = './img/pod_alert.jpg';
var statusDefualtImage = './img/laundry_default.jpg';
var statusAlertImage = './img/laundry_alert.jpg';

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

    var statusButton = document.getElementById("status-button");

    statusButton.style.backgroundImage = "url(" + statusDefualtImage +")";

    statusButton.addEventListener("click", function (e) {
        if (status == "null") {
            statusButton.style.backgroundImage = "url(" + statusDefualtImage +")";
            status = true;
        } else {
            statusButton.style.backgroundImage = "url(" + statusAlertImage +")";
            status = null;
        }
    } , false );

    console.log("load complete");
}

window.addEventListener('load', init);
