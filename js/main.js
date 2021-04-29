'use strict';
{
    const nav_list = document.getElementById('nav_list'); const menu_trigger = document.getElementById('menu_trigger'); menu_trigger.addEventListener('click', () => { nav_list.style.display === 'none' ? nav_list.style.display = 'block' : nav_list.style.display = 'none'; });
}

// $('#nav_list a[href]').on('click', function (event) {
//     $('.menu_trigger').trigger('click');
// });


