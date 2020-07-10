// Assigning loading ids
document.getElementById("LoadingInfo").innerHTML = "Applying Nametag Nametags"

var LoadingInfoId = document.getElementById("LoadingInfo");
var LoadingBarId = document.getElementById("LoadingBar");

// Assigning Variable Ids
LoadingInfoId.innerHTML = "Applying Nametags";
LoadingBarId.style.width = "2%";

var BodyId = document.getElementById("Body");
var HtmlId = document.getElementById("Html");
var MainId = document.getElementById("Main");
var ResourceManagerId = document.getElementById("ResourceManager");
var ControlPanelId = document.getElementById("ControlPanel");
var InfoBoxId = document.getElementById("InfoBox");
var RightBoxId = document.getElementById("RightBox");
var HomeLinkId = document.getElementById("HomeLink");
var WanderLinkId = document.getElementById("WanderLink");
var HomeControlsId = document.getElementById("HomeControls");
var WanderControlsId = document.getElementById("WanderControls");
var ScavengeButtonId = document.getElementById("ScavengeButton");
var FoodId = document.getElementById("Food");
var FoodInfoId = document.getElementById("FoodInfo");
var WoodId = document.getElementById("Wood");
var WoodInfoId = document.getElementById("WoodInfo");
var ScrapId = document.getElementById("Scrap");
var ScrapInfoId = document.getElementById("ScrapInfo");

// Assigning Save Variables
LoadingInfoId.innerHTML = "Creating Numbers";
LoadingBarId.style.width = "4%";

var GameStage = 0;
var Food = 100;
var FoodDemand = 1;
var FoodPerSecond = 0;
var FoodDepleted = 0;
var ScavengeRoll = 0;
var Wood = 0;
var Scrap = 0;
var ScavengeEff = 1;
var ScavengeBase = 1;
var ScavengeFoodNum = 0;
var ScavengeWoodNum = 0;
var ScavengeScrapNum = 0;
var ScavengeUnlocks = 3;
var LastInfo = "";
var Scavenged = 0;
var WoodUnlocked = 0;
var WoodPerSecond = 0;
var ScrapPerSecond = 0;
var WoodDemand = 0;
var ScrapDemand = 0;
var Starving = 0;
var ScrapUnlocked = 0;
var FarmUnlocked = 0;
var Farms = 0;
var FarmFoodProduction = 0.25;
var FarmPrice = 50;

// Defining Functions
LoadingInfoId.innerHTML = "Forging Tools";
LoadingBarId.style.width = "6%";

