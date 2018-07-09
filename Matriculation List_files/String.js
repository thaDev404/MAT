//-- Start Changing The Case of Words--
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}; 

function toProperCase(s) {
    s.value = ReplaceMultipleSpace(s.value).toProperCase();
}
function Upper(r) {
    r.value = ReplaceMultipleSpace(r.value).toUpperCase();
}
function Lower(r) {
    r.value = ReplaceMultipleSpace(r.value).toLowerCase();
}
document.onmousedown = disableclick
status = "Right Click Disabled"
function disableclick(e) {
//    if (event.button == 2)
//        alert("Sorry Right Click has been disabled!");
//    return false;
}

function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

function NumericOnly(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if (!((key >= 48 && key <= 57) || (key == 8) || (key == 9))) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function NumericAndPlusOnly(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if (!((key >= 48 && key <= 57) || (key == 8) || (key == 9) || (key == 43))) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


function Money(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if (!((key >= 48 && key <= 57) || (key == 8) || (key == 9) || (key == 46))) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
function isValidPhoneNumber(p) {
    var phoneRe = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;
    var digits = p.replace(/\D/g, "");
    return (digits.match(phoneRe) !== null);
}

function ReplaceMultipleSpace(s) {
    return s.replace(/ {2,}/g, ' ')
}
 //--Call the Function By Adding --  onKeyUp="return toProperCase(this)"  --  in the Control Properties in the Source-- 
//--Call the Function By Adding --  onKeyUp="return Upper(this)"  --  in the Control Properties in the Source--
//--Call the Function By Adding --  onKeyUp="return Lower(this)"  --  in the Control Properties in the Source--

//--End Changing The Case of Words--
