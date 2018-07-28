var input = prompt("Enter your data here? please");

for (let i = 0; i < input.length; i++)
{
    for(let j = 0; j < 100; j++)
    {
    document.write(`<span> ${input[i]}<span>`);
    }
    document.write(`<br/>`);
}