let but=document.querySelector("button");
let mealId=document.getElementById("mealId");
let name=document.getElementById("name");
let listItems=document.getElementById("listItems");
let instructions=document.getElementById("Instructions");
let instruct=document.getElementById("Instruct");
let mealImg=document.getElementById("mealImg");

let meals=[
    {
        mealName:"Veg Biryani",
        mealIngredients:["3 tbsp ghee / clarified butter",
            "2 bay leaf / tej patta",
            "2 inch cinnamon stick / dalchini",
            "1 star anise",
            "5 cloves / lavang",
            "4 cardamom / elachi",
            "½ tsp pepper",
            "½ tsp cumin seeds / jeera",
            "1 medium onion, finely chopped",
            "1 tsp ginger - garlic paste",
            "5 beans, chopped",
            "10 florets gobi / cauliflower",
            "¼ cup peas / mattar",
            "1 carrot, chopped",
            "1 potato, cubed",
            "3 mushrooms, sliced",
            "1 cup curd / yogurt",
            "½ tsp turmeric / haldi",
            "1 tsp kashmiri chilli powder / lal mirch powder",
            "¼ tsp cumin powder / jeera powder",
            "2 tsp biryani masala",
            "salt to taste",
            "6 tbsp coriander leaves, finely chopped",
            "20 mint / pudina leaves, roughly chopped",
            "6 tbsp onions, fried",
            "1½ cups basmati rice, soaked 30 minutes",
            "2 tbsp saffron water",
            "2 cups water"],
        mealInstructions:["firstly, in a large cooker heat ghee and saute spices.",
        "further, saute onions and ginger - garlic paste well.",
        "additionally, add in mixed vegetables and saute till all vegetables shrinks.",
        "now add in curd keeping flame on low.",
        "also add in spice powder and salt to taste. mix well.",
        "also add in coriander leaves, mint leaves and fried onions.",
        "spread soaked basmati rice.",
        "further sprinkle biryani masala powder and salt.",
        "also place in coriander leaves, mint and fried onions.",
        "additionally, pour in saffron water and ghee.",
        "pour water and simmer for 25 minutes.",
        "finally, serve veg biryani prepared in cooker along with raita."],
        mealImage:"https://image.shutterstock.com/image-photo/veg-biryani-260nw-142854022.jpg",
    },
    {
        mealName:"Tea",
        mealIngredients:["2 tsp tea powder",
            "2 cardamoms",
            "4 black pepper",
            "2 cloves",
            "1 inch ginger",
            "1 half cup milk",
            "half cup water",
            "2 tsp sugar"],
        mealInstructions:["firstly, in a small pan, take half cup of water and add cardamom, cloves, ginger, black pepper and boil for 2-3 min",
        "furthermore, bring it to boil and lower the flame. simmer it for 1-2 minutes until you get the nice aroma.",
        "also and tea leaves or tea powder and simmer for 3-4 minutes.",
        "now add milk, sugar.",
        "bring it to boil and brew for 2 minutes.",
        "furthermore, switch of the flame and filter out the tea powder and spices with a fine mesh sieve.",
        "finally, serve the masala chai with biscuits or with any breakfast recipes."],
        mealImage:"https://thumbs.dreamstime.com/b/indian-cup-tea-plate-world-famous-known-india-masala-chaye-170076361.jpg",
    },
    {
        mealName:"Cappuccino ",
        mealIngredients:["¼ cup instant coffee powder",
            "¼ cup sugar",
            "3 tbsp water",
            "milk(as required)"],
        mealInstructions:["firstly, in a large bowl take ¼ cup instant coffee powder, ¼ cup sugar and 3 tbsp water.",
            "mix well dissolving sugar.",
            "using hand beater beat the mixture. you can also beat using whisk or blender.",
            "beat for 5 minutes or until the mixture turns frothy and lightens in colour.",
            "make sure the mixture is thick and creamy. you can store this mixture for a week in an airtight container by refrigerating.",
            "to prepare cappuccino, heat 2 cups of milk.",
            "whisk and get the milk to boil to make the milk frothy.",
            "in a cup, add 1 tbsp of cappuccino mixture.",
            "top with a cup of frothy milk and mix gently.",
            "to make it stronger, add a tbsp of more cappuccino mixture and mix gently.",
            "finally, enjoy cappuccino hot with cookies."],
        mealImage:"https://vaya.in/recipes/wp-content/uploads/2019/02/Cappuccino.jpg",
    },
    {
        mealName:"veg chesses sandwich",
        mealIngredients:["4 bread slices, brown / white bread",
            "2 tsp oil",
            "½ onion, finely chopped",
            "½ cup corn, fresh / frozen",
            "1 carrot, finely chopped",
            "½ capsicum, finely chopped",
            "1 bunch spinach / palak leaves, chopped",
            "1 tsp crushed pepper",
            "½ tsp mixed herbs, optional",
            "salt to taste",
            "2 tbsp tomato sauce",
            "2 tbsp green chutney",
            "¼ cup mozzarella or cheddar cheese, grated",
            "2 tsp butter"],
        mealInstructions:["firstly, in a large kadai heat oil and fry onions.",
            "further add corn, carrot and capsicum. fry for a minute till the veggies are half cooked yet crunchy.",
            "now add chopped spinach and fry till they shrink in size.",
            "also add pepper, mixed herbs and salt. give a good mix.",
            "now take 2 breads and on one spread tomato sauce and green chutney on the other.",
            "also place the prepared stuffing and spread uniformly on the bread slice.",
            "further, grate the cheese over the stuffing.",
            "cover with the other slice of bread and grill or toast on tawa.",
            "spread butter on both the outer sides of bread to make sandwich more crispy and golden.",
            "furthermore, close the griller and grill till the cheese melts and bread turn golden brown.",
            "now cut the bread into half and serve.",
            "finally, serve hot or pack for kids lunch box."],
        mealImage:"https://files2.hungryforever.com/wp-content/uploads/2018/07/13183608/veg-cheese-sandwich.jpg",
    }
]

but.addEventListener("click",function()
{
    let n=generateRandom();
    display(n);
})


function generateRandom()
{
    let random=Math.floor(Math.random()*meals.length);
    return random;
}

/*function show_image(src, width, height, alt) {
    var img = document.createElement("img");
   // alert(img.nodeValue);
    //alert(img.nodeName);
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
   // document.getElementById("mealImg").appendChild(img);
  // alert(img.nodeValue);
  return img;
    //mealImg.appendChild(img);
   // mealImg.innerHTML=img;
    
}*/

function display(n)
{
    name.textContent=meals[n]["mealName"];
    instructions.textContent="Instructions";
    let g=false;
    let e="";
    for(let i=0;i<meals[n]["mealInstructions"].length;i++){
        e+="<li>" + meals[n]["mealInstructions"][i]+ "</li>";
    }
    listItems.innerHTML=e;
    let k=meals[n]["mealImage"];
    let fo="";
    fo+="<img src="+"\""+ k+"\""+" style=\"height: 100%;width: 100%;\">";
    console.log(fo);
    mealImg.innerHTML=fo;
   /* chi=show_image(k, 
                 400, 
                 400, 
                 'meal pic');
    mealImg.appendChild(chi);
    alert(chi)*/
    instruct.textContent="Ingredients";
    let f="";
    for(let i=0;i<meals[n]["mealIngredients"].length;i++){
        f+="<li>" + meals[n]["mealIngredients"][i]+ "</li>";
    }
    IngredientsList.innerHTML=f; 
}
