var data = JSON.parse('{"featured":[{"id":"17413","title":"Late Night","large":"s3\/images\/5dc904bef2ade.jpg","type":"movie","s3":"1"},{"id":"17412","title":"Good Boys","large":"s3\/images\/5dc3ddda1d2e0.jpg","type":"movie","s3":"1"},{"id":"17331","title":"Kill Chain","large":"s3\/images\/5db44d7724d3b.jpg","type":"movie","s3":"1"},{"id":"17131","title":"Bloodline","large":"share\/cdn31\/upload\/2019\/09\/21\/5d862ecec9e31.jpg","type":"movie","s3":"0"},{"id":"17060","title":"Drunk Parents","large":"share\/cdn31\/upload\/2019\/09\/15\/5d7e8faf0a70f.jpg","type":"movie","s3":"0"}]}');
document.getElementById("sld1").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('http://cinema.nx-iq.com/"+data["featured"][0].large+"')");
document.getElementById("sld2").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('http://cinema.nx-iq.com/"+data["featured"][1].large+"')");
document.getElementById("sld3").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('http://cinema.nx-iq.com/"+data["featured"][2].large+"')");
document.getElementById("sld4").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('http://cinema.nx-iq.com/"+data["featured"][3].large+"')");
document.getElementById("sld5").setAttribute("style","background-size: 100%; background-position: center; border: 100px; background-image: url('http://cinema.nx-iq.com/"+data["featured"][4].large+"')");

document.getElementById("txt1").innerText = data["featured"][0].title;
document.getElementById("txt2").innerText = data["featured"][1].title;
document.getElementById("txt3").innerText = data["featured"][2].title;
document.getElementById("txt4").innerText = data["featured"][3].title;
document.getElementById("txt5").innerText = data["featured"][4].title;
