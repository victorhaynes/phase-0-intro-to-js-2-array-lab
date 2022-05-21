// Write your solution here!

const cats = [
    "Milo",
    "Otis",
    "Garfield"
]

////////////Destructively add new cat name to end of cat Array
function destructivelyAppendCat(name){
    cats.push(name)
}
//Re-initialize cats Array before running next operation
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });




////////////Destructively add new cat name to beginning of cat Array
function destructivelyPrependCat(name){
    cats.unshift(name)
}
//Re-initialize cats Array before running next operation
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });



////////////Destrutively remove last cat from cat Array
function destructivelyRemoveLastCat(name){
    cats.pop()
};
//Re-initialize cats Array before running next operation
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });




////////////Destrutively remove first cat from cat Array
function destructivelyRemoveFirstCat(name){
    cats.shift()
};
//Re-initialize cats Array before running next operation
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });





////////////Append a cat to the cats Array, leave cat Array unchanged
let copyOfcats = []

function appendCat(name){
    copyOfcats = [...cats,name]
    return(copyOfcats)
};



//////////Prepend a cat to the cats Array, leave cat Array unchanged
let copyOfcatsPre = []

function prependCat(name){
    copyOfcatsPre = [name,...cats]
    return(copyOfcatsPre)
};

//////////Remove last cat in cats Array, leave cat Array unchanged
let noLastCat =[]
function removeLastCat(name){
    noLastCat = cats.slice(0, cats.length - 1 )
    return(noLastCat)
};

//////////Remove first cat from the cats Array, leave cat Array unchanged
let noFirstCat =[]
function removeFirstCat(name){
    noFirstCat = cats.slice(1)
    return(noFirstCat)
};
