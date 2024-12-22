window.onload=function(){
    s1=document.getElementById('slide1')
    s2=document.getElementById('slide2')
    s3=document.getElementById('slide3')
    s1.style.display='block'
    s2.style.display='none'
    s3.style.display='none'
    s1b.style.backgroundColor='rgb(36, 35, 35)'
}
s1b=document.getElementById('s1')
s1b.addEventListener('click',function(){
    s1.style.display='block'
    s2.style.display='none'
    s3.style.display='none'
    s1b.style.backgroundColor='rgb(36, 35, 35)'
    s2b.style.backgroundColor='gainsboro'
    s3b.style.backgroundColor='gainsboro'

})
s2b=document.getElementById('s2')
s2b.addEventListener('click',function(){
    s1.style.display='none'
    s2.style.display='block'
    s3.style.display='none'
    s1b.style.backgroundColor='gainsboro'
    s2b.style.backgroundColor='rgb(36, 35, 35)'
    s3b.style.backgroundColor='gainsboro'
})
s3b=document.getElementById('s3')
s3b.addEventListener('click',function(){
    s1.style.display='none'
    s2.style.display='none'
    s3.style.display='block'
    s1b.style.backgroundColor='gainsboro'
    s2b.style.backgroundColor='gainsboro'
    s3b.style.backgroundColor='rgb(36, 35, 35)'
})

let arr=[{
    src:`images/food1.png`,title:'LASAL CHEESE',price:'$18.00',desc:'Lorem ipsum dolor .'
},{
    src:`images/food2.png`,title:'JUMBO CRAB SHRIMP',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food3.png`,title:'KOKTAIL JUICE',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food4.png`,title:'CAPO STEAK',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food5.png`,title:'ORGANIC FRUIT SALAD',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food6.png`,title:'CHEESE PIZZA',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food7.jpeg`,title:'KOFTA MEAT',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food8.jpeg`,title:'SPANISH PIES',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food9.jpeg`,title:'CHEESE TOST',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food10.jpeg`,title:'FRUIT SALAD',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food11.jpeg`,title:'CHICKEN SHAWARMA',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
},{
    src:`images/food12.jpeg`,title:'MEGA CHEESE PIZZA',price:'$18.00',desc:'Lorem ipsum dolor sit elit.'
}]
menu=document.createElement('div')
menu.setAttribute('class','menu')
for(i of arr){
items=document.createElement('div')
items.setAttribute('class','items')
menu.appendChild(items)
image=document.createElement('img')
image.setAttribute('src',i.src)
items.appendChild(image)
ts=document.createElement('div')
ts.setAttribute('class','ts')
tp=document.createElement('div')
tp.setAttribute('class','tp')
h2=document.createElement('h2')
h2.innerHTML=i.title
tp.appendChild(h2)
price=document.createElement('p')
price.setAttribute('class','price')
price.innerHTML=i.price
tp.appendChild(price)
ts.appendChild(tp)
hr=document.createElement('hr')
ts.appendChild(hr)
lorem=document.createElement('p')
lorem.setAttribute('class','lorem')
lorem.innerHTML=i.desc
ts.appendChild(lorem)
items.appendChild(ts)
menuParent = document.getElementById('menu')
menuParent.appendChild(menu)
console.log(i.src)
console.log(i.desc)
console.log(i.price)
}

galleryContainer=document.getElementById('images')
for(i=1;i<=6;i++){
    x=document.createElement('img')
    x.setAttribute('src',`images/gallery${i}.jpeg`)
    galleryContainer.appendChild(x)
}