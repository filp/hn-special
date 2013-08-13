_.load(function () {

    // What chrome.* APIs are defined
    for (var k in chrome) {
      if (chrome[k] !== undefined) {
        console.log("chrome." + k);
      }
    }

    document.getElementById('foo').addEventListener("click", function (e) {
        chrome.permissions.request({permissions: ['history']}, function (granted) {
          if (granted) {
            // Pass true back to the script
            console.log('granted');
          } else {
            // Pass false back to the script
            console.log('denied');
          }
        });
    });
});
