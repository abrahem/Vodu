app.preloader.show();
app.request.json('https://snoanime.com/manga/main.php', function (data) {
document.getElementById("sld1").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][0]["manga"].id+"/"+data[2]["read"][0]["manga"].cover+"')");
document.getElementById("sld2").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][1]["manga"].id+"/"+data[2]["read"][1]["manga"].cover+"')");
document.getElementById("sld3").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][2]["manga"].id+"/"+data[2]["read"][2]["manga"].cover+"')");
document.getElementById("sld4").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][3]["manga"].id+"/"+data[2]["read"][3]["manga"].cover+"')");
document.getElementById("sld5").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][4]["manga"].id+"/"+data[2]["read"][4]["manga"].cover+"')");
document.getElementById("sld6").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][5]["manga"].id+"/"+data[2]["read"][5]["manga"].cover+"')");
document.getElementById("sld7").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][6]["manga"].id+"/"+data[2]["read"][6]["manga"].cover+"')");
document.getElementById("sld8").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][7]["manga"].id+"/"+data[2]["read"][7]["manga"].cover+"')");
document.getElementById("sld9").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][8]["manga"].id+"/"+data[2]["read"][8]["manga"].cover+"')");
document.getElementById("sld10").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][9]["manga"].id+"/"+data[2]["read"][9]["manga"].cover+"')");
document.getElementById("txt1").innerText = data[2]["read"][0]["manga"].title;
document.getElementById("txt2").innerText = data[2]["read"][1]["manga"].title;
document.getElementById("txt3").innerText = data[2]["read"][2]["manga"].title;
document.getElementById("txt4").innerText = data[2]["read"][3]["manga"].title;
document.getElementById("txt5").innerText = data[2]["read"][4]["manga"].title;
document.getElementById("txt6").innerText = data[2]["read"][5]["manga"].title;
document.getElementById("txt7").innerText = data[2]["read"][6]["manga"].title;
document.getElementById("txt8").innerText = data[2]["read"][7]["manga"].title;
document.getElementById("txt9").innerText = data[2]["read"][8]["manga"].title;
document.getElementById("txt10").innerText = data[2]["read"][9]["manga"].title;
//mangalist
var list = document.getElementById("mangalist");
var i;
for (i = 0; i < data[0]["1"].length; i++) {
    var one = document.createElement("div");
    one.setAttribute("onclick",'info('+data[0]["1"][i]["manga"].id+')');
    var on = document.createElement("div");
    var to = document.createElement("div");
    var tr = document.createElement("div");
    var div2 = document.createElement("div");
    div2.style = "position: absolute;top: 0px;right: 0px;";
    div2.className = "lefts";
    var fr = document.createElement("div");
    var fif = document.createElement("div");
    var spn = document.createElement("span");
    var img = document.createElement("img");
    fif.style = "position: relative;"
    fr.style = "width: 100%; text-align: -webkit-center;"
    spn.style = "padding-bottom: 5px; font-size:12px; font-weight: 600;font-style: normal;font-variant: small-caps;"
    spn.className = "text";
    if (data[0]["1"][i]["new_chapters"].length === 0) {
        spn.innerText = data[0]["1"][i]["manga"].title;
        div2.innerText = data[0]["1"][i]["new_releases"][0].chapter;
    } else {
        spn.innerText = data[0]["1"][i]["manga"].title;
        div2.innerText = data[0]["1"][i]["new_chapters"][0].chapter;
    }
    fr.appendChild(spn);
    on.className = "card demo-facebook-card"
    to.style = "border-radius: 5px;";
    tr.className = "card-content";
    one.className = "col-50 medium-25";
    var n = navigator.userAgent.includes("Windows");
    if (n == true) {
        one.style = "--f7-cols-per-row: 9;";
        img.style = "height: 150px; border-radius: 5px;";
    } else {
        img.style = "height: 220px; border-radius: 5px;";
    }
    img.src = "https://media.gmanga.me/uploads/manga/cover/"+data[0]["1"][i]["manga"].id+"/large_"+data[0]["1"][i]["manga"].cover+"";
    img.setAttribute("width","100%");
    fif.appendChild(img);
    fif.appendChild(div2);
    tr.appendChild(fif);
    tr.appendChild(fr);
    to.appendChild(tr);
    on.appendChild(to);
    one.appendChild(on);
    list.appendChild(one);
}
var ii;
for (ii = 0; ii < data[1]["2"].length; ii++) {
    var one = document.createElement("div");
    one.setAttribute("onclick",'info('+data[1]["2"][i]["manga"].id+')');
    var on = document.createElement("div");
    var to = document.createElement("div");
    var tr = document.createElement("div");
    var fr = document.createElement("div");
    var spn = document.createElement("span");
    var img = document.createElement("img");
    var fif = document.createElement("div");
    var div2 = document.createElement("div");
    div2.style = "position: absolute;top: 0px;right: 0px;";
    div2.className = "lefts";
    fif.style = "position: relative;"
    fr.style = "width: 100%; text-align: -webkit-center;"
    spn.className = "text";
    spn.style = "padding-bottom: 5px; font-size:12px; font-weight: 600;font-style: normal;font-variant: small-caps;"
    if (data[1]["2"][ii]["new_chapters"].length === 0) {
        spn.innerText = data[1]["2"][ii]["manga"].title;
        div2.innerText = data[1]["2"][ii]["new_releases"][0].chapter;
    } else {
        spn.innerText = data[1]["2"][ii]["manga"].title;
        div2.innerText = data[1]["2"][ii]["new_chapters"][0].chapter;
    }
    fr.appendChild(spn);
    on.className = "card demo-facebook-card"
    to.style = "border-radius: 5px;";
    tr.className = "card-content";
    one.className = "col-50 medium-25";
    var n = navigator.userAgent.includes("Windows");
    if (n == true) {
        one.style = "--f7-cols-per-row: 9;";
        img.style = "height: 150px; border-radius: 5px;";
    } else {
        img.style = "height: 220px; border-radius: 5px;";
    }
    img.src = "https://media.gmanga.me/uploads/manga/cover/"+data[1]["2"][ii]["manga"].id+"/large_"+data[1]["2"][ii]["manga"].cover+"";
    img.setAttribute("width","100%");
    fif.appendChild(img);
    fif.appendChild(div2);
    tr.appendChild(fif);
    tr.appendChild(fr);
    to.appendChild(tr);
    on.appendChild(to);
    one.appendChild(on);
    list.appendChild(one);
}
app.preloader.hide();
});
function info(id) {
    app.preloader.show();
    app.request.json('https://snoanime.com/manga/info.php/?id='+id, function (data) {
        app.popup.open(document.getElementById("my-popup"),false);
        document.getElementById("images").src = data[0].cover;
        document.getElementById("story").innerHTML = "<p>"+data[0].story+"</p>"
        document.getElementById("title").innerText = data[0].title;
        var i;
        for (i = 0; i < data[0]["genre"].length; i++) {
            on = document.createElement("div");
            on.className = "chip color-blue";
            to = document.createElement("div")
            to.className = "chip-label";
            to.innerText = data[0]["genre"][i].name;
            on.appendChild(to);
            document.getElementById("category").appendChild(on);
        }
        var ii;
        for (ii = 0; ii < data[0]["chp"].length; ii++) {

        }
        app.preloader.hide();
    })
}
function clear() {
    document.getElementById("my-popup").innerHTML = "";
    document.getElementById("my-popup").innerHTML = '<div class="view"><div class="page"><div class="navbar"><div class="navbar-inner sliding"><div class="left"><a id="closes" href="#" class="link popup-close"><i class="icon icon-back"></i><span class="ios-only">Back</span></a></div><div id="title" class="title"></div></div></div><div class="page-content"><div class="card"><li style="display: inherit;"><a class=""><div class="card-content"><div class="list media-list no-ios-edges"><ul><li class="item-content" style="padding-left: 0px;"><div class="item-media" style="padding-bottom: 0px;padding-top: 0px;"><img id="images" style="border-bottom-left-radius: 10px; border-top-left-radius: 10px;" class="" width="110" height="150"> </div><div style="width: 100%;text-align: center;"><div id="story" class="ex3"></div></div></li></ul></div></div></a></li></div><div id="category" class="block block-strong" style="padding-bottom: 4px;padding-top: 4px;padding-left: 5px;padding-right: 5px;margin: 3px;"></div><div class="card"><li style="display: inherit;"><a class=""><div class="card-content"><div class="list media-list no-ios-edges" style="height: 30px;"></div></div></a></li></div><div class="block-header"><div class="segmented segmented-strong"><a href="#tab-f7" class="button tab-link">التعليقات</a><a href="#tab-md" class="button tab-link tab-link-active">الفصول</a></div></div><div class="block block-strong tabs"><div id="tab-f7" class="tab"><div class="row"></div></div><div id="tab-md" class="tab tab-active"><div class="row"></div></div></div></div></div></div>'
}
$$('#closes').on('click', function (e) {
    clear();
});