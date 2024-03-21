/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
ModAPI.addEventListener("sendchatmessage", function (event) {
    var spam;
    if (event.message.includes("/deeznuts")) {
        event.preventDefault = true;
        setTimeout(function () {
            spam = setInterval(function () {
                ModAPI.player.sendChatMessage({ msg: event.message.split("/deeznuts")[1].trim() + Math.floor(Math.random() * 1000) });
            }, 1000);
        }, 1000);
        ModAPI.addEventListener("key", function (event) {
            if (event.key == 1) {
                clearInterval(spam);
            }
        });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhbW1lci1tb2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsb0ZBQW9GO0FBQ3BJLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhbW1lci1tb2QvLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJNb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcInNlbmRjaGF0bWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc3BhbTtcbiAgICBpZiAoZXZlbnQubWVzc2FnZS5pbmNsdWRlcyhcIi9kZWV6bnV0c1wiKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3BhbSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBNb2RBUEkucGxheWVyLnNlbmRDaGF0TWVzc2FnZSh7IG1zZzogZXZlbnQubWVzc2FnZS5zcGxpdChcIi9kZWV6bnV0c1wiKVsxXS50cmltKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSB9KTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgTW9kQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09IDEpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNwYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==