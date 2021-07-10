// Yiddish transliteration bookmarklet
// V1.1 2015/03/22
// V1.2 2017/01/03 Punctuation adjusted LTR
// V1.3 2017/07/04 transliteration codepage adjustments
// charmap adapted from http://www.lexilogos.com/clavier/conyi.js
// Author: Martin Podolak
// kontakt@podolak.net
// http://www.podolak.net


function newTheOlds(node) {

    node = node || document.body;
    if(node.nodeType == 3) {

        node.nodeValue = node.nodeValue.split('rtl').join('ltr');
        // Text node
	// combinations
node.nodeValue = node.nodeValue.split('אַ').join('אַ');
node.nodeValue = node.nodeValue.split('אָ').join('אָ');
node.nodeValue = node.nodeValue.split('בּ').join('בּ');
node.nodeValue = node.nodeValue.split('בֿ').join('בֿ');
node.nodeValue = node.nodeValue.split('כּ').join('כּ');
node.nodeValue = node.nodeValue.split('פּ').join('פּ');
node.nodeValue = node.nodeValue.split('פֿ').join('פֿ');
node.nodeValue = node.nodeValue.split('שׂ').join('שׂ');
node.nodeValue = node.nodeValue.split('תּ').join('תּ');
node.nodeValue = node.nodeValue.split('וּ').join('וּ');
node.nodeValue = node.nodeValue.split('וֹ').join('וֹ');
node.nodeValue = node.nodeValue.split('יִ').join('יִ');
node.nodeValue = node.nodeValue.split('ײַ').join('ײַ');
node.nodeValue = node.nodeValue.split('וו').join('װ');
node.nodeValue = node.nodeValue.split('יי').join('ײ');
node.nodeValue = node.nodeValue.split('וי').join('ױ');
node.nodeValue = node.nodeValue.split('זש').join('zh');
node.nodeValue = node.nodeValue.split('ות').join('es');
// Most common non-YIVO errors
node.nodeValue = node.nodeValue.split('זײדע').join('zeyde');
node.nodeValue = node.nodeValue.split('אײ').join('ey');
node.nodeValue = node.nodeValue.split('ײדי').join('yidi');
node.nodeValue = node.nodeValue.split('ײד').join('yid');
// uniques
node.nodeValue = node.nodeValue.split('בי').join('bi');
node.nodeValue = node.nodeValue.split('ב').join('b');
node.nodeValue = node.nodeValue.split('בּי').join('bi');
node.nodeValue = node.nodeValue.split('בּ').join('b');
node.nodeValue = node.nodeValue.split('בֿי').join('vi');
node.nodeValue = node.nodeValue.split('בֿ').join('v');
node.nodeValue = node.nodeValue.split('גי').join('gi');
node.nodeValue = node.nodeValue.split('ג').join('g');
node.nodeValue = node.nodeValue.split('די').join('di');
node.nodeValue = node.nodeValue.split('ד').join('d');
node.nodeValue = node.nodeValue.split('הי').join('hi');
node.nodeValue = node.nodeValue.split('ה').join('h');
node.nodeValue = node.nodeValue.split('װי').join('vi');
node.nodeValue = node.nodeValue.split('װ').join('v');
node.nodeValue = node.nodeValue.split('זי').join('zi');
node.nodeValue = node.nodeValue.split('ז').join('z');
node.nodeValue = node.nodeValue.split('חי').join('khi');
node.nodeValue = node.nodeValue.split('ח').join('kh');
node.nodeValue = node.nodeValue.split('טי').join('ti');
node.nodeValue = node.nodeValue.split('ט').join('t');
node.nodeValue = node.nodeValue.split('כּי').join('ki');
node.nodeValue = node.nodeValue.split('כּ').join('k');
node.nodeValue = node.nodeValue.split('כי').join('khi');
node.nodeValue = node.nodeValue.split('כ').join('kh');
node.nodeValue = node.nodeValue.split('ך').join('kh');
node.nodeValue = node.nodeValue.split('לי').join('li');
node.nodeValue = node.nodeValue.split('ל').join('l');
node.nodeValue = node.nodeValue.split('מי').join('mi');
node.nodeValue = node.nodeValue.split('מ').join('m');
node.nodeValue = node.nodeValue.split('ם').join('m');
node.nodeValue = node.nodeValue.split('ני').join('ni');
node.nodeValue = node.nodeValue.split('נ').join('n');
node.nodeValue = node.nodeValue.split('ן').join('n');
node.nodeValue = node.nodeValue.split('סי').join('si');
node.nodeValue = node.nodeValue.split('ס').join('s');
node.nodeValue = node.nodeValue.split('פּי').join('pi');
node.nodeValue = node.nodeValue.split('פּ').join('p');
node.nodeValue = node.nodeValue.split('פי').join('fi');
node.nodeValue = node.nodeValue.split('פֿי').join('fi');
node.nodeValue = node.nodeValue.split('פֿ').join('f');
node.nodeValue = node.nodeValue.split('פ').join('‎₽');
node.nodeValue = node.nodeValue.split('ף').join('f');
node.nodeValue = node.nodeValue.split('צי').join('tsi');
node.nodeValue = node.nodeValue.split('צ').join('ts');
node.nodeValue = node.nodeValue.split('ץ').join('ts');
node.nodeValue = node.nodeValue.split('קי').join('ki');
node.nodeValue = node.nodeValue.split('ק').join('k');
node.nodeValue = node.nodeValue.split('רי').join('ri');
node.nodeValue = node.nodeValue.split('ר').join('r');
node.nodeValue = node.nodeValue.split('שׂי').join('si');
node.nodeValue = node.nodeValue.split('שׂ').join('s');
node.nodeValue = node.nodeValue.split('שי').join('shi');
node.nodeValue = node.nodeValue.split('ש').join('sh');
node.nodeValue = node.nodeValue.split('תי').join('si');
node.nodeValue = node.nodeValue.split('ת').join('s');
node.nodeValue = node.nodeValue.split('תּי').join('ti');
node.nodeValue = node.nodeValue.split('תּ').join('t');
node.nodeValue = node.nodeValue.split('אַ').join('a');
node.nodeValue = node.nodeValue.split('אָ').join('o');
node.nodeValue = node.nodeValue.split('ע').join('e');
node.nodeValue = node.nodeValue.split('או').join('u');
node.nodeValue = node.nodeValue.split('ו').join('u');
node.nodeValue = node.nodeValue.split('וּ').join('u');
node.nodeValue = node.nodeValue.split('וֹ').join('v');
node.nodeValue = node.nodeValue.split('אױ').join('oy');
node.nodeValue = node.nodeValue.split('אײ').join('ey');
node.nodeValue = node.nodeValue.split('אײַ').join('ay');
node.nodeValue = node.nodeValue.split('אי').join('i');
node.nodeValue = node.nodeValue.split('ױ').join('oy');
node.nodeValue = node.nodeValue.split('ײ').join('ey');
node.nodeValue = node.nodeValue.split('ײַ').join('ay');
node.nodeValue = node.nodeValue.split('י').join('y');
node.nodeValue = node.nodeValue.split('יִ').join('i');
node.nodeValue = node.nodeValue.split('א').join('¤');
// modifiers
node.nodeValue = node.nodeValue.split('־').join('-');
node.nodeValue = node.nodeValue.split('.').join('.‎');
node.nodeValue = node.nodeValue.split(',').join(',‎');
node.nodeValue = node.nodeValue.split(':').join(':‎');
node.nodeValue = node.nodeValue.split('׃').join(':‎');
node.nodeValue = node.nodeValue.split(';').join(';‎');
node.nodeValue = node.nodeValue.split('„').join('„‎');
node.nodeValue = node.nodeValue.split('“').join('“‎');
node.nodeValue = node.nodeValue.split('?').join('?‎');
node.nodeValue = node.nodeValue.split('!').join('!‎');
node.nodeValue = node.nodeValue.split('׃').join(':‎');
node.nodeValue = node.nodeValue.split('׀').join(' ');
node.nodeValue = node.nodeValue.split('|').join(' ');
node.nodeValue = node.nodeValue.split('״').join('№');

var direction = document.getElementsByTagName("*");
for (var i = 0; i < direction.length; i++) {
    direction[i].dir = "ltr"
}
/*
var removertl = document.getElementsByClassName("redirect-rtl");
while(removertl.length > 0){
    removertl[0].classList.remove(removertl[0]);
}
*/

var removertl = document.getElementsByClassName("redirect-rtl");
for (var j = 0; j < removertl.length; j++) {
    removertl[j].classList.remove("redirect-rtl");
}
  
document.dir='ltr';
   } else {
        var nodes = node.childNodes;
        if(nodes) {
            var i = nodes.length;
            while(i--) newTheOlds(nodes[i]);
        }
    }
}

newTheOlds();
