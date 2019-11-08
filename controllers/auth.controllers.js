"use strict"

const welcome = (req, res) => {
    res.status(200).json({ message: "welcome to CodeTheft"});
}

const evaluateInput = (req, res) => {
    var questionCode = req.body.questionCode;
    var inputValue = req.body.inputValue;
    var inputValueArray1 = req.body.inputValueArray1;
    var inputValueArray2 = req.body.inputValueArray2;

    switch (questionCode) {
        case 'q1': 
            var stringInput = inputValue.toString();
            var flag = 0;
            var result = '';
            var stringLength = stringInput.length;
            for (var i = 0; i < stringLength; i++) {

                if (!Number(stringInput.charAt(i))) {
                    if (stringInput.charAt(i) == 'a' || stringInput.charAt(i) == 'A') {
                        flag = 1;
                    }

                    else if (stringInput.charAt(i) == 'b' || stringInput.charAt(i) == 'B') {
                        flag = -1;
                    }
                }

                if (Number(stringInput.charAt(i))) {
                    result = result + String(Number(stringInput.charAt(i)) + flag);
                    flag = 0;
                }
            }

            if (result) {
                console.log(`Question 1 selected. Input value = ${inputValue} : result = ${result}.` );
                res.status(200).send({ output: result});
            }
            else {
                console.log("Error at question 1.")
                res.status(500).send({ message: "Server error" });
            }

            break;

        case 'q2': 
            var arr1 = inputValueArray1;
            var arr2 = inputValueArray2;
            var result = [];
            var i = 0;
            var j = 0;
            var k = 0;
            while (i < arr1.length && j < arr2.length) {
                if (arr1[i] < arr2[j]) {
                    result[k] = arr1[i];
                    i++;
                    k++;
                }
                else {
                    result[k] = arr2[j];
                    j++;
                    k++;
                }
            }

            while (i < arr1.length) {
                result[k] = arr1[i];
                i++;
                k++;
            }

            while (j < arr2.length) {
                result[k] = arr2[j];
                j++;
                k++;
            }

            if (result) {
                console.log(`Question 2 selected. Input value array 1 = ${arr1}  array 2 = ${arr2} : result = ${result}.` );
                res.status(200).send({ output: result});
            }

            else {
                console.log("Error at question 2.")
                res.status(500).send({ message: "Server error" });
            }

            break;

        case 'q3Compress': 
            var stringInput = inputValue.toString();
            var count = 1;
            var result = '';
            var stringLength = stringInput.length;
            for (var i = 0; i < stringLength; i++) {

                if (stringInput.charAt(i) == stringInput.charAt(i + 1)) {
                    count++;
                }

                else if (stringInput.charAt(i) != stringInput.charAt(i + 1)) {
                    (count > 1) ? result = result + stringInput.charAt(i) + String(count) : result = result + stringInput.charAt(i) ;
                    count = 1;
                }
            }

            if (result) {
                console.log(`Question 3 option compress selected. Input value = ${stringInput} : result = ${result}.`);
                res.status(200).send({ output: result });
            }

            else {
                console.log("Error at question 3 option compress.")
                res.status(500).send({ message: "Server error" });
            }

            break;

        case 'q3Decompress':
            var stringInput = inputValue.toString();
            var count = 0;
            var result = '';
            var stringLength = stringInput.length;
            for (var i = 0; i < stringLength; i++) {

                if (Number(stringInput.charAt(i)) || Number(stringInput.charAt(i)) == 0) {
                    continue;
                } 

                if (stringInput.charAt(i) != stringInput.charAt(i+1) && !Number(stringInput.charAt(i + 1))) {
                    result = result + stringInput.charAt(i);
                } 

                else if (stringInput.charAt(i) != stringInput.charAt(i+1) && Number(stringInput.charAt(i + 1))) {
                    (Number(stringInput.charAt(i + 2)) || Number(stringInput.charAt(i + 2)) == 0) ? count = Number(stringInput.substring(i + 1, i + 3)) : count = Number(stringInput.charAt(i + 1));
                    while (count > 0) { 
                        result = result + stringInput.charAt(i);
                        count--;
                    }
                }
            }

            if (result) {
                console.log(`Question 3 option decompress selected. Input value = ${stringInput} : result = ${result}.`);
                res.status(200).send({ output: result });
            }

            else {
                console.log("Error at question 3 option decompress.")
                res.status(500).send({ message: "Server error" });
            }

            break;

        case 'q4': 
            var stringInput = inputValue.toString();
            var parentheses = 0;
            var squareBrackets = 0;
            var braces = 0;
            for (var letter of stringInput) {
                switch (letter) {
                    case '[': 
                        squareBrackets++;
                        break;
                    
                    case '{': 
                        braces++;
                        break;

                    case '(':
                        parentheses++;
                        break;

                    case ')':
                        parentheses--;
                        break;

                    case '}':
                        braces--;
                        break;

                    case ']':
                        squareBrackets--;
                        break;

                    default: 
                        break;
                }
            }
            
            (squareBrackets === 0 && braces === 0 && parentheses === 0) 
                ? result = 'Balanced'
                : result = 'Not Balanced'; 

            if (result) {
                console.log(`Question 4. Input value = ${stringInput} : result = ${result}.`);
                res.status(200).send({ output: result });
            }

            else {
                console.log("Error at question 4.")
                res.status(500).send({ message: "Server error" });
            }

            break;

        default:
            console.log("error");
            res.status(404).send({ message: "404 not found"});
    }
}

module.exports = {
    welcome,
    evaluateInput
};