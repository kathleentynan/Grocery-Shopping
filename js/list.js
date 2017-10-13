    var x = 0;
    var count = 0;
    var z = -1;
    var margin = 100;
    var list = "SHOPPING LIST:<br>";
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

        if(id.localeCompare('bread')==0)
            array.push('-Bread     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('milk')==0)
            array.push('-Milk     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('chips')==0)
            array.push('-Chips     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('cheese')==0)
            array.push('-Cheese     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('meat')==0)
            array.push('-Meat     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('wraps')==0)
            array.push('-Wraps     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('spinach')==0)
            array.push('-Spinach     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('eggs')==0)
            array.push('-Eggs     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('cider')==0)
            array.push('-Cider     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');
        else if(id.localeCompare('juice')==0)
            array.push('-Juice     <button type="button" onclick="remove('+x+')"> Remove</button> <br>');

        for(y = array.length-1; y<array.length; y++){
            if(array[y].localeCompare('undefined')!== 0)
                list = list + array[y];
        }

        nodeCopy.style.marginLeft = margin + 'px';
        x++;
        count++;
        margin += 20;
        nodeCopy.style.marginBottom = '-256px'
        nodeCopy.style.zIndex = z;
        nodeCopy.style.width = '256px';
        nodeCopy.style.height = '256px';
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