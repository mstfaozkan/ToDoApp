// let val;

// Single Element
//Selecting Elemtns

// val = document.getElementById('header');
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// //val = val.id;
// //val = val.className;
// val.style.fontSize='45px';
// val.style.color='blue';
// val.style.fontWeight='bold';
// // val.style.display='none';

// document.getElementById('header')
// .innerText='AAaaAa';

// document.getElementById('header')
// .innerHTML='<b>Bbb</b>';

// console.log(val);

// document.querySelector()

// console.log(document.querySelector('#header'));
// console.log(document.querySelector('.card-header'));

/* Multiple Selection */

//val = document.getElementsByClassName
// ('list-group-item');

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i=0;i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }

// document.getElementsByTagName()

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');

// document.querySelectorAll()

// val = document.querySelectorAll('li');

// val.forEach(function(item,index){
//     item.textContent=`${index} - hello`;
// });

// val = document.querySelectorAll('li:nth-child(odd)');

/* Dom elementleri üzerinde gezinme */

// let list = document.querySelector('.list-group');
// // val = list.childNodes;
// val = list.children;
// val = list.firstChild;
// val = list.parentNode.parentElement;
// val = list.firstElementChild;
// val = val.children;
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
// val = list.childNodes[1].nodeType;
// val = list.childNodes.length;

// // Create element

// const li = document.createElement('li');

// // add class
// li.className='list-group-item list-group-item-secondary';// li.className='list-group-item list-group-item-secondary';
// li.setAttribute('title','new item');
// // li.setAttribute('class','list-group-item list-group-item-secondary');
// li.setAttribute('data-id','5');

// // text node
// const count = document.querySelector('#task-list');
// const text = document.createTextNode(count.childElementCount+1+' Yazı ekledim');
// li.appendChild(text);
// const a = document.createElement('a');
// a.setAttribute('href','#');
// // 
// a.className = 'delete-item float-right';
// // 
// const i = document.createElement('i');
// i.className='fas fa-times';
// a.appendChild(i);
// //append to li
// li.appendChild(a);
// //append to ul
// document.querySelector('#task-list').appendChild(li);
// console.log(li);

/* Element Silme & Güncelleme */

// const taskList = document.querySelector('#task-list');
// **removing elements
// taskList.remove();
// // taskList.childNodes[7].remove();
// taskList.children[0].remove();
// taskList.removeChild(taskList.children[3]);

//** removing attribute */
// taskList.children[1].removeAttribute('class');
// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute('class');
// }

// ** Replacing Elements

// const cardHeader = document.querySelector('.card-header');

// Create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));
// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// ** Classes
// let val;
// link = taskList.children[0].children[0];
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// val = link.classList[1];
// link.classList.add('new');
// link.classList.remove('new');

// Attribute
// val = link.getAttribute('data-id');
// val = link.getAttribute('href');
// link.setAttribute('href','https://www.google.com');
// val = link.getAttribute('href');
// val = link.hasAttribute('href');


/** Event Listeners Ders 40 */
// const btn = document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('#btnAddNewTask');
// btn.addEventListener('click', function(e){
//     // console.log('btn clicked');
//     let val;
    
//     // val=e;
//     // val=e.target;
//     // val=e.target.id;
//     // // val=e.target.classList;
//     // val = e.type;
    
//     console.log('a');
//     e.preventDefault();
// });

// btn.addEventListener('click', btnClick);
// btn.addEventListener('click', btnClick2);
// btn2.addEventListener('click',btnClick);
// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn 2 clicked');
// }
// console.log(val);

/** Mouse event Ders 41 */

// const btn = document.querySelector('#btnDeleteAll');
// const ul = document.querySelector('#task-list');
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

// double click

// btn.addEventListener('dblclick',function(e){
//     console.log(`event type : ${e.type}`);
// });

/** Mouse tıklayınca (mouse basmaya devam edince) mousedown,
 * mouse bırakınca mouseup olayı gerçekleşir.
 */
// btn.addEventListener('mousedown',eventHandler);
// btn.addEventListener('mouseup',eventHandler);

/** Mouse enter */
// ul.addEventListener('mouseenter',eventHandler);
// /** Mouse leave */
// ul.addEventListener('mouseleave',eventHandler);

// // Mouse over 
// ul.addEventListener('mouseover',eventHandler);
// ul.addEventListener('mouseout',eventHandler);
// // Mouse out

// Mouse move
// const h5 = document.querySelector('h5');
// ul.addEventListener('mousemove',eventHandler);
// function eventHandler(event){
//     console.log(`event type: ${event.type}`);
//     h5.textContent=`Mouse X : ${event.offsetX}
//      Mouse Y : ${event.offsetY}`;
//     // event.preventDefault();
// }

// // const taskName = document.querySelector('#txtTaskName');
// // const form = document.querySelector('form');

// taskName.addEventListener('keydown',eventHandler);
// taskName.addEventListener('keyup',eventHandler);
// taskName.addEventListener('focus',eventHandler);
// taskName.addEventListener('blur',eventHandler);
// taskName.addEventListener('cut',eventHandler);
// taskName.addEventListener('paste',eventHandler);
// taskName.addEventListener('select',eventHandler);

// form.addEventListener('submit',eventHandler);
// function eventHandler(e){
//     console.log(`event type : ${e.type}`);
    // console.log(`key code : ${e.keyCode}`);
    // console.log('value :'+ e.target.value);
    // e.target.style.backgroundColor='green';
// }

/** Event Bubbling  Ders 43*/
// const form = document.querySelector('form');
// const cardBody = document.querySelector('.card-body');
// const card = document.querySelector('.card');
// const container = document.querySelector('.container');

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// });

// cardBody.addEventListener('click',function(e){
//     console.log('cardBody');
//     e.stopPropagation();
// });

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// });

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// });

/**Capturing  */

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// },true);

// cardBody.addEventListener('click',function(e){
//     console.log('cardBody');
//     e.stopPropagation();
// },true);

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// },true);

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// },true);

// const deleteItems = document.querySelectorAll('.fa-times');
// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
// })

// const ul = document.querySelector('ul');
// ul.addEventListener('click',function(e){
//     if(e.target.className=='fas fa-times'){
//         (e.target.parentElement.parentElement.remove());
//         e.preventDefault();
//     }

// });


/** Local Store */
// set item
let val;
const firstName = localStorage.setItem('firstName','Sadık');
const lastName = localStorage.setItem('lastName','Turan');
let hobbies = ['sinema','araba','gezmek'];
// get item
val = localStorage.getItem('firstName');
console.log(val);

// remove item
// localStorage.removeItem('firstName');
// localStorage.removeItem('firstItem');

// clear
// localStorage.clear();

// set array to storage

localStorage.setItem('hobies',JSON.stringify(hobbies));

val = JSON.parse(localStorage.getItem('hobies'));
console.log(val);



/** Session Storage */
// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');
// console.log(sessionStorage);