tests = (function() {
    "use strict";

    timbre.workerpath = "/timbre.js";
    
    var i = 0, tests = [];
    
    tests[i] = function() {
        var audio = T("audio", "/public/audio/amen.wav", true);
        return T("efx.reverb", audio.load());
    }; tests[i++].desc = "efx.reverb";
    
    return tests;
}());
