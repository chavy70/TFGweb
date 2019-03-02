(function($) {
    $.fn.extend({
        rotateit: function(options) {
            return this.each(function() {
                var actualElement = $(this);
                var rotatorUICreated = false;
                var resizeUICreated = false;
                var isRotationMode = true;
                var sobject = null;
                function sObject() {
                    this.el = null;
                    this.cursor = '';
                    this.grabx = null;
                    this.graby = null;
                    this.width = null;
                    this.height = null;
                    this.left = null;
                    this.top = null;
                }
                var mouseCaptured = false;
                var prevX, prevY, currentX, currentY;
                var perDegree = parseInt(getValue(actualElement.css('height')) / 90) - 1;
                var counter = 0;
                var degree = 0.0;
                function getValue(val) {
                    return parseInt(val.replace('px', ''));
                }

                var toprightcorner = $('<div/>').css('position', 'absolute').attr('id', 'tright').css('z-index', '11px').css('width', '16px').css('height', '16px').css('display', 'none');
                var bottomrightcorner = $('<div/>').css('position', 'absolute').attr('id', 'bright').css('z-index', '11px').css('width', '16px').css('height', '16px').css('display', 'none');
                var bottomleftcorner = $('<div/>').css('position', 'absolute').attr('id', 'bleft').css('z-index', '11px').css('width', '16px').css('height', '16px').css('display', 'none');
                var topleftcorner = $('<div/>').css('position', 'absolute').attr('id', 'tleft').css('z-index', '11px').css('width', '16px').css('height', '16px').css('display', 'none');
                toprightcorner.css('background-image', 'url(tr.png)');
                bottomrightcorner.css('background-image', 'url(br.png)');
                bottomleftcorner.css('background-image', 'url(bl.png)');
                topleftcorner.css('background-image', 'url(tl.png)');
                /*resize related */
                var l = $('<div/>').css('border', 'solid 1px black').css('width', '4px').css('height', '4px').css('position', 'absolute').css('background-color', 'transparent').attr('id', 'l');
                var r = $('<div/>').css('border', 'solid 1px black').css('width', '4px').css('height', '4px').css('position', 'absolute').css('background-color', 'transparent').attr('id', 'r');
                var t = $('<div/>').css('border', 'solid 1px black').css('width', '4px').css('height', '4px').css('position', 'absolute').css('background-color', 'transparent').attr('id', 't');
                var b = $('<div/>').css('border', 'solid 1px black').css('width', '4px').css('height', '4px').css('position', 'absolute').css('background-color', 'transparent').attr('id', 'b');
                var tl = $('<div/>').css('border', 'solid 1px black').css('width', '4px').css('height', '4px').css('position', 'absolute').css('background-color', 'transparent').attr('id', 'tl');
                var tr = $('<div/>').css('border', 'solid 1px black').css('width', '4px').css('height', '4px').css('position', 'absolute').css('background-color', 'transparent').attr('id', 'tr');
                var bl = $('<div/>').css('border', 'solid 1px black').css('width', '4px').css('height', '4px').css('position', 'absolute').css('background-color', 'transparent').attr('id', 'bl');
                var br = $('<div/>').css('border', 'solid 1px black').css('width', '4px').css('height', '4px').css('position', 'absolute').css('background-color', 'transparent').attr('id', 'br');
                var wrapper = $("<div/>").css('position', 'absolute').css('top', (getValue(actualElement.css('top')) - 2) + 'px').css('left', (getValue(actualElement.css('left')) - 2) + 'px').css('width', (getValue(actualElement.css('width')) + 2) + 'px').css('height', (getValue(actualElement.css('height')) + 2) + 'px');
                wrapper.attr('id', 'wrapper');
                wrapper.css('z-index', '100');
                wrapper.attr('class', 'smart');
                actualElement.css('z-index', '99');

                function setHandles() {
                    try {
                        var top = getValue(wrapper.get(0).style.top);
                        var left = getValue(wrapper.get(0).style.left);
                        var width = getValue(wrapper.get(0).style.width);
                        var height = getValue(wrapper.get(0).style.height);

                        t.css('top', top - 6 + 'px');
                        t.css('left', left + width / 2 - 4 + 'px');
                        b.css('top', (top + height) + 'px');
                        b.css('left', left + width / 2 - 4 + 'px');
                        l.css('top', (top + height / 2 - 4) + 'px');
                        l.css('left', left - 6 + 'px');
                        r.css('top', (top + height / 2 - 4) + 'px');
                        r.css('left', (left + width) + 'px');
                        tl.css('top', (top - 6) + 'px');
                        tl.css('left', (left - 6) + 'px');
                        tr.css('top', (top - 6) + 'px');
                        tr.css('left', (left + width) + 'px');
                        bl.css('top', (top + height) + 'px');
                        bl.css('left', (left - 6) + 'px');
                        br.css('top', (top + height) + 'px');
                        br.css('left', (left + width) + 'px');

                    } catch (ex) { }
                }
                function toggleHandles(display) {
                    $('#t').css('display', display);
                    $('#l').css('display', display);
                    $('#b').css('display', display);
                    $('#r').css('display', display);
                    $('#tl').css('display', display);
                    $('#tr').css('display', display);
                    $('#bl').css('display', display);
                    $('#br').css('display', display);
                    if (display == '')
                        wrapper.css('border', '1px dashed blue');
                    else
                        wrapper.css('border', 'none');
                }
                function getMousePosition(e, el) {
                    var posx = 0;
                    var posy = 0;
                    if (e.offsetX || e.offsetY) {
                        posx = e.offsetX;
                        posy = e.offsetY;
                    }
                    else if (e.pageX || e.pageY) {
                        posx = e.pageX - getValue($(el).css('left'));
                        posy = e.pageY - getValue($(el).css('top'));
                    }
                    else if (e.clientX || e.clientY) {
                        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                    }
                    return [posx, posy];
                }
                function getCursor(el, e) {
                    var cursor = '';
                    var mousePos = getMousePosition(e, el);
                    if (mousePos[1] < 8) cursor += "n";
                    else if (mousePos[1] > el.offsetHeight - 8) cursor += "s";
                    if (mousePos[0] < 8) cursor += "w";
                    else if (mousePos[0] > el.offsetWidth - 8) cursor += "e";

                    return cursor;
                }
                function getParentElement(el, type, value) {
                    temp = el;
                    while ((temp != null) && (temp.tagName != "BODY")) {
                        if (eval("temp." + type) == value) {
                            el = temp;
                            return el;
                        }
                        temp = temp.parentElement;
                    }
                    return el;
                }

                function createRotatorUI() {
                    rotatorUICreated = true;
                    toprightcorner.css('left', (getValue(actualElement.css('width')) - 20) + 'px').css('top', '0px');
                    topleftcorner.css('left', '0px').css('top', '0px');
                    bottomleftcorner.css('left', '0px').css('top', (getValue(actualElement.css('height')) - 20) + 'px');
                    bottomrightcorner.css('left', (getValue(actualElement.css('width')) - 20) + 'px').css('top', (getValue(actualElement.css('height')) - 20) + 'px');

                    actualElement.prepend(toprightcorner);
                    actualElement.prepend(topleftcorner);
                    actualElement.prepend(bottomleftcorner);
                    actualElement.prepend(bottomrightcorner);
                }
                function cleanRotatorUI() {
                    rotatorUICreated = false;
                    topleftcorner.detach();
                    toprightcorner.detach();
                    bottomleftcorner.detach();
                    bottomrightcorner.detach();
                }
                function createResizeUI() {
                    resizeUICreated = true;
                    actualElement.before(t);
                    actualElement.before(l);
                    actualElement.before(b);
                    actualElement.before(r);
                    actualElement.before(tl);
                    actualElement.before(tr);
                    actualElement.before(br);
                    actualElement.before(bl);
                    actualElement.before(wrapper);
                    setHandles();
                    toggleHandles('');
                }
                function cleanResizeUI() {
                    resizeUICreated = false;
                    l.detach();
                    r.detach();
                    t.detach();
                    b.detach();
                    tl.detach();
                    tr.detach();
                    bl.detach();
                    br.detach();
                    wrapper.detach();
                }

                actualElement.mouseenter(function(e) {
                    if (!rotatorUICreated && isRotationMode) createRotatorUI();
                    if (isRotationMode) { toprightcorner.css('display', ''); bottomleftcorner.css('display', ''); bottomrightcorner.css('display', ''); topleftcorner.css('display', ''); }
                });
                actualElement.mouseleave(function(e) { if (rotatorUICreated) cleanRotatorUI(); toprightcorner.css('display', 'none'); bottomleftcorner.css('display', 'none'); bottomrightcorner.css('display', 'none'); topleftcorner.css('display', 'none'); });

                actualElement.click(function(e) {
                    if (!resizeUICreated) {
                        isRotationMode = false;
                        mouseCaptured = false;
                        createResizeUI();
                    }
                });
                actualElement.mouseout(function(e) { if (isRotationMode) { isRotationMode = true; cleanResizeUI(); } });
                $(document).mousedown(function(e) {
                    var el = getParentElement(e.target, "className", "smart");
                    if (el == null || $(el).attr('id') != wrapper.attr('id')) {
                        sobject = null;
                        return;
                    }
                    cursor = getCursor(el, e);
                    if (cursor == "default") { cleanResizeUI(); return; }
                    sobject = new sObject();
                    sobject.el = el;
                    sobject.cursor = cursor;
                    sobject.grabx = e.clientX;
                    sobject.graby = e.clientY;
                    sobject.width = el.offsetWidth;
                    sobject.height = el.offsetHeight;
                    sobject.left = el.offsetLeft;
                    sobject.top = el.offsetTop;

                    e.returnValue = false;
                    e.cancelBubble = true;
                });

                toprightcorner.mousedown(function(e) { mouseCaptured = true; prevX = e.pageX; prevY = e.pageY; currentX = e.pageX; currentY = e.pageY; });
                bottomrightcorner.mousedown(function(e) { mouseCaptured = true; degree += 90; prevX = e.pageX; prevY = e.pageY; currentX = e.pageX; currentY = e.pageY; });
                bottomleftcorner.mousedown(function(e) { mouseCaptured = true; degree += 180; prevX = e.pageX; prevY = e.pageY; currentX = e.pageX; currentY = e.pageY; });
                topleftcorner.mousedown(function(e) { mouseCaptured = true; degree += 270; prevX = e.pageX; prevY = e.pageY; currentX = e.pageX; currentY = e.pageY; });

                function setRotation(counter, degree) {
                    if (counter > 0) {
                        if (counter % perDegree == 0) {
                            degree++;
                            rotate(degree);
                        }
                    }
                    return degree;
                }
                $(document).mousemove(function(e) {
                    var isForward = true;
                    if (mouseCaptured && isRotationMode) {
                        currentX = e.pageX;
                        currentY = e.pageY;
                        if (degree < 90 && (currentY - prevY) > 0) {
                            counter += (currentY - prevY);
                            degree = setRotation(counter, degree, isForward);
                        }
                        if (degree >= 90 && degree < 180 && (prevX - currentX) > 0) {
                            counter += (prevX - currentX);
                            degree = setRotation(counter, degree, isForward);
                        }
                        if (degree >= 180 && degree < 270 && (prevY - currentY) >= 0) {
                            counter += (prevY - currentY);
                            degree = setRotation(counter, degree, isForward);
                        }
                        if (degree >= 270 && degree < 360 && (currentX - prevX) >= 0) {
                            counter += (currentX - prevX);
                            degree = setRotation(counter, degree, isForward);
                        }
                        if (degree > 359.0) {
                            degree = 0.0;
                            counter = 0;
                        }
                        prevX = currentX;
                        prevY = currentY;
                    }
                    if (!isRotationMode) {
                        var el, str;

                        el = getParentElement(e.target, "className", "smart");

                        if (el.className == "smart") {
                            str = getCursor(el, e);
                            if (str == "") str = "default";
                            else str += "-resize";
                            el.style.cursor = str;
                        }
                        if (sobject != null) {
                            if (cursor.indexOf("e") != -1)
                                sobject.el.style.width = Math.max(8, sobject.width + e.clientX - sobject.grabx) + "px";

                            if (cursor.indexOf("s") != -1)
                                sobject.el.style.height = Math.max(8, sobject.height + e.clientY - sobject.graby) + "px";

                            if (cursor.indexOf("w") != -1) {
                                sobject.el.style.left = Math.min(sobject.left + e.clientX - sobject.grabx, sobject.left + sobject.width - 8) + "px";
                                sobject.el.style.width = Math.max(8, sobject.width - e.clientX + sobject.grabx) + "px";
                            }
                            if (cursor.indexOf("n") != -1) {
                                sobject.el.style.top = Math.min(sobject.top + e.clientY - sobject.graby, sobject.top + sobject.height - 8) + "px";
                                sobject.el.style.height = Math.max(8, sobject.height - e.clientY + sobject.graby) + "px";
                            }

                            setHandles();
                        }
                    }
                });
                toprightcorner.mouseup(function(e) { mouseCaptured = false; });
                bottomrightcorner.mouseup(function(e) { mouseCaptured = false; });
                bottomleftcorner.mouseup(function(e) { mouseCaptured = false; });
                topleftcorner.mouseup(function(e) { mouseCaptured = false; });
                $(document).mouseup(function(e) {
                    mouseCaptured = false;
                    if (!isRotationMode) {
                        if (sobject != null) {
                            sobject = null;
                            actualElement.animate({
                                'width': (getValue(wrapper.css('width')) - 2) + 'px',
                                'height': (getValue(wrapper.css('height')) - 2) + 'px',
                                'top': (getValue(wrapper.css('top')) + 2) + 'px',
                                'left': (getValue(wrapper.css('left')) + 2) + 'px'
                            }, 500, function() { isRotationMode = true; cleanResizeUI(); });
                        }
                    }
                });

                function rotate(degree) {
                    actualElement.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
                    actualElement.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
                }
            });

        }
    });
})(jQuery);