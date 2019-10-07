
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    console.log('onMessage', request);
    if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    return true;
});