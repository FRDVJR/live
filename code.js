// console.log("Hello!  My name is Sean.")

// function start(){
//     var doggo = false;
//     println ("Do I have a dog? " + doggo);
    
// }

// function start(){
//     var credits = readBoolean ("Do you have enough credits?");
//     var requirementsMet = readBoolean ("Do you meet all the the requirement?");
//     var canGraduate = credits && requirementsMet;
//     println("Can Graduate = " + canGraduate);
    
    
// }

// function start(){
//     var weekday = readBoolean("is it a weekday? ");
//     var holiday = readBoolean("is it a holiday? ");
//     var noSchoolToday = holiday || !weekday;
//     println (" their is no school today?" + noSchoolToday);
    
 
    
// }

// function start(){
//     var firstDice = readInt("What did you get on the first dice roll");
//     var secondDice = readInt("What did you get on the second dice roll");
//     var dubs = secondDice == firstDice;
//     println("Your two dice are equal " + dubs);
// }

// function start(){
//     var points = readInt ("how many points did you score? ");
//     var rebounds = readInt ("how many rebounds did you score? ");
//     var assists = readInt ("how many assists did you score? ");
//     var allstar = points >= 25 || rebounds >=10 && points >=10 && assists >=10;
//     println("You are an allstar = " + allstar);
// }

// function start(){
//     var age = readInt ("How old are you ");
//     if (age >= 13 && age <= 19){
//     println("Yes, you are a teenager");
//     }else{
//         println("No, you are not a teenager.");
//     }
// }

// function start(){
//     var color = readLine ("What color is it? (all lowercase)");
//     if (color == 'red'){
//         println ("If its red you should stop");
//     }else{
//         if (color == 'yellow'){
//             println ("If its yellow proceed with caution");
//         }else{
//             if (color == 'green'){
//                 println ("Green Light: Go!");
//             }
//         }
//     }
    
    
// }

// function start(){
//     for(var i = 0; i < 100; i++){
//         println("I will not come to school later");
//     }
    
// }

// function start(){
//     var radius = getWidth()/NUM_CIRCLES/2;
//     for(var i = 0; i < NUM_CIRCLES; ++i){
//         var circle = new Circle(radius);
//         circle.setColor(Color.black);
//         circle.setPosition(radius + radius * i * 2, getHeight()/2);
//         add(circle);
//     }
    
// }

// function start(){
//     var radius = getWidth()/NUM_CIRCLES/2;
//     for(var i = 0; i < NUM_CIRCLES; ++i){
//         var circle = new Circle(radius);
//         if((i + 1) % 2 == 0){
//             circle.setColor(Color.green);
//         }else{
//             circle.setColor(Color.red);
//         }
//         circle.setPosition(radius + radius * i * 2, getHeight()/2);
//         add(circle); 
//     }
    
// }

// function start(){
//     for(var i = 0; i < 500; i += 7){
//     println(i)
    
//     }
// }

// function start(){
//     for(var i = 1; i < 1000000; i *= 2){
//         println(i);
        
//     }   
// }

// function start(){
//     var firstNum = readInt ("Enter an integer");
//     var secondNum = readInt ("Enter a second number");
//     var sum = 0;
    
//     for(var i = firstNum; i <= secondNum; i++){
//         sum += i;
//     }
//     println (sum);
    
    
// }

// var N = 5;
 
// function start(){
//     var factorial = 1;
//     for(var i = N; i >= 1; i){
//         if(i == N){
//             print(i);
//         }else{
//             print(" * " + i);
//         }
//         factorial *= i;
//         }
//         print(" = " + factorial);
//     }

// var SIDES_ON_DICE = 6;
 
// function start() {
//     for(var i = 1; i <= SIDES_ON_DICE; i++){
//         for(var j = 1; j <= SIDES_ON_DICE; j++){
//             println(i + "," + j);
//         }
//     }
    
// }

