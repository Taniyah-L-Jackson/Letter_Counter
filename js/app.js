//take the users input
//count how many of each letter are in the input
//make sure the order of the word is still the same

var output = document.getElementById('output') //display to DOM

function userInput() {

    var input = document.getElementById('text').value //user input
    var new_arr = {} //setup an object so we can add values to the letters
   
    for(var i = 0; i < input.length; i++) { 

        if(new_arr[input[i]] != undefined) { //if the letter is already in the new list

            new_arr[input[i]] += 1; //add to the original letter's value

        } else { //if the letter is not in the new list

            new_arr[input[i]] = 1; //add the new letter and set its value to 1
        }
    }

    output.innerText = ('The word: ' + input + ' has ' + (JSON.stringify(new_arr, null, '\t')))
    
}
    

