let total = 0; 
const totalPriceElement = document.getElementById('Total_price');
const totalElement = document.getElementById('total');

document.getElementById('card1').addEventListener('click', function(){
    
    const proPrice1 = document.getElementById('productNmae1');
    const proPrice1IneerText = proPrice1.innerText;
    
    const showText1 = document.getElementById('selecedItem1');
    showText1.innerText = proPrice1IneerText;

    const price  = document.getElementById('productPrice1');
    total += parseFloat(price.innerText);
    totalPriceElement.innerText = total.toFixed(2);
    totalElement.innerText = total.toFixed(2);
    enabledBtn();
    
});

document.getElementById('card2').addEventListener('click', function(){
    
    const proPrice2 = document.getElementById('productNmae2');
    const proPrice1IneerText = proPrice2.innerText;
    


    const showText2 = document.getElementById('selecedItem2');
    showText2.innerText = proPrice1IneerText;

    const price  = document.getElementById('productPrice2');
    total += parseFloat(price.innerText);
    totalPriceElement.innerText = total.toFixed(2);
    totalElement.innerText = total.toFixed(2);
    enabledBtn();
});

document.getElementById('card3').addEventListener('click', function(){
    
    const proPrice3 = document.getElementById('productNmae3');
    const proPrice1IneerText = proPrice3.innerText;
    


    const showText3 = document.getElementById('selecedItem3');
    showText3.innerText = proPrice1IneerText;

    const price  = document.getElementById('productPrice3');
    total += parseFloat(price.innerText);
    totalPriceElement.innerText = total.toFixed(2);
    totalElement.innerText = total.toFixed(2);
    enabledBtn();
});

document.getElementById('card4').addEventListener('click', function(){
    
    const proPrice4 = document.getElementById('productNmae4');
    const proPrice1IneerText = proPrice4.innerText;
    


    const showText4 = document.getElementById('selecedItem4');
    showText4.innerText = proPrice1IneerText;

    const price  = document.getElementById('productPrice4');
    total += parseFloat(price.innerText);
    totalPriceElement.innerText = total.toFixed(2);
    totalElement.innerText = total.toFixed(2);
    enabledBtn();
});

document.getElementById('card5').addEventListener('click', function(){
    
    const proPrice5 = document.getElementById('productNmae5');
    const proPrice1IneerText = proPrice5.innerText;
    


    const showText5 = document.getElementById('selecedItem5');
    showText5.innerText = proPrice1IneerText;

    const price  = document.getElementById('productPrice5');
    total += parseFloat(price.innerText);
    totalPriceElement.innerText = total.toFixed(2);
    totalElement.innerText = total.toFixed(2);
    enabledBtn();
});

document.getElementById('card6').addEventListener('click', function(){
    
    const proPrice6 = document.getElementById('productNmae6');
    const proPrice1IneerText = proPrice6.innerText;
    


    const showText6 = document.getElementById('selecedItem6');
    showText6.innerText = proPrice1IneerText;

    const price  = document.getElementById('productPrice6');
    total += parseFloat(price.innerText);
    totalPriceElement.innerText = total.toFixed(2);
    totalElement.innerText = total.toFixed(2);
    enabledBtn();
});

// APPLY BUTTON ABLE DISBLE
document.getElementById('cupon_input').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyButton = document.getElementById('apply_btn');

    if( text === "SELL200" ){
        applyButton.removeAttribute('disabled');
    }
    else
    {
        applyButton.setAttribute('disabled', true);
    }

});

// DISCOUNT PART

document.getElementById('apply_btn').addEventListener('click', function(){
     
    if (totalPriceElement.innerText >= 200){
        var discount = 0.20; 
        var discountedP = totalPriceElement.innerText - ( totalPriceElement.innerText *  .20 );
         
        var discountPriceinner = totalPriceElement.innerText - discountedP;
        var discountPrice = discountPriceinner.toFixed(2);
  
  
        const disShow = document.getElementById('disc_show');
        const discoundInner =  disShow.innerText;
      //   const disShowPrice = parseFloat(discoundInner.toFixed(2));
      disShow.innerText = discountPrice;

      const totalTk = totalPriceElement.innerText - discountPrice;

      if( discountPrice >= 0 ){
        const total = document.getElementById('total');
        const totalInner = total.innerText;
        total.innerText = totalTk;
      }

      
    }
    else
    {
        alert('sorry! you can not buy product upto 200tk');
    }
});


   function enabledBtn(){
    const makeTk = document.getElementById('total');
   
   const makettk = parseFloat(makeTk.innerText);
    console.log(makettk);
   if ( makettk > 0 ){
   
    make_btn.removeAttribute('disabled');
   }
   else
   {
    make_btn.setAttribute('disabled', true);
   }

   }


//    document.getElementById('sell200').addEventListener('click', function(){

        
//    });


