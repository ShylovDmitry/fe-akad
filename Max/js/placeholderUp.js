/**
 * Created by Макс on 01.11.2016.
 */
var a = document.getElementById('input'),
    p = document.getElementById('placeholder');

g = function(name) {
    return document.getElementById(name);
};

function up(a,p) {

    a.onfocus = function () {
        return p.classList.add('up');
    };

    a.onblur = function () {
        if (a.value.length != 0) {
            return p.classList.add('up');
        }
        return p.classList.remove('up');
    };
};

up( g('name'), g('plName') );
up( g('email'), g('plEmail') );
up( g('object'), g('plObject') );
up( g('Massage'), g('plMassage') );
up( g('input'), g('placeholder') );
