// Method invocation on the Michael Jordan object will bind "this"
// to the object properties

var michaelJordan = {
    points: 0,
    shootJumpshot: function() {
        this.points += 2;
    }
}

michaelJordan.shootJumpshot();
console.log(michaelJordan.points);
// 2

// Inner function within a method
var stephCurry = {
    points: 0,
    lastMove: "dribble",
    doCoolMove: function() {
        var selectMove = function() {
            var randomNumber = Math.random() * 3;
            if(randomNumber < 1) {
                this.lastMove = "crossover";
            }
            else if(randomNumber < 2) {
                this.lastMove = "behind_the_back";
            }
            else if(randomNumber <= 3) {
                this.lastMove = "between_the_legs";
            }
        }
        selectMove();
    }
}

stephCurry.doCoolMove();
console.log(stephCurry.lastMove);
// dribble

//Note here, this.lastMove did not bind to the object's lastMove value,
//"this" here was bound to the global object

//We will need to specify more clearly what "this" value we want
// so let's bind "this" of the object to "that"
var chrisPaul = {
    points: 0,
    lastMove: "dribble",
    doCoolMove: function() {
        var that = this;
        var selectMove = function() {
            var randomNumber = Math.random() * 3;
            if(randomNumber < 1) {
                that.lastMove = "crossover";
            }
            else if(randomNumber < 2) {
                that.lastMove = "no_look_pass";
            }
            else if(randomNumber <= 3) {
                that.lastMove = "alley_oop";
            }
        }
        selectMove();
    }
}

chrisPaul.doCoolMove();
console.log(chrisPaul.lastMove);
// no_look_pass
