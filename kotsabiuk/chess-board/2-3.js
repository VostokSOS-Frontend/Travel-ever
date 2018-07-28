var input = prompt("Enter your data here? please");

for (let i = input.length - 1; i >= 0; i--)
{
    document.write(`<p> ${input[i]}<p>`);
}