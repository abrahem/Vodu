app.request.json('https://snoanime.com/manga/main.php', function (data) {
document.getElementById("sld1").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][0]["manga"].id+"/large_"+data[2]["read"][0]["manga"].cover+"')");
document.getElementById("sld2").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][1]["manga"].id+"/large_"+data[2]["read"][1]["manga"].cover+"')");
document.getElementById("sld3").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][2]["manga"].id+"/large_"+data[2]["read"][2]["manga"].cover+"')");
document.getElementById("sld4").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][3]["manga"].id+"/large_"+data[2]["read"][3]["manga"].cover+"')");
document.getElementById("sld5").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][4]["manga"].id+"/large_"+data[2]["read"][4]["manga"].cover+"')");
document.getElementById("sld6").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][5]["manga"].id+"/large_"+data[2]["read"][5]["manga"].cover+"')");
document.getElementById("sld7").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][6]["manga"].id+"/large_"+data[2]["read"][6]["manga"].cover+"')");
document.getElementById("sld8").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][7]["manga"].id+"/large_"+data[2]["read"][7]["manga"].cover+"')");
document.getElementById("sld9").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][8]["manga"].id+"/large_"+data[2]["read"][8]["manga"].cover+"')");
document.getElementById("sld10").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('https://media.gmanga.me/uploads/manga/cover/"+data[2]["read"][9]["manga"].id+"/large_"+data[2]["read"][9]["manga"].cover+"')");
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
    one.className = "col-50 medium-25";
    list.appendChild(one);
}
var ii;
for (ii = 0; ii < data[1]["2"].length; ii++) {
    var one = document.createElement("div");
    one.className = "col-50 medium-25";
    list.appendChild(one);
}
});
