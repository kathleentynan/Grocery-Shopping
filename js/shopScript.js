<<<<<<< Updated upstream
var canvas;
var ctx;
var elemX, elemY;
var dx = 15;
var dy = 15;
var x = 930;
var y = 500;

var r = 85;
var WIDTH = 1200;
var HEIGHT = 650;
var selectedColor = "red";
var normalColor = "#daa671";
var cartDirection = "left";

/*if(localStorage.getItem("direction")!=null)
    cartDirection = localStorage.getItem("direction")
if(localStorage.getItem("cartX") && cartDirection.localeCompare("right")==0)
    x = parseInt(localStorage.getItem("cartX"))-130;
if(localStorage.getItem("cartY") && cartDirection.localeCompare("right")==0)
    y = parseInt(localStorage.getItem("cartY"))-5;
if(localStorage.getItem("cartX") && cartDirection.localeCompare("up")==0)
    x = parseInt(localStorage.getItem("cartX"))-80;
if(localStorage.getItem("cartY") && cartDirection.localeCompare("up")==0)
    y = parseInt(localStorage.getItem("cartY"))+85;
if(localStorage.getItem("cartX") && cartDirection.localeCompare("left")==0)
    x = parseInt(localStorage.getItem("cartX"))+60;
if(localStorage.getItem("cartY") && cartDirection.localeCompare("left")==0)
    y = parseInt(localStorage.getItem("cartY"))-60;
if(localStorage.getItem("cartX") && cartDirection.localeCompare("down")==0)
    x = parseInt(localStorage.getItem("cartX"))-70;
if(localStorage.getItem("cartY") && cartDirection.localeCompare("down")==0)
    y = parseInt(localStorage.getItem("cartY"))-210;*/

var isleWidth = 100;
var isleHeight = 320;
var checkoutWidth = 175;
var checkoutHeight = 80;

var AISLEENUM = {
    DAIRY: 0,
    BEVERAGES: 1,
    MEAT: 2,
    BREAD: 3,
    PRODUCE: 4,
    CHECKOUT: 5
};

var dairy = {
    selected: false,
    x: 0,
    y: 0,
    color: normalColor,
    value: AISLEENUM.DAIRY,
    label: "Dairy",
    ref: 'dairy.html',
    width: isleWidth,
    height: isleHeight
};
var beverages = {
    selected: false,
    x: 270,
    y: 340,
    color: normalColor,
    value: AISLEENUM.BEVERAGES,
    label: "Beverages",
    ref: 'beverages.html',
    width: isleWidth,
    height: isleHeight
};
var meat = {
    selected: false,
    x: 530,
    y: 0,
    color: normalColor,
    value: AISLEENUM.MEAT,
    label: "Meat",
    ref: 'meat.html',
    width: isleWidth,
    height: isleHeight
};
var bread = {
    selected: false,
    x: 780,
    y: 340,
    color: normalColor,
    value: AISLEENUM.BREAD,
    label: "Bread",
    ref: 'bakery.html',
    width: isleWidth,
    height: isleHeight
};
var produce = {
    selected: false,
    x: 1030,
    y: 0,
    color: normalColor,
    value: AISLEENUM.PRODUCE,
    label: "Produce",
    ref: 'produce.html',
    width: isleWidth,
    height: isleHeight
};
var checkout = {
    selected: false,
    x: 0,
    y: 570,
    color: normalColor,
    value: AISLEENUM.CHECKOUT,
    label: "Checkout",
    ref: 'checkout.html',
    width: checkoutWidth,
    height: checkoutHeight
};

var aisles = [];
aisles.push(dairy, beverages, meat, bread, produce, checkout);

var img = new Image();
img.src = "images/cart/cartLeft.png";

