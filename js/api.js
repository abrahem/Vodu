app.request.postJSON('http://api.myapp.com', { username:'nexus', password: 'EMgAmAWRCTajLx3h' }, function (data) {
  alert(JSON.parse(data));
});