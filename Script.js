
let add = document.querySelector('.add-product');
let add1 = document.querySelector('.add-product1');
let add2 = document.querySelector('.add-product2');
let add3 = document.querySelector('.add-product3');
let items = document.querySelector('.Cart-items');
let price = document.querySelector('.price');
let price1 = document.querySelector('.price1');
let price2 = document.querySelector('.price2');
let price3= document.querySelector('.price3');
let total = document.querySelector('.total');
const bin = document.querySelector('.del');
const bin1 = document.querySelector('.delete1');
const bin2 = document.querySelector('.delete2');
const bin3 = document.querySelector('.delete3');
const box = document.querySelector('.product1');
const box1 = document.querySelector('.product2');
const box2 = document.querySelector('.product3');
const box3 = document.querySelector('.product4');
 const plus = document.querySelector('.plus');
 const plus1 = document.querySelector('.plus1');
 const plus2 = document.querySelector('.plus2');
 const plus3 = document.querySelector('.plus3');
 const minus = document.querySelector('.minus');
 const minus1 = document.querySelector('.minus1');
 const minus2 = document.querySelector('.minus2');
 const minus3 = document.querySelector('.minus3');
 const container = document.querySelectorAll('.product-1');
const like = document.querySelector('.faa');
const like1 = document.querySelector('.fa1');
const like2 = document.querySelector('.fa2');
const like3 = document.querySelector('.fa3');




like.addEventListener('click' , loveit);
like1.addEventListener('click' , loveitt);
like2.addEventListener('click' , loveittt);
like3.addEventListener('click' , loveitttt);

function loveit(e){ 
  if(e.target.classList.contains("hear")){
   like.setAttribute("style", "color:red;");
   like.classList.add("notlike");
   like.classList.remove("hear");
} else if(e.target.classList.contains("notlike")){
    like.setAttribute("style", "color:black;");
    like.classList.add("hear");
    like.classList.remove("notlike");
    }
}
function loveitt(e){ 
    if(e.target.classList.contains("hear1")){
     like1.setAttribute("style", "color:red;");
     like1.classList.add("notlike");
     like1.classList.remove("hear1");
  } else if(e.target.classList.contains("notlike")){
      like1.setAttribute("style", "color:black;");
      like1.classList.add("hear1");
      like1.classList.remove("notlike");
      }
  }
  function loveittt(e){ 
    if(e.target.classList.contains("hear2")){
     like2.setAttribute("style", "color:red;");
     like2.classList.add("notlike");
     like2.classList.remove("hear2");
  } else if(e.target.classList.contains("notlike")){
      like2.setAttribute("style", "color:black;");
      like2.classList.add("hear2");
      like2.classList.remove("notlike");
      }
  }
  function loveitttt(e){ 
    if(e.target.classList.contains("hear3")){
     like3.setAttribute("style", "color:red;");
     like3.classList.add("notlike");
     like3.classList.remove("hear3");
  } else if(e.target.classList.contains("notlike")){
      like3.setAttribute("style", "color:black;");
      like3.classList.add("hear3");
      like3.classList.remove("notlike");
      }
  }

function cart(){   
  let now = parseInt(add.innerHTML) + 1 ;
   add.innerHTML = now ;
   let pric = parseInt(price.innerHTML) + 70 + '$' ;
   price.innerHTML = pric ;
};

function cart_remove(){   
    if (parseInt(add.innerHTML) >= 1){
    let now = parseInt(add.innerHTML) - 1 ;
     add.innerHTML = now ;
    
     let pric = parseInt(price.innerHTML) - 70 + '$' ;
   price.innerHTML = pric ;
    }

  };

function cart1(){
    let now = parseInt(add1.innerHTML) + 1 ;
     add1.innerHTML = now ;
     let pric = parseInt(price1.innerHTML) + 120 + '$' ;
     price1.innerHTML = pric ;
    
  
  };
  
  function cart_remove1(){   
  
     if (parseInt(add1.innerHTML) >= 1){
        let now = parseInt(add1.innerHTML) - 1 ;
         add1.innerHTML = now ;
        
         let pric = parseInt(price1.innerHTML) - 120 + '$' ;
         price1.innerHTML = pric ;
        }
  };

  function cart2(){
    let now = parseInt(add2.innerHTML) + 1 ;
     add2.innerHTML = now ;
     let pric = parseInt(price2.innerHTML) + 250 + '$' ;
     price2.innerHTML = pric ;
     
  
  };
  function cart_remove2(){   
    
     if (parseInt(add2.innerHTML) >= 1){
        let now = parseInt(add2.innerHTML) - 1 ;
         add2.innerHTML = now ;
        
         let pric = parseInt(price2.innerHTML) - 250 + '$' ;
   price2.innerHTML = pric ;
        }
  };

  function cart3(){
    let now = parseInt(add3.innerHTML) + 1 ;
     add3.innerHTML = now ;
     let pric = parseInt(price3.innerHTML) + 300 + '$' ;
     price3.innerHTML = pric ;
  
  };
  function cart_remove3(){   
   
     if (parseInt(add3.innerHTML) >= 1){
        let now = parseInt(add3.innerHTML) - 1 ;
         add3.innerHTML = now ;
        
         let pric = parseInt(price3.innerHTML) - 300 + '$' ;
   price3.innerHTML = pric ;
        
        }
  };
  function countt(e){

    if(e.target.classList.contains("plus")){

    cart();
}else if(e.target.classList.contains("minus")){

    cart_remove();
}else if(e.target.classList.contains("del")){
    box.remove();
    add.innerHTML= 0 ;
    price.innerHTML = 0 ;

}else if(e.target.classList.contains("plus1")){

    cart1();
}else if(e.target.classList.contains("delete1")){
    box1.remove();
    add1.innerHTML= 0 ;
    price1.innerHTML = 0 ;

}else if(e.target.classList.contains("minus1")){

    cart_remove1();
}else if(e.target.classList.contains("plus2")){
    cart2();}else if(e.target.classList.contains("minus2")){

        cart_remove2();
    }else if(e.target.classList.contains("delete2")){
        box2.remove();
        add2.innerHTML= 0 ;
        price2.innerHTML = 0 ;
    
    }
    else if(e.target.classList.contains("plus3")){
        cart3();
    }else if(e.target.classList.contains("minus3")){

        cart_remove3();
    }else if(e.target.classList.contains("delete3")){
        box3.remove();
        add3.innerHTML= 0 ;
        price3.innerHTML = 0 ;
    
    }

    
    let count = parseInt(add.innerHTML) + parseInt(add1.innerHTML) + parseInt(add2.innerHTML) + parseInt(add3.innerHTML);
    items.innerHTML = count ;
    let money = parseInt(price.innerHTML) + parseInt(price1.innerHTML) + parseInt(price2.innerHTML) + parseInt(price3.innerHTML);
    total.innerHTML = money + '$' ;
  }

plus.addEventListener('click' , countt);
plus1.addEventListener('click' , countt);
plus2.addEventListener('click' , countt);
plus3.addEventListener('click' , countt);
minus.addEventListener('click' , countt);
minus1.addEventListener('click' , countt);
minus2.addEventListener('click' , countt);
minus3.addEventListener('click' , countt);
bin.addEventListener('click' , countt);
bin1.addEventListener('click' , countt);
bin2.addEventListener('click' , countt);
bin3.addEventListener('click' , countt);