function SaveItem(Item, Name){
  localStorage.setItem(Name, Item);
  console.log(localStorage.getItem(Name));
}
function LoadItem(Name){
  if(localStorage.getItem(Name) == null){
    console.log("Local " + Name + " Save not Found");
  }
  if(localStorage.getItem(Name) >= 1){
    console.log(Name + " Save Found");
    window[Name] = parseInt(localStorage.getItem(Name), 10);
    console.log(localStorage.getItem(Name));
  }
}
function Save(){
  SaveItem(GameStage, "GameStage");
  SaveItem(Food, "Food");
  SaveItem(FoodDemand, "FoodDemand");
  SaveItem(FoodPerSecond, "FoodPerSecond");
  SaveItem(FoodDepleted, "FoodDepleted");
  SaveItem(ScavengeRoll, "ScavengeRoll");
  SaveItem(Wood, "Wood");
  SaveItem(Scrap, "Scrap");
  SaveItem(ScavengeEff, "ScavengeEff");
  SaveItem(ScavengeBase, "ScavengeBase");
  SaveItem(ScavengeFoodNum, "ScavengeFoodNum");
  SaveItem(ScavengeUnlocks, "ScavengeUnlocks");
  //SaveItem(LastInfo, "LastInfo");
  SaveItem(Scavenged, "Scavenged");
  SaveItem(WoodUnlocked, "WoodUnlocked");
  SaveItem(WoodPerSecond, "WoodPerSecond");
  SaveItem(ScrapPerSecond, "ScrapPerSecond");
  SaveItem(WoodDemand, "WoodDemand");
  SaveItem(ScrapDemand, "ScrapDemand")
  SaveItem(Starving, "Starving");
  SaveItem(ScrapUnlocked, "ScrapUnlocked");
  SaveItem(FarmUnlocked, "FarmUnlocked");
  SaveItem(Farms, "Farms");
  SaveItem(FarmFoodProduction, "FarmFoodProduction");
  SaveItem(FarmPrice, "FarmPrice");
  console.log("Game Saved");
  InfoAdd("Game Saved");
}
function ClearSave(){
  if(confirm("Are you sure?") == true){
    if(confirm("Are you REALLY sure? This will clear ALL progress") == true){
      localStorage.clear();
      console.log("Local Storage Cleared");
      window.location.reload();
    }
  }
}
function OpenHome(){
  HomeControlsId.style.visibility = "visible";
  ScavengeButtonId.style.visibility = "visible";
  WanderControlsId.style.visibility = "hidden";
}
function OpenWander(){
  HomeControlsId.style.visibility = "hidden";
  ScavengeButtonId.style.visibility = "hidden";
  WanderControlsId.style.visibility = "visible";
}
function Scavenge(){
  ScavengeRoll = Math.floor((Math.random() * ScavengeUnlocks) + 1);
  if(ScavengeRoll == 1){
    ScavengeFoodNum += Math.floor((Math.random() * ScavengeEff) + ScavengeBase);
  }
  if(ScavengeRoll == 2){
    ScavengeWoodNum += Math.floor((Math.random() * ScavengeEff) + ScavengeBase);
  }
  if(ScavengeRoll == 3){
    ScavengeScrapNum += Math.floor((Math.random() * ScavengeEff) + ScavengeBase);
  }
  Scavenged = 1;
  ScavengeRoll = 0;
}
function InfoAdd(Info){
  if(Info != LastInfo){
    InfoBox.innerHTML = Info + "<br>" + InfoBox.innerHTML;
  }
  //LastInfo = Info;
}
function Refresh(){
  FoodId.innerHTML = Food;
  FoodInfoId.innerHTML = FoodPerSecond.toString() + " / tick";
  WoodId.innerHTML = Wood;
  WoodInfoId.innerHTML = WoodPerSecond.toString() + " / tick";
  ScrapId.innerHTML = Scrap;
  ScrapInfoId.innerHTML = ScrapPerSecond.toString() + " / tick";
}
function BuyFarm(){

}
function ScavengeInfo(Toggle){
  document.getElementById("ScavengeButtonInfo").innerHTML = "Scavenge for materials in the dirt <hr>" + "Base: " + ScavengeBase + "<br>Eff: " + ScavengeEff;
  if(Toggle == 1){
    document.getElementById("ScavengeButtonInfo").style.display = "block";
  }
  if(Toggle == 0){
    document.getElementById("ScavengeButtonInfo").style.display = "none";
  }
}
function FarmInfo(Toggle){
  document.getElementById("FarmButtonInfo").innerHTML = "A farm used for growing food <hr> Wood: " + FarmPrice + "<hr>" + FarmFoodProduction + " Food / tick <br>" + " Unlocks Farming";
  if(Toggle == 1){
    document.getElementById("FarmButtonInfo").style.display = "block";
  }
  if(Toggle == 0){
    document.getElementById("FarmButtonInfo").style.display = "none";
  }
}
function ProductionCalculations(){
  FoodPerSecond = 0;
  WoodPerSecond = 0;
  ScrapPerSecond = 0;
}
function Story(){
  if(GameStage == 0){
    InfoAdd("You wake up in a desolate world");
    GameStage += 1;
  }
}
function Unlocks(){
  if(WoodUnlocked == 0 && Wood > 0){
    document.getElementById("WoodDiv").style.display = "block";
    WoodUnlocked = 1;
  }
  if(ScrapUnlocked == 0 && Scrap > 0){
    document.getElementById("ScrapDiv").style.display = "block";
    ScrapUnlocked = 0;
  }
  if(FarmUnlocked == 0 && Wood >= 50){
    document.getElementById("FarmButton").style.display = "block";
    FarmUnlcked = 1;
  }
}
function PreUnlocks(){
  if(WoodUnlocked == 1){
    document.getElementById("WoodDiv").style.display = "block";
  }
  if(FarmUnlocked == 1){
    document.getElementById("FarmButton").style.display = "block";
  }
  if(ScrapUnlocked == 1){
    document.getElementById("ScrapDiv").style.display = "block";
  }
}
function ScavengeCalc(){
  if(Scavenged == 1){
    InfoAdd("You found " + ScavengeFoodNum.toString() + " food, " + ScavengeWoodNum.toString() + " wood, and " + ScavengeScrapNum.toString() + " scrap " + " while scavenging")
    FoodPerSecond += ScavengeFoodNum;
    WoodPerSecond += ScavengeWoodNum;
    ScrapPerSecond += ScavengeScrapNum;
    Scavenged = 0;
    ScavengeFoodNum = 0;
    ScavengeWoodNum = 0;
    ScavengeScrapNum = 0;
  }
}
function FoodCalc(){
  FoodPerSecond += Farms * FarmFoodProduction;

  FoodPerSecond -= FoodDemand;

  if(Starving >= 1){
    FoodPerSecond = FoodPerSecond/4;
  }

  Food += FoodPerSecond;

  if(Food < 0){
    Food = 0;
  }

  if(Food == 0){
    if(FoodDepleted == 0){
      InfoAdd("Your food stores are depleted");
    }
    if(FoodDepleted == 1){
      Starving += 0.25;
      if(Starving == 1){
        InfoAdd("You are starving");
      }
    }
    FoodDepleted = 1;
  }

  if(FoodDepleted == 1 && Food > 0){
    FoodDepleted = 0;
    Starving = 0;
  }
}
function WoodCalc(){
  WoodPerSecond -= WoodDemand;

  if(Wood < 0){
    Wood = 0;
  }

  if(Starving >= 1){
    WoodPerSecond = WoodPerSecond/4;
  }

  Wood += WoodPerSecond;
}
function ScrapCalc(){
  ScrapPerSecond -= ScrapDemand;

  if(Scrap < 0){
    Scrap = 0;
  }

  if(Starving >= 1){
    ScrapPerSecond = ScrapPerSecond/4;
  }

  Scrap += ScrapPerSecond
}
function Main(){
  ProductionCalculations();

  Story();

  Unlocks();

  ScavengeCalc();

  FoodCalc();

  WoodCalc();

  ScrapCalc();

  //Final Commands
  Refresh();
  setTimeout(Main, 1000);
}

