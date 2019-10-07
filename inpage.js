console.log("inpage");

window.addEventListener('load', function() {
    chrome.runtime.sendMessage('fooaigdjjfjepmbnolfkgahgdlbpelfi', {greeting: "hello"}, null, function(response) {
        console.log('sendMessage response', response);
    });
});