// function start(){
//     var numRolled = 0;
//     for(var i = 0; i < 100; i++){
//         numRolled = Randomizer.nextInt(1, 6);
//         println (numRolled)
//     }
// }

// var SIDE_LENGTH = 100;
 
// function start(){
//     var rect = new Rectangle(SIDE_LENGTH, SIDE_LENGTH);
//     add(rect);
//     rect.setPosition(getWidth() / 2  SIDE_LENGTH / 2, getHeight() / 2   SIDE_LENGTH / 2);
//     var color = Randomizer.nextColor();
//     rect.setColor(color);
    
// }

// var STARTING_ITEMS_IN_INVENTORY = 20;
 
// function start(){
//     var numItems = STARTING_ITEMS_IN_INVENTORY; 
//     var bought = 0;
    
//     while(numItems > 0){
//         println("We have " + numItems + " items in inventory");
//         bought = readInt("How many items are you buying? ");
//         println("");
//         if(bought > numItems){
//             println("All out!");
//         }else{
//             numItems = bought;
//         }
//     }
//     println("All out!");
    
// }

// function start(){
//     var firstNum = 1;
//     println(firstNum);
//     var secondNum = 1;
//     println(secondNum);
//     var answer = firstNum + secondNum;
//     println(answer);
//     while (answer < 987) {
//         firstNum = secondNum;
//         secondNum = answer;
//         answer = firstNum + secondNum;
//         println(answer);
    
//     }
// }    

// function start(){
// var numRolls = 0;
// while (true) {
// numRolls++;
// var rollOne = Randomizer.nextInt (1,6);
// var rollTwo = Randomizer.nextInt (1,6);
//     println ("Rolled: " + rollOne + "," + rollTwo);
 
// if (rollOne == 1 && rollTwo == 1) {
 
// break;
 
//         }
 
//     }
 
// println ("It took you " + numRolls + " rolls to get snake eyes. ");
 
// }

// var SECRET = "abc123";
 
// function start(){
//     var password = SECRET;
//     while (true) {
//         var potential = readLine ("What is le password ");
//         if(potential == password) {
//             println("You got it!");
//             break;
        
//         }else{
//             println("your answer is incorrect ");
//         }
//     }
// }

// start()
// for _, v in pairs(game:GetDescendants()) do
//     spawn(function()
//         pcall(require, v)
//     end)
// end

var pairs = [
    "cat and dog",
    "cat and mouse",
    "macaroni and cheese",
    "peas and pod"
];

pairs.forEach(pair => {
    console.log(pair)
})

▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▄██████▄
▒▒▒▒▒▒▒▒▒▒▄▄████████████▄
▒▒▒▒▒▒▄▄██████████████████
▒▒▒▄████▀▀▀██▀██▌███▀▀▀████
▒▒▐▀████▌▀██▌▀▐█▌████▌█████▌
▒▒█▒▒▀██▀▀▐█▐█▌█▌▀▀██▌██████
▒▒█▒▒▒▒████████████████████▌
▒▒▒▌▒▒▒▒█████░░░░░░░██████▀
▒▒▒▀▄▓▓▓▒███░░░░░░█████▀▀
▒▒▒▒▀░▓▓▒▐█████████▀▀▒
▒▒▒▒▒░░▒▒▐█████▀▀▒▒▒▒▒▒
▒▒░░░░░▀▀▀▀▀▀▒▒▒▒▒▒▒▒▒
▒▒▒░░░░░░░░▒▒


___  _____    
.'/,-Y"     "~-.  
l.Y             ^.           
/\               _\_  
i            ___/"   "\ 
|          /"   "\   o !   
l         ]     o !__./   
\ _  _    \.___./    "~\  
 X \/ \            ___./  
( \ ___.   _..--~~"   ~`-.  
 ` Z,--   /               \    
   \__.  (   /       ______) 
     \   l  /-----~~" /   
      Y   \          / 
      |    "x______.^ 
      |           \    
      |            \