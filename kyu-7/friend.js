// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// Note: keep the original order of the names in the output.

function friend(friends){
    let array = [];
    let count = 0;
    for(let i = 0 ; i < friends.length ; i++){
      if ( friends[i].length === 4 ){
        array[count] = friends[i];
        count++;
      }
    }
    return array;
}