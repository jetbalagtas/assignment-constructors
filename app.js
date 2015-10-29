var opts = {
  name: "just a name",
  strength: 100000
};

function Country (options) {
  var options = options || {};
  this.name = options.name || "Random Country";
  this.strength = options.strength;
  this.arm = function(weapon) {
    this.weapon = weapon;
  };
  this.strike = function (adversary) {
    var randomInt = Math.floor(Math.random() * 20);
    if(randomInt < 15) {
      adversary.strength -= this.weapon.destuctivepower;
      console.log(adversary.name + " was hit!" + " Strength is now at " + adversary.strength);
      if(adversary.strength <= 0){
        adversary.strength = 0;
        console.log(adversary.name + " has been destroyed. No more " + adversary.name + ".");
      }
    } else {
      console.log("Save lives, reestablish diplomatic relations " + adversary.name + ".");
    }
  };
}

function Weapon(options) {
  this.destuctivepower = options.destuctivepower;
}

var usa = new Country({
  strength: 1000,
  name: "USA"
});

var china = new Country({
  strength: 1000,
  name: "China"
});

var virginiaClassSub = new Weapon({destuctivepower: 250, name: "Virginia Class Sub"});
var type092Sub = new Weapon({destuctivepower: 50, name: "Type 092 Sub"});
usa.arm(virginiaClassSub);
china.arm(type092Sub);

$('body').on('click', '.amcharts-map-area-US', function() {

this.style.fill = "yellow";

});