//create cart
var cart = (function(){
    return {
        circle : function(x,y,r, direction) {
            if (direction == "left"){
                img.src = "images/cart/cartLeft.png";
            } else if (direction == "right") {
=======
    var canvas;
    var ctx;
    var elemX, elemY;
    var dx = 15;
    var dy = 15;
    var x = 930;
    var y = 500;

    var r = 85;
    var WIDTH = 1100;
    var HEIGHT = 600;
    var selectedColor = "red";
    var normalColor = "#daa671";
    var cartDirection = "left";
    
    var selectedElement = false;

    var mousePos = {
        x: 0,
        y: 0
    }

    /*if(localStorage.getItem("direction")!=null)
        cartDirection = localStorage.getItem("direction")

    if(localStorage.getItem("cartX") && cartDirection.localeCompare("right")==0)
        x = parseInt(localStorage.getItem("cartX"))-130;
    if(localStorage.getItem("cartY") && cartDirection.localeCompare("right")==0)
        y = parseInt(localStorage.getItem("cartY"))-5;
    if(localStorage.getItem("cartX") && cartDirection.localeCompare("up")==0)
        x = parseInt(localStorage.getItem("cartX"))-80;
    if(localStorage.getItem("cartY") && cartDirection.localeCompare("up")==0)
        y = parseInt(localStorage.getItem("cartY"))+85;
    if(localStorage.getItem("cartX") && cartDirection.localeCompare("left")==0)
        x = parseInt(localStorage.getItem("cartX"))+60;
    if(localStorage.getItem("cartY") && cartDirection.localeCompare("left")==0)
        y = parseInt(localStorage.getItem("cartY"))-60;
    if(localStorage.getItem("cartX") && cartDirection.localeCompare("down")==0)
        x = parseInt(localStorage.getItem("cartX"))-70;
    if(localStorage.getItem("cartY") && cartDirection.localeCompare("down")==0)
        y = parseInt(localStorage.getItem("cartY"))-210;*/
    
    var isleWidth = 100;
    var isleHeight = 300;
    var checkoutWidth = 175;
    var checkoutHeight = 80;

    var AISLEENUM = {
        DAIRY: 0,
        BEVERAGES: 1,
        MEAT: 2,
        BREAD: 3,
        PRODUCE: 4,
        CHECKOUT: 5
    };
  
    var dairy = {
        selected: false,
        x: 0,
        y: 0,
        color: normalColor,
        value: AISLEENUM.DAIRY,
        label: "Dairy",
        ref: 'dragdropDairy.html',
        icon: 'images/icons/dairyIcon.png',
        width: isleWidth,
        height: isleHeight,
        iconColor: "#339df4"
    };
    var beverages = {
        selected: false,
        x: 250,
        y: 340,
        color: normalColor,
        value: AISLEENUM.BEVERAGES,
        label: "Beverages",
        ref: 'dragdropBeverage.html',
        icon: 'images/icons/beverageIcon.png',
        width: isleWidth,
        height: isleHeight,
        text: false,
        iconColor: '#fc8028'
    };
    var meat = {
        selected: false,
        x: 490,
        y: 0,
        color: normalColor,
        value: AISLEENUM.MEAT,
        label: "Meat",
        ref: 'dragdropMeat.html',
        icon: 'images/icons/meatIcon.png',
        width: isleWidth,
        height: isleHeight,
        text: false,
        iconColor: '#f44033',
    };
    var bread = {
        selected: false,
        x: 730,
        y: 340,
        color: normalColor,
        value: AISLEENUM.BREAD,
        label: "Bakery",
        ref: 'dragdropBakery.html',
        icon: 'images/icons/breadIcon.png',
        width: isleWidth,
        height: isleHeight,
        text: false,
        iconColor: "#f4e733"
    };
    var produce = {
        selected: false,
        x: 1000,
        y: 0,
        color: normalColor,
        value: AISLEENUM.PRODUCE,
        label: "Produce",
        ref: 'dragdropProduce.html',
        icon: 'images/icons/produceIcon.png',
        width: isleWidth,
        height: isleHeight,
        text: false,
        iconColor: '#39cc47',
    };
    var checkout = {
        selected: false,
        x: 0,
        y: 520,
        color: normalColor,
        value: AISLEENUM.CHECKOUT,
        label: "Checkout",
        ref: 'checkout.html',
        width: checkoutWidth,
        height: checkoutHeight,
        text: false,
        iconColor: 'white'
    };

    var aisles = [];
    aisles.push(dairy, beverages, meat, bread, produce, checkout);

    var img = new Image();
    img.src = "images/cart/cartLeft.png";

    //create cart
    var cart = (function(){
      return {
         circle : function(x,y,r, direction) {
             if (direction == "left"){
                 img.src = "images/cart/cartLeft.png";
             } else if (direction == "right") {
>>>>>>> Stashed changes
                img.src = "images/cart/cartRight.png";
            } else if (direction == "up") {
                img.src = "images/cart/cartUp.png";
            } else if (direction == "down"){
                img.src = "images/cart/cartDown.png";
            }
            ctx.drawImage(img, x, y, r, r);
        }
    }

<<<<<<< Updated upstream
}());

//isle rectangle
var isles = (function(){
    return {
        rect : function(x,y,w,h,color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.closePath();
            ctx.fill();
        }
=======
    }());

    var iconImageProduce = new Image();
    var iconImageDairy = new Image();
    var iconImageBeverages = new Image();
    var iconImageMeat = new Image();

    //aisles rectangle
    var isles = (function(){
        
      return {
          rect : function(x,y,w,h,icon,iconColor) {
              //iconImage.src = icon;
              ctx.fillStyle = normalColor;
              ctx.beginPath();
              ctx.rect(x,y,w,h);
              ctx.closePath();
              ctx.fill();
              ctx.fillStyle = iconColor;
              ctx.beginPath();
              ctx.arc(x + 50, y + 55, 46, 0, 2 * Math.PI, false);
              ctx.closePath();
              ctx.fill();
              //ctx.drawImage(iconImage, x + 15, y + 17, 70, 70);
              if (selectedElement) {
                  ctx.beginPath();
                  ctx.strokeStyle = "black";
                  ctx.rect(selectedElement.x,selectedElement.y,selectedElement.w,selectedElement.h);
                  ctx.closePath();
                  ctx.stroke();
                  if (selectedElement.text){
                      ctx.font="30px Verdana";
                      ctx.fillStyle = "black";
                      ctx.fillText(selectedElement.label, selectedElement.x + 15, selectedElement.y + 150, 70);
                  }
              }
            }     
>>>>>>> Stashed changes
    }

}());

<<<<<<< Updated upstream
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
=======
    function collides (rects, x, y, r, direction) {
        var isCollision = false;
        rects.forEach(function(element) {
            var left = element.x, right = element.x+element.width;
            var top = element.y, bottom = element.y+element.height;
            
            switch (direction) {
                case 'up': 
                    if (y - dy >= top && y - dy <= bottom 
                        && x + r > left && x < right) {
                        element.selected = true;
                        element.color = selectedColor;
                        isCollision = element;
                    } else {
                        element.selected = false;
                        element.color = normalColor;
                    }
                    break;
                case 'down':
                    if (y + r + dy >= top && y + r + dy <= bottom 
                        && x + r > left && x < right) {
                        element.selected = true;
                        element.color = selectedColor;
                        isCollision = element;
                    } else {
                        element.selected = false;
                        element.color = normalColor;
                    }
                    break;
                case 'left':
                    if (x - dx >= left && x - dx <= right 
                        && y + r > top && y < bottom) {
                        element.selected = true;
                        element.color = selectedColor;
                        isCollision = element;
                    } else {
                        element.selected = false;
                        element.color = normalColor;
                    }
                    break;
                case 'right':  
                    if ( x + r + dx >=left && x + r + dx <= right 
                        && y + r > top && y < bottom) {
                        element.selected = true;
                        element.color = selectedColor;
                        isCollision = element;
                    } else {
                        element.selected = false;
                        element.color = normalColor;
                    }
                    break;
            }
        });
        return isCollision;
    }

    function clear() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }
>>>>>>> Stashed changes

function main() {
    canvas = document.getElementById("canvas");
    elemX = canvas.offsetLeft,
        elemY = canvas.offsetTop,
        ctx = canvas.getContext("2d");
    return setInterval(draw, 10);
}



function doKeyDown(evt){
    switch (evt.keyCode) {
        case 38:  /* Up arrow was pressed */
            if (y - dy > 0){
<<<<<<< Updated upstream
                if (y - dy <= produce.y + isleHeight && y - dy >= produce.y && x + r > produce.x && x < produce.x + isleWidth) {
                    //produce
                    produce.selected = true;
                    produce.color = selectedColor;
                } else if (y - dy <= bread.y + isleHeight && y - dy >= bread.y && x + r > bread.x && x < bread.x + isleWidth) {
                    //bread
                    bread.selected = true;
                    bread.color = selectedColor;
                } else if (y - dy <= meat.y + isleHeight && y - dy >= meat.y && x + r > meat.x && x < meat.x + isleWidth) {
                    //meat
                    meat.selected = true;
                    meat.color = selectedColor;
                } else if (y - dy <= beverages.y + isleHeight && y - dy >= beverages.y && x + r > beverages.x && x < beverages.x + isleWidth) {
                    //beverages
                    beverages.selected = true;
                    beverages.color = selectedColor;
                } else if (y - dy <= dairy.y + isleHeight && y - dy >= dairy.y && x + r > dairy.x && x < dairy.x + isleWidth) {
                    //dairy
                    dairy.selected = true;
                    dairy.color = selectedColor;
                } else if (y - dy <= checkout.y + checkoutHeight && y - dy >= checkout.y && x + r > checkout.x && x < checkout.x + checkoutWidth) {
                    checkout.selected = true;
                    checkout.color = selectedColor;
                } else {
                    y -= dy;

                    aisles.forEach(function(element){
                        element.selected = false;
                        element.color = normalColor;
                    });

=======
                selectedElement = collides(aisles, x, y, r, 'up');
                if (!selectedElement) {
                    y -= dx;
>>>>>>> Stashed changes
                    cartDirection = "up";
                } 
            }
            break;

        case 40:  /* Down arrow was pressed */
            if (y + dy < HEIGHT){
<<<<<<< Updated upstream
                if (y + r + dy >= produce.y && y + r + dy <= produce.y + isleHeight && x + r > produce.x && x < produce.x + isleWidth) {
                    //produce
                    produce.selected = true;
                    produce.color = selectedColor;
                } else if (y + r + dy >= bread.y && y + r + dy <= bread.y + isleHeight && x + r > bread.x && x < bread.x + isleWidth) {
                    //bread
                    bread.selected = true;
                    bread.color = selectedColor;
                } else if (y + r + dy >= meat.y && y + r + dy <= meat.y + isleHeight && x + r > meat.x && x < meat.x + isleWidth) {
                    //meat
                    meat.selected = true;
                    meat.color = selectedColor;
                } else if (y + r + dy >= beverages.y && y + r + dy <= beverages.y + isleHeight && x + r > beverages.x && x < beverages.x + isleWidth) {
                    //beverages
                    beverages.selected = true;
                    beverages.color = selectedColor;
                } else if (y + r + dy >= dairy.y && y + r + dy <= dairy.y + isleHeight && x + r > dairy.x && x < dairy.x + isleWidth) {
                    //dairy
                    dairy.selected = true;
                    dairy.color = selectedColor;
                } else if (y + r + dy >= checkout.y && y + r + dy <= checkout.y + checkoutHeight && x + r > checkout.x && x < checkout.x + checkoutWidth) {
                    checkout.selected = true;
                    checkout.color = selectedColor;
                } else {
                    y += dy;

                    aisles.forEach(function(element){
                        element.selected = false;
                        element.color = normalColor;
                    });

=======
                    selectedElement = collides(aisles, x, y, r, 'down');
                if (!selectedElement) {
                    y += dx;
>>>>>>> Stashed changes
                    cartDirection = "down";
                } 
            }
            break;

        case 37:  /* Left arrow was pressed */
            if (x - dx > 0){
                selectedElement = collides(aisles, x, y, r, 'left');
                if (!selectedElement) {
                    x -= dx;
<<<<<<< Updated upstream

                    aisles.forEach(function(element){
                        element.selected = false;
                        element.color = normalColor;
                    });

                    cartDirection = "left";
                }
            }
=======
                    cartDirection = "left";
                } 
            }         
>>>>>>> Stashed changes
            break;

        case 39:  /* Right arrow was pressed */
            if (x + r + dx < WIDTH){
<<<<<<< Updated upstream
                if (x + r + dx >= produce.x && x + r + dx <= produce.x + isleWidth && y + r > produce.y && y < produce.y + isleHeight) {
                    //produce
                    produce.selected = true;
                    produce.color = selectedColor;
                } else if (x + r + dx >= bread.x && x + r + dx <= bread.x + isleWidth && y + r > bread.y && y < bread.y + isleHeight) {
                    //bread
                    bread.selected = true;
                    bread.color = selectedColor;
                } else if (x + r + dx >= meat.x && x + r + dx <= meat.x + isleWidth && y + r > meat.y && y < meat.y + isleHeight) {
                    //meat
                    meat.selected = true;
                    meat.color = selectedColor;
                } else if (x + r + dx >= beverages.x && x + r + dx <= beverages.x + isleWidth && y + r > beverages.y && y < beverages.y + isleHeight) {
                    //beverages
                    beverages.selected = true;
                    beverages.color = selectedColor;
                } else if (x + r + dx >= dairy.x && x + r + dx <= dairy.x + isleWidth && y + r > dairy.y && y < dairy.y + isleHeight) {
                    //dairy
                    dairy.selected = true;
                    dairy.color = selectedColor;
                } else if(x + r + dx >= checkout.x && x + r + dx <= checkout.x + checkoutWidth && y + r > checkout.y && y < checkout.y + checkoutHeight) {
                    //checkout
                    checkout.selected = true;
                    checkout.color = selectedColor;
                }else {
                    x+=dx;


                    aisles.forEach(function(element){
                        element.selected = false;
                        element.color = normalColor;
                    });

=======
                selectedElement = collides(aisles, x, y, r, 'right');
                if (!selectedElement) {
                    x += dx;
>>>>>>> Stashed changes
                    cartDirection = "right";
                } 
            }
            break;
    }
}

function draw () {
    clear();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";

<<<<<<< Updated upstream
    cart.circle(x, y, r, cartDirection);

    aisles.forEach(function(element){
        isles.rect(element.x, element.y, element.width, element.height, element.color);
    });
}




main();
canvas.addEventListener('click', function (event) {
    var x = event.pageX - elemX,
        y = event.pageY - elemY;
    aisles.forEach(function(element){
        if (element.selected && (y > element.y && y < element.y + element.height && x > element.x && x <  element.x + element.width)) {
            //localStorage.setItem("cartY",y);
            //localStorage.setItem("cartX",x);
            //localStorage.setItem("direction",cartDirection);
            window.location.href = element.ref;
        }
=======
        cart.circle(x, y, r, cartDirection);
        
        aisles.forEach(function(element){
            isles.rect(element.x, element.y, element.width, element.height, element.icon, element.iconColor);
        });
    }

    
    

    main();

    canvas.addEventListener("mousemove", function(e) {
        mousePos.x = e.pageX - this.offsetLeft;
        mousePos.y = e.pageY - this.offsetTop;
        if (selectedElement) {
            if (mousePos.y > selectedElement.y && mousePos.y < selectedElement.y + selectedElement.height && mousePos.x > selectedElement.x && mousePos.x <  selectedElement.x + selectedElement.width) {
                document.body.style.cursor = 'pointer';
                selectedElement.text = true;
            } else {
                selectedElement.text = false;
                document.body.style.cursor = 'default';
            }
        }
    });

    canvas.addEventListener('click', function (e) {
        aisles.forEach(function(element){
            if (element.selected && (mousePos.y > element.y && mousePos.y < element.y + element.height && mousePos.x > element.x && mousePos.x <  element.x + element.width)) {
                //localStorage.setItem("cartY",y);
                //localStorage.setItem("cartX",x);
                //localStorage.setItem("direction",cartDirection);
                window.location.href = element.ref;
                
            }
        });
>>>>>>> Stashed changes
    });
});
window.addEventListener('keydown',doKeyDown,true);