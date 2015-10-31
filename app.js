$(document).ready(function () {
  ww3.init ();
});

var ww3 = {
  init: function() {
    // ww3.styling();
    ww3.events();
  },
  events: function() {
    $('body').on('click', '.amcharts-map-area-US', function(event) {
      var randomInt = Math.floor(Math.random() * 20);
      console.log(randomInt);
      if(randomInt < 15) {
        usa.strength -= china.weapon.destuctivepower;
        console.log("Strength:", usa.strength);
        if(usa.strength <= 999 && usa.strength >= 699) {
          this.style.fill = "yellow";
          console.log(usa.name + " was hit!" + " Strength is now at " + usa.strength + ".");
        }
        if(usa.strength <= 698 && usa.strength >= 399) {
          this.style.fill = "orange";
          console.log(usa.name + " was hit again!! Almost half of the population has been wiped out! Respond or suffer more casualties! Strength is now at " + usa.strength + ".");
        }
        if(usa.strength <= 398 && usa.strength >= 1) {
          this.style.fill = "red";
          console.log("WARNING: " + usa.name + " was hit again and is nearing annihilation! Respond or die! Strength is now at " + usa.strength + ".");
        }
        if(usa.strength <= 0){
          usa.strength = 0;
          this.style.fill = "black";
          console.log("GAME OVER. Strength is now " + usa.strength + ". " + usa.name + " has been destroyed. No more " + usa.name + ".");
        }
      } else {
        console.log("Save lives... reestablish diplomatic relations, " + usa.name + ".");
      }
    });
    $('body').on('click', '.amcharts-map-area-CN', function(event) {
      var randomInt = Math.floor(Math.random() * 20);
      console.log(randomInt);
      if(randomInt < 15) {
        china.strength -= usa.weapon.destuctivepower;
        console.log("Strength:", china.strength);
        if(china.strength <= 999 && china.strength >= 699) {
          this.style.fill = "yellow";
          console.log(china.name + " was hit!" + " Strength is now at " + china.strength + ".");
        }
        if(china.strength <= 698 && china.strength >= 399) {
          this.style.fill = "orange";
          console.log(china.name + " was hit again!! Almost half of the population has been wiped out! Respond or suffer more casualties! Strength is now at " + china.strength + ".");
        }
        if(china.strength <= 398 && china.strength >= 1) {
          this.style.fill = "red";
          console.log("WARNING: " + china.name + " was hit again and is nearing annihilation! Respond or die! Strength is now at " + china.strength + ".");
        }
        if(china.strength <= 0){
          china.strength = 0;
          this.style.fill = "black";
          console.log("GAME OVER. Strength is now " + china.strength + ". " + china.name + " has been destroyed. No more " + china.name + ".");
        }
      } else {
        console.log("Save lives... reestablish diplomatic relations, " + china.name + ".");
      }
    });
    $('.start-btn').on('click', 'button', function (event) {
      $('.intro').addClass('hidden');
    });
  }
};

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
  // this.strike = function (adversary) {
  //   var randomInt = Math.floor(Math.random() * 20);
  //   if(randomInt < 15) {
  //     adversary.strength -= this.weapon.destuctivepower;
  //     console.log(adversary.name + " was hit!" + " Strength is now at " + adversary.strength);
  //     if(adversary.strength <= 0){
  //       adversary.strength = 0;
  //       console.log(adversary.name + " has been destroyed. No more " + adversary.name + ".");
  //     }
  //   } else {
  //     console.log("Save lives, reestablish diplomatic relations " + adversary.name + ".");
  //   }
  // };
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

var usCarrierStrikeGroup = new Weapon({
  destuctivepower: 250,
  name: "U.S. Navy Carrier Strike Group"
});

var chineseNavyBattleGroup = new Weapon({
  destuctivepower: 50,
  name: "Chinese Navy Battle Group"
});

usa.arm(usCarrierStrikeGroup);

china.arm(chineseNavyBattleGroup);
