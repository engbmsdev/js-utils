/*!
 * js-utils v1.0.0
 * https://github.com/engbmsdev/js-utils
 *
 * Date: 2015-03-04
 */

var uuid = (function () {
    return function(){
        // see: http://stackoverflow.com/a/2117523/343802
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
})();

function isTextInput(node) {
    return ['INPUT', 'TEXTAREA'].indexOf(node.nodeName) !== -1;
}

function isDef(value){
    return (typeof value != "undefined" && value!=null)
}

function isNotDef(value){
    return !isDef(value);   
}

function isEmpty(value){
    return !isNotEmpty(value);
}

function isNotEmpty(value){
    return (isDef(value) && value.length>0);
}

function isPositiveInt(value){
    return (!isNaN(parseFloat(value)) &&  isFinite(value) && parseInt(value) > 0);
}
