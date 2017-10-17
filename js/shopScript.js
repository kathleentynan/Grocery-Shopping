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
    var checkoutHeight = 100;

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
        ref: 'beverages.html',
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
        ref: 'meat.html',
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
        ref: 'bakery.html',
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
        ref: 'produce.html',
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
        icon: 'images/icons/cashierIcon.png',
        width: checkoutWidth,
        height: checkoutHeight,
        text: false,
        iconColor: normalColor
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
                img.src = "images/cart/cartRight.png";
            } else if (direction == "up") {
                img.src = "images/cart/cartUp.png";
            } else if (direction == "down"){
                img.src = "images/cart/cartDown.png";
            }
            ctx.drawImage(img, x, y, r, r);
        }
    }
    }());

    //aisles rectangle
    var isles = (function(){
        
      return {
          rect : function(x,y,w,h,icon,iconColor, selected) {
              var iconImage = new Image();
              iconImage.src = icon;
              ctx.fillStyle = normalColor;
              ctx.beginPath();
              ctx.rect(x,y,w,h);
              ctx.closePath();
              ctx.fill();
              if (selected) {
                  ctx.strokeStyle = '#000000';
                  ctx.lineWidth = 5
                  ctx.stroke();
              }
              ctx.fillStyle = iconColor;
              ctx.beginPath();
              ctx.arc(x + 50, y + 55, 46, 0, 2 * Math.PI, false);
              ctx.closePath();
              ctx.fill();
              
              if (iconColor == normalColor) {
                  ctx.drawImage(iconImage, x + 45, y + 5, 70, 70);
              } else {
                ctx.drawImage(iconImage, x + 15, y + 17, 70, 70);
              }
              if (selectedElement) {
                  if (selectedElement.text){
                      ctx.font="30px Verdana";
                      ctx.fillStyle = "black";
                      ctx.fillText(selectedElement.label, selectedElement.x + 15, selectedElement.y + 150, 70);
                  }
              }
            }     
    }

    }());


function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

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
                selectedElement = collides(aisles, x, y, r, 'up');
                if (!selectedElement) {
                    y -= dx;
                    cartDirection = "up";
                } 
            }
            break;

        case 40:  /* Down arrow was pressed */
            if (y + dy < HEIGHT){
                    selectedElement = collides(aisles, x, y, r, 'down');
                if (!selectedElement) {
                    y += dx;
                    cartDirection = "down";
                } 
            }
            break;

        case 37:  /* Left arrow was pressed */
            if (x - dx > 0){
                selectedElement = collides(aisles, x, y, r, 'left');
                if (!selectedElement) {
                    x -= dx;
                    cartDirection = "left";
                } 
            }         
            break;

        case 39:  /* Right arrow was pressed */
            if (x + r + dx < WIDTH){
                selectedElement = collides(aisles, x, y, r, 'right');
                if (!selectedElement) {
                    x += dx;
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

        cart.circle(x, y, r, cartDirection);
        
        aisles.forEach(function(element){
            isles.rect(element.x, element.y, element.width, element.height, element.icon, element.iconColor, element.selected);
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
    });
window.addEventListener('keydown',doKeyDown,true);