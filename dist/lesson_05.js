"use strict";
var box1 = document.getElementById('demo');
if (box1 !== null) {
    box1.addEventListener('click', function () {
        console.log('hello 111');
    });
}
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
    console.log('hello 222');
});
