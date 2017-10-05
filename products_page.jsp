<%-- 
    Document   : products_page
    Created on : 5 Oct, 2017, 10:55:49 PM
    Author     : Sin Kin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <style>
            #shoppingcart {
                width: 512px;
                height: 512px;
                padding: 10px;
                border: 1px solid #aaaaaa;
                position: absolute;
            }
        </style>
        <title>Products Page</title>
        <meta charset="UTF-8">
        
        <link rel="stylesheet" href="css/materialize.min.css" type="text/css">
        <link rel="stylesheet" href="css/style.css" type="text/css">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <%
        int countProducts = 0;
    %>
    <script>
        var x = <%=countProducts%>;
        var z = -1;
        var margin = 100;
        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            //ev.target.appendChild(document.getElementById(data));
            var nodeCopy = document.getElementById(data).cloneNode(true);
            nodeCopy.id = "newId" + x;
            x++;
            <%=countProducts%> = x;
            nodeCopy.style.marginLeft = margin + 'px';
            margin += 20;
            nodeCopy.style.marginBottom = '-256px'
            nodeCopy.style.zIndex = z;
            nodeCopy.style.width = '256px';
            nodeCopy.style.height = '256px';
            ev.target.appendChild(nodeCopy);

        }
    </script>
    <body style="background: url('images/supermarket1.png')" >
        <%
            String imgUsed = "shopping_cart.png";
            int count = countProducts;
            out.println("No. of products in cart: " + count);
            if (count >= 5){
                imgUsed = "shopping_cart2.png";
            }
            
        %>
        <div class="container">
            <div class="row">
                <div class="col s12 offset-s5">
                    <!-- Slider -->
                    <div id="scroll-feature-1" class="horiz-scroll">
                        <div class="scroller">
                            <div class="left-scroll invisible">
                                <p class="fa fa-angle-left"></p>
                            </div>
                            <div class="right-scroll">
                                <p class="fa fa-angle-right"></p>
                            </div>
                            <div class="scroll-images scrollable-x">
                                <img id="bread" src="images/bread1.jpg" alt="Image 1" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="milk" src="images/milk.jpg" alt="Image 2" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="chips" src="images/chips1.jpg" alt="Image 3" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="cheese"  src="images/cheese.jpg" alt="Image 4" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="meat" src="images/meat.jpg" alt="Image 5" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="wraps"src="images/mission_wraps.jpg" alt="Image 6" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="spinach" src="images/spinach.png" alt="Image 7" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="eggs" src="images/eggs1.jpg" alt="Image 8" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="cider" src="images/cider.jpg" alt="Image 9" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="juice" src="images/apple_juice.png" alt="Image 10" draggable="true" ondragstart="drag(event)" style="position: relative;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 offset-s5">
                    <div id="scroll-feature-2" class="horiz-scroll">
                        <div class="scroller">
                            <div class="left-scroll invisible">
                                <p class="fa fa-angle-left"></p>
                            </div>
                            <div class="right-scroll">
                                <p class="fa fa-angle-right"></p>
                            </div>
                            <div class="scroll-images scrollable-x">
                                <img id="bread1" src="images/bread1.jpg" alt="Image 11" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="milk1" src="images/milk.jpg" alt="Image 12" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="chips1" src="images/chips1.jpg" alt="Image 13" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="cheese1"  src="images/cheese.jpg" alt="Image 14" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="meat1" src="images/meat.jpg" alt="Image 15" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="wraps1"src="images/mission_wraps.jpg" alt="Image 16" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="spinach1" src="images/spinach.png" alt="Image 17" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="eggs1" src="images/eggs1.jpg" alt="Image 18" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="cider1" src="images/cider.jpg" alt="Image 19" draggable="true" ondragstart="drag(event)" style="position: relative;">
                                <img id="juice1" src="images/apple_juice.png" alt="Image 20" draggable="true" ondragstart="drag(event)" style="position: relative;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script type="text/javascript" src="js/verticalslider.js"></script>
        <div style="background: url('images/<%=imgUsed%>')" id="shoppingcart" ondrop="drop(event)" ondragover="allowDrop(event)">

        </div>
    </body>
</html>