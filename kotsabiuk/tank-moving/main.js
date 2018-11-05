const horizontalShift = 10;
const verticalShift = 5;
const tankSide = 50;

let tank = document.createElement('div');
tank.classList.add('tank');
document.addEventListener('keydown', handler);
document.body.appendChild(tank);

function handler(e)
{
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
        
    let button = e.key;
    if (button === 'ArrowRight')
    {
        let left = parseInt(tank.style.left) || 0;
        if (windowWidth - horizontalShift - tankSide>= left)
            tank.style.left = `${left + horizontalShift}`;
    }
    else if (button === 'ArrowLeft')
    {
        let left = parseInt(tank.style.left) || 0;
        if (left - horizontalShift >= 0)
            tank.style.left = `${left - horizontalShift}`;
    }
    else if (button === 'ArrowUp')
    {
        let top = parseInt(tank.style.top) || 0;
        if (top - verticalShift >= 0)
            tank.style.top = `${top - verticalShift}`;
    }
    else if (button === 'ArrowDown')
    {
        let top = parseInt(tank.style.top) || 0;
        if (top + verticalShift + tankSide<= windowHeight)
            tank.style.top = `${top + verticalShift}`;
    }
}