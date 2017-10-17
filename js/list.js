    var x = 0;
    var count = 0;
    var z = -1;
    var margin = 120;
    var list = "";
    var array = new Array();
    var array2 = new Array();
    var id;
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.currentTarget.id);
        id = ev.currentTarget.id;
    }

    function remove(id){
        delete array[id];
        count --;
        margin = margin -20;
        document.getElementById("newId"+id).remove();
        array.toString = function() {
            return this.join('');
        };
        document.getElementById("text").innerHTML = array.toString();
    }
    function goBack(){
        window.location.href = 'shopping.html';
    }


    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var nodeCopy = document.getElementById(data).cloneNode(true);
        nodeCopy.id = "newId" + x;

        if(id.localeCompare('plainBagel')==0)
            array.push('<div class="item">-Plain bagel <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('poppyBag')==0)
            array.push('<div class="item">-Poppy baguette <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('sesemeBagel')==0)
            array.push('<div class="item">-Seseme bagel <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('blueberryBagel')==0)
            array.push('<div class="item">-Blueberry bagel <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('loaf')==0)
            array.push('<div class="item">-Loaf <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('croissant')==0)
            array.push('<div class="item">-Croissant <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('sourdough')==0)
            array.push('<div class="item">-Sourdough <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('whiteBread')==0)
            array.push('<div class="item">-White bread <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('strawberrySprinkle')==0)
            array.push('<div class="item">-Strawberry sprinkle donut <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('chocolateSprinkle')==0)
            array.push('<div class="item">-Chocolate sprinkle donut <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('glazeddonut')==0)
            array.push('<div class="item">-Glazed donut <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('blueberrydonut')==0)
            array.push('<div class="item">-Blueberry donut <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('chocolatechip')==0)
            array.push('<div class="item">-Chocolate chip cookie <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('lemon')==0)
            array.push('<div class="item">-Lemon cookie <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('oatmeal')==0)
            array.push('<div class="item">-Oatmeal raisin cookie <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('mnm')==0)
            array.push('<div class="item">-M&M cookie <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('chocolatechip')==0)
            array.push('<div class="item">-Chocolate chip cookie <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('cupcake')==0)
            array.push('<div class="item">-Cupcake <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('chocolatechipcake')==0)
            array.push('<div class="item">-Chocolate chip cake <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('chocolatecake')==0)
            array.push('<div class="item">-Chocolate cake <a id="remove" onclick="remove('+x+')">x</a></div>');
        else if(id.localeCompare('doublecake')==0)
            array.push('<div class="item">-Double layer cake <a id="remove" onclick="remove('+x+')">x</a></div>');

        for(y = array.length-1; y<array.length; y++){
            if(array[y].localeCompare('undefined')!== 0)
                list = list + array[y];
        }

        nodeCopy.style.marginLeft = margin + 'px';
        x++;
        count++;
        margin = margin < 250 ? margin + 30 : 100;
        nodeCopy.style.marginBottom = '-250px';
        nodeCopy.style.zIndex = z;
        nodeCopy.style.width = '150px';
        nodeCopy.style.height = '150px';
        ev.target.appendChild(nodeCopy);
        var cart = document.getElementById("cart");
        array.toString = function() {
            return this.join('');
        };
        document.getElementById("text").innerHTML = array.toString();
        if(count>=5) {
            margin = 100;
            cart.style.backgroundImage = "url(images/shopping_cart2.png)";
            for(i = 0; i < array.length; i++){
                document.getElementById("newId"+i).remove();
            }
        }

    }