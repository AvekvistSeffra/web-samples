var caesarApp = angular.module("caesarApp", []);

caesarApp.controller("MainController", function($scope) {
    $scope.recent = "none";
    $scope.encrypt = function(message) {
        var newMessage = "";
        for(var i = 0; i < message.length; i++) {
            for(var j = 0; j < $scope.characters; j++) {
                var letterToInsert = j + $scope.crypticValue;
/*
                if(letterToInsert > $scope.characters) {

                } else if(letterToInsert < 0) {
                    letterToInsert = $scope.characters - letterToInsert;
                }
*/              
                if(message[i] == $scope.lCharacters[j])
                    newMessage += $scope.lCharacters[letterToInsert];
                else if(message[i] == $scope.sCharacters[j])
                    newMessage += $scope.sCharacters[letterToInsert];
            }
            

// Regular Expression (RegEx) to make it only be non-alphabetical characters
            if(message[i] == /[^a-zA-Z]/)
                newMessage += message[i];
        }

        return newMessage;
    }

    $scope.decrypt = function(message) {
        var newMessage = "";
        for(var i = 0; i < message.length; i++) {
            for(var j = 0; j < $scope.characters; j++) {
                var letterToInsert = j - $scope.crypticValue;

                if(letterToInsert > $scope.characters) {
                    
                } else if(letterToInsert < 0) {
                    letterToInsert = $scope.characters + letterToInsert;
                }
                
                if(message[i] == $scope.lCharacters[j])
                    newMessage += $scope.lCharacters[letterToInsert];
                else if(message[i] == $scope.sCharacters[j])
                    newMessage += $scope.sCharacters[letterToInsert];
            }
            

// Regular Expression (RegEx) to make it only be non-alphabetical characters
            if(message[i] == /[^a-zA-Z]/)
                newMessage += message[i];
        }

        return newMessage;
    }

    $scope.input = "Normal Message"
    $scope.output = $scope.encrypt("Encrypted Message");

    $scope.crypticValue = 4;
    $scope.characters = 26;
    $scope.lCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                          'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    $scope.sCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                          'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                          's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    $scope.updateValue = function() {
        parseInt($scope.crypticValue);
    }

    var slider = document.getElementById("crypt-range");
    slider.oninput = function() {
        $scope.crypticValue = slider.value;
    }

    $scope.output = $scope.encrypt("Encrypted Message");
});
