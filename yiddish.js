// Yiddish dictionary bookmarklet
// V 1.0   - 2017-01-02
// V 1.1   - 2017-01-07: new transliteration function, minimize function, enlarge input field option
// V 1.2   - 2017-01-10: embedded transliteration script, added transliteration function for input field, minor adjustments for highlighted text, prevent multiple load of script
// V 1.3   - 2017-07-04: transliteration map adjustments
// V 1.4   - 2017-07-23: Transliteration function applies now automatically - latinization immediately shown upon all requests
// V 1.5   - 2018-05-18: Added "Der Groyser Verterbukh", Yiddish-English glosser, spellcheck (all by Refoyl http://www.cs.uky.edu/~raphael/); Yiddish-Russian dictionary (academic.ru 25,000 headwords); JNW Yiddish-Dutch dictionary (jiddisjwoordenboek.nl 190,000 headwords)
// V 1.5.1 - 2018-06-07: LTR adjustments in website conversion; bugfixes
// V 1.6   - 2018-12-29: Added Yiddish-English dictionary (academic.ru 6,500 headwords)
// V 1.7   - 2021-10-14: Moved bigger.css into yiddish.js
// V 1.8   - 2022-01-01: Stylesheet improvements; version indicator added
// Read more: https://pod-o-mart.github.io/yiddishBookmarklets
// Author: Martin Podolak
// Yiddish charmap partly adopted from http://www.lexilogos.com/clavier/conyi.js
// This work is licensed under the GNU General Public License v3.0

var version = "1.8.2 - 2022-01-27";

