// the cafe title 
titleid = document.getElementById("content");
para1id = document.getElementById("para1");
para2id = document.getElementById("para2");

setTimeout(() => {
    titleid.style.display = "inline-block";

}, 100);

//cafe timings and location details
setTimeout(() => {
    para1id.style.display = "inline-block";
    para2id.style.display = "inline-block";
}, 150);




menuid = document.getElementById("menulist");
eatid = document.getElementById("eattit");
drinkid = document.getElementById("drinktit");

eatdisplay(); //default shows the eat menu when the page is loaded

function eatdisplay() {

    eatid.classList.add("active");
    drinkid.classList.remove("active");

    menuid.innerHTML =
        `<div class="item">
<p class="item_title">Bread Basket</p>
<p class="item_desc"> Assortment of fresh baked fruit breads and muffins 5.50</p>
</div>
<div class="item">
<p class="item_title">Honey Almond Granola with Fruits</p>
<p class="item_desc">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
</div>
<div class="item">
<p class="item_title">Belgian Waffle</p>
<p class="item_desc"> Vanilla flavored batter with malted flour 7.50</p>
</div>
<div class="item">
<p class="item_title">Scrambled eggs</p>
<p class="item_desc">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
</div>
<div class="item">
<p class="item_title">Blueberry Pancakes</p>
<p class="item_desc">With syrup, butter and lots of berries 8.50</p>
</div>`;

}

function drinkdisplay() {

    eatid.classList.remove("active");
    drinkid.classList.add("active");

    menuid.innerHTML =
        `<div class="item">
    <p class="item_title">Coffee</p>
    <p class="item_desc"> Regular coffee 2.50</p>
    </div>
    <div class="item">
    <p class="item_title">Chocolato</p>
    <p class="item_desc">Chocolate espresso with milk 4.50</p>
    </div>
    <div class="item">
    <p class="item_title">Corretto</p>
    <p class="item_desc"> Whiskey and coffee 5.00</p>
    </div>
    <div class="item">
    <p class="item_title">Iced tea</p>
    <p class="item_desc">Hot tea, except not hot 3.00</p>
    </div>
    <div class="item">
    <p class="item_title">Soda</p>
    <p class="item_desc">Coke, Sprite, Fanta, etc. 2.50</p>
    </div>`;

}