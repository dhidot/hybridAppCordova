document.addEventListener('init', function(event) {
    var page = event.target;
    if (page.id === 'beranda') {
        page.querySelector('#sejarah').onclick = function () {
            document.querySelector('#myNavigator').pushPage(
                'pages/sejarah.html',
                {
                    data: {title: 'Sejarah'}
                }
            );
        };

        page.querySelector('#pimpinan').onclick = function () {
            document.querySelector('#myNavigator').pushPage(
                'pages/pimpinan.html',
                {
                    data: {title: 'Pimpinan FSM'}
                }
            );
        };
    }
});