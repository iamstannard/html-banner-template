(function () {

    /*global document, $, console, alert, window*/

    //location.reload(true);
    //document.getElementById('some_frame_id').contentWindow.location.reload(true);

    // + "?randomId=" + Math.round(Math.random() * 9999999999);

    var buttonContainer = document.getElementById('buttonContainer');
    var bannerFrame = document.getElementById('bannerFrame');
    var staticFrame = document.getElementById('staticFrame');
    var client = document.getElementById('client');
    var project = document.getElementById('project');
    var date = document.getElementById('date');

    var ts = new Date().getTime();

    function addEventListeners() {
        //console.log('addEventListeners');
    }

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            // console.log('readyState');
            processXML(xhttp);
        }
    };

    xhttp.open("GET", "banners.xml" + "?ts=" + ts, true);
    xhttp.send();

    var i, j, k, q, xmlDoc, cl, pr, dt, t, w, h, l, p;

    var tA = []; // type array
    var wA = []; // width array
    var hA = []; // height array
    var lA = []; // label array
    var pA = []; // path array

    q = 0;
    k = 0;

    var node, textNode, thisBtn;

    var numPhases;
    var phaseName;
    var numBanners;

    var ddd = new Date();
    var months = new Array();
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    var mmm = months[ddd.getMonth()];
    var yyy = ddd.getFullYear();

    var addStaticLabel = true;

    function processXML(xml) {

        xmlDoc = xml.responseXML;

        // campaign details

        cl = xmlDoc.getElementsByTagName('client')[0].childNodes[0].nodeValue;
        pr = xmlDoc.getElementsByTagName('project')[0].childNodes[0].nodeValue;
        // dt = xmlDoc.getElementsByTagName('date')[0].childNodes[0].nodeValue;
        // date is auto generated
        dt = mmm + " " + yyy;

        client.innerHTML = cl;
        project.innerHTML = pr;
        date.innerHTML = dt;

        document.title = cl + " | " + pr;

        // generate button arrays

        for (j = 0; j < xmlDoc.getElementsByTagName('banner').length; j++) {

            t = xmlDoc.getElementsByTagName('type')[j].childNodes[0].nodeValue;
            tA.push(t);

            w = xmlDoc.getElementsByTagName('width')[j].childNodes[0].nodeValue;
            wA.push(w);

            h = xmlDoc.getElementsByTagName('height')[j].childNodes[0].nodeValue;
            hA.push(h);

            if (xmlDoc.getElementsByTagName('altLabel')[j].childNodes.length == 0) {
                l = wA[j] + 'x' + hA[j];
            } else {
                l = xmlDoc.getElementsByTagName('altLabel')[j].childNodes[0].nodeValue;
                l = l.replace(/-/g, ' ');
            }
            lA.push(l);

            if (xmlDoc.getElementsByTagName('altFileName')[j].childNodes.length == 0) {
                p = wA[j] + 'x' + hA[j];
            } else {
                p = xmlDoc.getElementsByTagName('altFileName')[j].childNodes[0].nodeValue;
            }
            pA.push(p);

        }

        //console.log("tA : " + tA);
        //console.log("wA : " + wA);
        //console.log("hA : " + hA);
        //console.log("lA : " + lA);
        //console.log("pA : " + pA);

        // process banners

        // how many phases?

        numPhases = xmlDoc.getElementsByTagName('phase').length;
        //console.log("numPhases : " + numPhases);

        if (numPhases == 0) {

            numBanners = xmlDoc.getElementsByTagName('banner').length;

            for (j = 0; j < numBanners; j++) {

                node = document.createElement("BUTTON");

                btnIDNum = j;
                //console.log("btnIDNum : " + btnIDNum);

                if (tA[j] == "html") {
                    pA[j] = "./banners/" + pA[j] + "/index.html";
                } else {
                    pA[j] = "./banners/" + pA[j] + "." + tA[j];
                    if (addStaticLabel) {
                        lA[j] = lA[j] + " Static";
                    }
                }

                textNode = document.createTextNode(lA[j]);
                node.appendChild(textNode);
                buttonContainer.appendChild(node);
                node.id = "btn" + j;

                thisBtn = document.getElementById('btn' + j);

                thisBtn.addEventListener("click", function () {
                    //console.log(this.id);
                    //console.log((this.id).slice(3));
                    btnClickHandler((this.id).slice(3));
                });

            }

        } else {

            for (i = 0; i < numPhases; i++) {

                phase = xmlDoc.getElementsByTagName('phase')[i];
                phaseName = phase.attributes.getNamedItem("category").nodeValue;
                phaseName = phaseName.replace(/-/g, ' ');
                //console.log("phase : " + phaseName);

                // how many banners?

                numBanners = phase.getElementsByTagName('banner').length;
                // console.log("numBanners : " + numBanners);

                if (numBanners > 0) {

                    node = document.createElement("DIV");
                    textNode = document.createTextNode(phaseName.toUpperCase());
                    node.appendChild(textNode);
                    buttonContainer.appendChild(node);
                }

                for (j = 0; j < numBanners; j++) {

                    k = q + j;

                    node = document.createElement("BUTTON");

                    btnIDNum = k;
                    //console.log("btnIDNum : " + btnIDNum);

                    if (tA[k] == "html") {
                        pA[k] = "./banners/" + phaseName + "/" + pA[k] + "/index.html";
                    } else {
                        pA[k] = "./banners/" + phaseName + "/" + pA[k] + "." + tA[j];
                        if (addStaticLabel) {
                            lA[k] = lA[k] + " Static";
                        }
                    }

                    textNode = document.createTextNode(lA[k]);
                    node.appendChild(textNode);
                    buttonContainer.appendChild(node);
                    node.id = "btn" + k;

                    thisBtn = document.getElementById('btn' + k);

                    thisBtn.addEventListener("click", function () {
                        //console.log(this.id);
                        //console.log((this.id).slice(3));
                        btnClickHandler((this.id).slice(3));
                    });

                }

                //console.log("k : " + k);

                q = k + 1;

                //console.log("q : " + q);

            }

            //console.log("pA : " + pA);

        }

        autoPlayFirstBanner();

    }

    // button click handler

    function reloadiFrame() {
        //console.log('reloadiFrame');

        bannerFrame.contentDocument.location.reload(true);
    }

    function btnClickHandler(arrayIndexNum) {
        //console.log('btnClickHandler : ' + arrayIndexNum);

        bannerFrame.src = "";
        bannerFrame.style.display = 'none';

        staticFrame.src = "";
        staticFrame.style.display = 'none';

        setTimeout(function () {

            ts = new Date().getTime();

            if (tA[arrayIndexNum] == "html") {
                bannerFrame.width = wA[arrayIndexNum];
                bannerFrame.height = hA[arrayIndexNum];
                bannerFrame.src = pA[arrayIndexNum];
                //bannerFrame.src += "?id=" + Math.round(Math.random() * 9999999999);
                bannerFrame.src += "?ts=" + ts;
                bannerFrame.style.display = 'block';
                //console.log(bannerFrame.src);
            } else {
                staticFrame.width = wA[arrayIndexNum];
                staticFrame.height = hA[arrayIndexNum];
                staticFrame.src = pA[arrayIndexNum];
                //staticFrame.src += "?id=" + Math.round(Math.random() * 9999999999);
                staticFrame.src += "?ts=" + ts;
                staticFrame.style.display = 'block';
                //console.log(staticFrame.src);
            }

        }, 125);

        // reloadiFrame();

    }

    function autoPlayFirstBanner() {
        //console.log('autoPlayFirstBanner');
        btnClickHandler(0);
    }

    function initBanner() {
        //console.log('initBanner');
        addEventListeners();
    }

    initBanner();

})();