if(!document.getElementById("ordbogform"))
{

sc = document.getElementsByTagName("script");
for(idx = 0; idx < sc.length; idx++)
{
	s = sc.item(idx);
	if(s.src && s.src.match(/yiddish\.js$/))
	{
		var ordbogurl =s.src;
		ordbogurl = ordbogurl.replace("yiddish.js", "");
	}
}

function loadjscssfile(filename, filetype){
	if (filetype=="js"){
		var fileref=document.createElement('script')
	fileref.setAttribute("type","text/javascript")
	fileref.setAttribute("src", filename)
	}
	else if (filetype=="css"){
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if (typeof fileref!="undefined"){
		document.getElementsByTagName("head")[0].appendChild(fileref)
	}
}

loadjscssfile(ordbogurl+"style.css", "css")

// function for pages with charset UTF-8
function suche (id){
	var konvertiert = document.ordbogform.texto3.value;
	konvertiert = konvertiert.replace("/", "-");
	konvertiert = konvertiert.replace(/^\s+|\s+$/g, '');
	konvertiert = encodeURI(konvertiert);
	window.open(id+ konvertiert,'_blank');}

// function for pages with charset windows-1252 or ISO-8859-1
function suche4 (id){
	var konvertiert4 = document.ordbogform.texto3.value;
	konvertiert4 = konvertiert.replace("/", "-");
	konvertiert4 = konvertiert4.replace(/^\s+|\s+$/g, '');
	konvertiert4 = escape(konvertiert4);
	window.open(id+ konvertiert4,'_blank');
}

var ordbogform = document.createElement('form');
ordbogform.id ="ordbogform";
ordbogform.name="ordbogform";
ordbogform.method="post";
ordbogform.setAttribute("onsubmit", "return false");
ordbogform.onsubmit="return false";
var inddata = document.createElement('textarea');
inddata.setAttribute("class", "keyboardInput");
inddata.value =t;
inddata.setAttribute("onclick", "this.parentNode.submit();");
inddata.setAttribute("onkeypress", "inputenter(event)");
inddata.setAttribute("oninput", "inputwrap()");
inddata.setAttribute("onmousedown", "inputwrap()");

var f = t.toString();
if (f.indexOf('\n') >= 0) {
	inddata.setAttribute("style", "height:140px !important;width:30% !important;");
	texto2.setAttribute("style", "height:140px !important;width:80% !important;");
	texto3.setAttribute("style", "height:140px !important;width:80% !important;");
	button1.setAttribute("style", "display:none !important;");
}

inddata.id="texto3";
s=document.createElement('script');s.id='r6109_vkbsgp';s.type='text/javascript';s.src=ordbogurl+'keyboard-yi.js?,true,false';document.body.appendChild(s);void(null);
inddata.setAttribute("class", "keyboardInput");
inddata.value =t;
inddata.id="texto3";
inddata.setAttribute("dir", "rtl");

var uddata = document.createElement('textarea');
uddata.setAttribute("class", "none");
uddata.id="texto2";
//s=document.createElement('script');s.id='r6109_vkbsgp';s.type='text/javascript';s.src=ordbogurl+'keyboard-yi.js?,true,false';document.body.appendChild(s);void(null);
uddata.setAttribute("dir", "ltr")
uddata.disabled = true;

function inputenter(event) {
if (event.keyCode == 13) {
	inddata.setAttribute("style", "height:140px !important;width:30% !important;min-height:140px!important;max-height:140px!important;");
	texto2.setAttribute("style", "height:140px !important;width:80% !important;min-height:140px!important;max-height:140px!important;");
	texto3.setAttribute("style", "height:140px !important;width:80% !important;min-height:140px!important;max-height:140px!important;");
	button1.setAttribute("style", "display:none !important;");
	var element = document.getElementById('texto3'),
	style = window.getComputedStyle(element),
	height = style.getPropertyValue('height');
	if (height == "26px") {
		self.VKI_close();
		}
	}
}
	
function inputwrap() {
	var searchText = document.getElementById("texto3").value;
	var inputLength = searchText.length;
	 if (inputLength > 20) {
		inddata.setAttribute("style", "height:140px !important;width:30% !important;min-height:140px!important;max-height:140px!important;");
		texto2.setAttribute("style", "height:140px !important;width:80% !important;min-height:140px!important;max-height:140px!important;");
		texto3.setAttribute("style", "height:140px !important;width:80% !important;min-height:140px!important;max-height:140px!important;");
		button1.setAttribute("style", "display:none !important;");
		var element = document.getElementById('texto3'),
		style = window.getComputedStyle(element),
		height = style.getPropertyValue('height');
		if (height == "26px") {
			self.VKI_close();
		}
	} 
}

//	#1: The URLs. Be aware of the ascending numbering and do not forget to call them below at #2
var input1 = document.createElement("input");
input1.setAttribute("dir", "ltr");
input1.type = "button";
input1.value = "??????????????? ??? English";
input1.id = "inputordbog";
input1.title = "Yiddish Dictionary Online - ???????????? ???????????????????? ???????????? ????????";
input1.onclick = function(){suche('http://www.yiddishdictionaryonline.com/display.php?action=search&type=yid&action=search&word=');return false;};

var input2 = document.createElement("input");
input2.setAttribute("dir", "ltr");
input2.type = "button";
input2.value = "??????????????? ??? English";
input2.id = "inputordbog";
input2.title = "Yiddish Dictionary Online - English input - ???????????? ???????????????????? ???????????? ????????";
input2.onclick = function(){suche('http://www.yiddishdictionaryonline.com/display.php?action=search&type=eng&action=search&word=');return false;};

var input3 = document.createElement("input");
input3.setAttribute("dir", "ltr");
input3.type = "button";
input3.value = "Yiddish ??? English";
input3.id = "inputordbog";
input3.title = "Yiddish Dictionary Online - Yiddish input with Latin letters - ???????????? ???????????????????? ???????????? ????????";
input3.onclick = function(){suche('http://www.yiddishdictionaryonline.com/display.php?action=search&type=rom&action=search&word=');return false;};

var input4 = document.createElement("input");
input4.setAttribute("dir", "ltr");
input4.type = "button";
input4.value = "English/Yiddish/?????????????????? @Lexington";
input4.id = "inputordbog";
input4.title = "Searches a word, phrase or fragment in English, Yiddish, or transliterated Yiddish";
input4.onclick = function(){suche('http://www.cs.uky.edu/~raphael/yiddish/dictionary.cgi?word=');return false;};

var input5 = document.createElement("input");
input5.setAttribute("dir", "ltr");
input5.type = "button";
input5.value = "??????????????? ??? English @Glosbe";
input5.id = "inputordbog";
input5.title = "";
input5.onclick = function(){suche('https://en.glosbe.com/yi/en/');return false;};

var input6 = document.createElement("input");
input6.setAttribute("dir", "ltr");
input6.type = "button";
input6.value = "??????????????? ??? English @Glosbe";
input6.id = "inputordbog";
input6.title = "";
input6.onclick = function(){suche('https://yi.glosbe.com/en/yi/');return false;};

var input7 = document.createElement("input");
input7.setAttribute("dir", "ltr");
input7.type = "button";
input7.value = "??????????????? ??? Deutsch @Glosbe";
input7.id = "inputordbog";
input7.title = "";
input7.onclick = function(){suche('https://de.glosbe.com/yi/de/');return false;};

var input8 = document.createElement("input");
input8.setAttribute("dir", "ltr");
input8.type = "button";
input8.value = "??????????????? ??? Deutsch @Glosbe";
input8.id = "inputordbog";
input8.title = "";
input8.onclick = function(){suche('https://yi.glosbe.com/de/yi/');return false;};

var input9 = document.createElement("input");
input9.setAttribute("dir", "ltr");
input9.type = "button";
input9.value = "??????????????? ??? ?????????????? @Glosbe";
input9.id = "inputordbog";
input9.title = "";
input9.onclick = function(){suche('https://ru.glosbe.com/yi/ru/');return false;};

var input10 = document.createElement("input");
input10.setAttribute("dir", "ltr");
input10.type = "button";
input10.value = "??????????????? ??? ?????????????? @Glosbe";
input10.id = "inputordbog";
input10.title = "";
input10.onclick = function(){suche('https://yi.glosbe.com/ru/yi/');return false;};

var input11 = document.createElement("input");
input11.setAttribute("dir", "ltr");
input11.type = "button";
input11.value = "????????-?????????????? ??????????????";
input11.id = "inputordbog";
input11.title = "?????????????? ?? ???????????????????????? ???? ??????????????????";
input11.onclick = function(){suche('https://translate.academic.ru/?f=yi&t=ru&stype=1&q=');return false;};

var input13 = document.createElement("input");
input13.setAttribute("dir", "ltr");
input13.type = "button";
input13.value = "Yiddish-English dictionary";
input13.id = "inputordbog";
input13.title = "?????????????? ?? ???????????????????????? ???? ??????????????????";
input13.onclick = function(){suche('https://translate.academic.ru/?f=yi&t=en&stype=1&q=');return false;};

var input12 = document.createElement("input");
input12.setAttribute("dir", "ltr");
input12.type = "button";
input12.value = "Jiddisch Nederlands Woordenboek";
input12.id = "inputordbog";
input12.onclick = function(){suche('https://www.jiddisjwoordenboek.nl/search/?type=woordenboekapp.Trefregel&q=');return false;};

var input_transl1 = document.createElement("input");
input_transl1.type = "button";
input_transl1.value = "Google Translate";
input_transl1.id = "inputordbog";
input_transl1.title = "Translate input";
input_transl1.onclick = function(){suche('https://translate.google.com/?hl=&tab=TT&sl=yi&text=');return false;};

var input_transl2 = document.createElement("input");
input_transl2.type = "button";
input_transl2.value = "Google Translate websites";
input_transl2.id = "inputordbog";
input_transl2.title = "Translate current website";
input_transl2.onclick = function(){window.open('https://translate.google.com/translate?&u='+window.location.href,'_blank');};

var input_transl3 = document.createElement("input");
input_transl3.type = "button";
input_transl3.value = "Yandex.Translate";
input_transl3.id = "inputordbog";
input_transl3.title = "Translate input";
input_transl3.onclick = function(){suche('https://translate.yandex.com/?lang=yi-en&text=');return false;};

var input_transl4 = document.createElement("input");
input_transl4.type = "button";
input_transl4.value = "Yandex.Translate websites";
input_transl4.id = "inputordbog";
input_transl4.title = "Translate current website";
input_transl4.onclick = function(){suche('https://translate.yandex.com/translate?url='+window.location.href);return false;};

var dictform1 = document.createElement("form");
dictform1.setAttribute("action", "https://www.cs.uky.edu/~raphael/yiddish/showDefs.cgi");
dictform1.setAttribute("accept-charset", "UTF-8");
dictform1.setAttribute("method", "post");
dictform1.setAttribute("enctype", "multipart/form-data");
dictform1.setAttribute("target", "_blank");
dictform1.setAttribute("style", "display:inline;");
var dictinput1a = document.createElement("input");
dictinput1a.name = "Text";
dictinput1a.type = "hidden";
var dictinput1b = document.createElement("input");
dictinput1b.value = "Yiddish-English Glosser";
dictinput1b.title = "???@???Refoyl???";
dictinput1b.type = "submit";
dictinput1b.id = "inputordbog";
dictform1.appendChild(dictinput1a);
dictform1.appendChild(dictinput1b);

var dictform2 = document.createElement("form");
dictform2.setAttribute("action", "https://www.cs.uky.edu/~raphael/yiddish/searchGroys.cgi");
dictform2.setAttribute("accept-charset", "UTF-8");
dictform2.setAttribute("method", "post");
dictform2.setAttribute("enctype", "multipart/form-data");
dictform2.setAttribute("target", "_blank");
dictform2.setAttribute("style", "display:inline;");
var dictinput2a = document.createElement("input");
dictinput2a.name = "keys";
dictinput2a.type = "hidden";
var dictinput2b = document.createElement("input");
dictinput2b.value = "?????? ???????????? ??????????????????";
dictinput2b.title = "Der Groyser Verterbukh ???@???Refoyl???";
dictinput2b.type = "submit";
dictinput2b.id = "inputordbog";
dictform2.appendChild(dictinput2a);
dictform2.appendChild(dictinput2b);

var dictform3 = document.createElement("form");
dictform3.setAttribute("action", "https://www.cs.uky.edu/~raphael/yiddish/checkSpellUTF.cgi");
dictform3.setAttribute("accept-charset", "UTF-8");
dictform3.setAttribute("method", "post");
dictform3.setAttribute("enctype", "multipart/form-data");
dictform3.setAttribute("target", "_blank");
dictform3.setAttribute("style", "display:inline;");
var dictinput3a = document.createElement("input");
dictinput3a.name = "Text";
dictinput3a.type = "hidden";
var dictinput3b = document.createElement("input");
dictinput3b.value = "Spellcheck";
dictinput3b.title = "???@???Refoyl???";
dictinput3b.type = "submit";
dictinput3b.id = "inputordbog";
dictform3.appendChild(dictinput3a);
dictform3.appendChild(dictinput3b);

//	#1 END	///////////////////
/////////////////////translit
function transl(node) {
    node = node || document.body;
    if(node.nodeType == 3) {
node.nodeValue = node.nodeValue.split('rtl').join('ltr');
// Text node
	// combinations
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('???');
node.nodeValue = node.nodeValue.split('????').join('??');
node.nodeValue = node.nodeValue.split('????').join('??');
node.nodeValue = node.nodeValue.split('????').join('??');
node.nodeValue = node.nodeValue.split('????').join('zh');
node.nodeValue = node.nodeValue.split('????').join('es');
node.nodeValue = node.nodeValue.split('????').join('es');
// Most common non-YIVO errors
node.nodeValue = node.nodeValue.split('????????').join('zeyde');
node.nodeValue = node.nodeValue.split('????').join('ey');
node.nodeValue = node.nodeValue.split('??????').join('yidi');
node.nodeValue = node.nodeValue.split('????').join('yid');
// uniques
node.nodeValue = node.nodeValue.split('????').join('bi');
node.nodeValue = node.nodeValue.split('??').join('b');
node.nodeValue = node.nodeValue.split('?????').join('bi');
node.nodeValue = node.nodeValue.split('???').join('b');
node.nodeValue = node.nodeValue.split('?????').join('vi');
node.nodeValue = node.nodeValue.split('???').join('v');
node.nodeValue = node.nodeValue.split('????').join('gi');
node.nodeValue = node.nodeValue.split('??').join('g');
node.nodeValue = node.nodeValue.split('????').join('di');
node.nodeValue = node.nodeValue.split('??').join('d');
node.nodeValue = node.nodeValue.split('????').join('hi');
node.nodeValue = node.nodeValue.split('??').join('h');
node.nodeValue = node.nodeValue.split('????').join('vi');
node.nodeValue = node.nodeValue.split('??').join('v');
node.nodeValue = node.nodeValue.split('????').join('zi');
node.nodeValue = node.nodeValue.split('??').join('z');
node.nodeValue = node.nodeValue.split('????').join('khi');
node.nodeValue = node.nodeValue.split('??').join('kh');
node.nodeValue = node.nodeValue.split('????').join('ti');
node.nodeValue = node.nodeValue.split('??').join('t');
node.nodeValue = node.nodeValue.split('?????').join('ki');
node.nodeValue = node.nodeValue.split('???').join('k');
node.nodeValue = node.nodeValue.split('????').join('khi');
node.nodeValue = node.nodeValue.split('??').join('kh');
node.nodeValue = node.nodeValue.split('??').join('kh');
node.nodeValue = node.nodeValue.split('????').join('li');
node.nodeValue = node.nodeValue.split('??').join('l');
node.nodeValue = node.nodeValue.split('????').join('mi');
node.nodeValue = node.nodeValue.split('??').join('m');
node.nodeValue = node.nodeValue.split('??').join('m');
node.nodeValue = node.nodeValue.split('????').join('ni');
node.nodeValue = node.nodeValue.split('??').join('n');
node.nodeValue = node.nodeValue.split('??').join('n');
node.nodeValue = node.nodeValue.split('????').join('si');
node.nodeValue = node.nodeValue.split('??').join('s');
node.nodeValue = node.nodeValue.split('?????').join('pi');
node.nodeValue = node.nodeValue.split('???').join('p');
node.nodeValue = node.nodeValue.split('????').join('fi');
node.nodeValue = node.nodeValue.split('?????').join('fi');
node.nodeValue = node.nodeValue.split('???').join('f');
node.nodeValue = node.nodeValue.split('??').join('??????');
node.nodeValue = node.nodeValue.split('??').join('f');
node.nodeValue = node.nodeValue.split('????').join('tsi');
node.nodeValue = node.nodeValue.split('??').join('ts');
node.nodeValue = node.nodeValue.split('??').join('ts');
node.nodeValue = node.nodeValue.split('????').join('ki');
node.nodeValue = node.nodeValue.split('??').join('k');
node.nodeValue = node.nodeValue.split('????').join('ri');
node.nodeValue = node.nodeValue.split('??').join('r');
node.nodeValue = node.nodeValue.split('?????').join('si');
node.nodeValue = node.nodeValue.split('???').join('s');
node.nodeValue = node.nodeValue.split('????').join('shi');
node.nodeValue = node.nodeValue.split('??').join('sh');
node.nodeValue = node.nodeValue.split('????').join('si');
node.nodeValue = node.nodeValue.split('??').join('s');
node.nodeValue = node.nodeValue.split('?????').join('ti');
node.nodeValue = node.nodeValue.split('???').join('t');
node.nodeValue = node.nodeValue.split('???').join('a');
node.nodeValue = node.nodeValue.split('???').join('o');
node.nodeValue = node.nodeValue.split('??').join('e');
node.nodeValue = node.nodeValue.split('????').join('u');
node.nodeValue = node.nodeValue.split('??').join('u');
node.nodeValue = node.nodeValue.split('???').join('u');
node.nodeValue = node.nodeValue.split('???').join('v');
node.nodeValue = node.nodeValue.split('????').join('oy');
node.nodeValue = node.nodeValue.split('????').join('ey');
node.nodeValue = node.nodeValue.split('?????').join('ay');
node.nodeValue = node.nodeValue.split('????').join('i');
node.nodeValue = node.nodeValue.split('??').join('oy');
node.nodeValue = node.nodeValue.split('??').join('ey');
node.nodeValue = node.nodeValue.split('???').join('ay');
node.nodeValue = node.nodeValue.split('??').join('y');
node.nodeValue = node.nodeValue.split('???').join('i');
node.nodeValue = node.nodeValue.split('??').join('??');
// modifiers
node.nodeValue = node.nodeValue.split('??').join('-');
node.nodeValue = node.nodeValue.split('.').join('.???');
node.nodeValue = node.nodeValue.split(',').join(',???');
node.nodeValue = node.nodeValue.split(':').join(':???');
node.nodeValue = node.nodeValue.split('??').join(':???');
node.nodeValue = node.nodeValue.split(';').join(';???');
node.nodeValue = node.nodeValue.split('???').join('??????');
node.nodeValue = node.nodeValue.split('???').join('??????');
node.nodeValue = node.nodeValue.split('?').join('????');
node.nodeValue = node.nodeValue.split('!').join('!???');
node.nodeValue = node.nodeValue.split('??').join(':???');
node.nodeValue = node.nodeValue.split('??').join(' ');
node.nodeValue = node.nodeValue.split('|').join(' ');
node.nodeValue = node.nodeValue.split('??').join('???');

var direction = document.getElementsByTagName("*");
for (var i = 0; i < direction.length; i++) {
    direction[i].dir = "ltr"
}
	document.dir='ltr';
    } else {
var nodes = node.childNodes;
if(nodes) {
    var i = nodes.length;
    while(i--) transl(nodes[i]);
}
    }
var div = document.getElementById('ordbog');
    if (div.style.display !== 'none') {
div.style.display = 'none';
	}
	    else {
div.style.display = 'none';
    }
    var div = document.getElementById('ordbogklein');
div.style.display = 'block';
}

function transl2() {
//var transl2str = t.toString();
var transl2str = document.ordbogform.texto3.value;
transl2str = transl2str.split('rtl').join('ltr');
// Text node
	// combinations
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('???');
transl2str = transl2str.split('????').join('??');
transl2str = transl2str.split('????').join('??');
transl2str = transl2str.split('????').join('??');
transl2str = transl2str.split('????').join('zh');
transl2str = transl2str.split('????').join('es');
// Most common non-YIVO errors
transl2str = transl2str.split('????????').join('zeyde');
transl2str = transl2str.split('????').join('ey');
transl2str = transl2str.split('??????').join('yidi');
transl2str = transl2str.split('????').join('yid');
// uniques
transl2str = transl2str.split('????').join('bi');
transl2str = transl2str.split('??').join('b');
transl2str = transl2str.split('?????').join('bi');
transl2str = transl2str.split('???').join('b');
transl2str = transl2str.split('?????').join('vi');
transl2str = transl2str.split('???').join('v');
transl2str = transl2str.split('????').join('gi');
transl2str = transl2str.split('??').join('g');
transl2str = transl2str.split('????').join('di');
transl2str = transl2str.split('??').join('d');
transl2str = transl2str.split('????').join('hi');
transl2str = transl2str.split('??').join('h');
transl2str = transl2str.split('????').join('vi');
transl2str = transl2str.split('??').join('v');
transl2str = transl2str.split('????').join('zi');
transl2str = transl2str.split('??').join('z');
transl2str = transl2str.split('????').join('khi');
transl2str = transl2str.split('??').join('kh');
transl2str = transl2str.split('????').join('ti');
transl2str = transl2str.split('??').join('t');
transl2str = transl2str.split('?????').join('ki');
transl2str = transl2str.split('???').join('k');
transl2str = transl2str.split('????').join('khi');
transl2str = transl2str.split('??').join('kh');
transl2str = transl2str.split('??').join('kh');
transl2str = transl2str.split('????').join('li');
transl2str = transl2str.split('??').join('l');
transl2str = transl2str.split('????').join('mi');
transl2str = transl2str.split('??').join('m');
transl2str = transl2str.split('??').join('m');
transl2str = transl2str.split('????').join('ni');
transl2str = transl2str.split('??').join('n');
transl2str = transl2str.split('??').join('n');
transl2str = transl2str.split('????').join('si');
transl2str = transl2str.split('??').join('s');
transl2str = transl2str.split('?????').join('pi');
transl2str = transl2str.split('???').join('p');
transl2str = transl2str.split('????').join('fi');
transl2str = transl2str.split('??').join('f');
transl2str = transl2str.split('?????').join('fi');
transl2str = transl2str.split('???').join('f');
transl2str = transl2str.split('??').join('f');
transl2str = transl2str.split('????').join('tsi');
transl2str = transl2str.split('??').join('ts');
transl2str = transl2str.split('??').join('ts');
transl2str = transl2str.split('????').join('ki');
transl2str = transl2str.split('??').join('k');
transl2str = transl2str.split('????').join('ri');
transl2str = transl2str.split('??').join('r');
transl2str = transl2str.split('?????').join('si');
transl2str = transl2str.split('???').join('s');
transl2str = transl2str.split('????').join('shi');
transl2str = transl2str.split('??').join('sh');
transl2str = transl2str.split('????').join('si');
transl2str = transl2str.split('??').join('s');
transl2str = transl2str.split('?????').join('ti');
transl2str = transl2str.split('???').join('t');
transl2str = transl2str.split('???').join('a');
transl2str = transl2str.split('???').join('o');
transl2str = transl2str.split('??').join('e');
transl2str = transl2str.split('????').join('u');
transl2str = transl2str.split('??').join('u');
transl2str = transl2str.split('???').join('u');
transl2str = transl2str.split('???').join('v');
transl2str = transl2str.split('????').join('oy');
transl2str = transl2str.split('????').join('ey');
transl2str = transl2str.split('?????').join('ay');
transl2str = transl2str.split('????').join('i');
transl2str = transl2str.split('??').join('oy');
transl2str = transl2str.split('??').join('ey');
transl2str = transl2str.split('???').join('ay');
transl2str = transl2str.split('??').join('y');
transl2str = transl2str.split('???').join('i');
transl2str = transl2str.split('??').join('??');
// modifiers
transl2str = transl2str.split('??').join('-');
transl2str = transl2str.split('.').join('.???');
transl2str = transl2str.split(',').join(',???');
transl2str = transl2str.split(':').join(':???');
transl2str = transl2str.split('??').join(':???');
transl2str = transl2str.split(';').join(';???');
transl2str = transl2str.split('???').join('??????');
transl2str = transl2str.split('???').join('??????');
transl2str = transl2str.split('?').join('????');
transl2str = transl2str.split('!').join('!???');
transl2str = transl2str.split('??').join(':???');
transl2str = transl2str.split('??').join(' ');
transl2str = transl2str.split('|').join(' ');
transl2str = transl2str.split('??').join('???');
	document.dir='ltr';
document.ordbogform.texto2.value = transl2str;
}

var inputtranslit = document.createElement("input");
inputtranslit.type = "button";
inputtranslit.value = "Convert current website";
inputtranslit.id = "inputordbog";
inputtranslit.title = "Transliteration (romanisation, transcription) of the current web site from Hebrew to Latin script (closes this dictionary window)";
inputtranslit.onclick = function(){transl();return false;};

var inputtranslit2 = document.createElement("input");
inputtranslit2.type = "button";
inputtranslit2.value = "apply transliteration / ??????????????????????";
inputtranslit2.id = "inputordbog";
inputtranslit2.title = "Transliteration (romanisation, transcription) of the input from Hebrew to Latin script";
inputtranslit2.style.cssFloat = "right";
inputtranslit2.onclick = function(){transl2();return false;};

var inputtranslit3 = document.createElement("input");
inputtranslit3.type = "button";
inputtranslit3.value = "Convert current input";
inputtranslit3.id = "inputordbog";
inputtranslit3.title = "Transliteration (romanisation, transcription) of the input from Hebrew to Latin script";
inputtranslit3.onclick = function(){transl2();return false;};
/////////////////////translit end

var divinnen = document.createElement('div');
divinnen.setAttribute("class", "ordbog-indhold");

var textluk = document.createTextNode('??');
var spanluk = document.createElement('span');
spanluk.setAttribute("class", "luk");
spanluk.title ="Close window (deletes all input)";
spanluk.appendChild(textluk);
divinnen.appendChild(spanluk);
divinnen.appendChild(ordbogform);

var textminimer = document.createTextNode('_');
var spanminimer = document.createElement('span');
spanminimer.setAttribute("class", "minimer");
spanminimer.title ="Minimize dictionaries window (keeps input)";
spanminimer.appendChild(textminimer);
divinnen.appendChild(spanminimer);
divinnen.appendChild(ordbogform);

var spanoben = document.createElement('span');
spanoben.setAttribute("class", "oben");

var lupe = document.createElement('p');
lupe.setAttribute("class", "lupe");
lupe.setAttribute("title", "Enter keyword and choose a dictionary by clicking the according button");
var lupeinhalt = document.createTextNode('???');
lupe.appendChild(lupeinhalt);

var button1 = document.createElement('input');
button1.type = "button";
button1.value = "enlarge input fields / ?????????????????????? ?????????????????????????? ????????";
button1.id = "inputordbog";
button1.setAttribute("class", "bigger");
button1.title = "This will enlarge the input field";
button1.setAttribute("onclick", "bigger2()");
button1.style.cssFloat = "right";

var spantitle = document.createElement('span');
spantitle.setAttribute("class", "spantitle");
var texttitle = document.createTextNode('YI dicts');
spantitle.appendChild(texttitle);
spanoben.appendChild(spantitle);

var spansubtitle = document.createElement('p');
spansubtitle.setAttribute("class", "spansubtitle");
var textsubtitle = document.createTextNode('Yiddish Dictionaries / ?????????????? ????????????????????????');
spansubtitle.appendChild(textsubtitle);
spanoben.appendChild(spansubtitle);
ordbogform.appendChild(spanoben);

var dict_title = document.createElement('div');
var dict_title_inhalt = document.createTextNode('Dictionaries / ????????????????????????');
dict_title.setAttribute("class", "dictsubtitle");
dict_title.appendChild(dict_title_inhalt);

var transl_title = document.createElement('div');
var transl_title_inhalt = document.createTextNode('Machine translation / ???????????? ??????????????????????');
transl_title.setAttribute("class", "dictsubtitle");
transl_title.appendChild(transl_title_inhalt);

var translit_title = document.createElement('div');
var translit_title_inhalt = document.createTextNode('Transliteration to Latin script (YIVO-style) / ?????????????????????????? ???? ???????????????? ?????????????? (??????????????)');
translit_title.setAttribute("class", "dictsubtitle");
translit_title.appendChild(translit_title_inhalt);

var umbruch = document.createElement('br');
var umbruch2 = document.createElement('br');
var umbruch3 = document.createElement('br');
var umbruch4 = document.createElement('br');
var umbruch5 = document.createElement('br');

function bigger2() {
	inddata.setAttribute("style", "height:140px !important;width:30% !important;min-height:140px!important;max-height:140px!important;");
	texto2.setAttribute("style", "height:140px !important;width:80% !important;min-height:140px!important;max-height:140px!important;");
	texto3.setAttribute("style", "height:140px !important;width:80% !important;min-height:140px!important;max-height:140px!important;");
	button1.setAttribute("style", "display:none !important;");
	button1.style.display = "none";
}

//	#2: Call here the URLs which have been declared above.

var tabelle = document.createElement("TABLE");
tabelle.setAttribute("id", "tabelle");
tabelle.style.width = "100%";
document.body.appendChild(tabelle);

var tabelletr2 = document.createElement("TR");
tabelletr2.setAttribute("id", "tabelletr2");
document.getElementById("tabelle").appendChild(tabelletr2);

var tdtopleft = document.createElement("TH");
var tdtopleft_inhalt = document.createTextNode('Yiddish search word / ??????????????????');
tdtopleft.setAttribute("class", "dictsubtitle");
tdtopleft.style.textAlign = "right";
tdtopleft.style.paddingRight = "30px";
tdtopleft.appendChild(tdtopleft_inhalt);
document.getElementById("tabelletr2").appendChild(tdtopleft);

var tdtopright = document.createElement("TH");
var tdtopright_inhalt = document.createTextNode('YIVO-transliteration / ????????????????????????????????????????????????');
tdtopright.setAttribute("class", "dictsubtitle");
tdtopright.appendChild(tdtopright_inhalt);
document.getElementById("tabelletr2").appendChild(tdtopright);

///////////////////////////////////////////////

var tabelletr = document.createElement("TR");
tabelletr.setAttribute("id", "tabelletr");
document.getElementById("tabelle").appendChild(tabelletr);

var tdyi = document.createElement("TD");
tdyi.appendChild(lupe);
tdyi.appendChild(inddata);
tdyi.style.textAlign = "right"; 
document.getElementById("tabelletr").appendChild(tdyi);

var tdlat = document.createElement("TD");
tdlat.appendChild(uddata);
document.getElementById("tabelletr").appendChild(tdlat);

ordbogform.appendChild(tabelle);
ordbogform.appendChild(button1);
ordbogform.appendChild(inputtranslit2);
ordbogform.appendChild(dict_title);
ordbogform.appendChild(input1);
ordbogform.appendChild(input3);
ordbogform.appendChild(dictform1);
ordbogform.appendChild(umbruch);
ordbogform.appendChild(input2);
ordbogform.appendChild(input4);
ordbogform.appendChild(input13);
ordbogform.appendChild(input11);
ordbogform.appendChild(umbruch2);
ordbogform.appendChild(input5);
ordbogform.appendChild(input7);
ordbogform.appendChild(input9);
ordbogform.appendChild(umbruch3);
ordbogform.appendChild(input6);
ordbogform.appendChild(input8);
ordbogform.appendChild(input10);
ordbogform.appendChild(umbruch4);
ordbogform.appendChild(dictform2);
ordbogform.appendChild(dictform3);
ordbogform.appendChild(input12);
ordbogform.appendChild(umbruch5);
ordbogform.appendChild(transl_title);
ordbogform.appendChild(input_transl1);
ordbogform.appendChild(input_transl2);
ordbogform.appendChild(input_transl3);
ordbogform.appendChild(input_transl4);
ordbogform.appendChild(translit_title);
ordbogform.appendChild(inputtranslit);
ordbogform.appendChild(inputtranslit3);
//	#2 END	///////////////////

var linktitle = document.createElement('a');
linktitle.setAttribute("class", "linktitle");
var linktitletext = document.createTextNode("documentation / other dictionaries ??? ?????????????????????????? / ???????????? ????????????????????????");
linktitle.appendChild(linktitletext);
linktitle.title = "Get more information about this and other dictionary bookmarklets";
linktitle.href = "https://pod-o-mart.github.io/yiddishBookmarklets";
linktitle.target = "_blank";
ordbogform.appendChild(linktitle);

var versionindicator = document.createElement('div');
versionindicator.innerHTML = "<div style='padding: 0;color: grey;font: normal normal bold 10px verdana, sans-serif !important;float: left;white-space: nowrap;margin-top: 15px;'>Version " + version + " ??????????????</div>";
ordbogform.appendChild(versionindicator);

var divaussen = document.createElement('div');
divaussen.setAttribute("id", "ordbog");
divaussen.appendChild(divinnen);
document.body.appendChild(divaussen);
var ordbog = document.getElementById('ordbog');
var ordbogspan = document.getElementsByClassName("luk")[0];
var ordbogkleinspan = document.getElementsByClassName("minimer")[0];
ordbog.style.display = "block";

var divaussenklein = document.createElement('div');
divaussenklein.setAttribute("id", "ordbogklein");
var divaussenkleina = document.createElement('a');
divaussenkleina.title = "Click to restore dictionaries window";
divaussenkleina.setAttribute("onmousedown", "display()");
inddata.setAttribute("onclick", "inputwrap()");
divaussenklein.appendChild(divaussenkleina);
var divaussenkleintext = document.createTextNode("YI dicts");
divaussenkleina.appendChild(divaussenkleintext);
document.body.appendChild(divaussenklein);
var div = document.getElementById('ordbogklein');
div.style.display = 'none';

ordbogspan.onclick = function() {
	var elem = document.getElementById("ordbog"); elem.parentNode.removeChild(elem);
	var elem2 = document.getElementById("ordbogklein"); elem2.parentNode.removeChild(elem2);
}

ordbogkleinspan.onclick = function(event) {
	if (event.target == ordbogkleinspan) {
		var div = document.getElementById('ordbog');
		if (div.style.display !== 'none') {
			div.style.display = 'none';
		}
	    else {
			div.style.display = 'block';
		}
		var div = document.getElementById('ordbogklein');
		div.style.display = 'block';
	}
}

window.onclick = function(event) {
	if (event.target == ordbog) {
		var div = document.getElementById('ordbog');
		if (div.style.display !== 'none') {
			div.style.display = 'none';
		}
	    else {
			div.style.display = 'block';
		}
		var div = document.getElementById('ordbogklein');
		div.style.display = 'block';
	}
}
transl2();
}
else {
	display();
};

function display() {
	if (window.getSelection) {
        inddata.value = window.getSelection();
        transl2();
	}
	else if (document.getSelection) {
		inddata.value = document.getSelection();
		transl2();
	}
    else if (document.selection) {
		inddata.value = document.selection.createRange().text;
		transl2();
	}
	else return;
	var div = document.getElementById('ordbog');
	if (div.style.display !== 'none') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
	var div = document.getElementById('ordbogklein');
	div.style.display = 'none';

	if (inddata.value.indexOf('\n') >= 0) {
		texto2.setAttribute("style", "height:140px !important;width:80% !important;");
		texto3.setAttribute("style", "height:140px !important;width:80% !important;");
		button1.setAttribute("style", "display:none !important;");
	}
	if (uddata.value.indexOf('\n') >= 0) {
		inddata.setAttribute("style", "height:140px !important;width:30% !important;");
		texto2.setAttribute("style", "height:140px !important;width:80% !important;");
		texto3.setAttribute("style", "height:140px !important;width:80% !important;");
		button1.setAttribute("style", "display:none !important;");
	}
}

ordbogform.addEventListener('click', function () {
    dictinput1a.value = inddata.value;
    dictinput2a.value = inddata.value;
    dictinput3a.value = inddata.value;
});
inputwrap();
