export const render_start = async() =>{
    document.body.classList.add('start__body')
    backgroundCreate()
    const button = menuCreate();
    decoreCreate()

    return button
}

const backgroundCreate = () =>{
    const blue = document.createElement('div')
    const red = document.createElement('div')

    blue.classList.add('start__background-blue')
    red.classList.add('start__background-red')
    document.body.append(blue, red)
}

const menuCreate = () =>{
    const crossRed = document.createElement('img')
    crossRed.src = '../../assets/start-img/cross-red.svg'

    const crossBlue = document.createElement('img')
    crossBlue.src = '../../assets/start-img/cross-blue.svg'

    const zeroRed = document.createElement('img')
    zeroRed.src = '../../assets/start-img/zero-red.svg'

    const zeroBlue = document.createElement('img')
    zeroBlue.src = '../../assets/start-img/zero-blue.svg'


    const menu = document.createElement('div')
    menu.classList.add('start__menu')

    const crossContainer = document.createElement('div')
    crossContainer.classList.add('start__cross-container')

    const zeroContainer = document.createElement('div')
    zeroContainer.classList.add('start__zero-container')
    

    const cross = document.createElement('p')
    cross.textContent = 'КРЕСТИКИ'
    cross.classList.add('start__text')


    const zero = document.createElement('p')
    zero.textContent = 'НОЛИКИ'
    zero.classList.add('start__text')

    crossContainer.append(crossRed,cross,crossBlue)
    zeroContainer.append(zeroRed,zero,zeroBlue)

    const start__button = document.createElement('button')
    start__button.textContent = 'НАЧАТЬ'
    start__button.classList.add('start__btn')

    menu.append(crossContainer,start__button,zeroContainer)
    document.body.append(menu)

    return start__button

}

export const decoreCreate = () => {
    const decore1 = document.createElement('img')
    decore1.src = '../../assets/start-img/decore1.svg'
    decore1.classList.add('start__decore1')

    const decore2 = document.createElement('img')
    decore2.src = '../../assets/start-img/decore2.svg'
    decore2.classList.add('start__decore2')

    const decore3_1 = document.createElement('img')
    decore3_1.src = '../../assets/start-img/decore3.svg'
    decore3_1.style.cssText = `
        position: absolute;
        left: 0;
        bottom:5px;
        transform: rotate(-90deg); 
    `
    const decore3_2 = document.createElement('img')
    decore3_2.src = '../../assets/start-img/decore3.svg'
    decore3_2.style.cssText = `
        position: absolute;
        left: 0;
        top:5px;  
    `
    const decore3_3 = document.createElement('img')
    decore3_3.src = '../../assets/start-img/decore3.svg'
    decore3_3.style.cssText = `
        position: absolute;
        right: 0;
        top:5px; 
        transform: rotate(90deg);  
    `

    const decore3_4 = document.createElement('img')
    decore3_4.src = '../../assets/start-img/decore3.svg'
    decore3_4.style.cssText = `
        position: absolute;
        right: 0;
        bottom:5px; 
        transform: rotate(180deg);  
    `


    document.body.append(decore1,decore2,decore3_1,decore3_2,decore3_3,decore3_4)
}