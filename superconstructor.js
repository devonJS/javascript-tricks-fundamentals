function SportsPlayer(cookies) {
    this.isAthletic = true;
    this.favoriteCookie = cookies;
    this.assets = {
        house: "big",
        money: "alot",
        dinners: "fancy",
        necklaces: "gold"
    }
}

BasketballPlayer.prototype = new SportsPlayer();
BasketballPlayer.constructor = BasketballPlayer;

function BasketballPlayer(name) {
    this.name = name;
}

BaseballPlayer.prototype = new SportsPlayer();
BaseballPlayer.constructor = BaseballPlayer;

function BaseballPlayer(name) {
    this.name = name;
}

var timSalmon = new BaseballPlayer("Tim Salmon");
var lebronJames = new BasketballPlayer(" Lebron James");

timSalmon.isAthletic = false;
timSalmon.assets.necklaces = "silver";

// The subclass baseball player received a different prototype blueprint than basketball player
// Therefore Lebron James is unaffected by Tim Salmon's necklaces or athletic ability

console.log("Lebron James has " + lebronJames.assets.necklaces + " necklaces");
// Lebron James has gold necklaces

console.log("Lebron James is athletic, " + lebronJames.isAthletic);
// Lebron James is athletic, true

// But using the same subclass basketballplayer, the prototype is affected
// Object is passed by reference, therefore a change in assets will be reflected in all basketballplayers
// They reference the same object, this does not apply to the boolean "isAthletic" as it is passed by value

var paulPierce = new BasketballPlayer("Paul Pierce");
paulPierce.isAthletic = false;
paulPierce.assets.necklaces = "platinum";

console.log("Lebron James has " + lebronJames.assets.necklaces + " necklaces");
// Lebron James has platinum necklaces

console.log("Lebron James is athletic, " + lebronJames.isAthletic);
// Lebron James is athletic, true



//To avoid that, let's use a "superconstructor" shoutout to Ben Nadel for this trick
FootballPlayer.prototype = new SportsPlayer();
FootballPlayer.constructor = FootballPlayer;

function FootballPlayer(name, cookies) {
    this.name = name;
    // Each football player receives its own copy of the SportsPlayer constructor
    SportsPlayer.call(this, cookies);
}

var wayneRooney = new FootballPlayer("Wayne Rooney", "Oatmeal Raisin");
var cristianoRonaldo = new FootballPlayer("Cristiano Ronaldo", "Chocolate Chip");

wayneRooney.assets.house = "really big";
wayneRooney.assets.dinners = "pretty fancy";

// We see here, wayneRooney and cristianoRonaldo do not share the same reference to the same object
// They have their own copy of the prototype

console.log("Cristiano Ronaldo has a " + cristianoRonaldo.assets.house + " house,");
// Cristiano Ronaldo has a big house,

console.log("he eats " + cristianoRonaldo.assets.dinners + " dinners, ");
// he eats fancy dinners,

console.log("and likes " + cristianoRonaldo.favoriteCookie + " cookies.");
// and likes Chocolate Chip cookies.
