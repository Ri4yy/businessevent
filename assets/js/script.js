document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu'),
    btnMenu = document.querySelector('.btn-menu'),
    html = document.querySelector('html')

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('menu--open')
        html.classList.toggle('no-scroll')

        btnMenu.classList.toggle('btn-menu--open')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 768) {
            menu.classList.remove('menu--open')
            btnMenu.classList.remove('btn-menu--open')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    let priceContainer = $('#price-container');

    $('.price__item-btn').click((e) => {
        let price = $(e.target).data('price');

        priceContainer.html(price);

        if(price == 1000) {
            $('#opora-russia').prop('checked', true);
            $('#guest').prop('checked', false);
        } else {
            $('#opora-russia').prop('checked', false);
            $('#guest').prop('checked', true);
        }
        
        showModal($('.modal-pay'));
    })

    $('.custom-radio input').on('click', (e) => {
        let price = $(e.target).val()
        priceContainer.html(price);
    })

    // Модальное окно
    function showModal(modalBody) {
        modalBody.addClass('active');
        $('html').addClass('no-scroll');

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                modalBody.removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        modalBody.click(function (e) {
            if ($(e.target).closest('.modal__wrapper').length == 0) {
                $(this).removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        $('.close-modal').click((e) => {
            modalBody.removeClass('active');
            $('html').removeClass('no-scroll');
        })
    }

    Fancybox.bind('[data-fancybox="gallery"]', {
        compact: false,
        contentClick: "iterateZoom",
        Images: {
            Panzoom: {
                maxScale: 2,
            },
        },
        wheel: "slide",
        Toolbar: {
            display: {
                left: [
                    "infobar",
                ],
                middle: [],
                right: [
                    "iterateZoom",
                    "close",
                ],
            }
        }
    });
})