// Loading Save
LoadingInfoId.innerHTML = "Gathering Knowledge";
LoadingBarId.style.width = "8%";

LoadItem("Food");
LoadItem("GameStage");
LoadItem("FoodDemand");
LoadItem("FoodPerSecond");
LoadItem("ScavengeRoll");
LoadItem("Wood");
LoadItem("Scrap");
LoadItem("ScavengeEff");
LoadItem("ScavengeBase");
LoadItem("ScavengeFoodNum");
LoadItem("ScavengeWoodNum");
LoadItem("ScavengeScrapNum");
LoadItem("ScavengeUnlocks");
//LoadItem("ScavengeInfo");
LoadItem("Scavenged");
LoadItem("WoodUnlocked");
LoadItem("WoodPerSecond");
LoadItem("ScrapPerSecond");
LoadItem("WoodDemand");
LoadItem("ScrapDemand");
LoadItem("Starving");
LoadItem("ScrapUnlocked");
LoadItem("FarmUnlocked");
LoadItem("Farms");
LoadItem("FarmFoodProduction");
LoadItem("FarmPrice");

//Showing Game ELements
LoadingInfoId.innerHTML = "Revealing Secrets";
LoadingBarId.style.width = "10%";

document.getElementById("Main").style.display = "flex";
document.getElementById("LoadingDiv").style.display = "none";
PreUnlocks();

//Starting Game
Main();
