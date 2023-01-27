const buttons = document.querySelectorAll('button');
const bottomScreen = document.querySelector('.bottom .text');
const topScreen = document.querySelector('.top .text');
const number = [];
const operation = [];

function operate(topScreen, bottomScreen, operation)
{
    if(operation === '+')
    {
        return Number(topScreen) + Number(bottomScreen);
    }
    if(operation === '-')
    {
        return Number(topScreen) - Number(bottomScreen);
    }
    if(operation === 'x')
    {
        return Number(topScreen) * Number(bottomScreen);
    }
    if(operation === '/')
    {
        return Number(topScreen) / Number(bottomScreen);
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.dataset.key === 'AC')
        {
            number.splice(0, number.length);
            operation.splice(0, operation.length);
            bottomScreen.textContent = '0';
            topScreen.textContent = '0';
        }
        else
        {
            if(button.dataset.key === '=')
            {
                bottomScreen.textContent = operate(topScreen.textContent, bottomScreen.textContent, operation.shift());
                number.splice(0, number.length);
                operation.splice(0, operation.length);
                topScreen.textContent = '0';
            }
            else
            {   
                if(button.dataset.key === '+' ||
                   button.dataset.key === '-' ||
                   button.dataset.key === 'x' ||
                   button.dataset.key === '/'  )
                {
                    operation.push(button.dataset.key);
                    if(operation.length === 2)
                    {
                        topScreen.textContent = operate(topScreen.textContent, bottomScreen.textContent, operation.shift());
                        number.splice(0, number.length);
                        bottomScreen.textContent = '0';
                    }
                    else
                    {
                        topScreen.textContent = number.join('');
                        number.splice(0, number.length);
                        bottomScreen.textContent = '0';
                    }
                }
                else
                {   
                    number.push(button.dataset.key);
                    bottomScreen.textContent = number.join('');
                }
            }
        }
    })
});