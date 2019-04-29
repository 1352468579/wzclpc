! function e(t, n, o) {
	function r(a, s) {
		if(!n[a]) {
			if(!t[a]) {
				var c = "function" == typeof require && require;
				if(!s && c) return c(a, !0);
				if(i) return i(a, !0);
				throw new Error("Cannot find module '" + a + "'")
			}
			var l = n[a] = {
				exports: {}
			};
			t[a][0].call(l.exports, function(e) {
				var n = t[a][1][e];
				return r(n ? n : e)
			}, l, l.exports, e, t, n, o)
		}
		return n[a].exports
	}
	for(var i = "function" == typeof require && require, a = 0; a < o.length; a++) r(o[a]);
	return r
}({
	1: [function(e, t, n) {
		t.exports = {
			errorlogPath: "log.sobot.com/errorlog/"
		}
	}, {}],
	2: [function(e, t, n) {
		! function(e, o) {
			Array.prototype.map || (Array.prototype.map = function(e, t) {
				var n, o, r;
				if(null == this) throw new TypeError(" this is null or not defined");
				var i = Object(this),
					a = i.length >>> 0;
				if("function" != typeof e) throw new TypeError(e + " is not a function");
				for(t && (n = t), o = new Array(a), r = 0; r < a;) {
					var s, c;
					r in i && (s = i[r], c = e.call(n, s, r, i), o[r] = c), r++
				}
				return o
			});
			var r = e.detect = function() {
				var e = function() {},
					t = {
						browser_parsers: [{
							regex: "^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii",
							family_replacement: "Wii",
							manufacturer: "Nintendo"
						}, {
							regex: "(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
							family_replacement: "Camino",
							other: !0
						}, {
							regex: "(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
							family_replacement: "Pale Moon (Firefox Variant)",
							other: !0
						}, {
							regex: "(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
							family_replacement: "Firefox Mobile"
						}, {
							regex: "(Fennec)/(\\d+)\\.(\\d+)(pre)",
							family_replacment: "Firefox Mobile"
						}, {
							regex: "(Fennec)/(\\d+)\\.(\\d+)",
							family_replacement: "Firefox Mobile"
						}, {
							regex: "Mobile.*(Firefox)/(\\d+)\\.(\\d+)",
							family_replacement: "Firefox Mobile"
						}, {
							regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",
							family_replacement: "Firefox ($1)"
						}, {
							regex: "(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
							family_replacement: "Firefox Alpha"
						}, {
							regex: "(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
							family_replacement: "Firefox Beta"
						}, {
							regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
							family_replacement: "Firefox Alpha"
						}, {
							regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
							family_replacement: "Firefox Beta"
						}, {
							regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",
							family_replacement: "Firefox ($1)"
						}, {
							regex: "(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "MicroB",
							tablet: !0
						}, {
							regex: "(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"
						}, {
							regex: "(Flock)/(\\d+)\\.(\\d+)(b\\d+?)",
							family_replacement: "Flock",
							other: !0
						}, {
							regex: "(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Rockmelt",
							other: !0
						}, {
							regex: "(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Netscape"
						}, {
							regex: "(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",
							family_replacement: "Netscape"
						}, {
							regex: "(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Netscape"
						}, {
							regex: "(MyIBrow)/(\\d+)\\.(\\d+)",
							family_replacement: "My Internet Browser",
							other: !0
						}, {
							regex: "(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							family_replacement: "Opera Tablet",
							tablet: !0
						}, {
							regex: "(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",
							family_replacement: "Opera Mobile"
						}, {
							regex: "Opera Mobi",
							family_replacement: "Opera Mobile"
						}, {
							regex: "(Opera Mini)/(\\d+)\\.(\\d+)",
							family_replacement: "Opera Mini"
						}, {
							regex: "(Opera Mini)/att/(\\d+)\\.(\\d+)",
							family_replacement: "Opera Mini"
						}, {
							regex: "(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							family_replacement: "Opera"
						}, {
							regex: "(OPR)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							family_replacement: "Opera"
						}, {
							regex: "(webOSBrowser)/(\\d+)\\.(\\d+)",
							family_replacement: "webOS"
						}, {
							regex: "(webOS)/(\\d+)\\.(\\d+)",
							family_replacement: "webOS"
						}, {
							regex: "(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)",
							family_replacement: "webOS TouchPad"
						}, {
							regex: "(luakit)",
							family_replacement: "LuaKit",
							other: !0
						}, {
							regex: "(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)",
							family_replacement: "Lightning",
							other: !0
						}, {
							regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",
							family_replacement: "Swiftfox",
							other: !0
						}, {
							regex: "(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",
							family_replacement: "Swiftfox",
							other: !0
						}, {
							regex: "rekonq",
							family_replacement: "Rekonq",
							other: !0
						}, {
							regex: "(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
							family_replacement: "Conkeror",
							other: !0
						}, {
							regex: "(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Konqueror",
							other: !0
						}, {
							regex: "(WeTab)-Browser",
							family_replacement: "WeTab",
							other: !0
						}, {
							regex: "(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Comodo Dragon",
							other: !0
						}, {
							regex: "(YottaaMonitor)",
							family_replacement: "Yottaa Monitor",
							other: !0
						}, {
							regex: "(Kindle)/(\\d+)\\.(\\d+)",
							family_replacement: "Kindle"
						}, {
							regex: "(Symphony) (\\d+).(\\d+)",
							family_replacement: "Symphony",
							other: !0
						}, {
							regex: "Minimo",
							family_replacement: "Minimo",
							other: !0
						}, {
							regex: "(Edge)/(\\d+)\\.(\\d+)",
							family_replacement: "Edge"
						}, {
							regex: "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Chrome Mobile"
						}, {
							regex: "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Chrome Mobile iOS"
						}, {
							regex: "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",
							family_replacement: "Chrome Mobile"
						}, {
							regex: "(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Chrome Frame"
						}, {
							regex: "(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "UC Browser",
							other: !0
						}, {
							regex: "(SLP Browser)/(\\d+)\\.(\\d+)",
							family_replacement: "Tizen Browser",
							other: !0
						}, {
							regex: "(Epiphany)/(\\d+)\\.(\\d+).(\\d+)",
							family_replacement: "Epiphany",
							other: !0
						}, {
							regex: "(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",
							family_replacement: "Sogou Explorer",
							other: !0
						}, {
							regex: "(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",
							family_replacement: "PingdomBot",
							other: !0
						}, {
							regex: "(facebookexternalhit)/(\\d+)\\.(\\d+)",
							family_replacement: "FacebookBot"
						}, {
							regex: "(Twitterbot)/(\\d+)\\.(\\d+)",
							family_replacement: "TwitterBot"
						}, {
							regex: "(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"
						}, {
							regex: "(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)"
						}, {
							regex: "(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"
						}, {
							regex: "(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"
						}, {
							regex: "(Android) Donut",
							v2_replacement: "2",
							v1_replacement: "1"
						}, {
							regex: "(Android) Eclair",
							v2_replacement: "1",
							v1_replacement: "2"
						}, {
							regex: "(Android) Froyo",
							v2_replacement: "2",
							v1_replacement: "2"
						}, {
							regex: "(Android) Gingerbread",
							v2_replacement: "3",
							v1_replacement: "2"
						}, {
							regex: "(Android) Honeycomb",
							v1_replacement: "3"
						}, {
							regex: "(IEMobile)[ /](\\d+)\\.(\\d+)",
							family_replacement: "IE Mobile"
						}, {
							regex: "(MSIE) (\\d+)\\.(\\d+).*XBLWP7",
							family_replacement: "IE Large Screen"
						}, {
							regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"
						}, {
							regex: "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"
						}, {
							regex: "(Obigo)InternetBrowser",
							other: !0
						}, {
							regex: "(Obigo)\\-Browser",
							other: !0
						}, {
							regex: "(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",
							other: !0
						}, {
							regex: "(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",
							family_replacement: "Maxthon",
							other: !0
						}, {
							regex: "(Maxthon|MyIE2|Uzbl|Shiira)",
							v1_replacement: "0",
							other: !0
						}, {
							regex: "(PLAYSTATION) (\\d+)",
							family_replacement: "PlayStation",
							manufacturer: "Sony"
						}, {
							regex: "(PlayStation Portable)[^\\d]+(\\d+).(\\d+)",
							manufacturer: "Sony"
						}, {
							regex: "(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(POLARIS)/(\\d+)\\.(\\d+)",
							family_replacement: "Polaris",
							other: !0
						}, {
							regex: "(Embider)/(\\d+)\\.(\\d+)",
							family_replacement: "Polaris",
							other: !0
						}, {
							regex: "(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Bon Echo",
							other: !0
						}, {
							regex: "(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Mobile Safari",
							manufacturer: "Apple"
						}, {
							regex: "(iPod).*Version/(\\d+)\\.(\\d+)",
							family_replacement: "Mobile Safari",
							manufacturer: "Apple"
						}, {
							regex: "(iPod)",
							family_replacement: "Mobile Safari",
							manufacturer: "Apple"
						}, {
							regex: "(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Mobile Safari",
							manufacturer: "Apple"
						}, {
							regex: "(iPhone).*Version/(\\d+)\\.(\\d+)",
							family_replacement: "Mobile Safari",
							manufacturer: "Apple"
						}, {
							regex: "(iPhone)",
							family_replacement: "Mobile Safari",
							manufacturer: "Apple"
						}, {
							regex: "(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Mobile Safari",
							tablet: !0,
							manufacturer: "Apple"
						}, {
							regex: "(iPad).*Version/(\\d+)\\.(\\d+)",
							family_replacement: "Mobile Safari",
							tablet: !0,
							manufacturer: "Apple"
						}, {
							regex: "(iPad)",
							family_replacement: "Mobile Safari",
							tablet: !0,
							manufacturer: "Apple"
						}, {
							regex: "(AvantGo) (\\d+).(\\d+)",
							other: !0
						}, {
							regex: "(Avant)",
							v1_replacement: "1",
							other: !0
						}, {
							regex: "^(Nokia)",
							family_replacement: "Nokia Services (WAP) Browser",
							manufacturer: "Nokia"
						}, {
							regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",
							manufacturer: "Nokia"
						}, {
							regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",
							manufacturer: "Nokia"
						}, {
							regex: "(NokiaBrowser)/(\\d+)\\.(\\d+)",
							manufacturer: "Nokia"
						}, {
							regex: "(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",
							family_replacement: "NokiaBrowser",
							manufacturer: "Nokia"
						}, {
							regex: "(Series60)/5\\.0",
							v2_replacement: "0",
							v1_replacement: "7",
							family_replacement: "NokiaBrowser",
							manufacturer: "Nokia"
						}, {
							regex: "(Series60)/(\\d+)\\.(\\d+)",
							family_replacement: "Nokia OSS Browser",
							manufacturer: "Nokia"
						}, {
							regex: "(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Nokia Series 40 Ovi Browser",
							manufacturer: "Nokia"
						}, {
							regex: "(Nokia)[EN]?(\\d+)",
							manufacturer: "Nokia"
						}, {
							regex: "(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Blackberry WebKit",
							tablet: !0,
							manufacturer: "Nokia"
						}, {
							regex: "(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
							family_replacement: "Blackberry WebKit",
							manufacturer: "RIM"
						}, {
							regex: "(Black[bB]erry)\\s?(\\d+)",
							family_replacement: "Blackberry",
							manufacturer: "RIM"
						}, {
							regex: "(OmniWeb)/v(\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(Blazer)/(\\d+)\\.(\\d+)",
							family_replacement: "Palm Blazer",
							manufacturer: "Palm"
						}, {
							regex: "(Pre)/(\\d+)\\.(\\d+)",
							family_replacement: "Palm Pre",
							manufacturer: "Palm"
						}, {
							regex: "(Links) \\((\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(QtWeb) Internet Browser/(\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
							other: !0,
							tablet: !0
						}, {
							regex: "(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/",
							family_replacement: "WebKit Nightly"
						}, {
							regex: "(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",
							family_replacement: "Safari"
						}, {
							regex: "(Safari)/\\d+"
						}, {
							regex: "(OLPC)/Update(\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(OLPC)/Update()\\.(\\d+)",
							v1_replacement: "0",
							other: !0
						}, {
							regex: "(SEMC\\-Browser)/(\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(Teleca)",
							family_replacement: "Teleca Browser",
							other: !0
						}, {
							regex: "Trident(.*)rv.(\\d+)\\.(\\d+)",
							family_replacement: "IE"
						}, {
							regex: "(MSIE) (\\d+)\\.(\\d+)",
							family_replacement: "IE"
						}],
						os_parsers: [{
							regex: "(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
						}, {
							regex: "(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
						}, {
							regex: "(Android) Donut",
							os_v2_replacement: "2",
							os_v1_replacement: "1"
						}, {
							regex: "(Android) Eclair",
							os_v2_replacement: "1",
							os_v1_replacement: "2"
						}, {
							regex: "(Android) Froyo",
							os_v2_replacement: "2",
							os_v1_replacement: "2"
						}, {
							regex: "(Android) Gingerbread",
							os_v2_replacement: "3",
							os_v1_replacement: "2"
						}, {
							regex: "(Android) Honeycomb",
							os_v1_replacement: "3"
						}, {
							regex: "(Silk-Accelerated=[a-z]{4,5})",
							os_replacement: "Android"
						}, {
							regex: "(Windows Phone 6\\.5)"
						}, {
							regex: "(Windows (?:NT 5\\.2|NT 5\\.1))",
							os_replacement: "Windows XP"
						}, {
							regex: "(XBLWP7)",
							os_replacement: "Windows Phone OS"
						}, {
							regex: "(Windows NT 6\\.1)",
							os_replacement: "Windows 7"
						}, {
							regex: "(Windows NT 6\\.0)",
							os_replacement: "Windows Vista"
						}, {
							regex: "(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"
						}, {
							regex: "(Windows NT 6\\.4|Windows NT 10\\.0)",
							os_replacement: "Windows 10"
						}, {
							regex: "(Windows NT 6\\.2)",
							os_replacement: "Windows 8"
						}, {
							regex: "(Windows Phone 8)",
							os_replacement: "Windows Phone 8"
						}, {
							regex: "(Windows NT 5\\.0)",
							os_replacement: "Windows 2000"
						}, {
							regex: "(Windows Phone OS) (\\d+)\\.(\\d+)"
						}, {
							regex: "(Windows ?Mobile)",
							os_replacement: "Windows Mobile"
						}, {
							regex: "(WinNT4.0)",
							os_replacement: "Windows NT 4.0"
						}, {
							regex: "(Win98)",
							os_replacement: "Windows 98"
						}, {
							regex: "(Tizen)/(\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?",
							manufacturer: "Apple"
						}, {
							regex: "(?:PPC|Intel) (Mac OS X)",
							manufacturer: "Apple"
						}, {
							regex: "(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",
							os_replacement: "iOS",
							manufacturer: "Apple"
						}, {
							regex: "(iPhone|iPad|iPod); Opera",
							os_replacement: "iOS",
							manufacturer: "Apple"
						}, {
							regex: "(iPad); Opera",
							tablet: !0,
							manufacturer: "Apple"
						}, {
							regex: "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",
							os_replacement: "iOS",
							manufacturer: "Apple"
						}, {
							regex: "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							os_replacement: "Chrome OS"
						}, {
							regex: "(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							other: !0
						}, {
							regex: "(Linux Mint)(?:/(\\d+))?",
							other: !0
						}, {
							regex: "(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							other: !0
						}, {
							regex: "(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",
							os_replacement: "Symbian OS"
						}, {
							regex: "(Symbian/3).+NokiaBrowser/7\\.3",
							os_replacement: "Symbian^3 Anna"
						}, {
							regex: "(Symbian/3).+NokiaBrowser/7\\.4",
							os_replacement: "Symbian^3 Belle"
						}, {
							regex: "(Symbian/3)",
							os_replacement: "Symbian^3"
						}, {
							regex: "(Series 60|SymbOS|S60)",
							os_replacement: "Symbian OS"
						}, {
							regex: "(MeeGo)",
							other: !0
						}, {
							regex: "Symbian [Oo][Ss]",
							os_replacement: "Symbian OS"
						}, {
							regex: "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							os_replacement: "BlackBerry OS",
							manufacturer: "RIM"
						}, {
							regex: "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							os_replacement: "BlackBerry OS",
							manufacturer: "RIM"
						}, {
							regex: "(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",
							os_replacement: "BlackBerry Tablet OS",
							tablet: !0,
							manufacturer: "RIM"
						}, {
							regex: "(Play[Bb]ook)",
							os_replacement: "BlackBerry Tablet OS",
							tablet: !0,
							manufacturer: "RIM"
						}, {
							regex: "(Black[Bb]erry)",
							os_replacement: "Blackberry OS",
							manufacturer: "RIM"
						}, {
							regex: "(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
							os_replacement: "webOS"
						}, {
							regex: "(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)",
							other: !0
						}, {
							regex: "(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"
						}, {
							regex: "(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"
						}, {
							regex: "(Linux|BSD)",
							other: !0
						}],
						mobile_os_families: ["Windows Phone 6.5", "Windows CE", "Symbian OS"],
						device_parsers: [{
							regex: "HTC ([A-Z][a-z0-9]+) Build",
							device_replacement: "HTC $1",
							manufacturer: "HTC"
						}, {
							regex: "HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",
							device_replacement: "HTC $1",
							manufacturer: "HTC"
						}, {
							regex: "HTC_Touch_([A-Za-z0-9]+)",
							device_replacement: "HTC Touch ($1)",
							manufacturer: "HTC"
						}, {
							regex: "USCCHTC(\\d+)",
							device_replacement: "HTC $1 (US Cellular)",
							manufacturer: "HTC"
						}, {
							regex: "Sprint APA(9292)",
							device_replacement: "HTC $1 (Sprint)",
							manufacturer: "HTC"
						}, {
							regex: "HTC ([A-Za-z0-9]+ [A-Z])",
							device_replacement: "HTC $1",
							manufacturer: "HTC"
						}, {
							regex: "HTC-([A-Za-z0-9]+)",
							device_replacement: "HTC $1",
							manufacturer: "HTC"
						}, {
							regex: "HTC_([A-Za-z0-9]+)",
							device_replacement: "HTC $1",
							manufacturer: "HTC"
						}, {
							regex: "HTC ([A-Za-z0-9]+)",
							device_replacement: "HTC $1",
							manufacturer: "HTC"
						}, {
							regex: "(ADR[A-Za-z0-9]+)",
							device_replacement: "HTC $1",
							manufacturer: "HTC"
						}, {
							regex: "(HTC)",
							manufacturer: "HTC"
						}, {
							regex: "SonyEricsson([A-Za-z0-9]+)/",
							device_replacement: "Ericsson $1",
							other: !0,
							manufacturer: "Sony"
						}, {
							regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"
						}, {
							regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
						}, {
							regex: "Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
						}, {
							regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
						}, {
							regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"
						}, {
							regex: "NokiaN([0-9]+)",
							device_replacement: "Nokia N$1",
							manufacturer: "Nokia"
						}, {
							regex: "Nokia([A-Za-z0-9\\v-]+)",
							device_replacement: "Nokia $1",
							manufacturer: "Nokia"
						}, {
							regex: "NOKIA ([A-Za-z0-9\\-]+)",
							device_replacement: "Nokia $1",
							manufacturer: "Nokia"
						}, {
							regex: "Nokia ([A-Za-z0-9\\-]+)",
							device_replacement: "Nokia $1",
							manufacturer: "Nokia"
						}, {
							regex: "Lumia ([A-Za-z0-9\\-]+)",
							device_replacement: "Lumia $1",
							manufacturer: "Nokia"
						}, {
							regex: "Symbian",
							device_replacement: "Nokia",
							manufacturer: "Nokia"
						}, {
							regex: "(PlayBook).+RIM Tablet OS",
							device_replacement: "Blackberry Playbook",
							tablet: !0,
							manufacturer: "RIM"
						}, {
							regex: "(Black[Bb]erry [0-9]+);",
							manufacturer: "RIM"
						}, {
							regex: "Black[Bb]erry([0-9]+)",
							device_replacement: "BlackBerry $1",
							manufacturer: "RIM"
						}, {
							regex: "(Pre)/(\\d+)\\.(\\d+)",
							device_replacement: "Palm Pre",
							manufacturer: "Palm"
						}, {
							regex: "(Pixi)/(\\d+)\\.(\\d+)",
							device_replacement: "Palm Pixi",
							manufacturer: "Palm"
						}, {
							regex: "(Touchpad)/(\\d+)\\.(\\d+)",
							device_replacement: "HP Touchpad",
							manufacturer: "HP"
						}, {
							regex: "HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",
							device_replacement: "HP iPAQ $1",
							manufacturer: "HP"
						}, {
							regex: "Palm([A-Za-z0-9]+)",
							device_replacement: "Palm $1",
							manufacturer: "Palm"
						}, {
							regex: "Treo([A-Za-z0-9]+)",
							device_replacement: "Palm Treo $1",
							manufacturer: "Palm"
						}, {
							regex: "webOS.*(P160UNA)/(\\d+).(\\d+)",
							device_replacement: "HP Veer",
							manufacturer: "HP"
						}, {
							regex: "(Kindle Fire)",
							manufacturer: "Amazon"
						}, {
							regex: "(Kindle)",
							manufacturer: "Amazon"
						}, {
							regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
							device_replacement: "Kindle Fire",
							tablet: !0,
							manufacturer: "Amazon"
						}, {
							regex: "(iPad) Simulator;",
							manufacturer: "Apple"
						}, {
							regex: "(iPad);",
							manufacturer: "Apple"
						}, {
							regex: "(iPod);",
							manufacturer: "Apple"
						}, {
							regex: "(iPhone) Simulator;",
							manufacturer: "Apple"
						}, {
							regex: "(iPhone);",
							manufacturer: "Apple"
						}, {
							regex: "Nexus\\ ([A-Za-z0-9\\-]+)",
							device_replacement: "Nexus $1"
						}, {
							regex: "acer_([A-Za-z0-9]+)_",
							device_replacement: "Acer $1",
							manufacturer: "Acer"
						}, {
							regex: "acer_([A-Za-z0-9]+)_",
							device_replacement: "Acer $1",
							manufacturer: "Acer"
						}, {
							regex: "Amoi\\-([A-Za-z0-9]+)",
							device_replacement: "Amoi $1",
							other: !0,
							manufacturer: "Amoi"
						}, {
							regex: "AMOI\\-([A-Za-z0-9]+)",
							device_replacement: "Amoi $1",
							other: !0,
							manufacturer: "Amoi"
						}, {
							regex: "Asus\\-([A-Za-z0-9]+)",
							device_replacement: "Asus $1",
							manufacturer: "Asus"
						}, {
							regex: "ASUS\\-([A-Za-z0-9]+)",
							device_replacement: "Asus $1",
							manufacturer: "Asus"
						}, {
							regex: "BIRD\\-([A-Za-z0-9]+)",
							device_replacement: "Bird $1",
							other: !0
						}, {
							regex: "BIRD\\.([A-Za-z0-9]+)",
							device_replacement: "Bird $1",
							other: !0
						}, {
							regex: "BIRD ([A-Za-z0-9]+)",
							device_replacement: "Bird $1",
							other: !0
						}, {
							regex: "Dell ([A-Za-z0-9]+)",
							device_replacement: "Dell $1",
							manufacturer: "Dell"
						}, {
							regex: "DoCoMo/2\\.0 ([A-Za-z0-9]+)",
							device_replacement: "DoCoMo $1",
							other: !0
						}, {
							regex: "([A-Za-z0-9]+)\\_W\\;FOMA",
							device_replacement: "DoCoMo $1",
							other: !0
						}, {
							regex: "([A-Za-z0-9]+)\\;FOMA",
							device_replacement: "DoCoMo $1",
							other: !0
						}, {
							regex: "vodafone([A-Za-z0-9]+)",
							device_replacement: "Huawei Vodafone $1",
							other: !0
						}, {
							regex: "i\\-mate ([A-Za-z0-9]+)",
							device_replacement: "i-mate $1",
							other: !0
						}, {
							regex: "Kyocera\\-([A-Za-z0-9]+)",
							device_replacement: "Kyocera $1",
							other: !0
						}, {
							regex: "KWC\\-([A-Za-z0-9]+)",
							device_replacement: "Kyocera $1",
							other: !0
						}, {
							regex: "Lenovo\\-([A-Za-z0-9]+)",
							device_replacement: "Lenovo $1",
							manufacturer: "Lenovo"
						}, {
							regex: "Lenovo\\_([A-Za-z0-9]+)",
							device_replacement: "Lenovo $1",
							manufacturer: "Levovo"
						}, {
							regex: "LG/([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "LG-LG([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "LGE-LG([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "LGE VX([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "LG ([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "LGE LG\\-AX([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "LG\\-([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "LGE\\-([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "LG([A-Za-z0-9]+)",
							device_replacement: "LG $1",
							manufacturer: "LG"
						}, {
							regex: "(KIN)\\.One (\\d+)\\.(\\d+)",
							device_replacement: "Microsoft $1"
						}, {
							regex: "(KIN)\\.Two (\\d+)\\.(\\d+)",
							device_replacement: "Microsoft $1"
						}, {
							regex: "(Motorola)\\-([A-Za-z0-9]+)",
							manufacturer: "Motorola"
						}, {
							regex: "MOTO\\-([A-Za-z0-9]+)",
							device_replacement: "Motorola $1",
							manufacturer: "Motorola"
						}, {
							regex: "MOT\\-([A-Za-z0-9]+)",
							device_replacement: "Motorola $1",
							manufacturer: "Motorola"
						}, {
							regex: "Philips([A-Za-z0-9]+)",
							device_replacement: "Philips $1",
							manufacturer: "Philips"
						}, {
							regex: "Philips ([A-Za-z0-9]+)",
							device_replacement: "Philips $1",
							manufacturer: "Philips"
						}, {
							regex: "SAMSUNG-([A-Za-z0-9\\-]+)",
							device_replacement: "Samsung $1",
							manufacturer: "Samsung"
						}, {
							regex: "SAMSUNG\\; ([A-Za-z0-9\\-]+)",
							device_replacement: "Samsung $1",
							manufacturer: "Samsung"
						}, {
							regex: "Softbank/1\\.0/([A-Za-z0-9]+)",
							device_replacement: "Softbank $1",
							other: !0
						}, {
							regex: "Softbank/2\\.0/([A-Za-z0-9]+)",
							device_replacement: "Softbank $1",
							other: !0
						}, {
							regex: "(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",
							device_replacement: "Generic Smartphone"
						}, {
							regex: "^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",
							device_replacement: "Generic Feature Phone"
						}, {
							regex: "^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",
							device_replacement: "Generic Feature Phone"
						}, {
							regex: "^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",
							device_replacement: "Generic Feature Phone"
						}, {
							regex: "^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)",
							device_replacement: "Generic Feature Phone"
						}, {
							regex: "(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)",
							device_replacement: "Spider"
						}],
						mobile_browser_families: ["Firefox Mobile", "Opera Mobile", "Opera Mini", "Mobile Safari", "webOS", "IE Mobile", "Playstation Portable", "Nokia", "Blackberry", "Palm", "Silk", "Android", "Maemo", "Obigo", "Netfront", "AvantGo", "Teleca", "SEMC-Browser", "Bolt", "Iris", "UP.Browser", "Symphony", "Minimo", "Bunjaloo", "Jasmine", "Dolfin", "Polaris", "BREW", "Chrome Mobile", "Chrome Mobile iOS", "UC Browser", "Tizen Browser"]
					};
				e.parsers = ["device_parsers", "browser_parsers", "os_parsers", "mobile_os_families", "mobile_browser_families"], e.types = ["browser", "os", "device"], e.regexes = t || function() {
					var t = {};
					return e.parsers.map(function(e) {
						t[e] = []
					}), t
				}(), e.families = function() {
					var t = {};
					return e.types.map(function(e) {
						t[e] = []
					}), t
				}();
				var n = Array.prototype,
					o = (Object.prototype, Function.prototype, n.forEach),
					r = (n.indexOf, function(e, t) {
						for(var n = {}, o = 0; o < t.length && !(n = t[o](e)); o++);
						return n
					}),
					i = function(e, t) {
						a(e, function(e) {
							a(t, function(t) {
								delete e[t]
							})
						})
					},
					a = forEach = function(e, t, n) {
						if(null != e)
							if(o && e.forEach === o) e.forEach(t, n);
							else if(e.length === +e.length)
							for(var r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
						else
							for(var a in e) _.has(e, a) && t.call(n, e[a], a, e)
					},
					s = function(e) {
						return !(!e || "undefined" == typeof e || null == e)
					},
					c = function(e) {
						var t = "";
						return e = e || {}, s(e) && s(e.major) && (t += e.major, s(e.minor) && (t += "." + e.minor, s(e.patch) && (t += "." + e.patch))), t
					},
					l = function(e) {
						e = e || {};
						var t = c(e);
						return t && (t = " " + t), e && s(e.family) ? e.family + t : ""
					};
				return e.parse = function(t) {
					var n = function(t) {
							return e.regexes[t + "_parsers"].map(function(e) {
								function n(t) {
									var n = t.match(o);
									if(!n) return null;
									var a = {};
									return a.family = (r ? r.replace("$1", n[1]) : n[1]) || "other", a.major = parseInt(i ? i : n[2]) || null, a.minor = n[3] ? parseInt(n[3]) : null, a.patch = n[4] ? parseInt(n[4]) : null, a.tablet = e.tablet, a.man = e.manufacturer || null, a
								}
								var o = new RegExp(e.regex),
									r = e[("browser" === t ? "family" : t) + "_replacement"],
									i = e.major_version_replacement;
								return n
							})
						},
						o = function() {},
						a = n("browser"),
						d = n("os"),
						u = n("device"),
						m = new o;
					m.source = t, m.browser = r(t, a), s(m.browser) ? (m.browser.name = l(m.browser), m.browser.version = c(m.browser)) : m.browser = {}, m.os = r(t, d), s(m.os) ? (m.os.name = l(m.os), m.os.version = c(m.os)) : m.os = {}, m.device = r(t, u), s(m.device) ? (m.device.name = l(m.device), m.device.version = c(m.device)) : m.device = {
						tablet: !1,
						family: "Other"
					};
					var p = {};
					e.regexes.mobile_browser_families.map(function(e) {
						p[e] = !0
					}), e.regexes.mobile_os_families.map(function(e) {
						p[e] = !0
					});
					return "Spider" === m.browser.family ? m.device.type = "Spider" : m.browser.tablet || m.os.tablet || m.device.tablet ? m.device.type = "Tablet" : p.hasOwnProperty(m.browser.family) ? m.device.type = "Mobile" : m.device.type = "Desktop", m.device.manufacturer = m.browser.man || m.os.man || m.device.man || null, i([m.browser, m.os, m.device], ["tablet", "man"]), m
				}, e
			}();
			"undefined" != typeof n && ("undefined" != typeof t && t.exports && (n = t.exports = r), n.detect = r)
		}(window)
	}, {}],
	3: [function(e, t, n) {
		function o(e, t, n) {
			e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
		}
		t.exports = o
	}, {}],
	4: [function(e, t, n) {
		var o = function() {
				var e;
				if(window.XMLHttpRequest) e = new XMLHttpRequest, e.overrideMimeType && e.overrideMimeType("text/xml");
				else if(window.ActiveXObject)
					for(var t = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < t.length; n++) try {
						if(e = new ActiveXObject(t[n])) break
					} catch(o) {}
				return e
			},
			r = function(e, t) {
				var e = e || {},
					n = [];
				for(var o in e) {
					var r = "post" === t.toLowerCase() ? e[o] : encodeURIComponent(e[o]);
					n.push(o + "=" + r)
				}
				return n.join("&")
			},
			i = function(e, t, n) {
				var o = t.type || "get",
					i = r(t.data, o),
					s = t.url || "";
				"get" == o && (s += "?" + i), e.open(o.toUpperCase(), s, !0), "post" == o.toLowerCase() ? (e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), a(e, t.headers), e.send(i)) : "get" == o.toLowerCase() && (a(e, t.headers), e.send()), e.onreadystatechange = function() {
					if(4 == e.readyState)
						if(200 == e.status) {
							if(!n.success) return;
							var o = e.responseText;
							if(t.dataType && "json" == t.dataType.toLowerCase()) {
								try {
									var r = JSON.parse(o)
								} catch(i) {
									n.fail && n.fail(new Error("parse Error"), o)
								}
								n.success(r)
							} else n.success(o)
						} else n.fail && n.fail(new Error("request fail"), o)
				}
			},
			a = function(e, t) {
				var t = t || {};
				for(var n in t) e.setRequestHeader(n, t[n])
			},
			s = function(e) {
				return this.success = e, this
			},
			c = function(e) {
				return this.fail = e, this
			},
			l = function(e) {
				var t = {},
					n = document.createElement("script"),
					o = r(e.data, "get"),
					i = e.url || "";
				i += "?" + o, i += "&";
				var a = +new Date,
					l = "callback" + a;
				i += "callback=" + l;
				var d;
				return d = setTimeout(function() {
					t.fail && t.fail()
				}, 3e3), window[l] = function(e) {
					try {
						clearTimeout(d), document.body.removeChild(n), t.success && t.success(e)
					} catch(o) {}
					try {} catch(o) {}
				}, n.src = i, document.body.appendChild(n), t.success = s, t.fail = c, t
			},
			d = function(e) {
				if(e.dataType && "jsonp" === e.dataType.toLowerCase()) return l(e);
				var t = {},
					n = o();
				return i(n, e, t), t.success = s, t.fail = c, t
			},
			u = function() {
				var e = window.navigator.userAgent;
				if(/MSIE\s+(\d+)\./.test(e)) {
					var t = +RegExp.$1;
					return t >= 10 ? d : l
				}
				return d
			};
		t.exports = u()
	}, {}],
	5: [function(e, t, n) {
		var o = {},
			r = function(e, t) {
				var n = 1,
					o = new Date;
				o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + ";expires=" + o.toGMTString()
			},
			i = function(e) {
				var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
				return(t = document.cookie.match(n)) ? unescape(t[2]) : null
			},
			a = function(e) {
				var t = new Date;
				t.setTime(t.getTime() - 1);
				var n = i(e);
				null !== n && (document.cookie = e + "=" + n + ";expires=" + t.toGMTString())
			};
		o.setCookie = r, o.getCookie = i, o.delCookie = a, t.exports = o
	}, {}],
	6: [function(e, t, n) {
		! function() {
			function e() {
				var e = {
						"&": "&#38;",
						"<": "&#60;",
						">": "&#62;",
						'"': "&#34;",
						"'": "&#39;",
						"/": "&#47;"
					},
					t = /&(?!#?\w+;)|<|>|"|'|\//g;
				return function() {
					return this ? this.replace(t, function(t) {
						return e[t] || t
					}) : this
				}
			}

			function n(e, t, o) {
				return("string" == typeof t ? t : t.toString()).replace(e.define || s, function(t, n, r, i) {
					return 0 === n.indexOf("def.") && (n = n.substring(4)), n in o || (":" === r ? (e.defineParams && i.replace(e.defineParams, function(e, t, r) {
						o[n] = {
							arg: t,
							text: r
						}
					}), n in o || (o[n] = i)) : new Function("def", "def['" + n + "']=" + i)(o)), ""
				}).replace(e.use || s, function(t, r) {
					e.useParams && (r = r.replace(e.useParams, function(e, t, n, r) {
						if(o[n] && o[n].arg && r) return e = (n + ":" + r).replace(/'|\\/g, "_"), o.__exp = o.__exp || {}, o.__exp[e] = o[n].text.replace(RegExp("(^|[^\\w$])" + o[n].arg + "([^\\w$])", "g"), "$1" + r + "$2"), t + "def.__exp['" + e + "']"
					}));
					var i = new Function("def", "return " + r)(o);
					return i ? n(e, i, o) : i
				})
			}

			function o(e) {
				return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
			}
			var r, i = {
				version: "1.0.1",
				templateSettings: {
					evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
					interpolate: /\{\{=([\s\S]+?)\}\}/g,
					encode: /\{\{!([\s\S]+?)\}\}/g,
					use: /\{\{#([\s\S]+?)\}\}/g,
					useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
					define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
					defineParams: /^\s*([\w$]+):([\s\S]+)/,
					conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
					iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
					varname: "it",
					strip: !0,
					append: !0,
					selfcontained: !1
				},
				template: void 0,
				compile: void 0
			};
			"undefined" != typeof t && t.exports ? t.exports = i : "function" == typeof define && define.amd ? define(function() {
				return i
			}) : (r = function() {
				return this || (0, eval)("this")
			}(), r.doT = i), String.prototype.encodeHTML = e();
			var a = {
					append: {
						start: "'+(",
						end: ")+'",
						endencode: "||'').toString().encodeHTML()+'"
					},
					split: {
						start: "';out+=(",
						end: ");out+='",
						endencode: "||'').toString().encodeHTML();out+='"
					}
				},
				s = /$^/;
			i.template = function(t, r, c) {
				r = r || i.templateSettings;
				var l, d, u = r.append ? a.append : a.split,
					m = 0;
				t = r.use || r.define ? n(r, t, c || {}) : t, t = ("var out='" + (r.strip ? t.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : t).replace(/'|\\/g, "\\$&").replace(r.interpolate || s, function(e, t) {
						return u.start + o(t) + u.end
					}).replace(r.encode || s, function(e, t) {
						return l = !0, u.start + o(t) + u.endencode
					}).replace(r.conditional || s, function(e, t, n) {
						return t ? n ? "';}else if(" + o(n) + "){out+='" : "';}else{out+='" : n ? "';if(" + o(n) + "){out+='" : "';}out+='"
					}).replace(r.iterate || s, function(e, t, n, r) {
						return t ? (m += 1, d = r || "i" + m, t = o(t), "';var arr" + m + "=" + t + ";if(arr" + m + "){var " + n + "," + d + "=-1,l" + m + "=arr" + m + ".length-1;while(" + d + "<l" + m + "){" + n + "=arr" + m + "[" + d + "+=1];out+='") : "';} } out+='"
					}).replace(r.evaluate || s, function(e, t) {
						return "';" + o(t) + "out+='"
					}) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "").replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+="),
					l && r.selfcontained && (t = "String.prototype.encodeHTML=(" + e.toString() + "());" + t);
				try {
					return new Function(r.varname, t)
				} catch(p) {
					throw "undefined" != typeof console && 3, p
				}
			}, i.compile = function(e, t) {
				return i.template(e, null, t)
			}
		}()
	}, {}],
	7: [function(e, t, n) {
		var o, r = {},
			i = e("../config/config.json"),
			a = e("../lib/detect.js"),
			s = encodeURIComponent,
			c = /Mobile/.test(window.navigator.userAgent) ? "wap" : "pc",
			l = function(e, t, n, r) {
				var a = new Image,
					l = "error=" + s(e.toString());
				l += "&stack=" + s(e.stack), l += "&from=" + t, l += "&os=" + o.os.family, l += "&osVersion=" + o.os.version, l += "&browser=" + o.browser.family, l += "&browserVersion=" + o.browser.version, l += "&type=" + c, l += "&uid=" + r.apiInit.uid, l += "&data=" + s(JSON.stringify(n)), l += "&pid=" + r.apiInit.pid, a.src = "//" + i.errorlogPath + "runtime?" + l
			},
			d = function(e, t, n, o) {
				new Image;
				$.ajax({
					url: "//" + i.errorlogPath + "special",
					type: "post",
					dataType: "json",
					data: {
						errorType: e,
						from_type: t,
						data: s(JSON.stringify(n)),
						pid: o.apiInit.pid,
						type: c
					}
				})
			},
			u = function(e, t, n, o, r, a) {
				var l = new Image,
					d = [];
				d.push("url=" + s(t)), d.push("data=" + s(JSON.stringify(n))), d.push("pid=" + a.apiInit.pid), d.push("duration=" + s(o)), d.push("uid=" + s(a.apiInit.uid)), d.push("type=" + c), d.push("reqType=" + r);
				var u = d.join("&");
				l.src = "//" + i.errorlogPath + "overtime?" + u
			},
			m = function(e, t, n, o, r) {
				var a = new Image,
					l = [];
				l.push("status=" + e.status), l.push("statusText=" + e.statusText), l.push("url=" + s(t)), l.push("data=" + s(JSON.stringify(n))), l.push("pid=" + r.apiInit.pid), l.push("responseText=" + s(e.responseText)), l.push("type=" + c), l.push("uid=" + s(r.apiInit.uid)), l.push("reqType=" + o);
				var d = l.join("&");
				a.src = "//" + i.errorlogPath + "network?" + d
			};
		! function() {
			var e = window.navigator.userAgent;
			o = a.parse(e)
		}(), r.networkError = m, r.runtimeError = l, r.overTimeError = u, r.specialError = d, r.init = function() {}, r.getFlag = function() {
			return !1
		}, t.exports = r
	}, {
		"../config/config.json": 1,
		"../lib/detect.js": 2
	}],
	8: [function(e, t, n) {
		function o(e, t) {
			var t = t || 0;
			if("object" != typeof e) throw "not a json";
			var n = Object.prototype.toString.call(e),
				r = "";
			if(/Array/.test(n)) {
				r = "[";
				for(var i = [], a = 0; a < e.length; a++) {
					var s = e[a];
					if("object" == typeof s) try {
						i.push(o(s, t))
					} catch(c) {
						continue
					} else i.push(s.toString())
				}
				return r + i.join(", ") + "]"
			}
			if(/Object/.test(n)) {
				var l, d = "",
					u = "",
					i = [];
				r = "{";
				var m = 0;
				for(var p in e)
					if(e.hasOwnProperty(p)) {
						if("number" == typeof e[p]) l = "", m > 0 && (l += ","), l += '"' + p + '":' + e[p], i.push(l);
						else if("boolean" == typeof e[p]) l = "", m > 0 && (l += ","), l += '"' + p + '":' + e[p], i.push(l);
						else if("string" == typeof e[p]) l = "", m > 0 && (l += ","), l += '"' + p + '":"' + e[p] + '"', i.push(l);
						else if("object" == typeof e[p]) {
							l = "";
							try {
								m > 0 && (l += ","), l += '"' + p + '":' + o(e[p], t + 1), i.push(l)
							} catch(c) {
								continue
							}
						}
						m++
					}
				return r += i.join("" + d) + "" + u + "}"
			}
			throw "not a json"
		}
		t.exports = o
	}, {}],
	9: [function(require, module, exports) {
		function init() {
			var parse = function(str) {
					var obj;
					try {
						obj = eval("(" + str + ")")
					} catch(e) {}
					return obj
				},
				stringify = function(e) {
					if(e) {
						var t = formatJSON(e, 0);
						return t
					}
					return ""
				};
			window.JSON || (window.JSON = {
				parse: parse,
				stringify: stringify
			})
		}
		var formatJSON = require("./formatJSON.js");
		module.exports = init
	}, {
		"./formatJSON.js": 8
	}],
	10: [function(e, t, n) {
		var o = {},
			r = {},
			i = function(e, t) {
				if(r[e])
					for(var n = 0, o = r[e].length; n < o; n++) {
						var i = r[e][n];
						i(t)
					}
			},
			a = function(e, t) {
				r[e] || (r[e] = []);
				for(var n = !1, o = r[e], i = 0, a = o.length; i < a; i++)
					if(o[i] == t) {
						n = !0;
						break
					}
				n || r[e].push(t)
			},
			s = function(e, t) {
				if(t && "function" == typeof t) {
					var n = r[e];
					if(n && n.length)
						for(var o = n.length, i = o - 1; i >= 0; i--) {
							var a = n[i];
							if(a == t) {
								n.splice(i, 1);
								break
							}
						}
				} else delete r[e]
			};
		o.on = a, o.off = s, o.trigger = i, t.exports = o
	}, {}],
	11: [function(e, t, n) {
		var o = {
			doc: document,
			timer: null,
			oldTitle: "",
			flashFlag: !1,
			count: 0,
			msg: "您有【新消息】",
			flash: function() {
				this.flashFlag ? this.clear() : this.oldTitle = this.doc.title, this.flashFlag = !0;
				var e = this;
				this.timer = setInterval(function() {
					e.count++, e.count >= 30 && (e.count = 0, e.clear()), e._flash()
				}, 500)
			},
			_flash: function() {
				this.index = this.index ? 0 : 1, this.doc.title = this.index ? this.msg : this.oldTitle
			},
			clear: function() {
				clearInterval(this.timer), this.flashFlag && (this.doc.title = this.oldTitle), this.flashFlag = !1
			}
		};
		t.exports = o
	}, {}],
	12: [function(e, t, n) {
		function o() {
			var e = [],
				t = this;
			this.resolve = function(n) {
				var o = e.shift();
				o && o.success && "function" == typeof o.success && o.success(n, t)
			}, this.reject = function(n) {
				var o = e.shift();
				o && o.fail && "function" == typeof o.fail && o.fail(n, t)
			}, this.then = function(n, o) {
				return e.push({
					success: n,
					fail: o
				}), t
			}
		}
		o.when = function(e) {
			return e()
		}, t.exports = o
	}, {}],
	13: [function(e, t, n) {
		function o(e) {
			var t = e.substring(e.lastIndexOf("?") + 1);
			t.lastIndexOf("#") >= 0 && (t = t.substring(0, t.lastIndexOf("#")));
			for(var n = t.split("&"), o = {}, r = 0; r < n.length; r++) {
				var i = n[r],
					a = i.substring(0, i.indexOf("=")),
					s = i.substring(i.indexOf("=") + 1);
				/^-?(\d+)(\.\d+)?$/.test(s) ? ("" + s).length > 10 ? o[a] = "" + s : o[a] = Number(s) : "true" === s ? o[a] = !0 : "false" === s ? o[a] = !1 : o[a] = s
			}
			return o
		}
		t.exports = o
	}, {}],
	14: [function(e, t, n) {
		t.exports = {
			staticPath: "https://www.sobot.com/chat/{type}/index.html",
			domain: "www.sobot.com",
			pcDir: "pc_new",
			logIp: "crumb.sobot.com",
			wapDir: "h5"
		}
	}, {}],
	15: [function(e, t, n) {
		function o(t) {
			var n, o, r, i, a, s, c, l, d = (e("../../../common/util/queryParam.js"), e("../../../common/util/listener.js")),
				u = (e("../../../common/util/cookie.js"), e("../fun/event.js")),
				m = e("../../../common/util/addEvent.js"),
				p = e("../fun/trace.js"),
				f = (e("../fun/logGif.js"), e("../socket/socketFactory.js")),
				g = (e("../util/move.js"), e("../../../common/util/doT.min.js")),
				h = e("./invite.js"),
				x = e("../fun/unRead.js"),
				v = "zhichiScript",
				b = {},
				y = e("../config/config.json"),
				w = !1,
				T = !1,
				S = navigator.userAgent.indexOf("Mobile") >= 0,
				_ = e("../../../common/util/ajax.js"),
				j = e("../template/template.js"),
				M = e("./frame.js"),
				k = e("../fun/theme.js"),
				C = (e("../fun/utm.js"), e("../fun/bubble.js")),
				A = e("../fun/invite.js"),
				I = e("../logs/traceLog.js"),
				O = !1,
				B = [],
				z = 0,
				P = [],
				N = {},
				L = "collapse",
				E = ["partnerId", "color", "sysNum", "from", "back", "lan", "telShowFlag", "telFlag", "emailShowFlag", "emailFlag", "satDegree", "invite", "artificial", "moduleType", "powered", "satDegree_A", "cid", "groupId", "source", "robotFlag", "isLeaveMsgFlag", "msgflag", "isMessageFlag", "isFeedBackFlag", "time", "titleFlag", "customTitle", "isReComment", "wurl", "isCustomSysFlag", "aid", "tranFlag", "evaluateFlag", "title_info", "url_info", "abstract_info", "label_info", "thumbnail_info", "customerFields", "robotHelloWord", "adminHelloWord", "adminTipWord", "userTipWord", "adminNonelineTitle", "visitStartTime", "leaveMsgSendGroupIdFlag", "ticketTypeFlag", "ticketTypeId", "unit"],
				F = ["tel", "email", "uname", "visitTitle", "visitUrl", "face", "realname", "weibo", "weixin", "qq", "sex", "birthday", "remark", "params", "uid", "multiParams"],
				W = {
					ISaveUserData: "//" + y.domain + "/chat/user/humanInfo.action"
				},
				Z = function(e) {
					202 == e.type ? (l.receiveUnReadCountFromSocket(1), o && o.send({
						name: "offlineMessage",
						data: e
					}), o && "expand" == L ? l.clearRead() : "collapse" === L && u.trigger("receivemessage", {
						data: [{
							content: e.content || "",
							customName: e.aname || "",
							msgId: e.msgId || ""
						}]
					})) : 207 == e.type && (o ? (n && (n.close(), f.clear()), o.send({
						type: "auto",
						aid: e.aid
					})) : (ne("autoManual", !0), ne("aid", e.aid)), "collapse" == L && G())
				},
				R = function(e) {
					var r;
					if("string" == typeof e.data) try {
						r = JSON.parse(e.data)
					} catch(a) {} else "object" == typeof e.data && (r = e.data);
					if(Object.prototype.toString.call(r).indexOf("object Object") >= 0 && r) "init" == r.name ? i && (i.style.backgroundColor = "#" + t.color) : "manual" == r.name ? n && (n.close(), f.clear()) : "closeSession" == r.name && (i.style.backgroundColor = "#ccc", 6 == r.status ? (document.getElementById("zhichiCount").style.display = "none ", document.getElementById("bubbleMsg").style.display = "none") : n = f.getInstance(t));
					else {
						if(/^message\^/.test(r)) {
							var s = r.replace(/^message\^/, ""),
								c = JSON.parse(s);
							return void X(c)
						}
						switch(r) {
							case "zhichiOut":
								G(null, function() {
									o.destroy(), w = !1, o = null
								});
								break;
							case "zhichiMin":
								G()
						}
					}
				},
				$ = function(e) {
					var t = e.className;
					if("string" != typeof t) return [];
					for(var n = t.split(" "), o = [], r = 0, i = n.length; r < i; r++) 0 != n[r].length && o.push(n[r]);
					return o
				},
				H = function(e) {
					a || (a = document.getElementsByTagName("*"));
					for(var t = [], n = a, o = 0, r = n.length; o < r; o++) {
						var i = n[o];
						if("script" != i.tagName.toLowerCase())
							for(var s = $(i), c = 0; c < s.length; c++)
								if(s[c] === e) {
									t.push(i);
									break
								}
					}
					return t
				},
				V = function() {
					for(var e = $(r), n = [], o = 0, i = e.length; o < i; o++) {
						var a, s = e[o];
						"querySelectorAll" in document ? a = document.querySelectorAll("." + s) : ("getElementsByClassName" in document, a = H(s));
						for(var c = a.length; o < c; o++) n.push(a[o])
					}
					for(var o = 0, i = n.length; o < i; o++) "script" !== n[o].tagName.toLowerCase() && P.push(n[o]);
					P.length > 0 && (t.customBtn = !0), t.lazyFlag && setTimeout(function() {
						b.collapse()
					}, 300)
				},
				D = function() {
					return L
				},
				U = function(e, r) {
					if(o) {
						var a = c.get("margin");
						a > 2 ? [c.get("width")] : [c.get("height")];
						o.send({
							name: L
						}), "collapse" == L ? (S || i.firstChild.childNodes[0].setAttribute("src", "//www.sobot.com/chat/pc/img/zhichichatBtnBg1.png"), o.collapse(function() {
							u.trigger("core.framestatuschange", L), r && r()
						})) : (S || i.firstChild.childNodes[0].setAttribute("src", "//sobot-test.oss-cn-beijing.aliyuncs.com/console/3542411be2184c8cb6b48d66ca1b2730/userandgroup/29dcc1573d524a16b5dfac756e04ba22.JPG"), o.expand(function() {
							u.trigger("core.framestatuschange", L), setTimeout(l.clearRead, 700), r && r()
						}))
					} else o = new M(t, {
						onload: function() {
							o.send({
								name: L
							}), "collapse" == L ? S || i.firstChild.childNodes[0].setAttribute("src", "//www.sobot.com/chat/pc/img/zhichichatBtnBg1.png") : (setTimeout(l.clearRead, 500), S || i.firstChild.childNodes[0].setAttribute("src", "//sobot-test.oss-cn-beijing.aliyuncs.com/console/3542411be2184c8cb6b48d66ca1b2730/userandgroup/29dcc1573d524a16b5dfac756e04ba22.JPG")), t.autoManual && n && (n.close(), f.clear())
						},
						onexpaned: function() {
							w = !1, u.trigger("core.framestatuschange", L), r && r()
						}
					}, c.themeConf, "expand" == L)
				},
				G = function(e, n) {
					if(!(w || t.anchor && !S)) {
						w = !0;
						var n = n || function() {
							w = !1, "expand" == L ? (z = 0, s && (s.style.display = "none"), i.style.overflow = "visible") : i.style.overflow = "visible", X([])
						};
						if("collapse" == L ? (L = "expand", u.trigger("bubble.expand", L)) : "expand" == L && (L = "collapse"), window.localStorage) try {
							window.localStorage.setItem("frameStatus", L)
						} catch(o) {}
						U(L, n)
					}
				},
				q = function(e) {
					return t.groupId = e, o && o.setGroupId(e), b
				},
				J = function() {
					if(!O) {
						O = !0;
						var e = (document.createDocumentFragment(), document.createElement("div")),
							n = u ? y.wapDir : y.pcDir,
							o = y.staticPath.replace(/\{type\}/, n) + "?",
							r = [],
							a = c.themeConf.height;
						for(var l in t)
							if(t.hasOwnProperty(l)) {
								E = E || [];
								for(var d = 0; d < E.length; d++) E[d] == l && r.push(l + "=" + encodeURIComponent(t[l]))
							}
						o = r.join("&");
						var u = navigator.userAgent.indexOf("Mobile") >= 0,
							p = u ? "touchend" : "click",
							f = location.hostname.indexOf("www") >= 0 ? "www" : "test",
							h = location.protocol + "//" + f + ".sobot.com/chat/" + (u ? "h5" : "pc") + "/index.html?";
						h += o, p = "click";
						var x = g.template(j.btnTemplate)({
							anchor: t.anchor,
							height: t.manual ? "0" : a,
							tUrl: h,
							isMobile: u
						});
						e.innerHTML = x, i = e.getElementsByTagName("div")[0], c.setTheme(i), s = i.getElementsByTagName("i")[0], document.body.appendChild(i), P.length > 0 && (i.style.display = "none"), m(i, p, G)
					}
				},
				K = function() {
					if(r = document.getElementById("zhichiScript"), !r || "string" != typeof r.tagName || "script" !== r.tagName.toLowerCase()) throw new Error("could get element by #" + v);
					r.getAttribute("src");
					V()
				},
				X = function(e) {
					if("expand" != L) {
						for(var t = 0; t < e.length; t++) B.push(e[t]);
						z += e.length, z > 0 && s ? (s.innerHTML = z > 99 ? "99+" : z, s.style.display = "block") : s && (s.style.display = "none")
					}
				},
				Y = function(e) {
					L = "expand", U(L, function() {
						w = !1, z = 0, s.style.display = "none", e && e()
					})
				},
				Q = function() {
					return B
				},
				ee = function(e) {
					L = "collapse", U(L, function() {
						w = !1, e && e()
					})
				},
				te = function() {
					var e = navigator.userAgent,
						t = e.toLowerCase().indexOf("opera");
					t > -1 ? N.browser = "OP" : e.toLowerCase().indexOf("firefox") > -1 ? N.browser = "FF" : e.toLowerCase().indexOf("chrome") > -1 ? N.browser = "CH" : e.toLowerCase().indexOf("safari") > -1 ? N.browser = "SA" : e.toLowerCase().indexOf("compatible") > -1 && e.toLowerCase().indexOf("msie") > -1 && !t && (N.browser = "IE")
				},
				ne = function(e, n) {
					if("string" == typeof e) {
						if(n !== n || "" === n || void 0 === n) return;
						t[e] = n, "true" === n ? t[e] = !0 : "false" === n && (t[e] = !1)
					} else if("object" == typeof e)
						for(var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
					else "partnerId" == e && (n += "")
				},
				oe = function(e, t) {
					u.on(e, t)
				},
				re = function() {
					m(window, "message", function(e) {
						var t;
						if("string" == typeof e.data) try {
							t = JSON.parse(e.data)
						} catch(e) {} else "object" == typeof e.data && (t = e.data);
						if(t) switch(t.name) {
							case "chat_collapseWindow":
								G()
						}
					})
				},
				ie = function() {
					G()
				},
				ae = function() {
					G()
				},
				se = function() {
					if(d.on("core.message", Z), P.length > 0) {
						i && (i.style.display = "none");
						for(var e = 0, t = P.length; e < t; e++) {
							var n = P[e];
							m(n, "click", G)
						}
					}
					m(window, "message", R), u.on("inviteSession", ie), u.on("bubble.expandFrame", ae), m(window, "unload", function() {})
				},
				ce = function() {
					t.userinfo = t.userinfo || {};
					for(var e in t)
						if(t.hasOwnProperty(e)) {
							for(var n = !1, o = 0; o < F.length; o++)
								if(F[o] == e) {
									n = !0;
									break
								}
							n && (t.userinfo[e] = t.userinfo[e] || t[e] || "")
						}
				},
				le = function(e) {
					e = e || {}, _({
						url: W.ISaveUserData,
						dataType: "json",
						type: "POST",
						data: e
					}).success(function(e) {}).fail(function(e) {})
				},
				de = function() {
					te(), c = k(t, function(e) {
						try {
							u.trigger("load", e)
						} catch(r) {}
						ce();
						var a = "expand";
						window.localStorage && (a = localStorage.getItem("frameStatus"), 0 == t.ustatus, (0 == t.ustatus && t.autoExpand || t.autoExpand && "expand" == a) && (t.invite = !1, G())), 0 != t.ustatus && ("expand" != a || S ? o = new M(t, {
							onload: function() {
								setTimeout(function() {
									o.send({
										name: L
									})
								}, 100), "collapse" == L ? S || i.firstChild.childNodes[0].setAttribute("src", "//www.sobot.com/chat/pc/img/zhichichatBtnBg1.png") : S || i.firstChild.childNodes[0].setAttribute("src", "//sobot-test.oss-cn-beijing.aliyuncs.com/console/3542411be2184c8cb6b48d66ca1b2730/userandgroup/29dcc1573d524a16b5dfac756e04ba22.JPG"), t.autoManual && n && (n.close(), f.clear())
							}
						}, c.themeConf, "expand" == L) : G()), t.invite && (t.isMobile = S, A(t)), t.manTrace && (p(t, 0), I.sendLog(t, 3)), l = x(t), 0 == t.ustatus && (n = f.getInstance(t)), h(t), C(t), t.lazyFlag && setTimeout(function() {
							b.collapse()
						}, 300)
					}), window.console || (window.console = {
						log: function() {}
					}), re()
				},
				ue = function() {
					T || (T = !0, K(), de(), se())
				};
			return setTimeout(function() {
				ue()
			}, 10), b.expand = Y, b.on = oe, b.init = ue, b.setGroupId = q, b.collapse = ee, b.getStatus = D, b.getUnreadChatList = Q, b.set = ne, b.initBtnDOM = J, b.userInfoServ = le, b
		}
		t.exports = o
	}, {
		"../../../common/util/addEvent.js": 3,
		"../../../common/util/ajax.js": 4,
		"../../../common/util/cookie.js": 5,
		"../../../common/util/doT.min.js": 6,
		"../../../common/util/listener.js": 10,
		"../../../common/util/queryParam.js": 13,
		"../config/config.json": 14,
		"../fun/bubble.js": 21,
		"../fun/event.js": 22,
		"../fun/invite.js": 23,
		"../fun/logGif.js": 25,
		"../fun/theme.js": 27,
		"../fun/trace.js": 28,
		"../fun/unRead.js": 29,
		"../fun/utm.js": 30,
		"../logs/traceLog.js": 31,
		"../socket/socketFactory.js": 34,
		"../template/template.js": 35,
		"../util/move.js": 37,
		"./frame.js": 16,
		"./invite.js": 17
	}],
	16: [function(e, t, n) {
		function o(t, n, o, r) {
			var i, a, s, c = e("../template/template.js"),
				l = (e("../../../common/util/promise.js"), e("../fun/event.js")),
				d = (e("../../../common/util/ajax.js"), e("../util/tween.js"), navigator.userAgent.indexOf("Mobile") >= 0),
				u = navigator.userAgent.indexOf("iPhone") >= 0,
				m = (navigator.userAgent.indexOf("Safari") >= 0, navigator.userAgent.indexOf("Android") < 0, e("../config/config.json")),
				p = e("../util/move.js"),
				f = e("../../../common/util/doT.min.js"),
				g = e("../../../common/util/cookie.js"),
				h = e("../fun/trace.js"),
				x = e("../../../common/util/addEvent.js"),
				v = (e("../fun/adapterHandler.js"), e("../fun/iphoneAdapter.js")),
				b = e("../fun/andoridAdapter.js"),
				y = e("../../../common/util/msgReminder.js"),
				w = e("../fun/style.js"),
				T = e("../logs/traceLog.js"),
				S = !1,
				_ = {},
				j = 360,
				M = 640,
				k = 360,
				C = 430,
				A = 720,
				I = 540,
				O = 25,
				B = {},
				z = ["partnerId", "color", "sysNum", "from", "back", "lan", "telShowFlag", "emailShowFlag", "emailFlag", "telFlag", "satDegree", "invite", "artificial", "moduleType", "powered", "satDegree_A", "autoManual", "unreadcount", "aid", "tranFlag", "cid", "groupId", "source", "robotFlag", "isLeaveMsgFlag", "msgflag", "isMessageFlag", "isFeedBackFlag", "time", "titleFlag", "customTitle", "isReComment", "wurl", "isCustomSysFlag", "evaluateFlag", "title_info", "url_info", "abstract_info", "label_info", "thumbnail_info", "customerFields", "robotHelloWord", "adminHelloWord", "adminTipWord", "userTipWord", "adminNonelineTitle", "visitStartTime", "leaveMsgSendGroupIdFlag", "ticketTypeFlag", "ticketTypeId", "unit"],
				P = function(e) {
					t.groupId = e
				},
				N = {
					L001: "收起"
				},
				L = {
					L001: "collapse"
				},
				E = function() {
					a.contentWindow.location.reload()
				},
				F = function(e) {
					if(a.contentWindow) try {
						"string" == typeof e ? a.contentWindow.postMessage(e, "*") : a.contentWindow.postMessage(JSON.stringify(e), "*")
					} catch(t) {}
				},
				W = function() {
					document.body.removeChild(a)
				},
				Z = function(e) {
					d && (i.removeClass(document.body, "ZC-Module-BODY"), i.removeClass(document.documentElement, "ZC-Module-HTML"), s.style.zIndex = -1), d && !t.customBtn && t.dom && (t.dom.style.display = "block"), t.dom && (t.dom.style.backgroundPosition = d ? "13px -63px" : "18px -58px", t.dom.childNodes[0].firstChild.innerHTML = t.title);
					var e = e || function() {};
					d ? p.collapseForIframe(s, ["opacity"], function() {
						s.style.display = "none", u >= 0 ? v.hideZCBar() : b.hideZCBar(), e && e()
					}) : p.collapse(a, ["height"], [0], function() {
						a.style.display = "none", e && e()
					})
				},
				R = function(e) {
					if(d ? (i.addClass(document.body, "ZC-Module-BODY"), i.addClass(document.documentElement, "ZC-Module-HTML"), s.style.zIndex = +new Date, B.frameWidth = document.body.offsetWidth) : y.clear(), d && !t.customBtn && t.dom && (t.dom.style.display = "none"), t.dom) {
						t.dom.style.backgroundPosition = d ? "13px -63px" : "18px 28px";
						var n = "en" === t.lan ? L.L001 : N.L001;
						t.dom.childNodes[0].firstChild.innerHTML = n
					}
					document.getElementById("js-customer-invite") && document.body.removeChild(document.getElementById("js-customer-invite"));
					var e = e || function() {};
					a.style.display = "block";
					var o;
					o = d ? document.documentElement.clientHeight : t.dom.offsetTop < t.size.height && !t.customBtn ? t.dom.offsetTop : t.size.height, d ? p.expandForIframe(s, ["opacity"], ["height", {
						height: o + "px"
					}, "opacity", {
						opacity: 0
					}], function() {
						s.style.display = "block", u ? v.showZCBar() : b.showZCBar(), e && e()
					}) : p.expand(a, ["height"], [o], function() {
						e && e()
					});
					var r = g.getCookie("unReadMsg");
					r = JSON.parse(r) || {}, r[t.uid] = "", r = JSON.stringify(r), g.setCookie("unReadMsg", r), t.manTrace && !S && (t.searchSource = 1, h(t, 0), T.sendLog(t, 4), S = !0)
				},
				$ = function(e) {
					var n = e.width || t.width || k,
						o = e.height || t.height || I;
					if(n >= M ? n = M : n <= j && (n = j), o >= A ? o = A : o <= C && (o = C), e = {
							width: n,
							height: o
						}, !t.customBtn) {
						var r = t.dom.offsetTop - O;
						r <= I && r >= C ? e.height = r : r < C && (e.height = C)
					}
					return e
				},
				H = function(e) {
					e && ("focus-frame" == e.data ? u ? (v.adapter(s, B, t), document.getElementById("ZCChatFrame").style.height = "90%") : b.adapter(s, B, t) : "blur-frame" == e.data && (s.style.bottom = 0, s.style.top = 0, document.getElementById("ZCChatFrame").style.height = "100%"))
				},
				V = function() {
					for(var e = document.getElementsByTagName("iframe") || [], u = 0; u < e.length; u++)
						if("ZCChatFrame" === e[u].name) return;
					var p = document.createElement("div"),
						g = f.template(c.frameTemplate)({
							isMobile: d
						});
					p.innerHTML = g, a = p.getElementsByTagName("iframe")[0], s = p.children[0];
					var h = d ? m.wapDir : m.pcDir;
					d ? (a.style.zIndex = +new Date, a.style.cssText += ";right:0px;bottom:0px;") : (t.customBtn ? (T.sendLog(t, 5), 1 == (t.location || t.margin) ? (a.style.cssText += ";bottom:0px;right:100px;", t.customMargin && (a.style.cssText += ";right:" + t.customMargin + "px;")) : (a.style.cssText += ";bottom:0px;left:50px;", t.customMargin && (a.style.cssText += ";left:" + t.customMargin + "px;"))) : (T.sendLog(t, 6), a.style.cssText += ";bottom:" + (t.vertical + t.dom.offsetWidth + O) + "px;", 1 == t.margin || 4 == t.margin ? a.style.cssText += ";right:" + t.horizontal + "px;" : a.style.cssText += ";left:" + t.horizontal + "px;"), t.size = t.size || {}, t.size = $(t.size), a.style.cssText += ";width:" + t.size.width + "px;");
					var v = m.staticPath.replace(/{type}/, h) + "?",
						b = [];
					t.unit = "__", t.color = o.color, t.from = "iframe", d && (t.back = 1);
					for(var y in t)
						if(t.hasOwnProperty(y)) {
							if("userinfo" === y)
								for(var S in t.userinfo) t.userinfo[S] && b.push(S + "=" + encodeURIComponent(t.userinfo[S]));
							else if("object" == typeof t[y]) continue;
							z = z || [];
							for(var u = 0; u < z.length; u++) z[u] == y && b.push(y + "=" + encodeURIComponent(t[y]))
						}
					v += b.join("&"), a.src = v, document.body.appendChild(s), x(a, "load", function(e) {
						var o = e.target;
						l.trigger("frame.onload"), d || x(window, "resize", function() {
							var e = $(t.size);
							o.style.height = e.height + "px"
						}), r && R(function() {
							n.onexpaned && n.onexpaned()
						}), n && n.onload && n.onload()
					}), d && (i = w())
				},
				D = function() {
					x(window, "message", H)
				},
				U = function() {},
				G = function() {
					V(), D(), U()
				};
			return G(), _.expand = R, _.collapse = Z, _.reload = E, _.send = F, _.setGroupId = P, _.destroy = W, _
		}
		t.exports = o
	}, {
		"../../../common/util/addEvent.js": 3,
		"../../../common/util/ajax.js": 4,
		"../../../common/util/cookie.js": 5,
		"../../../common/util/doT.min.js": 6,
		"../../../common/util/msgReminder.js": 11,
		"../../../common/util/promise.js": 12,
		"../config/config.json": 14,
		"../fun/adapterHandler.js": 19,
		"../fun/andoridAdapter.js": 20,
		"../fun/event.js": 22,
		"../fun/iphoneAdapter.js": 24,
		"../fun/style.js": 26,
		"../fun/trace.js": 28,
		"../logs/traceLog.js": 31,
		"../template/template.js": 35,
		"../util/move.js": 37,
		"../util/tween.js": 38
	}],
	17: [function(e, t, n) {
		function o(e) {
			var t = window.navigator.userAgent.indexOf("Mobile") >= 0,
				n = {
					invite: "//" + i.domain + "/chat/user/visit.action"
				};
			0 == e.isInvite && r({
				url: n.invite,
				type: "get",
				data: {
					sysNum: e.sysNum,
					uid: e.userinfo.uid,
					source: t ? 4 : 0,
					title: document.title
				},
				dataType: "json"
			}).success(function(t) {
				e.visitId = t.visitId
			})
		}
		var r = e("../../../common/util/ajax.js"),
			i = e("../config/config.json");
		t.exports = o
	}, {
		"../../../common/util/ajax.js": 4,
		"../config/config.json": 14
	}],
	18: [function(e, t, n) {
		! function() {
			function t(e) {
				if(e != a) throw "zhiSDK can only create by getInstance";
				return l(o)
			}
			var n, o, r = e("../../common/util/queryParam.js"),
				i = e("./logs/traceLog.js"),
				a = {},
				s = "zhichiScript",
				c = e("./config/config.json"),
				l = e("./core/core.js");
			e("../../common/util/initJSON.js")();
			var d = function(e, t) {
					o = r(e);
					var n = r(t);
					for(var i in n) n.hasOwnProperty(i) && (o[i] = n[i])
				},
				u = function() {
					if(scriptNode = document.getElementById("zhichiScript"), !scriptNode || "string" != typeof scriptNode.tagName || "script" !== scriptNode.tagName.toLowerCase()) throw new Error("could get element by #" + s);
					var e = scriptNode.getAttribute("src"),
						t = scriptNode.getAttribute("data-args") || "";
					d(e, t);
					try {
						var n = e.split("?")[1],
							o = n.split("&"),
							r = {};
						o.forEach(function(e) {
							var t = e.split("=");
							r[t[0]] = t[1]
						}), "4c349791a07b46c1a70b8ac88aa23257" === r.sysNum
					} catch(i) {}
				},
				m = function() {
					if(!window.localStorage) throw setTimeout(function() {
						i.sendLog(o, 2.1)
					}, 500), "您的浏览器版本过低";
					return n || (setTimeout(function() {
						if(o.companyId && "89" === o.companyId) {
							var e = [];
							for(var t in o) "companyId" !== t && "uid" !== t && "cid" !== t || e.push(t + "=" + o[t]);
							var n = new Image(1, 1);
							n.src = "//" + c.logIp + "/2.gif?ts=" + +new Date + "&" + e.join("&")
						}
					}, 500), n = t(a)), n
				};
			u();
			o.manual || (n = m(), n.on("load", function(e) {
				n.initBtnDOM()
			})), window.getzhiSDKInstance = m
		}()
	}, {
		"../../common/util/initJSON.js": 9,
		"../../common/util/queryParam.js": 13,
		"./config/config.json": 14,
		"./core/core.js": 15,
		"./logs/traceLog.js": 31
	}],
	19: [function(e, t, n) {
		var o = e("../../../common/util/addEvent.js"),
			r = {},
			i = !0,
			a = location.hostname.indexOf("www") >= 0 ? "www" : "test",
			s = {
				iPhone5: {
					top: 285,
					"icon-top": 460
				},
				iPhone6: {
					top: 285,
					"icon-top": 559
				},
				iPhone6p: {
					top: 300,
					"icon-top": 629
				},
				iPhoneSE: {
					top: 285,
					"icon-top": 460
				},
				other: {
					top: 285,
					"icon-top": 560
				}
			},
			c = !0,
			l = function() {
				var e = (navigator.userAgent.toLowerCase(), $(window).width()),
					t = ($(window).height(), ""),
					n = 0;
				switch(e >= 310 && e <= 320 && (n = 1), e >= 365 && e <= 385 && (n = 2), e >= 404 && e <= 424 && (n = 3), n) {
					case 1:
						t = "iPhone5";
						break;
					case 2:
						t = "iPhone6";
						break;
					case 3:
						t = "iPhone6p";
						break;
					default:
						t = "other"
				}
				return t
			},
			d = function(e, t) {
				var n = /{\d+}/g,
					o = 0;
				return n.test(e) && "[object Array]" === Object.prototype.toString.call(t) ? e.replace(n, function(e) {
					var n = t[o++];
					return n
				}) : e
			},
			u = function(e) {
				i && (e.preventDefault(), e.stopPropagation())
			},
			m = function(e) {
				e && "chat_collapseWindow" == e.data.name && (i = !1, f())
			},
			p = function() {
				var e = document.getElementById("js-zc-icon");
				e && (e.style.display = "block")
			},
			f = function() {
				var e = document.getElementById("js-zc-icon");
				e && (e.style.display = "none")
			},
			g = function() {
				var e = document.createElement("div"),
					t = document.createElement("span"),
					n = document.createElement("img");
				e.id = "js-zc-icon";
				var o = (document.body.offsetWidth - 60) / 2;
				n.src = d("//{0}.sobot.com/chat/frame/imgs/logo.png", [a]), t.style.cssText += d(";display:block;background-color:#f5f9fa;width:100%;height:25px;position:absolute;top:{0}px;z-index:0;", [s[l()]["icon-top"]]), n.style.cssText += d(";height:20px;position:absolute;top:1px;left:{1}px;", [o]), t.appendChild(n), e.appendChild(t), e.style.cssText += ";position: fixed;bottom:0;top:0;left:0;width:100%;height:100%;z-index:100;background-color:#fff;", document.body.appendChild(e)
			},
			h = function() {
				o(document.body, "touchmove", u, !1), o(window, "message", m)
			},
			x = function() {
				c && (c = !1, g())
			},
			v = function(e, t, n) {
				i = !0, gloabl = n, e.style.width = t.frameWidth + "px", e.style.left = 0, e.style.right = 0, h(), x(), window.scrollTo(0, s[l()].top)
			};
		r.resizeFrame = v, r.showZCBar = p, r.hideZCBar = f, t.exports = r
	}, {
		"../../../common/util/addEvent.js": 3
	}],
	20: [function(e, t, n) {
		var o = (e("../../../common/util/addEvent.js"), {}),
			r = navigator.userAgent.toLowerCase(),
			i = (location.hostname.indexOf("www") >= 0 ? "www" : "test", function() {
				var e = document.getElementById("js-zc-icon");
				e && (e.style.display = "block")
			}),
			a = function() {
				var e = document.getElementById("js-zc-icon");
				e && (e.style.display = "none")
			},
			s = function(e, t, n) {
				e.style.top = "", r.indexOf("mz-mx5") >= 0 ? e.style.top = "0" : r.indexOf("mz-m2") >= 0 ? e.style.top = "-45px" : r.indexOf("redmi note 2") >= 0 ? e.style.bottom = "1px" : r.indexOf("redmi note 5") >= 0 && r.indexOf("mqqbrowser") < 0 ? e.style.top = "90px" : r.indexOf("redmi note 5") >= 0 && r.indexOf("mqqbrowser") >= 0 ? e.style.bottom = 0 : r.indexOf("huawei_h60") >= 0 ? e.style.bottom = "44px" : r.indexOf("htc_d820") >= 0 ? e.style.top = "-320px" : r.indexOf("mi note") >= 0 ? e.style.bottom = "44px" : r.indexOf("hdh60") >= 0 ? e.style.top = "-20px" : r.indexOf("vivo") >= 0 || r.indexOf("mqqbrowser") >= 0 && r.indexOf("sm-") >= 0 || r.indexOf("mi 6x") >= 0 && r.indexOf("mqqbrowser") < 0 && (e.style.bottom = "44px")
			};
		o.showZCBar = i, o.hideZCBar = a, o.adapter = s, t.exports = o
	}, {
		"../../../common/util/addEvent.js": 3
	}],
	21: [function(e, t, n) {
		var o = function(t) {
			var n, o, r = e("../../../common/util/doT.min.js"),
				i = e("../template/template.js"),
				a = (e("../fun/unRead.js"), e("../../../common/util/listener.js")),
				s = e("../../../common/util/addEvent.js"),
				c = e("../fun/event.js"),
				l = e("../config/config.json"),
				d = e("../../../common/util/msgReminder.js"),
				u = navigator.userAgent.indexOf("Mobile") > 0,
				m = 70,
				p = {},
				f = function() {
					var e = r.template(i.bubbleTemplate)({
							isMobile: u,
							vertical: u ? m : t.vertical + m
						}),
						n = document.createElement("div");
					n.innerHTML = e, o = n.getElementsByTagName("iframe")[0], l.funTemplateDir ? o.src = "//" + l.funTemplateDir + "/frame/bubble.html?lan=" + t.lan || "cn" : o.src = "//" + (l.funTemplateDir || l.domain) + "/chat/frame/bubble.html?lan=" + t.lan || "cn", u ? o.style.cssText += ";margin-left:5%;margin-right:5%;width:95%;max-width:95%;" : 1 == t.margin ? (o.style.left = "", o.style.right = t.horizontal - 20 + "px") : o.style.left = t.horizontal + "px", document.body.appendChild(o), o.onload = function() {
						o.contentWindow.postMessage(JSON.stringify({
							type: "bubble.onDefalutMsg",
							data: {
								uid: t.uid || ""
							}
						}), "*")
					}
				},
				g = function() {
					t.customBtn ? document.getElementById("bubbleMsg").style.display = "none" : n = document.getElementById("zhichiBtnBox")
				},
				h = function() {
					c.trigger("bubble.expandFrame")
				},
				x = function(e) {
					if(window.localStorage) {
						var t = window.localStorage.getItem("frameStatus");
						if("collapse" == t && e)
							for(var n = e.data || [], r = 0; r < n.length; r++) "202" == n[r].type && (p = {
								header: n[r].aface,
								content: n[r].content,
								name: n[r].aname,
								uid: n[r].uid,
								t: n[r].t || +new Date
							}, o.contentWindow.postMessage(JSON.stringify({
								type: "bubble.reviceMsg",
								data: p
							}), "*"))
					}
				},
				v = function(e) {
					c.trigger("ZC.receivemessage", e)
				},
				b = function(e) {
					var t;
					if("string" == typeof e.data) try {
						t = JSON.parse(e.data)
					} catch(n) {} else "object" == typeof e.data && (t = e.data);
					switch(t && t.type) {
						case "bubble.frameHeight":
							o.style.height = t.data, o.style.display = "block";
							break;
						case "bubble.removeAll":
							o.style.display = "none";
							break;
						case "bubble.clickMsg":
							h(), o.style.display = "none";
							break;
						case "bubble.customBtn":
							v(t);
							break;
						default:
							t && (x(t), window.localStorage && "collapse" === window.localStorage.getItem("frameStatus") && "zhichiReceive" === t.name && (u || d.flash()))
					}
				},
				y = function(e) {
					if(window.localStorage) {
						var t = window.localStorage.getItem("frameStatus");
						"collapse" == t && "202" == e.type && (p = {
							header: e.aface,
							content: e.content,
							name: e.aname,
							t: e.t || +new Date
						}, o.contentWindow.postMessage(JSON.stringify({
							type: "bubble.reviceMsg",
							data: p
						}), "*"))
					}
				},
				w = function(e) {
					"expand" == e && o.contentWindow && o.contentWindow.postMessage(JSON.stringify({
						type: "bubble.expand"
					}), "*")
				},
				T = function(e) {
					e && "bubble-status" == e.key && (document.getElementById("zhichiCount").style.display = "none", document.getElementById("bubbleMsg").style.display = "none")
				},
				S = function() {
					var e = !0;
					return navigator.userAgent.indexOf("MSIE 7.0") > 0 && (e = !1), e
				},
				_ = function() {
					g(), f()
				},
				j = function() {
					s(window, "message", b), s(window, "storage", T), a.on("core.message", y), c.on("bubble.expand", w)
				},
				M = function() {
					if(window.localStorage) try {
						window.localStorage.setItem("bubble-status", "new-page-open" + +new Date)
					} catch(e) {}
					S() || (o.style.display = "none")
				},
				k = function() {
					_(), j(), M()
				};
			k()
		};
		t.exports = o
	}, {
		"../../../common/util/addEvent.js": 3,
		"../../../common/util/doT.min.js": 6,
		"../../../common/util/listener.js": 10,
		"../../../common/util/msgReminder.js": 11,
		"../config/config.json": 14,
		"../fun/event.js": 22,
		"../fun/unRead.js": 29,
		"../template/template.js": 35
	}],
	22: [function(e, t, n) {
		var o = {},
			r = {},
			i = function(e, t) {
				r[e] || (r[e] = []), r[e].push(t)
			},
			a = function(e, t) {
				if(r[e])
					for(var n = r[e], o = n.length - 1; o >= 0; o--) {
						var i = n[o];
						if(i === t) {
							for(var a = o; a < n.length; a++) n[a + 1] && (n[a] = n[a + 1]);
							n.length = n.length - 1
						}
					}
			},
			s = function(e, t) {
				if(r[e])
					for(var n = r[e], o = 0, i = n.length; o < i; o++) n[o] && n[o](t)
			};
		o.on = i, o.trigger = s, o.off = a, t.exports = o
	}, {}],
	23: [function(e, t, n) {
		var o = e("../../../common/util/addEvent.js"),
			r = function(t) {
				var n, r, i, a, s = e("../../../common/util/cookie.js"),
					c = e("../fun/event.js"),
					l = e("../config/config.json"),
					d = document.documentElement ? document.documentElement : document.body,
					u = (window.location.protocol + "//" + window.location.host, {
						locCssText: "top:{0}px;left:{1}px;width:{2}px;height:{3}px;",
						defaultCssText: "position:fixed;border:none;background:transparent !important;border:1px solid #dbe4e4;box-shadow:0px 3px 6.5px #d9e2e7;display:none;transition: all 0.3s ease-in-out 0.1s;z-index:10000001;border-radius:3px;",
						showCssText: "display:{0}"
					}),
					m = {
						MOBILE: 240,
						PC: 340
					},
					p = {
						MOBILE: 150,
						PC: 200
					},
					f = {
						hide: "none",
						show: "block"
					},
					g = {
						tipTitle: t.tipTitle ? t.tipTitle : "欢迎咨询",
						cancleBtnTitle: t.cancleBtnTitle ? t.cancleBtnTitle : "再看看",
						submitBtnTitle: t.submitBtnTitle ? t.submitBtnTitle : "马上咨询",
						color: t.color ? t.color : "0aced1",
						isInviteFlag: t.isInviteFlag ? t.isInviteFlag : 1,
						firstTimeout: t.firstTimeout ? t.firstTimeout : 5,
						overTimeout: t.overTimeout ? t.overTimeout : 10,
						inviteCount: t.inviteCount ? t.inviteCount : 5,
						inviteImgSrc: t.inviteImgSrc ? t.inviteImgSrc : "https://img.sobot.com/default/autoImg.png"
					},
					h = function(e, t) {
						var n = /{\d+}/g,
							o = 0;
						return n.test(e) && "[object Array]" === Object.prototype.toString.call(t) ? e.replace(n, function(e) {
							var n = t[o++];
							return n
						}) : e
					},
					x = function() {
						r = d.clientWidth, i = d.clientHeight;
						var e, o, a, s;
						t.isMobile ? (e = (i - p.MOBILE) / 2, o = (r - m.MOBILE) / 2, a = m.MOBILE, s = p.MOBILE) : (e = (i - p.PC) / 2, o = (r - m.PC) / 2, a = m.PC, s = p.PC), n.style.cssText += h(u.locCssText, [e, o, a, s])
					},
					v = function(e, t) {
						setTimeout(function() {
							t() && t
						}, 1e3 * e)
					},
					b = function(e) {
						var t = [];
						for(var o in g) "tipTitle" !== o && "cancleBtnTitle" !== o && "submitBtnTitle" !== o && "color" !== o && "inviteImgSrc" !== o || t.push(o + "=" + encodeURIComponent(g[o]));
						var r = "//" + l.domain + "/chat/frame/invite.html?" + t.join("&");
						n = document.createElement("iframe"), n.setAttribute("id", "js-customer-invite"), n.style.cssText = h(u.defaultCssText, [g.color]), n.src = r, x(), document.body.appendChild(n), window.addEventListener ? window.addEventListener("resize", x) : window.attachEvent && window.attachEvent("onresize", x), n.onload = function() {}
					},
					y = function() {
						a = setInterval(function() {
							clearInterval(a), n.style.cssText += h(u.showCssText, [f.show])
						}, 1e3 * g.overTimeout)
					},
					w = function() {
						g.isInviteFlag && v(g.firstTimeout, function() {
							n.style.cssText += h(u.showCssText, [f.show])
						})
					},
					T = function() {
						b()
					},
					S = function() {
						o(window, "message", function(e) {
							if(e.origin && e.origin.indexOf(l.domain) >= 0)
								if(n.style.cssText += h(u.showCssText, [f.hide]), "1" === e.data) c.trigger("inviteSession");
								else {
									var t = s.getCookie("inviteCount") || 0;
									0 === t && s.setCookie("inviteCount", 0), Number(t) < g.inviteCount && (s.setCookie("inviteCount", ++t), y())
								}
						}, !1)
					},
					_ = function() {
						T(), S(), w()
					};
				Number(s.getCookie("inviteCount")) < g.inviteCount && _()
			};
		t.exports = r
	}, {
		"../../../common/util/addEvent.js": 3,
		"../../../common/util/cookie.js": 5,
		"../config/config.json": 14,
		"../fun/event.js": 22
	}],
	24: [function(e, t, n) {
		var o, r = e("../../../common/util/addEvent.js"),
			i = {},
			a = !0,
			s = (location.hostname.indexOf("www") >= 0 ? "www" : "test", {
				iPhone5: {
					top: 285,
					"icon-top": 460,
					"uc-top": 280,
					"wechat-top": 344
				},
				iPhone6: {
					top: 285,
					"icon-top": 559,
					"uc-top": 270,
					"wechat-top": 344
				},
				iPhone6p: {
					top: 300,
					"icon-top": 619,
					"uc-top": 270,
					"wechat-top": 344
				},
				iPhoneSE: {
					top: 285,
					"icon-top": 460,
					"uc-top": 250,
					"wechat-top": 344
				},
				other: {
					top: 285,
					"icon-top": 560,
					"uc-top": 250,
					"wechat-top": 344
				}
			}),
			c = !0,
			l = function() {
				var e = (navigator.userAgent.toLowerCase(), $(window).width()),
					t = ($(window).height(), ""),
					n = 0;
				switch(e >= 310 && e <= 320 && (n = 1), e >= 365 && e <= 385 && (n = 2), e >= 404 && e <= 424 && (n = 3), n) {
					case 1:
						t = "iPhone5";
						break;
					case 2:
						t = "iPhone6";
						break;
					case 3:
						t = "iPhone6p";
						break;
					default:
						t = "other"
				}
				return t
			},
			d = function(e) {},
			u = function(e) {
				e && "chat_collapseWindow" == e.data.name && (a = !1, p())
			},
			m = function() {
				var e = document.getElementById("js-zc-icon");
				e && (e.style.display = "block")
			},
			p = function() {
				var e = document.getElementById("js-zc-icon");
				e && (e.style.display = "none")
			},
			f = function() {
				r(document.body, "touchmove", d, !1), r(window, "message", u)
			},
			g = function() {
				c && (c = !1)
			},
			h = function(e, t, n) {
				o = e, x(e, t, n)
			},
			x = function(e, t, n) {
				a = !0, gloabl = n, e.style.width = t.frameWidth + "px", navigator.userAgent.indexOf("UCBrowser") >= 0 ? setTimeout(function() {
					e.style.top = "", window.scrollTo(0, s[l()]["uc-top"])
				}, 0) : navigator.userAgent.indexOf("Safari") && navigator.userAgent.indexOf("QQBrowser") < 0 && navigator.userAgent.indexOf("MicroMessenger") < 0 ? setTimeout(function() {}, 500) : setTimeout(function() {}, 500), f(), g()
			};
		i.resizeFrame = x, i.showZCBar = m, i.hideZCBar = p, i.adapter = h, t.exports = i
	}, {
		"../../../common/util/addEvent.js": 3
	}],
	25: [function(e, t, n) {
		function o(t) {
			var n = e("../config/config.json"),
				o = navigator.userAgent.indexOf("Mobile") >= 0,
				r = {},
				i = 1,
				a = function() {
					var e = [];
					for(var t in r) {
						var o = void 0 === r[t] ? "" : r[t];
						e.push(t + "=" + encodeURIComponent(o))
					}
					e = e.join("&");
					var i = new Image(1, 1);
					i.src = "//" + n.logIp + "/1.gif?" + e
				};
			document && (t.preVisitArgs = t.preVisitArgs || {}, t.curVisitArgs = t.curVisitArgs || {}, r.preVisitTitle = t.preVisitArgs.preVisitTitle || "", r.preVisitUrl = t.preVisitArgs.preVisitUrl || encodeURIComponent(document.referrer) || "", r.preAbstract = t.preVisitArgs.preAbstract, r.preThumbnail = t.preVisitArgs.preThumbnail, r.preTags = t.preVisitArgs.preTags, r.curVisitTitle = t.curVisitArgs.curVisitTitle || encodeURIComponent(document.title) || "", r.curVisitUrl = t.curVisitArgs.curVisitUrl || encodeURIComponent(document.URL) || "", r.curAbstract = t.curVisitArgs.curAbstract, r.curThumbnail = t.curVisitArgs.curThumbnail, r.curTags = t.curVisitArgs.curTags, t.searchSource ? r.searchSource = "1" : r.searchSource = "0"), navigator && (r.lang = navigator.language || ""), r.uid = t.uid, r.cid = t.cid, r.ustatus = t.ustatus, r.type = i, r.companyId = t.companyId, r.sendTime = +new Date, r.source = o ? "4" : "0", r.addr = "", window.location.href.indexOf("test") < 0 && a()
		}
		t.exports = o
	}, {
		"../config/config.json": 14
	}],
	26: [function(e, t, n) {
		var o = function() {
			var e = (navigator.userAgent.indexOf("Mobile") >= 0, {
					".ZC-Module-HTML": "{position: static !important;width:100% !important;height:100% !important;background-color:#fff !important;}",
					".ZC-Module-BODY": "{position: fixed !important;right: 0 !important;bottom: 0 !important;left: 0 !important;width: 100% !important;height: 100% !important;padding: 0 !important;margin: 0 !important;overflow: hidden !important;background-color:#fff !important;}"
				}),
				t = {},
				n = function(e, t) {
					return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
				},
				o = function(e, t) {
					this.hasClass(e, t) || (e.className += " " + t)
				},
				r = function(e, t) {
					if(n(e, t)) {
						var o = new RegExp("(\\s|^)" + t + "(\\s|$)");
						e.className = e.className.replace(o, " ")
					}
				},
				i = function(e, t) {
					n(e, t) ? r(e, t) : o(e, t)
				},
				a = function() {
					var t = !0,
						o = "";
					for(var r in e || {}) o += r + " " + e[r];
					for(var i = document.documentElement.getElementsByTagName("head")[0].getElementsByTagName("style"), a = (i || []).length, s = 0; s < a; s++)
						if(n(i[s], "ZC-STYLE")) return i[s].innerHTML = o, void(t = !1);
					if(t) {
						var c = document.createElement("style");
						c.className = "ZC-STYLE", c.innerHTML = o, document.documentElement.getElementsByTagName("head")[0].appendChild(c)
					}
				};
			return a(), t.hasClass = n, t.addClass = o, t.removeClass = r, t.toggleClass = i, t
		};
		t.exports = o
	}, {}],
	27: [function(e, t, n) {
		function o(t, n) {
			var o = e("../../../common/util/promise.js"),
				r = e("../../../common/util/ajax.js"),
				i = (e("../fun/event.js"), e("../../../common/util/addEvent.js")),
				a = (e("./trace.js"), e("../config/config.json")),
				s = e("../util/drag.js"),
				c = navigator.userAgent.indexOf("Mobile") >= 0,
				l = e("../../../common/util/cookie.js"),
				d = e("../logs/traceLog.js"),
				u = 40,
				m = 20,
				p = {
					ILoadConf: "//" + a.domain + "/chat/user/load.action",
					ISaveUserData: "//" + a.domain + "/chat/user/humanInfo.action"
				},
				f = {
					btnStyle: {
						pc: ";position:fixed;z-index:2147483583;box-shadow:rgba(15,66,76,.25) 0 0 14px 0;width:60px;height:60px;border-radius:50%;background-color:#{0};background-image:url(//www.sobot.com/chat/frame/imgs/icon.png);background-repeat:no-repeat;background-position:18px -58px;",
						mobile: ";position:fixed;z-index:2147483583;box-shadow:rgba(15,66,76,.25) 0 0 14px 0;width:50px;height:50px;border-radius:50%;background-color:#{0};background-image:url(//www.sobot.com/chat/frame/imgs/icon.png);background-repeat:no-repeat;background-position:13px -63px;"
					},
					btnLeftStyle: {
						pc: ";left:{0}px;bottom:{1}px;",
						mobile: ";left:{0}px;bottom:{1}px;"
					},
					btnRightStyle: {
						pc: ";right:{0}px;bottom:{1}px;",
						mobile: ";right:{0}px;bottom:{1}px;"
					},
					titleLeftStyle: {
						pc: ";box-shadow: rgba(107,113,114,.15)0 2px 4px 0;border:1px solid #ebeff0;font-family: Microsoft Yahei, Arial, Helvetica;color: #555556;font-size: 13px;margin: 0;padding: 0;text-align: right;display: block;background: #fff;position: absolute;top: 15px;left: 70px;text-overflow: ellipsis;white-space: nowrap;word-break: normal;display:none;border-radius:3px;padding:0 5px;height:30px;line-height:30px;",
						mobile: ";display:none;"
					},
					titleRightStyle: {
						pc: ";box-shadow: rgba(107,113,114,.15)0 2px 4px 0;border:1px solid #ebeff0; font-family: Microsoft Yahei, Arial, Helvetica;color: #555556;font-size: 13px;margin: 0;padding: 0;text-align: right;display: block;background: #fff;position: absolute;top: 15px;right: 70px;text-overflow: ellipsis;white-space: nowrap;word-break: normal;display:none;border-radius:3px;padding:0 5px;height:30px;line-height:30px;",
						mobile: ";display:none;"
					},
					titleFakeStyle: '.zc-advice-icon-btn-title::before {content:"";position:absolute;top:0;{0}:-9px;width:0;height:0;border-top:15px solid transparent;border-bottom:15px solid transparent;border-{1}:10px solid #{2};};'
				},
				g = {},
				h = function(e) {
					t.dom = e;
					var n = e.firstChild.childNodes[0],
						o = c ? "mobile" : "pc",
						r = document.createElement("style");
					e.style.cssText = v(f.btnStyle[o], [t.color]);
					try {
						switch(+t.margin) {
							case 2:
							case 3:
								e.style.right = "", e.style.cssText += v(f.btnLeftStyle[o], [t.horizontal, t.vertical]), n.style.cssText = v(f.titleLeftStyle[o], ["555556"]);
								break;
							case 1:
							case 4:
								e.style.left = "", e.style.cssText += v(f.btnRightStyle[o], [t.horizontal, t.vertical]), n.style.cssText = v(f.titleRightStyle[o], ["555556"])
						}
					} catch(i) {}
					if(document.getElementsByTagName("head")[0].appendChild(r), t.title = decodeURIComponent(t.title), n.innerText = t.title, x(e, n, c), window.localStorage) {
						var a = window.localStorage.getItem("frameStatus");
						if("collapse" === a) {
							var s = l.getCookie("unReadMsg");
							s = JSON.parse(s) || {};
							var d = s[t.uid];
							if(d && Number(d) > 0) {
								var u = e.lastChild;
								d > 9 ? u.style.cssText += "padding-left:5px;padding-right:5px;" : u.style.padding = "1px", u.innerHTML = d
							}
						}
					}
				},
				x = function(e, t, n) {
					n ? s(e) : (i(e, "mouseover", function(e) {
						t.style.cssText += ";display:block;";
						var n = e.target || e.srcElement;
						n && "a" == n.tagName.toLowerCase() && (n.parentNode.style.boxShadow = "rgba(15,66,76,.35) 0 0 24px 0")
					}), i(e, "mouseleave", function(e) {
						t.style.cssText += ";display:none;";
						var n = e.target || e.srcElement;
						n && "div" == n.tagName.toLowerCase() && (n.style.boxShadow = "rgba(15,66,76,.25) 0 0 14px 0")
					}))
				},
				v = function(e, t) {
					if("[object Array]" === Object.prototype.toString.call(t)) {
						var n = /\{[0-9]+\}/g;
						if(n.test(e) && t) {
							var o = -1;
							return e.replace(n, function(e) {
								return o++, t[o]
							})
						}
					}
					return e
				},
				b = function(e, n) {
					w().then(function(o) {
						try {
							t.wslink = o["wslink.default"], t.isInvite = e.isInvite || o.isInvite, t.uid = o.uid, t.cid = o.cid, e.manTrace === !0 || e.manTrace === !1 ? t.manTrace = e.manTrace : t.manTrace = o.isTraceFlag, t.companyId = o.pid, t.ustatus = 0 === o.ustatus ? "0" : o.ustatus, t.color = e.color || (o.color ? o.color.substr(1, o.length) : "0aced1"), t.margin = e.location || o.margin, t.title = e.title || o.title, t.inviteImgSrc = o.inviteImgSrc || "https://img.sobot.com/default/autoImg.png", e.horizontal && e.horizontal > u ? t.horizontal = e.horizontal : t.horizontal = o.horizontalMargin && o.horizontalMargin > u ? o.horizontalMargin : u, e.vertical && e.vertical > m ? t.vertical = e.vertical : t.vertical = o.verticalMargin && o.verticalMargin > m ? o.verticalMargin : m, t.size = {
								width: t.size ? t.size.width : t.width || o.frameWidth,
								height: t.size ? t.size.height : t.height || o.frameHeight
							}, t.lan = e.lan || (0 == o.lan ? "cn" : "en"), t.firstTimeout = e.firstTimeout || o.firstTimeOut, t.submitBtnTitle = e.submitBtnTitle || o.submitBtnTitle, t.tipTitle = e.tipTitle || o.tipTitle, t.overTimeout = e.overTimeout || o.overTimeOut, t.inviteCount = e.inviteCount || o.inviteCount, 0 == e.invite || 0 == e.invite ? t.invite = e.invite : t.invite = e.invite || o.isCustomInvite, t.visitStartTime = o.visitStartTime, t.whiteListFlag = o.whiteListFlag, t.domainWhiteList = o.domainWhiteList, g.themeConf = t, 0 != t.ustatus && (t.invite = !1), n && n()
						} catch(r) {}
					})
				},
				y = function(e) {
					if(!g.themeConf) throw "not initialed yet";
					return g.themeConf[e]
				},
				w = function() {
					var e = new o;
					if(!t.sysNum) return e;
					var n = {
						sysNum: t.sysNum,
						source: t.source || c ? 4 : 0
					};
					return t.partnerId && (n.partnerId = t.partnerId + ""), r({
						url: p.ILoadConf,
						dataType: "jsonp",
						type: "get",
						data: n
					}).success(function(t) {
						d.sendLog(t, 1), e.resolve(t)
					}).fail(function(t) {
						e.resolve(t)
					}), e
				},
				T = function() {
					b(t, function(e) {
						n && n(e)
					})
				},
				S = function() {
					T()
				};
			return S(), g.get = y, g.setTheme = h, g.initConf = w, g
		}
		t.exports = o
	}, {
		"../../../common/util/addEvent.js": 3,
		"../../../common/util/ajax.js": 4,
		"../../../common/util/cookie.js": 5,
		"../../../common/util/promise.js": 12,
		"../config/config.json": 14,
		"../fun/event.js": 22,
		"../logs/traceLog.js": 31,
		"../util/drag.js": 36,
		"./trace.js": 28
	}],
	28: [function(e, t, n) {
		(function(n) {
			function o(t, o) {
				var r = (e("../../../common/util/ajax.js"), navigator.userAgent.indexOf("Mobile") >= 0),
					i = e("../config/config.json"),
					a = e("../../../common/util/errorlog.js"),
					s = ({
						iVisitTrail: "//" + i.domain + "/chat-visit/user/gatherVisitData.action"
					}, ["preAbstract", "preVisitUrl", "preVisitTitle", "preThumbnail", "preTags"]),
					c = ["curAbstract", "curVisitUrl", "curVisitTitle", "curThumbnail", "curTags"],
					l = {},
					d = 0,
					u = function() {
						if(!o) {
							var e = [],
								t = [];
							for(var n in l) {
								var r = void 0 === l[n] ? "" : l[n];
								e.push(n + "=" + encodeURIComponent(r)), "uid" !== n && "cid" !== n && "companyId" !== n && "sendTime" !== n || t.push(n + "=" + r)
							}
							e = e.join("&"), t = t.join("&");
							var a = new Image(1, 1);
							a.src = "//" + i.logIp + "/1.gif?" + e
						}
					},
					m = function() {
						t.preVisitArgs = t.preVisitArgs || {}, t.curVisitArgs = t.curVisitArgs || {};
						for(var e in t) {
							for(var n = 0; n < s.length; n++) s[n] == e && (t.preVisitArgs[e] = t.preVisitArgs[e] || t[e] || "");
							for(var n = 0; n < c.length; n++) c[n] == e && (t.curVisitArgs[e] = t.curVisitArgs[e] || t[e] || "")
						}
						p()
					},
					p = function() {
						if(document) {
							var e = "";
							document.referrer.length > 0 && (e = document.referrer);
							try {
								0 == e.length && window.location.href.length > 0 && (e = window.location.href)
							} catch(o) {
								a.specialError("js组件浏览轨迹", "trace", {
									url: location.href,
									uid: n.apiInit.uid
								}, n)
							}
							l.preVisitTitle = t.preVisitArgs.preVisitTitle || "", l.preVisitUrl = t.preVisitArgs.preVisitUrl || encodeURIComponent(e) || "", l.preAbstract = t.preVisitArgs.preAbstract, l.preThumbnail = t.preVisitArgs.preThumbnail, l.preTags = t.preVisitArgs.preTags, l.curVisitTitle = t.curVisitArgs.curVisitTitle || encodeURIComponent(document.title) || "", l.curVisitUrl = t.curVisitArgs.curVisitUrl || encodeURIComponent(document.URL) || "", l.curAbstract = t.curVisitArgs.curAbstract, l.curThumbnail = t.curVisitArgs.curThumbnail, l.curTags = t.curVisitArgs.curTags, t.searchSource ? l.searchSource = "1" : l.searchSource = "0"
						}
						navigator && (l.lang = navigator.language || ""), l.uid = t.uid, l.cid = t.cid, l.ustatus = t.ustatus, l.companyId = t.companyId, l.type = d, l.sendTime = +new Date, l.source = r ? "4" : "0", l.addr = "", u()
					},
					f = function() {
						try {
							m()
						} catch(e) {
							var n = {};
							n.apiInit = {}, n.apiInit.pid = t.companyId || "", n.apiInit.uid = (t.userinfo ? t.userinfo.uid : "") || "", n.apiInit.cid = t.cid, a.specialError("js-assembly-trace", "trace", {
								url: location.href,
								uid: n.apiInit.uid
							}, n)
						}
					},
					g = function() {
						f()
					};
				g()
			}
			t.exports = o
		}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {
		"../../../common/util/ajax.js": 4,
		"../../../common/util/errorlog.js": 7,
		"../config/config.json": 14
	}],
	29: [function(e, t, n) {
		function o(e) {
			var t, n = {},
				o = getzhiSDKInstance(),
				l = 0,
				d = "collapse",
				u = document.getElementById("zhichiCount"),
				m = function() {
					i({
						url: "//" + a.domain + "/chat/msgOffline/queryOfflineMsg.action",
						type: "get",
						dataType: "json",
						data: {
							uid: e.uid
						}
					})
				},
				p = function(t) {
					if(d = t, "expand" === t && (l = 0, window.localStorage)) {
						try {
							var n = window.localStorage.getItem("unReadMsgCount") || "{}";
							n = JSON.parse(n), n[e.uid] = 0, n = JSON.stringify(n), window.localStorage.setItem("unReadMsgCount", n)
						} catch(o) {}
						delete e.unreadcount
					}
				},
				f = function(t) {
					try {
						var n = JSON.parse(t.data);
						if("zhichiReceive" == n.name)
							if(e.customBtn) {
								for(var r = [], i = 0, a = n.data; i < a.length; i++) {
									var l = {
										customName: a[i].aname,
										content: a[i].content,
										msgId: a[i].msgId
									};
									r.push(l)
								}
								"collapse" == d && c.trigger("receivemessage", {
									data: r
								})
							} else if(window.localStorage) {
							var m = o.getStatus();
							if("collapse" === m && u) {
								var p = s.getCookie("unReadMsg") || "{}";
								p = JSON.parse(p);
								var f = p[e.uid] ? +p[e.uid] : 0;
								if(f += n.data ? n.data.length : 0, f > 0) {
									p[e.uid] = f;
									var g = JSON.stringify(p);
									s.setCookie("unReadMsg", g), u.style.display = "block", f > 9 ? u.style.cssText += "padding-left:5px;padding-right:5px;" : u.style.padding = "1px", u.innerHTML = f > 99 ? "99+" : f
								}
							}
						}
					} catch(h) {}
				},
				g = function() {
					t = document.getElementById("")
				},
				h = function() {
					var t = s.getCookie("unReadMsg");
					t = JSON.parse(t) || {};
					var n = t[e.uid] ? +t[e.uid] : 0;
					if(u)
						if(l > 0 || n > 0) {
							u.style.display = "block";
							var o = l || n;
							o > 9 ? u.style.cssText += "padding-left:5px;padding-right:5px;" : u.style.padding = "1px", u.innerHTML = o > 99 ? "99+" : o
						} else u.style.display = "none"
				},
				x = function(e, t) {
					"expand" != d && (l += e, window.localStorage && t, h())
				},
				v = function() {
					r(window, "message", f), c.on("core.framestatuschange", p)
				},
				b = function() {
					if(window.localStorage) {
						var t = window.localStorage.getItem("unReadMsgCount");
						t = JSON.parse(t) || {}, t[e.uid] = t[e.uid] || "0";
						var n = t[e.uid] || "0";
						n && (l = +n);
						try {
							t = JSON.stringify(t), window.localStorage.setItem("unReadMsgCount", t)
						} catch(o) {}
					}
					i({
						url: "//" + a.domain + "/chat/msgOffline/offlineMsgSize.action",
						dataType: "json",
						data: {
							uid: e.uid
						}
					}).success(function(t) {
						l += t.size, h(), e.unreadcount = l, c.trigger("unread.count", l)
					}).fail(function(e) {})
				},
				y = function() {
					g(), v(), b()
				};
			return y(), n.clearRead = m, n.receiveUnReadCountFromSocket = x, n
		}
		var r = e("../../../common/util/addEvent.js"),
			i = e("../../../common/util/ajax.js"),
			a = e("../config/config.json"),
			s = e("../../../common/util/cookie.js"),
			c = e("../fun/event.js");
		t.exports = o
	}, {
		"../../../common/util/addEvent.js": 3,
		"../../../common/util/ajax.js": 4,
		"../../../common/util/cookie.js": 5,
		"../config/config.json": 14,
		"../fun/event.js": 22
	}],
	30: [function(e, t, n) {
		var o = function(t, n) {
			var o, r = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"],
				i = e("../config/config.json"),
				a = {},
				s = {},
				c = e("../../../common/util/queryParam.js"),
				l = e("../../../common/util/ajax.js"),
				d = {
					utm: "/chat/utm.action"
				},
				u = function() {
					try {
						s.parentUrl = window.parent.location.href
					} catch(e) {
						s.parentUrl = ""
					}
					m()
				},
				m = function() {
					o = c(s.parentUrl) || {};
					for(var e in o)
						if(o.hasOwnProperty(e))
							for(var i = 0; i < r.length; i++)
								if(e === r[i]) try {
									a[e] = decodeURIComponent(o[e])
								} catch(u) {
									a[e] = ""
								}
					s && (s.uid = n.uid, s.sysNum = t.sysNum, l({
						url: d.utm,
						data: s,
						dataType: "json",
						type: "POST"
					}).success(function(e) {}).fail(function(e) {}))
				},
				p = function() {
					for(var e in d) d.hasOwnProperty(e) && (d[e] = "//" + i.domain + d[e]);
					u()
				};
			p()
		};
		t.exports = o
	}, {
		"../../../common/util/ajax.js": 4,
		"../../../common/util/queryParam.js": 13,
		"../config/config.json": 14
	}],
	31: [function(e, t, n) {
		var o = e("../../../common/util/ajax.js"),
			r = e("../config/config.json"),
			i = navigator.userAgent.indexOf("Mobile") >= 0,
			a = {
				iVisitTrail: "//" + r.domain + "/chat-visit/user/gatherVisitData.action"
			},
			s = {},
			c = function(e, t) {
				e = e || {};
				var n = {
					status: t || -1,
					curVisitTitle: document.title || "",
					curVisitUrl: window.location.href || "",
					preVisitUrl: document.referrer || "",
					sendTime: +new Date,
					uid: e.uid || "",
					cid: e.cid || "",
					companyId: e.companyId || e.pid || "",
					sourceType: i ? "mobile" : "pc"
				};
				return n
			};
		s.sendLog = function(e, t) {
			var n = e.companyId || e.pid;
			if("89" === n) {
				var r = c(e, t);
				o({
					url: a.iVisitTrail,
					dataType: "json",
					type: "POST",
					data: r
				}).success(function(e) {}).fail(function(e) {})
			}
		}, t.exports = s
	}, {
		"../../../common/util/ajax.js": 4,
		"../config/config.json": 14
	}],
	32: [function(e, t, n) {
		function o(e) {
			var t, n, o = 0,
				i = 1e4,
				a = "connecting",
				s = function() {
					clearTimeout(n)
				},
				c = function() {
					t.close()
				},
				l = function() {
					return a
				},
				d = function() {
					t.send("ping"), n = setTimeout(d, i)
				},
				u = function() {
					t.onmessage = function(e) {
						if("pong" !== e.data) {
							var t = JSON.parse(e.data);
							r.trigger("core.message", t)
						}
					}, t.onclose = s, t.onerror = function() {}, t.onopen = function() {
						var n = {
							t: o,
							u: e.userinfo.uid,
							s: e.sysNum,
							ts: +new Date
						};
						t.send(JSON.stringify(n)), d()
					}
				},
				m = function() {
					t = new WebSocket(e.wslink), u()
				};
			m(), this.getStatus = l, this.close = c
		}
		var r = e("../../../common/util/listener.js");
		t.exports = o
	}, {
		"../../../common/util/listener.js": 10
	}],
	33: [function(e, t, n) {
		function o(e) {
			var t, n = "connecting",
				o = function() {
					e.visitId && i({
						url: "//" + a.domain + "/chat/user/queryVisit.action",
						type: "get",
						dataType: "jsonp",
						data: {
							visitId: e.visitId
						}
					}).success(function(e) {
						e && 207 == e.type && r.trigger("core.message", e)
					})
				},
				s = function() {
					return n
				},
				c = function() {
					n = "closed", clearInterval(t)
				},
				l = function() {
					o(), t = setInterval(o, 5e3)
				};
			l(), this.getStatus = s, this.close = c, this.tnk = +new Date
		}
		var r = e("../../../common/util/listener.js"),
			i = e("../../../common/util/ajax.js"),
			a = e("../config/config");
		t.exports = o
	}, {
		"../../../common/util/ajax.js": 4,
		"../../../common/util/listener.js": 10,
		"../config/config": 14
	}],
	34: [function(e, t, n) {
		var o, r = e("./ZcWebsocket.js"),
			i = e("./rolling.js"),
			a = function(e) {
				return o = window.WebSocket && /^wss?/.test(e.wslink) ? new r(e) : new i(e)
			};
		t.exports = {
			getInstance: function(e) {
				return o || (o = a(e)), o
			},
			clear: function() {
				o = null
			}
		}
	}, {
		"./ZcWebsocket.js": 32,
		"./rolling.js": 33
	}],
	35: [function(e, t, n) {
		var o = {};
		o.btnTemplate = '{{=it.isMobile}}{{ if(!it.isMobile){ }}<div id="zhichiBtnBox" style="display:none;">{{  if(it.anchor){ }}<a hidefocus="" target="_blank"  href="{{=it.tUrl}}" style="position:relative;text-decoration: none; outline: none; font-family: Microsoft Yahei, Arial, Helvetica; color: #fff; font-size: 16px; display: inline-block; margin: 0; padding: 0; border: none; line-height:43px; float:none;width:100%;height:100%;border-radius:50%;"><span class="zc-advice-icon-btn-title" style="font-family: Microsoft Yahei, Arial, Helvetica; color: #555556; font-size:16px;background-color:#fff; margin: 0; padding: 0; ">咨询在线客服</span></a><i style="position:absolute;top:0px;right:0px;padding:1px;line-height:20px;text-align:center;color:#fff;font-weight:bold;height:18px;min-width:18px;background-color:#3d5c5c;border-radius:18px;font-size:12px;display:none;font-style:normal;" id="zhichiCount"></i>{{  }else{  }}<a hidefocus="" id="zhichiBtn" style="position:relative;text-decoration: none; outline: none; font-family: Microsoft Yahei, Arial, Helvetica; color: #fff; font-size: 16px; display: inline-block; margin: 0; padding: 0; border: none; line-height:43px; float:none;width:100%;height:100%;border-radius:50%;"><span class="zc-advice-icon-btn-title" style="font-family: Microsoft Yahei, Arial, Helvetica; color: #555556;background-color:#fff; font-size:16px; margin: 0; padding: 0; ">咨询在线客服</span></a><i style="position:absolute;top:0px;right:0px;padding:1px;line-height:20px;text-align:center;color:#fff;font-weight:bold;height:18px;min-width:18px;background-color:#ed5c5c;border-radius:18px;font-size:12px;display:none;font-style:normal;" id="zhichiCount"></i>{{ } }}</div>{{  }else{ }}<div id="zhichiBtnBox" style="display:none;width:100%; transition:all 0.3s ease-in-out 0.1s;"><a href="javascript:;" style="text-decoration:none;"><span></span></a><i style="position:absolute;top:0px;right:0px;padding:1px;line-height:20px;text-align:center;color:#fff;height:18px;min-width:18px;background-color:#ed5c5c;border-radius:18px;font-size:12px;display:none;font-style:normal;" id="zhichiCount"></i></div>{{   } }}', o.frameTemplate = '{{ if(!it.isMobile){ }}<iframe name="ZCChatFrame" id="ZCChatFrame" frameborder="0" class="ZCChatFrame" style="box-shadow:rgba(15,66,76,.25) 0 0 24px 0;border:none;border-left:1px solid #d9d9d9;;border-radius:5px 5px 0px 0px;position:fixed;bottom:0px;height:0px;width:360px;overflow:hidden;z-index:10000000000;border:none;">{{ }else{  }} <div id="ZCPanel" style="z-index:-1;visibility:visible; display:block;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;padding:0;margin:0;border:0;overflow:hidden;opacity:0;background-color:#fff !important;"><iframe name="ZCChatFrame"  frameborder="0"  scrolling="no" id="ZCChatFrame" class="ZCChatFrame" allowtransparency="true" style="position:relative;float:none;width:100% !important;height:100% !important;padding:0;margin:0;border:0;background:none;"></div>{{  } }}</iframe>', o.bubbleTemplate = '{{if(!it.isMobile){ }}<iframe name="bubbleMsg" id="bubbleMsg" style=";max-height:500px;border:none;background:transition; margin:0;padding:0; position:fixed;bottom:{{=it.vertical}}px;z-index:10000000000;left:0;" id="bubbleMsg"></iframe>{{ } else{ }}<iframe name="bubbleMsg" id="bubbleMsg" style=";max-height:500px;border:none;background:transition; margin:0;padding:0; position:fixed;bottom:{{=it.vertical}}px;z-index:10000000;left:0;" id="bubbleMsg"></iframe>{{ } }}', t.exports = o
	}, {}],
	36: [function(e, t, n) {
		var o = function(e) {
			var t, n, o, r, i, a = ("ontouchend" in window ? "touchend" : "click", e),
				s = document.body.clientWidth,
				c = document.documentElement.clientHeight,
				l = !1,
				d = function(e) {
					return a.style.cssText += "transition:none;", l = !0, n = +a.offsetLeft, r = +e.touches[0].pageX, o = +a.offsetTop, i = +e.touches[0].clientY, t = a.offsetLeft, !1
				},
				u = function(e) {
					if(e.preventDefault(), e.stopPropagation(), l) {
						var t = r + e.touches[0].pageX - n - a.clientWidth,
							d = s - a.clientWidth;
						t > d ? t = d : t <= 0 && (t = 0);
						var u = i + e.touches[0].clientY - o - a.clientHeight,
							m = c - a.clientHeight;
						return u > m ? u = m : u <= 0 && (u = 0), a.style.cssText += "left:" + t + "px;top:" + u + "px;", !1
					}
				},
				m = function(e) {
					a.style.cssText += "transition:all 0.3s ease-in-out 0.1s", a.offsetLeft !== t && (a.offsetTop <= 50 ? (a.style.top = "20px", a.offsetLeft <= 50 ? a.style.left = "20px" : s - a.offsetLeft <= 50 && (a.style.left = s - a.clientWidth - 20 + "px")) : c - a.offsetTop - a.clientWidth <= 50 ? (a.style.top = c - a.clientWidth - 20 + "px", a.offsetLeft <= 50 ? a.style.left = "20px" : s - a.offsetLeft <= 50 && (a.style.left = s - a.clientWidth - 20 + "px")) : s / 2 > a.offsetLeft + a.clientWidth / 2 ? a.style.left = "20px" : a.style.left = s - a.clientWidth - 20 + "px")
				},
				p = function() {},
				f = function() {
					a.addEventListener("touchstart", d, !1), a.addEventListener("touchmove", u, !1), a.addEventListener("touchend", m, !1)
				},
				g = function() {
					p(), f()
				};
			g()
		};
		t.exports = o
	}, {}],
	37: [function(e, t, n) {
		var o = {},
			r = e("./tween.js"),
			i = function(e, t) {
				return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e)[t]
			},
			a = function(e, t, n, o) {
				for(var a = [], s = 0; s < t.length; s++) {
					var c = i(e, t[s]),
						l = n[s];
					c = +c.replace(/px/, "");
					var d = l - c,
						u = d > 0;
					a.push({
						org: c,
						tar: n[s],
						dis: d,
						dir: u
					})
				}
				var m = 1,
					p = 10,
					f = function() {
						if(m < p) {
							m++;
							for(var n = 0; n < a.length; n++) {
								var i = a[n],
									s = i.dir,
									c = i.tar,
									l = i.dis,
									d = i.org,
									u = t[n],
									g = r.Cubic.easeIn(m, 0, Math.abs(l), p),
									h = d + (s ? 1 : -1) * g;
								e.style[u] = h + ("opacity" !== u ? "px" : "")
							}
							setTimeout(f, 0)
						} else {
							for(var n = 0; n < a.length; n++) {
								var c = a[n].tar,
									u = t[n];
								e.style[u] = c + "px"
							}
							o && o()
						}
					};
				f()
			},
			s = function(e, t, n, o) {
				for(var a = [], s = 0; s < t.length; s++) {
					var c = t[s],
						l = i(e, c);
					l = +l.replace(/px/, "");
					var d = n[s],
						u = d - l,
						m = u > 0;
					a.push({
						tar: d,
						dis: u,
						dir: m,
						org: l
					})
				}
				var p = 0,
					f = 10,
					g = function() {
						if(p < f) {
							p++;
							for(var n = 0; n < a.length; n++) {
								var i = a[n],
									s = i.tar,
									l = Math.abs(i.dis),
									d = i.dir,
									u = i.org,
									m = r.Cubic.easeIn(p, 0, l, f),
									h = u + (d ? 1 : -1) * m;
								"opacity" !== t[n] && (h = Math.ceil(h)), e.style[t[n]] = h + ("opacity" !== c ? "px" : "")
							}
							setTimeout(g, 0)
						} else {
							for(var n = 0; n < a.length; n++) {
								var i = a[n],
									s = i.tar,
									l = Math.abs(i.dis),
									d = i.dir,
									u = i.org;
								e.style[t[n]] = s + "px"
							}
							o && o()
						}
					};
				g()
			},
			c = function(e, t, n) {
				var o = org = +i(e, t) || 1;
				org = o >= 1 ? 0 : 1, e.style[t] = org, n && n()
			},
			l = function(e, t, n, o) {
				e.style[n[0]] = n[1][n[0]], e.style[n[2]] = n[3][n[2]];
				var r = org = +i(e, t) || 0;
				org = r >= 1 ? 0 : 1, e.style[t] = org, o && o()
			};
		o.collapse = a, o.expand = s, o.expandForIframe = l, o.collapseForIframe = c, t.exports = o
	}, {
		"./tween.js": 38
	}],
	38: [function(e, t, n) {
		var o = {
			Linear: function(e, t, n, o) {
				return n * e / o + t
			},
			Quad: {
				easeIn: function(e, t, n, o) {
					return n * (e /= o) * e + t
				},
				easeOut: function(e, t, n, o) {
					return -n * (e /= o) * (e - 2) + t
				},
				easeInOut: function(e, t, n, o) {
					return(e /= o / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
				}
			},
			Cubic: {
				easeIn: function(e, t, n, o) {
					return n * (e /= o) * e * e + t
				},
				easeOut: function(e, t, n, o) {
					return n * ((e = e / o - 1) * e * e + 1) + t
				},
				easeInOut: function(e, t, n, o) {
					return(e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
				}
			},
			Quart: {
				easeIn: function(e, t, n, o) {
					return n * (e /= o) * e * e * e + t
				},
				easeOut: function(e, t, n, o) {
					return -n * ((e = e / o - 1) * e * e * e - 1) + t
				},
				easeInOut: function(e, t, n, o) {
					return(e /= o / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
				}
			},
			Quint: {
				easeIn: function(e, t, n, o) {
					return n * (e /= o) * e * e * e * e + t
				},
				easeOut: function(e, t, n, o) {
					return n * ((e = e / o - 1) * e * e * e * e + 1) + t
				},
				easeInOut: function(e, t, n, o) {
					return(e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
				}
			},
			Sine: {
				easeIn: function(e, t, n, o) {
					return -n * Math.cos(e / o * (Math.PI / 2)) + n + t
				},
				easeOut: function(e, t, n, o) {
					return n * Math.sin(e / o * (Math.PI / 2)) + t
				},
				easeInOut: function(e, t, n, o) {
					return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + t
				}
			},
			Expo: {
				easeIn: function(e, t, n, o) {
					return 0 == e ? t : n * Math.pow(2, 10 * (e / o - 1)) + t
				},
				easeOut: function(e, t, n, o) {
					return e == o ? t + n : n * (-Math.pow(2, -10 * e / o) + 1) + t
				},
				easeInOut: function(e, t, n, o) {
					return 0 == e ? t : e == o ? t + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
				}
			},
			Circ: {
				easeIn: function(e, t, n, o) {
					return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + t
				},
				easeOut: function(e, t, n, o) {
					return n * Math.sqrt(1 - (e = e / o - 1) * e) + t
				},
				easeInOut: function(e, t, n, o) {
					return(e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
				}
			},
			Elastic: {
				easeIn: function(e, t, n, o, r, i) {
					if(0 == e) return t;
					if(1 == (e /= o)) return t + n;
					if(i || (i = .3 * o), !r || r < Math.abs(n)) {
						r = n;
						var a = i / 4
					} else var a = i / (2 * Math.PI) * Math.asin(n / r);
					return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / i)) + t
				},
				easeOut: function(e, t, n, o, r, i) {
					if(0 == e) return t;
					if(1 == (e /= o)) return t + n;
					if(i || (i = .3 * o), !r || r < Math.abs(n)) {
						r = n;
						var a = i / 4
					} else var a = i / (2 * Math.PI) * Math.asin(n / r);
					return r * Math.pow(2, -10 * e) * Math.sin((e * o - a) * (2 * Math.PI) / i) + n + t
				},
				easeInOut: function(e, t, n, o, r, i) {
					if(0 == e) return t;
					if(2 == (e /= o / 2)) return t + n;
					if(i || (i = o * (.3 * 1.5)), !r || r < Math.abs(n)) {
						r = n;
						var a = i / 4
					} else var a = i / (2 * Math.PI) * Math.asin(n / r);
					return e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / i)) + t : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / i) * .5 + n + t
				}
			},
			Back: {
				easeIn: function(e, t, n, o, r) {
					return void 0 == r && (r = 1.70158), n * (e /= o) * e * ((r + 1) * e - r) + t
				},
				easeOut: function(e, t, n, o, r) {
					return void 0 == r && (r = 1.70158), n * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + t
				},
				easeInOut: function(e, t, n, o, r) {
					return void 0 == r && (r = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : n / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
				}
			},
			Bounce: {
				easeIn: function(e, t, n, r) {
					return n - o.Bounce.easeOut(r - e, 0, n, r) + t
				},
				easeOut: function(e, t, n, o) {
					return(e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + t : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
				},
				easeInOut: function(e, t, n, r) {
					return e < r / 2 ? .5 * o.Bounce.easeIn(2 * e, 0, n, r) + t : .5 * o.Bounce.easeOut(2 * e - r, 0, n, r) + .5 * n + t
				}
			}
		};
		t.exports = o
	}, {}]
}, {}, [18]);