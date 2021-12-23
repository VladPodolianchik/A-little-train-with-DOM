let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

let title = document.createElement('title');
title.innerHTML = 'First JS element';

document.head.appendChild(metaUtf8);
document.head.appendChild(title);

// document.head.insertBefore(metaUtf8, document.head.firstElementChild);
// document.head.insertBefore(title);

let metaDescr = document.createElement('meta');
metaDescr.setAttribute('name', 'description');
metaDescr.setAttribute('content', 'Home Work');

// metaAuthor.setAttribute('content', 'Home Work');

let metaAuthor = document.createElement('meta');
metaAuthor.setAttribute('name', 'author');
metaAuthor.setAttribute('content', 'Vlad');

document.head.appendChild(metaDescr);
document.head.appendChild(metaAuthor);

document.head.appendChild(title);

let div1 = document.createElement('div');
div1.classList.add('page');
let div5 = document.createElement('div');
div5.classList.add('page__header')
let div4 = document.createElement('div');
div4.classList.add('page__block');

document.body.appendChild(div1);
div1.appendChild(div5);
div1.appendChild(div4);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

div5.appendChild(h1);
div5.appendChild(p1);

let div2 = document.createElement('div');
div2.classList.add('block__left'); 
let div3 = document.createElement('div');
div3.classList.add('block__right'); 

div4.appendChild(div2);
div4.appendChild(div3);

let h4 = document.createElement('h4');
h4.innerHTML = 'freelancer';
let h5 = document.createElement('h2');
h5.innerHTML = 'Initially<br>designed to';
let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this<br> mistaken idea of denouncing';
let button1 = document.createElement('button');
button1.innerHTML = 'Start here';

div2.appendChild(h4);
div2.appendChild(h5);
div2.appendChild(p2);
div2.appendChild(button1);

let h6 = document.createElement('h4');
h6.innerHTML = 'studio';
let h7 = document.createElement('h2');
h7.innerHTML = `Initially<br>designed to`;
let p3 = document.createElement('p');
p3.innerHTML = 'But I must explain to you how all this<br>mistaken idea of denouncing';
let button2 = document.createElement('button');
button2.innerHTML = 'Start here';

div3.appendChild(h6);
div3.appendChild(h7);
div3.appendChild(p3);
div3.appendChild(button2);

div1.style.textAlign = 'center';
div1.style.marginTop = '120px';

div2.style.padding = '80px 90px';
div2.style.border = '1px solid #E8E9ED';
div2.style.borderRadius = '5px';

div3.style.padding = '80px 90px';
div3.style.border = '1px solid #E8E9ED';
div3.style.borderRadius = '5px';

div4.style.display = 'flex';
div4.style.justifyContent = 'center';

div5.style.marginBottom = '60px';

h1.style.fontFamily = "'Arvo', serif";
h1.style.fontWeight = 'normal';
h1.style.fontSize = '36px';

p1.style.fontFamily = "'Open Sans', sans-serif";
p1.style.fontSize = '14px';
p1.style.color = '#9FA3A7';

p2.style.fontFamily = "'Open Sans', sans-serif";
p2.style.fontSize = '12px';
p2.style.color = '#9FA3A7';

p3.style.fontFamily = "'Open Sans', sans-serif";
p3.style.fontSize = '12px';
p3.style.color = '#9FA3A7';

h4.style.fontFamily = "'Montserrat', sans-serif";
h4.style.fontSize = '12px';
h4.style.color = '#9FA3A7';
h4.style.textTransform = 'uppercase';
h4.style.letterSpacing = '1px';
h4.style.margin = '0';

h6.style.fontFamily = "'Montserrat', sans-serif";
h6.style.fontSize = '12px';
h6.style.color = '#9FA3A7';
h6.style.textTransform = 'uppercase';
h6.style.letterSpacing = '1px';
h6.style.margin = '0';

h5.style.fontFamily = "'Arvo', serif";
h5.style.fontWeight = 'normal';
h5.style.fontSize = '36px';

h7.style.fontFamily = "'Arvo', serif";
h7.style.fontWeight = 'normal';
h7.style.fontSize = '36px';

button1.style.backgroundColor = 'transparent';
button1.style.border = '3px solid #FFC80A';
button1.style.padding = '12px 16px';
button1.style.borderRadius = '28px';
button1.style.textTransform = 'uppercase';
button1.style.fontFamily = "'Montserrat', sans-serif";
button1.style.letterSpacing = '1px';
button1.style.fontSize = '12px';
button1.style.marginTop = '50px';
button1.style.cursor = 'pointer';

button2.style.backgroundColor = 'transparent';
button2.style.border = '3px solid #FFC80A';
button2.style.padding = '12px 16px';
button2.style.borderRadius = '28px';
button2.style.textTransform = 'uppercase';
button2.style.fontFamily = "'Montserrat', sans-serif";
button2.style.letterSpacing = '1px';
button2.style.fontSize = '12px';
button2.style.marginTop = '50px';
button2.style.cursor = 'pointer';

let style = document.createElement('style');
style.innerHTML = `
    .block__left:hover, .block__right:hover {
        background-color: #8F75BE;
    }
    
    .block__left:hover h4, .block__right:hover h4 {
        color: #FFC80A !important;
    }

    .block__left:hover h2, .block__left:hover p, .block__left:hover button, .block__right:hover h2, .block__right:hover p,
    .block__right:hover button {
        color: white !important;
    }
`;

document.head.appendChild(style);
