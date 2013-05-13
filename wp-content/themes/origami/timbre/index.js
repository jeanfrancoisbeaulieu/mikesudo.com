ex0 = (function() {
    return T("sin", 440);
}());

ex1 = (function() {
    return T("+", T("sin", 523.35),
                  T("sin", 659.25),
                  T("sin", 783.99)).set({mul: 0.25});
}());

ex2 = (function() {
    var synth = T("*", T("+", T("sin", 523.35),
                              T("sin", 659.25),
                              T("sin", 783.99)).set({mul: 0.25}),
                       T("+tri", 8),
                       T("adsr", 0, 1500).bang());
    synth.onplay = synth.onbang = function() {
        synth.args[2].bang();
    };
    return synth;
}());

ex3 = (function() {
    
    timbre.utils.exports("atof");
	
	var synth = T("efx.delay", 150, 0.3);

	function tone(freq) {
    synth.append( T("*", T("+", T("saw", freq, 0.2),
                                T("sin", freq + 2, 0.1)),
 								T("sin", freq, 0.5)));
    if (synth.args.length > 4) synth.args.shift();
	
	}

	var sch = T("schedule", "bpm (375, 2)", [
    	[0, tone, [atof("C2")]], [0, tone, [atof("E2")]], [0, tone, [atof("G2")]],
    	[1, tone, [atof("C2")]], [1, tone, [atof("E2")]], [1, tone, [atof("G2")]],
    	[2, tone, [atof("C2")]], [2, tone, [atof("E2")]], [2, tone, [atof("G2")]],
    	[3, tone, [atof("C2")]], [3, tone, [atof("E2")]], [3, tone, [atof("G2")]],
    	[4, tone, [atof("C2")]], [4, tone, [atof("E2")]], [4, tone, [atof("G2")]],
    	[5, tone, [atof("C2")]], [5, tone, [atof("E2")]], [5, tone, [atof("G2")]],
    	[6, tone, [atof("C2")]], [6, tone, [atof("E2")]], [6, tone, [atof("G2")]],
    	[7, tone, [atof("C2")]], [7, tone, [atof("E2")]], [7, tone, [atof("G2")]],
    	[8, tone, [atof("C2")]], [8, tone, [atof("E2")]], [8, tone, [atof("G2")]],
    	[9, tone, [atof("C2")]], [9, tone, [atof("E2")]], [9, tone, [atof("G2")]],
    	[10, tone, [atof("C2")]], [10, tone, [atof("E2")]], [10, tone, [atof("G2")]],
    	[11, tone, [atof("C2")]], [11, tone, [atof("E2")]], [11, tone, [atof("G2")]],
    	[12, tone, [atof("C2")]], [12, tone, [atof("E2")]], [12, tone, [atof("G2")]],
    	[13, tone, [atof("C2")]], [13, tone, [atof("E2")]], [13, tone, [atof("G2")]],
    	[14, tone, [atof("C2")]], [14, tone, [atof("E2")]], [14, tone, [atof("G2")]],
    	[15, tone, [atof("C2")]], [15, tone, [atof("E2")]], [15, tone, [atof("G2")]],
    	[16, tone, [atof("B1")]], [16, tone, [atof("E2")]], [16, tone, [atof("G2")]],
    	[17, tone, [atof("B1")]], [17, tone, [atof("E2")]], [17, tone, [atof("G2")]],
    	[18, tone, [atof("B1")]], [18, tone, [atof("E2")]], [18, tone, [atof("G2")]],
    	[19, tone, [atof("B1")]], [19, tone, [atof("E2")]], [19, tone, [atof("G2")]],
    	[20, tone, [atof("B1")]], [20, tone, [atof("E2")]], [20, tone, [atof("G2")]],
    	[21, tone, [atof("B1")]], [21, tone, [atof("E2")]], [21, tone, [atof("G2")]],
    	[22, tone, [atof("B1")]], [22, tone, [atof("E2")]], [22, tone, [atof("G2")]],
    	[23, tone, [atof("B1")]], [23, tone, [atof("E2")]], [23, tone, [atof("G2")]],
    	[24, tone, [atof("B1")]], [24, tone, [atof("E2")]], [24, tone, [atof("G2")]],
    	[25, tone, [atof("B1")]], [25, tone, [atof("E2")]], [25, tone, [atof("G2")]],
    	[26, tone, [atof("B1")]], [26, tone, [atof("E2")]], [26, tone, [atof("G2")]],
    	[27, tone, [atof("B1")]], [27, tone, [atof("E2")]], [27, tone, [atof("G2")]],
    	[28, tone, [atof("B1")]], [28, tone, [atof("E2")]], [28, tone, [atof("G2")]],
    	[29, tone, [atof("B1")]], [29, tone, [atof("E2")]], [29, tone, [atof("G2")]],
    	[30, tone, [atof("B1")]], [30, tone, [atof("E2")]], [30, tone, [atof("G2")]],
    	[31, tone, [atof("B1")]], [31, tone, [atof("E2")]], [31, tone, [atof("G2")]],
    	[32, tone, [atof("B1")]], [32, tone, [atof("E2")]], [32, tone, [atof("G2")]],
		], true);

	synth.onbang = function() {
   		 sch.bpm += 5;
	};

/*
	synth.onbang = function() {
        sch.bang();
    };
*/
    synth.onplay = function() {
        sch.on();
    };
    synth.onpause = function() {
        sch.off();
    };
    
    return synth;
	}());
	
