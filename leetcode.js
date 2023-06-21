function numberOfLines(widths, s){
    let lines = 1; //initialize the first line of string s 
    let currentWidth =0;//the width of the first line of string s
    //for loop iterates over every character of string s
    for (let i=0; i < s.length; i++){
        //calculate the width of the current character in string s
        const charWidth = widths[s.charCodeAt(i) - 'a'.charCodeAt(0)];
        //the if statement checks if the addition of the width of the 
        //current character and the width of the current line exceeds 100 pixcels
        if (currentWidth + charWidth > 100) {
            lines ++ 
            currentWidth = charWidth
        
        }
        else{
            //add the width of the current character if condition is false
            currentWidth += charWidth
        }
    }
    //display the line and the current width of the line used to write string s
    return [lines, currentWidth]
}