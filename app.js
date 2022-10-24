// const input=document.getElementById('textid')
// const input=document.querySelector('#textid');
// const t=document.querySelector('#showtext');
const $=(selector)=>document.querySelector(selector)
//  const input=$('#textid');
//  const t=$('#showtext');
// input.addEventListener('keyup',()=>{
//     t.textContent=input.value;
// })
const direc_img=$('#textid');
const btn=$('#btn');
const content=$('#content');
content.innerHTML=
btn.addEventListener('click',()=>{
    content.innerHTML=`
    <img src="${direc_img.value}">`
})