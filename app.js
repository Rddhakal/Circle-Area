// Selectors
const btn = document.querySelector('.btn');

// Functions
btn.addEventListener('click', ()=>{
    const inp = document.querySelector('.radius-inp');
    const diameterText = document.querySelector('.diameter-text');
    const radiusText = document.querySelector('.radius-text');
    const area = document.querySelector('.area');
    const result = (22/7 * Math.pow(inp.value, 2));
    diameterText.innerHTML = Math.pow(inp.value, 2);
    radiusText.innerHTML = inp.value;
    area.innerHTML = `Area is : ${Math.round(result)}`;
})