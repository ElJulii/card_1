const page_one = document.querySelector('.card__page-one');
const page_two = document.querySelector('.card__page-two');
const page_three = document.querySelector('.card__page-three');
const page_four = document.querySelector('.card__page-fourth');

const pages = document.querySelectorAll('.card__body');

if (window.innerWidth <= 800) {

    pages.forEach((page, index) => {
        switch (index) {
            case 0:
                page.addEventListener('click', () => {
                    if (page.style.top === '25%') {
                        page.style.top = '0';
                        page.style.zIndex = '40';
                    } else {
                        page.style.top = '25%';
                        setTimeout(() => {
                            page.style.zIndex = '10';
                        }, 2000)
                    }
                })
                break;
            case 1:
                page.addEventListener('click', () => {
                    if (page.style.top === '0px') {
                        page.style.top = '-25%';
                        page.style.zIndex = '30';
                    } else {
                        page.style.top = '0';
                        setTimeout(() => {
                            page.style.zIndex = '20';
                        }, 2000)
                    }
                })
                break;
            case 2:
                page.addEventListener('click', () => {
                    if (page.style.bottom === '25%') {
                        page.style.bottom = '50%'
                        page.style.zIndex = '20';
                    } else {
                        page.style.bottom = '25%';
                        setTimeout(() => {
                            page.style.zIndex = '30';
                        }, 2000)
                    }
                })
                break;
            case 3:
                page.addEventListener('click', () => {
                    if (page.style.bottom === '50%') {
                        page.style.bottom = '75%'
                        setTimeout(() => {
                            page.style.zIndex = '10';
                        }, 2000)
                    } else {
                        page.style.bottom = '50%';
                        page.style.zIndex = '40';
                    }

                })
                break;
        }
    })

} else {
    pages.forEach((page, index) => {
        switch (index) {
            case 0:
                page.addEventListener('click', () => {
                    if (page.style.left === '25%') {
                        page.style.left = '50%';
                        page.style.zIndex = '40';
                    } else  {
                        page.style.left = '25%';
                        setTimeout(() => {
                            page.style.zIndex = '10';
                        }, 2000)
                    }
                })
                break;
            case 1:
                page.addEventListener('click', () => {
                    if (page.style.left === '0px') {
                        page.style.left = '25%';
                        page.style.zIndex = '30';
                    } else {
                        page.style.left = '0';
                        setTimeout(() => {
                            page.style.zIndex = '20';
                        }, 2000)
                    }
                })
                break;
            case 2:
                page.addEventListener('click', () => {
                    if (page.style.right === '25%') {
                        page.style.right = '0';
                        page.style.zIndex = '20';
                    } else {
                        page.style.right = '25%';
                        setTimeout(() => {
                            page.style.zIndex = '30';
                        }, 2000)
                    }
                })
                break;
            case 3:
                page.addEventListener('click', () => {
                    if (page.style.right === '50%') {
                        page.style.right = '25%';
                        setTimeout(() => {
                            page.style.zIndex = '10'
                        }, 2000)

                    } else {
                        page.style.right = '50%';
                        page.style.zIndex = '40';
                    }
                })
                break;
        }
    })
}