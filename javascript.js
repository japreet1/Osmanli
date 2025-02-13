function insert(){
    const array = ["Amber.jpeg", "SoapBar.jpeg", "charcoal.jpeg", 
    "turkishrose.jpeg", "nilasc.jpeg", "mangorice.jpeg",
    "coffee.jpeg", "balm.jpeg", "mintscrub.jpeg", "mintshamp.jpeg"
    , "sheabut.jpeg", "coffeesoap.jpeg", "honeybar.jpeg", 
    "arganbar.jpeg", "moroccoan.jpeg"];
    const array1 = ["Amber Loofah Bar", "Amber Soap Bar", 
    "Charcoal Mint Bar", "Turkish Rose Soap Bar", "Nila Body Scrub",
    "Mango Rise Shampoo Bar", "Coffee Body Scrub", "Aphrodite Body Balm"
    , "Charcoal Mint Body Scrub", "Charcoal Mint Shampoo bar", 
    "Cocoa & Shea Butter Shampoo Bar", "Coffee Soap bar", "Honey Soap Bar",
    "Lavender and Argan Oil Shampoo", "Moroccoan Soap Bar"]
    var number = Math.floor(Math. random() * 15);
    document.getElementById('randomimg').src = array[number];
    document.getElementById('descrand').innerHTML = array1[number];
}