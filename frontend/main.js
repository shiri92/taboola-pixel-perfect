'use strict';
console.log('main');


$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault();
        onSaveForm();
    });
});


function onSaveForm() {
    let user = {
        name: $('.name').val(),
        email: $('.email').val(),
        company: $('.company').val(),
        phone: $('.phone').val(),
        isAdmin: $('.is-admin').val()
    }
    saveForm(user);
}

