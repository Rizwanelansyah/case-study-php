!function(){var aa=this;function h(a,c){var b=a.split("."),d=aa;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)b.length||void 0===c?d[e]?d=d[e]:d=d[e]={}:d[e]=c}function l(a,c){function b(){}b.prototype=c.prototype;a.M=c.prototype;a.prototype=new b;a.prototype.constructor=a;a.N=function(a,b,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return c.prototype[b].apply(a,g)}};function n(a,c){null!=a&&this.a.apply(this,arguments)}n.prototype.b="";n.prototype.set=function(a){this.b=""+a};n.prototype.a=function(a,c,b){this.b+=String(a);if(null!=c)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};function p(a){a.b=""}n.prototype.toString=function(){return this.b};function ba(a,c){a.sort(c||ca)}function ca(a,c){return a>c?1:a<c?-1:0};function da(a){var c=[],b=0,d;for(d in a)c[b++]=a[d];return c};function ea(a,c){this.b=a;this.a={};for(var b=0;b<c.length;b++){var d=c[b];this.a[d.b]=d}}function fa(a){a=da(a.a);ba(a,function(a,b){return a.b-b.b});return a};function ga(a,c){this.b=a;this.g=!!c.G;this.a=c.c;this.j=c.type;this.h=!1;switch(this.a){case ha:case ia:case ja:case ka:case la:case ma:case na:this.h=!0}this.f=c.defaultValue}var na=1,ma=2,ha=3,ia=4,ja=6,ka=16,la=18;function q(){this.a={};this.f=this.i().a;this.b=this.g=null}q.prototype.set=function(a,c){r(this,a.b,c)};function t(a,c){for(var b=fa(a.i()),d=0;d<b.length;d++){var e=b[d],f=e.b;if(null!=c.a[f]){a.b&&delete a.b[e.b];var g=11==e.a||10==e.a;if(e.g)for(var e=v(c,f)||[],k=0;k<e.length;k++){var m=a,u=f,sa=g?e[k].clone():e[k];m.a[u]||(m.a[u]=[]);m.a[u].push(sa);m.b&&delete m.b[u]}else e=v(c,f),g?(g=v(a,f))?t(g,e):r(a,f,e.clone()):r(a,f,e)}}}
q.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.a={},a.b&&(a.b={}),t(a,this));return a};function v(a,c){var b=a.a[c];if(null==b)return null;if(a.g){if(!(c in a.b)){var d=a.g,e=a.f[c];if(null!=b)if(e.g){for(var f=[],g=0;g<b.length;g++)f[g]=d.b(e,b[g]);b=f}else b=d.b(e,b);return a.b[c]=b}return a.b[c]}return b}function w(a,c,b){var d=v(a,c);return a.f[c].g?d[b||0]:d}
function x(a,c){var b;if(null!=a.a[c])b=w(a,c,void 0);else a:{b=a.f[c];if(void 0===b.f){var d=b.j;if(d===Boolean)b.f=!1;else if(d===Number)b.f=0;else if(d===String)b.f=b.h?"0":"";else{b=new d;break a}}b=b.f}return b}function y(a,c){return a.f[c].g?null!=a.a[c]?a.a[c].length:0:null!=a.a[c]?1:0}function r(a,c,b){a.a[c]=b;a.b&&(a.b[c]=b)}function z(a,c){var b=[],d;for(d in c)0!=d&&b.push(new ga(d,c[d]));return new ea(a,b)};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function A(){q.call(this)}var B;l(A,q);function C(){q.call(this)}var D;l(C,q);function E(){q.call(this)}var F;l(E,q);
A.prototype.i=function(){B||(B=z(A,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",G:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}}));return B};A.ctor=A;A.ctor.i=A.prototype.i;
C.prototype.i=function(){D||(D=z(C,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},3:{name:"possible_number_pattern",c:9,type:String},6:{name:"example_number",c:9,type:String},7:{name:"national_number_matcher_data",c:12,type:String},8:{name:"possible_number_matcher_data",c:12,type:String}}));return D};C.ctor=C;C.ctor.i=C.prototype.i;
E.prototype.i=function(){F||(F=z(E,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:C},2:{name:"fixed_line",c:11,type:C},3:{name:"mobile",c:11,type:C},4:{name:"toll_free",c:11,type:C},5:{name:"premium_rate",c:11,type:C},6:{name:"shared_cost",c:11,type:C},7:{name:"personal_number",c:11,type:C},8:{name:"voip",c:11,type:C},21:{name:"pager",c:11,type:C},25:{name:"uan",c:11,type:C},27:{name:"emergency",c:11,type:C},28:{name:"voicemail",c:11,type:C},24:{name:"no_international_dialling",
c:11,type:C},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",
G:!0,c:11,type:A},20:{name:"intl_number_format",G:!0,c:11,type:A},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}}));return F};E.ctor=E;E.ctor.i=E.prototype.i;function G(){}G.prototype.a=function(a){new a.b;throw Error("Unimplemented");};G.prototype.b=function(a,c){if(11==a.a||10==a.a)return c instanceof q?c:this.a(a.j.prototype.i(),c);if(14==a.a){if("string"==typeof c&&H.test(c)){var b=Number(c);if(0<b)return b}return c}if(!a.h)return c;b=a.j;if(b===String){if("number"==typeof c)return String(c)}else if(b===Number&&"string"==typeof c&&("Infinity"===c||"-Infinity"===c||"NaN"===c||H.test(c)))return Number(c);return c};var H=/^-?[0-9]+$/;function I(){}l(I,G);I.prototype.a=function(a,c){var b=new a.b;b.g=this;b.a=c;b.b={};return b};function J(){}l(J,I);J.prototype.b=function(a,c){return 8==a.a?!!c:G.prototype.b.apply(this,arguments)};J.prototype.a=function(a,c){return J.M.a.call(this,a,c)};/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var K={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" ")},L={AG:[null,[null,null,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}","\\d{7}(?:\\d{3})?",null,null,"2684601234"],[null,null,"268(?:464|7(?:2[0-9]|64|7[0-689]|8[02-68]))\\d{4}","\\d{10}",null,null,"2684641234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,
"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"26848[01]\\d{4}","\\d{10}",null,null,"2684801234"],"AG",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"26840[69]\\d{4}","\\d{10}",null,null,"2684061234"],null,"268",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],AI:[null,[null,null,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"2644(?:6[12]|9[78])\\d{4}","\\d{7}(?:\\d{3})?",null,null,"2644612345"],
[null,null,"264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}","\\d{10}",null,null,"2642351234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"AI",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"264",[null,null,"NA","NA"],[null,null,"NA","NA"],null,
null,[null,null,"NA","NA"]],AS:[null,[null,null,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"6846(?:22|33|44|55|77|88|9[19])\\d{4}","\\d{7}(?:\\d{3})?",null,null,"6846221234"],[null,null,"684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}","\\d{10}",null,null,"6847331234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,
"5002345678"],[null,null,"NA","NA"],"AS",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"684",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],BB:[null,[null,null,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}","\\d{7}(?:\\d{3})?",null,null,"2464123456"],[null,null,"246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|8(?:[2-5]\\d|83))\\d{4}",
"\\d{10}",null,null,"2462501234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900\\d{7}|246976\\d{4}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"24631\\d{5}","\\d{10}",null,null,"2463101234"],"BB",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"246",[null,null,"NA","NA"],[null,null,"246(?:292|41[7-9]|43[01])\\d{4}",
"\\d{10}",null,null,"2464301234"],null,null,[null,null,"NA","NA"]],BM:[null,[null,null,"[4589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}","\\d{7}(?:\\d{3})?",null,null,"4412345678"],[null,null,"441(?:[37]\\d|5[0-39])\\d{5}","\\d{10}",null,null,"4413701234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}",
"\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"BM",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"441",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],BS:[null,[null,null,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:0[1-3]|12|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}","\\d{7}(?:\\d{3})?",null,null,"2423456789"],[null,null,"242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|727)\\d{4}",
"\\d{10}",null,null,"2423591234"],[null,null,"242300\\d{4}|8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"BS",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"242",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],CA:[null,[null,null,
"[2-9]\\d{9}|3\\d{6}","\\d{7}(?:\\d{3})?"],[null,null,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}|310\\d{4}","\\d{7}(?:\\d{3})?",null,null,"2042345678"],[null,null,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}","\\d{7}(?:\\d{3})?",null,null,"2042345678"],
[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}","\\d{7}(?:\\d{3})?",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"CA",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,null,[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],DM:[null,[null,null,"[57-9]\\d{9}","\\d{7}(?:\\d{3})?"],
[null,null,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}","\\d{7}(?:\\d{3})?",null,null,"7674201234"],[null,null,"767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}","\\d{10}",null,null,"7672251234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"DM",1,"011","1",
null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"767",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],DO:[null,[null,null,"[589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})",
"\\d{7}(?:\\d{3})?",null,null,"8092345678"],[null,null,"8[024]9[2-9]\\d{6}","\\d{7}(?:\\d{3})?",null,null,"8092345678"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"DO",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"8[024]9",[null,null,"NA","NA"],
[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],GD:[null,[null,null,"[4589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}","\\d{7}(?:\\d{3})?",null,null,"4732691234"],[null,null,"473(?:4(?:0[2-79]|1[04-9]|20|58)|5(?:2[01]|3[3-8])|901)\\d{4}","\\d{10}",null,null,"4734031234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",
null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"GD",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"473",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],GU:[null,[null,null,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}",
"\\d{7}(?:\\d{3})?",null,null,"6713001234"],[null,null,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}","\\d{7}(?:\\d{3})?",null,null,"6713001234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}",
"\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"GU",1,"011","1",null,null,"1",null,null,1,null,null,[null,null,"NA","NA"],null,"671",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],JM:[null,[null,null,"[589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}","\\d{7}(?:\\d{3})?",null,null,
"8765123456"],[null,null,"876(?:2[16-9]\\d|[348]\\d{2}|5(?:0[3-9]|27|6[0-24-9]|[3-578]\\d)|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}","\\d{10}",null,null,"8762101234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"JM",1,"011","1",null,null,"1",null,null,null,
null,null,[null,null,"NA","NA"],null,"876",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],KN:[null,[null,null,"[589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}","\\d{7}(?:\\d{3})?",null,null,"8692361234"],[null,null,"869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-6])\\d{4}","\\d{10}",null,null,"8697652917"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],
[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"KN",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"869",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],KY:[null,[null,null,"[3589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}","\\d{7}(?:\\d{3})?",null,null,"3452221234"],
[null,null,"345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[2-9]|3[689]))\\d{4}","\\d{10}",null,null,"3453231234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002345678"],[null,null,"900[2-9]\\d{6}|345976\\d{4}","\\d{10}",null,null,"9002345678"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"KY",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"345849\\d{4}","\\d{10}",null,null,
"3458491234"],null,"345",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],LC:[null,[null,null,"[5789]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}","\\d{7}(?:\\d{3})?",null,null,"7584305678"],[null,null,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-8]))\\d{4}","\\d{10}",null,null,"7582845678"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}",
"\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"LC",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"758",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],MP:[null,[null,null,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}",
"\\d{7}(?:\\d{3})?",null,null,"6702345678"],[null,null,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}","\\d{7}(?:\\d{3})?",null,null,"6702345678"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"MP",1,"011","1",null,null,
"1",null,null,1,null,null,[null,null,"NA","NA"],null,"670",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],MS:[null,[null,null,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"664491\\d{4}","\\d{7}(?:\\d{3})?",null,null,"6644912345"],[null,null,"66449[2-6]\\d{4}","\\d{10}",null,null,"6644923456"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,
"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"MS",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"664",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],PR:[null,[null,null,"[5789]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"(?:787|939)[2-9]\\d{6}","\\d{7}(?:\\d{3})?",null,null,"7872345678"],[null,null,"(?:787|939)[2-9]\\d{6}","\\d{7}(?:\\d{3})?",null,null,"7872345678"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}",
"\\d{10}",null,null,"8002345678"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002345678"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"PR",1,"011","1",null,null,"1",null,null,1,null,null,[null,null,"NA","NA"],null,"787|939",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],SX:[null,[null,null,"[5789]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"7215(?:4[2-8]|8[239]|9[056])\\d{4}","\\d{7}(?:\\d{3})?",
null,null,"7215425678"],[null,null,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}","\\d{10}",null,null,"7215205678"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002123456"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002123456"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"SX",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"721",[null,null,"NA","NA"],[null,null,
"NA","NA"],null,null,[null,null,"NA","NA"]],TC:[null,[null,null,"[5689]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"649(?:712|9(?:4\\d|50))\\d{4}","\\d{7}(?:\\d{3})?",null,null,"6497121234"],[null,null,"649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-7])|4[34][1-3])\\d{4}","\\d{10}",null,null,"6492311234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002345678"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002345678"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}",
"\\d{10}",null,null,"5002345678"],[null,null,"64971[01]\\d{4}","\\d{10}",null,null,"6497101234"],"TC",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"649",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],TT:[null,[null,null,"[589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"868(?:2(?:01|2[1-6]|3[1-5])|6(?:0[79]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}","\\d{7}(?:\\d{3})?",null,null,"8682211234"],[null,null,"868(?:2(?:[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",
"\\d{10}",null,null,"8682911234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002345678"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002345678"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"TT",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"868",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"868619\\d{4}","\\d{10}"]],US:[null,[null,null,
"[2-9]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[01678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",
"\\d{7}(?:\\d{3})?",null,null,"2015555555"],[null,null,"(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[01678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",
"\\d{7}(?:\\d{3})?",null,null,"2015555555"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002345678"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002345678"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"US",1,"011","1",null,null,"1",null,null,1,[[null,"(\\d{3})(\\d{4})","$1-$2",null,null,null,1],[null,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,1]],[[null,"(\\d{3})(\\d{3})(\\d{4})",
"$1-$2-$3"]],[null,null,"NA","NA"],1,null,[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],VC:[null,[null,null,"[5789]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}","\\d{7}(?:\\d{3})?",null,null,"7842661234"],[null,null,"784(?:4(?:3[0-4]|5[45]|89|9[0-58])|5(?:2[6-9]|3[0-4]))\\d{4}","\\d{10}",null,null,"7844301234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,
"8002345678"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002345678"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"VC",1,"011","1",null,null,"1",null,null,null,null,null,[null,null,"NA","NA"],null,"784",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],VG:[null,[null,null,"[2589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})",
"\\d{7}(?:\\d{3})?",null,null,"2842291234"],[null,null,"284(?:(?:3(?:0[0-3]|4[0-367]|94)|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})","\\d{10}",null,null,"2843001234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002345678"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002345678"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"VG",1,"011","1",null,null,"1",null,null,null,null,null,[null,
null,"NA","NA"],null,"284",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]],VI:[null,[null,null,"[3589]\\d{9}","\\d{7}(?:\\d{3})?"],[null,null,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}","\\d{7}(?:\\d{3})?",null,null,"3406421234"],[null,null,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}","\\d{7}(?:\\d{3})?",
null,null,"3406421234"],[null,null,"8(?:00|44|55|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"8002345678"],[null,null,"900[2-9]\\d{6}","\\d{10}",null,null,"9002345678"],[null,null,"NA","NA"],[null,null,"5(?:00|33|44|66|77|88)[2-9]\\d{6}","\\d{10}",null,null,"5002345678"],[null,null,"NA","NA"],"VI",1,"011","1",null,null,"1",null,null,1,null,null,[null,null,"NA","NA"],null,"340",[null,null,"NA","NA"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function M(){this.a={}}M.b=function(){return M.a?M.a:M.a=new M};
var oa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},pa=RegExp("[+\uff0b]+"),qa=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),
ra=/^\(?\$1\)?$/;function N(a,c){if(null==c)return null;c=c.toUpperCase();var b=a.a[c];if(null==b){b=L[c];if(null==b)return null;b=(new J).a(E.i(),b);a.a[c]=b}return b}function O(a){a=K[a];return null==a?"ZZ":a[0]};function P(a){this.H=RegExp("\u2008");this.B="";this.m=new n;this.v="";this.h=new n;this.u=new n;this.j=!0;this.w=this.o=this.D=!1;this.F=M.b();this.s=0;this.b=new n;this.A=!1;this.l="";this.a=new n;this.f=[];this.C=a;this.J=this.g=Q(this,this.C)}var R=new E;r(R,11,"NA");
var ta=/\[([^\[\]])*\]/g,ua=/\d(?=[^,}][^,}])/g,va=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),S=/[- ]/;
function Q(a,c){var b;if(null!=c&&isNaN(c)&&c.toUpperCase()in L){b=N(a.F,c);if(null==b)throw"Invalid region code: "+c;b=x(b,10)}else b=0;b=N(a.F,O(b));return null!=b?b:R}
function T(a){for(var c=a.f.length,b=0;b<c;++b){var d=a.f[b],e=x(d,1);if(a.v==e)return!1;var f;f=a;var g=d,k=x(g,1);if(-1!=k.indexOf("|"))f=!1;else{k=k.replace(ta,"\\d");k=k.replace(ua,"\\d");p(f.m);var m;m=f;var g=x(g,2),u="999999999999999".match(k)[0];u.length<m.a.b.length?m="":(m=u.replace(new RegExp(k,"g"),g),m=m.replace(RegExp("9","g"),"\u2008"));0<m.length?(f.m.a(m),f=!0):f=!1}if(f)return a.v=e,a.A=S.test(w(d,4)),a.s=0,!0}return a.j=!1}
function U(a,c){for(var b=[],d=c.length-3,e=a.f.length,f=0;f<e;++f){var g=a.f[f];0==y(g,3)?b.push(a.f[f]):(g=w(g,3,Math.min(d,y(g,3)-1)),0==c.search(g)&&b.push(a.f[f]))}a.f=b}P.prototype.K=function(){this.B="";p(this.h);p(this.u);p(this.m);this.s=0;this.v="";p(this.b);this.l="";p(this.a);this.j=!0;this.w=this.o=this.D=!1;this.f=[];this.A=!1;this.g!=this.J&&(this.g=Q(this,this.C))};P.prototype.L=function(a){return this.B=wa(this,a)};
function wa(a,c){a.h.a(c);var b=c;if(qa.test(b)||1==a.h.b.length&&pa.test(b)){var b=c,d;"+"==b?(d=b,a.u.a(b)):(d=oa[b],a.u.a(d),a.a.a(d));c=d}else a.j=!1,a.D=!0;if(!a.j){if(!a.D)if(V(a)){if(W(a))return X(a)}else if(0<a.l.length&&(b=a.a.toString(),p(a.a),a.a.a(a.l),a.a.a(b),b=a.b.toString(),d=b.lastIndexOf(a.l),p(a.b),a.b.a(b.substring(0,d))),a.l!=xa(a))return a.b.a(" "),X(a);return a.h.toString()}switch(a.u.b.length){case 0:case 1:case 2:return a.h.toString();case 3:if(V(a))a.w=!0;else return a.l=
xa(a),Y(a);default:if(a.w)return W(a)&&(a.w=!1),a.b.toString()+a.a.toString();if(0<a.f.length){b=ya(a,c);d=za(a);if(0<d.length)return d;U(a,a.a.toString());return T(a)?Aa(a):a.j?Z(a,b):a.h.toString()}return Y(a)}}function X(a){a.j=!0;a.w=!1;a.f=[];a.s=0;p(a.m);a.v="";return Y(a)}function za(a){for(var c=a.a.toString(),b=a.f.length,d=0;d<b;++d){var e=a.f[d],f=x(e,1);if((new RegExp("^(?:"+f+")$")).test(c))return a.A=S.test(w(e,4)),c=c.replace(new RegExp(f,"g"),w(e,2)),Z(a,c)}return""}
function Z(a,c){var b=a.b.b.length;return a.A&&0<b&&" "!=a.b.toString().charAt(b-1)?a.b+" "+c:a.b+c}function Y(a){var c=a.a.toString();if(3<=c.length){for(var b=a.o&&0<y(a.g,20)?v(a.g,20)||[]:v(a.g,19)||[],d=b.length,e=0;e<d;++e){var f=b[e],g;(g=null==a.g.a[12]||a.o||w(f,6))||(g=x(f,4),g=0==g.length||ra.test(g));g&&va.test(x(f,2))&&a.f.push(f)}U(a,c);c=za(a);return 0<c.length?c:T(a)?Aa(a):a.h.toString()}return Z(a,c)}
function Aa(a){var c=a.a.toString(),b=c.length;if(0<b){for(var d="",e=0;e<b;e++)d=ya(a,c.charAt(e));return a.j?Z(a,d):a.h.toString()}return a.b.toString()}
function xa(a){var c=a.a.toString(),b=0,d;1!=w(a.g,10)?d=!1:(d=a.a.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1));d?(b=1,a.b.a("1").a(" "),a.o=!0):null!=a.g.a[15]&&(d=new RegExp("^(?:"+w(a.g,15)+")"),d=c.match(d),null!=d&&null!=d[0]&&0<d[0].length&&(a.o=!0,b=d[0].length,a.b.a(c.substring(0,b))));p(a.a);a.a.a(c.substring(b));return c.substring(0,b)}
function V(a){var c=a.u.toString(),b=new RegExp("^(?:\\+|"+w(a.g,11)+")"),b=c.match(b);return null!=b&&null!=b[0]&&0<b[0].length?(a.o=!0,b=b[0].length,p(a.a),a.a.a(c.substring(b)),p(a.b),a.b.a(c.substring(0,b)),"+"!=c.charAt(0)&&a.b.a(" "),!0):!1}
function W(a){if(0==a.a.b.length)return!1;var c=new n,b;a:{b=a.a.toString();if(0!=b.length&&"0"!=b.charAt(0))for(var d,e=b.length,f=1;3>=f&&f<=e;++f)if(d=parseInt(b.substring(0,f),10),d in K){c.a(b.substring(f));b=d;break a}b=0}if(0==b)return!1;p(a.a);a.a.a(c.toString());c=O(b);"001"==c?a.g=N(a.F,""+b):c!=a.C&&(a.g=Q(a,c));a.b.a(""+b).a(" ");a.l="";return!0}
function ya(a,c){var b=a.m.toString();if(0<=b.substring(a.s).search(a.H)){var d=b.search(a.H),b=b.replace(a.H,c);p(a.m);a.m.a(b);a.s=d;return b.substring(0,a.s+1)}1==a.f.length&&(a.j=!1);a.v="";return a.h.toString()};h("Cleave.AsYouTypeFormatter",P);h("Cleave.AsYouTypeFormatter.prototype.inputDigit",P.prototype.L);h("Cleave.AsYouTypeFormatter.prototype.clear",P.prototype.K);}.call((typeof global==="object"&&global)?global:window);
