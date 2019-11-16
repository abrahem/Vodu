app.request.postJSON('http://cinema.nx-iq.com/api/featured', { username:'nexus', password: 'EMgAmAWRCTajLx3h' }, function (data) {
  alert(JSON.parse(data));
});