ex4 = (function() {
    
    timbre.utils.exports("atof");
    
    var synth = T("efx.delay", 180, 0.5);

    function tone(freq) {
    synth.append( T("*", T("+", T("saw", freq+3, 0.063),
                                T("sin", freq+2, 0.3)),
                                T("sin", freq+3, 0.2)));
    if (synth.args.length > 4) synth.args.shift();
    }

    delay = T("efx.delay", time=250, fb=0.25, wet=0.25);

    var sch = T("schedule", "bpm (115, 6)", [
        [0, tone, [atof("Eb2")]],      [0, tone, [atof("Bb2")]],       [0, tone, [atof("G2")]],  
        [1, tone, [atof("Eb2")]],      [1, tone, [atof("Bb2")]],       [1, tone, [atof("G2")]],  
        [2, tone, [atof("Eb2")]],      [2, tone, [atof("Bb2")]],       [2, tone, [atof("G2")]],  
        [3, tone, [atof("Eb2")]],      [3, tone, [atof("Bb2")]],       [3, tone, [atof("G2")]],  
        [4, tone, [atof("Eb2")]],      [4, tone, [atof("Bb2")]],       [4, tone, [atof("G2")]],  
        [5, tone, [atof("Eb2")]],      [5, tone, [atof("Bb2")]],       [5, tone, [atof("G2")]],  
        [6, tone, [atof("D2")]],      [6, tone, [atof("Bb2")]],       [6, tone, [atof("G2")]],  
        [7, tone, [atof("D2")]],      [7, tone, [atof("Bb2")]],       [7, tone, [atof("G2")]],  
        [8, tone, [atof("D2")]],      [8, tone, [atof("Bb2")]],       [8, tone, [atof("G2")]],  
        [9, tone, [atof("D2")]],       [9, tone, [atof("Bb2")]],       [9, tone, [atof("G2")]],
        [10, tone, [atof("D2")]],      [10, tone, [atof("Bb2")]],       [10, tone, [atof("G2")]],  
        [11, tone, [atof("D2")]],      [11, tone, [atof("Bb2")]],       [11, tone, [atof("G2")]],  
        [12, tone, [atof("G2")]],      [12, tone, [atof("Bb2")]],       [12, tone, [atof("G2")]],  
        [13, tone, [atof("G2")]],      [13, tone, [atof("Bb2")]],       [13, tone, [atof("G2")]],  
        [14, tone, [atof("G2")]],      [14, tone, [atof("Bb2")]],       [14, tone, [atof("G2")]],  
        [15, tone, [atof("G2")]],      [15, tone, [atof("Bb2")]],       [15, tone, [atof("G2")]],  
        [16, tone, [atof("G2")]],      [16, tone, [atof("Bb2")]],       [16, tone, [atof("G2")]],  
        [17, tone, [atof("G2")]],      [17, tone, [atof("Bb2")]],       [17, tone, [atof("G2")]],  
        [18, tone, [atof("D2")]],      [18, tone, [atof("Bb2")]],       [18, tone, [atof("G2")]],  
        [19, tone, [atof("D2")]],      [19, tone, [atof("Bb2")]],       [19, tone, [atof("G2")]],
        [20, tone, [atof("D2")]],      [20, tone, [atof("Bb2")]],       [20, tone, [atof("G2")]],  
        [21, tone, [atof("D2")]],      [21, tone, [atof("Bb2")]],       [21, tone, [atof("G2")]],  
        [22, tone, [atof("D2")]],      [22, tone, [atof("Bb2")]],       [22, tone, [atof("G2")]],  
        [23, tone, [atof("D2")]],      [23, tone, [atof("Bb2")]],       [23, tone, [atof("G2")]],  
        [24, tone, [atof("D2")]],      [24, tone, [atof("Bb2")]],       [24, tone, [atof("G2")]],  
        [25, tone, [atof("D2")]],      [25, tone, [atof("Bb2")]],       [25, tone, [atof("G2")]],  
        [26, tone, [atof("Eb2")]],      [26, tone, [atof("Bb2")]],       [26, tone, [atof("G2")]],  
        [27, tone, [atof("Eb2")]],      [27, tone, [atof("Bb2")]],       [27, tone, [atof("G2")]],  
        [28, tone, [atof("F2")]],      [28, tone, [atof("Bb2")]],       [28, tone, [atof("G2")]],  
        [29, tone, [atof("F2")]],      [29, tone, [atof("Bb2")]],       [29, tone, [atof("G2")]],
        [30, tone, [atof("Eb2")]],      [30, tone, [atof("Bb2")]],       [30, tone, [atof("G2")]],  
        [31, tone, [atof("Eb2")]],      [31, tone, [atof("Bb2")]],       [31, tone, [atof("G2")]],  
        [32, tone, [atof("Eb2")]],      [32, tone, [atof("Bb2")]],       [32, tone, [atof("G2")]],  
        [33, tone, [atof("Eb2")]],      [33, tone, [atof("Bb2")]],       [33, tone, [atof("G2")]],  
        [34, tone, [atof("Eb2")]],      [34, tone, [atof("Bb2")]],       [34, tone, [atof("G2")]],  
        [35, tone, [atof("Eb2")]],      [35, tone, [atof("Bb2")]],       [35, tone, [atof("G2")]],  
        [36, tone, [atof("D2")]],      [36, tone, [atof("Bb2")]],       [36, tone, [atof("G2")]],  
        [37, tone, [atof("D2")]],      [37, tone, [atof("Bb2")]],       [37, tone, [atof("G2")]],  
        [38, tone, [atof("D2")]],      [38, tone, [atof("Bb2")]],       [38, tone, [atof("G2")]],  
        [39, tone, [atof("D2")]],      [39, tone, [atof("Bb2")]],       [39, tone, [atof("G2")]],
        [40, tone, [atof("D2")]],      [40, tone, [atof("Bb2")]],       [40, tone, [atof("G2")]],  
        [41, tone, [atof("D2")]],      [41, tone, [atof("Bb2")]],       [41, tone, [atof("G2")]],  
        [42, tone, [atof("G2")]],      [42, tone, [atof("Bb2")]],       [42, tone, [atof("G2")]],  
        [43, tone, [atof("G2")]],      [43, tone, [atof("Bb2")]],       [43, tone, [atof("G2")]],  
        [44, tone, [atof("G2")]],      [44, tone, [atof("Bb2")]],       [44, tone, [atof("G2")]],  
        [45, tone, [atof("G2")]],      [45, tone, [atof("Bb2")]],       [45, tone, [atof("G2")]],  
        [46, tone, [atof("G2")]],      [46, tone, [atof("Bb2")]],       [46, tone, [atof("G2")]],  
        [47, tone, [atof("G2")]],      [47, tone, [atof("Bb2")]],       [47, tone, [atof("G2")]],  
        [48, tone, [atof("D2")]],      [48, tone, [atof("Bb2")]],       [48, tone, [atof("G2")]],  
        [49, tone, [atof("D2")]],      [49, tone, [atof("Bb2")]],       [49, tone, [atof("G2")]],
        [50, tone, [atof("D2")]],      [50, tone, [atof("Bb2")]],       [50, tone, [atof("G2")]],  
        [51, tone, [atof("D2")]],      [51, tone, [atof("Bb2")]],       [51, tone, [atof("G2")]],  
        [52, tone, [atof("D2")]],      [52, tone, [atof("Bb2")]],       [52, tone, [atof("G2")]],  
        [53, tone, [atof("D2")]],      [53, tone, [atof("Bb2")]],       [53, tone, [atof("G2")]],  
        [54, tone, [atof("D2")]],      [54, tone, [atof("Bb2")]],       [54, tone, [atof("G2")]],  
        [55, tone, [atof("Eb2")]],      [55, tone, [atof("Bb2")]],       [55, tone, [atof("G2")]],  
        [56, tone, [atof("Eb2")]],      [56, tone, [atof("Bb2")]],       [56, tone, [atof("G2")]],  
        [57, tone, [atof("F2")]],      [57, tone, [atof("Bb2")]],       [57, tone, [atof("G2")]],  
        [58, tone, [atof("F2")]],      [58, tone, [atof("Bb2")]],       [58, tone, [atof("G2")]],  
        [59, tone, [atof("Eb2")]],      [59, tone, [atof("Bb2")]],       [59, tone, [atof("G2")]],
        [60, tone, [atof("Eb2")]],      [60, tone, [atof("Bb2")]],       [60, tone, [atof("G2")]],  
        [61, tone, [atof("Eb2")]],      [61, tone, [atof("Bb2")]],       [61, tone, [atof("G2")]],  
        [62, tone, [atof("Eb2")]],      [62, tone, [atof("Bb2")]],       [62, tone, [atof("G2")]],  
        [63, tone, [atof("Eb2")]],      [63, tone, [atof("Bb2")]],       [63, tone, [atof("G2")]],  
        [64, tone, [atof("Eb2")]],      [64, tone, [atof("Bb2")]],       [64, tone, [atof("G2")]],  
        [65, tone, [atof("D2")]],      [65, tone, [atof("Bb2")]],       [65, tone, [atof("G2")]],  
        [66, tone, [atof("D2")]],      [66, tone, [atof("Bb2")]],       [66, tone, [atof("G2")]],  
        [67, tone, [atof("D2")]],      [67, tone, [atof("Bb2")]],       [67, tone, [atof("G2")]],  
        [68, tone, [atof("D2")]],      [68, tone, [atof("Bb2")]],       [68, tone, [atof("G2")]],  
        [69, tone, [atof("D2")]],      [69, tone, [atof("Bb2")]],       [69, tone, [atof("G2")]],
        [70, tone, [atof("D2")]],      [70, tone, [atof("Bb2")]],       [70, tone, [atof("G2")]],  
        [71, tone, [atof("G2")]],      [71, tone, [atof("Bb2")]],       [71, tone, [atof("G2")]],  
        [72, tone, [atof("G2")]],      [72, tone, [atof("Bb2")]],       [72, tone, [atof("G2")]],  
        [73, tone, [atof("G2")]],      [73, tone, [atof("Bb2")]],       [73, tone, [atof("G2")]],  
        [74, tone, [atof("G2")]],      [74, tone, [atof("Bb2")]],       [74, tone, [atof("G2")]],  
        [75, tone, [atof("G2")]],      [75, tone, [atof("Bb2")]],       [75, tone, [atof("G2")]],  
        [76, tone, [atof("G2")]],      [76, tone, [atof("Bb2")]],       [76, tone, [atof("G2")]],  
        [77, tone, [atof("D2")]],      [77, tone, [atof("Bb2")]],       [77, tone, [atof("G2")]],  
        [78, tone, [atof("D2")]],      [78, tone, [atof("Bb2")]],       [78, tone, [atof("G2")]],  
        [79, tone, [atof("D2")]],      [79, tone, [atof("Bb2")]],       [79, tone, [atof("G2")]],
        [80, tone, [atof("D2")]],      [80, tone, [atof("Bb2")]],       [80, tone, [atof("G2")]],  
        [81, tone, [atof("D2")]],      [81, tone, [atof("Bb2")]],       [81, tone, [atof("G2")]],  
        [82, tone, [atof("D2")]],      [82, tone, [atof("Bb2")]],       [82, tone, [atof("G2")]],  
        [83, tone, [atof("D2")]],      [83, tone, [atof("Bb2")]],       [83, tone, [atof("G2")]],  
        [84, tone, [atof("D2")]],      [84, tone, [atof("Bb2")]],       [84, tone, [atof("G2")]],  
        [85, tone, [atof("Eb2")]],      [85, tone, [atof("Bb2")]],       [85, tone, [atof("G2")]],  
        [86, tone, [atof("Eb2")]],      [86, tone, [atof("Bb2")]],       [86, tone, [atof("G2")]],  
        [87, tone, [atof("F2")]],      [87, tone, [atof("Bb2")]],       [87, tone, [atof("G2")]],  
        [88, tone, [atof("F2")]],      [88, tone, [atof("Bb2")]],       [88, tone, [atof("G2")]],  
        [89, tone, [atof("Eb2")]],      [89, tone, [atof("Bb2")]],       [89, tone, [atof("G2")]],
        [90, tone, [atof("Eb2")]],      [90, tone, [atof("Bb2")]],       [90, tone, [atof("G2")]]
        ], true);
    
    /*  sch.value[0].repeat = 3; */

    synth.onbang = function() {
        sch.bpm += 5;
    };
    synth.onplay = function() {
        sch.on();
    };
    synth.onpause = function() {
        sch.off();
    };

    sch.clone().set("reversed", true).play();
    
    sch.play(); 
    
    return synth;
    }());