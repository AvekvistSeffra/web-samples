var caesarApp = angular.module("caesarApp", []);

caesarApp.controller("MainController", function($scope) {
    $scope.testtext = "";
    $scope.swedish = false;
    $scope.english = false;
    $scope.recent = "input";

    $scope.encrypt = function(message) {
        $scope.recent = "input";
        var newMessage = "";
        for(var i = 0; i < message.length; i++) {
            for(var j = 0; j < $scope.characters; j++) {
                var letterToInsert = j + $scope.crypticValue;
                
                if(letterToInsert < 0) {
                    letterToInsert = $scope.characters + letterToInsert;
                }

                if(message[i] == $scope.lCharacters[j]) {
                    newMessage += $scope.lCharacters[letterToInsert];
                }
                else if(message[i] == $scope.sCharacters[j]) {
                    newMessage += $scope.sCharacters[letterToInsert];
                }

                if($scope.swedish != false) {
                    if(message[i] == ' ' || message[i] == '?' ||
                       message[i] == '\n'|| message[i] == '.' ||
                       message[i] == ',' || message[i] == '(' ||
                       message[i] == ')' || message[i] == '{' ||
                       message[i] == '}' || message[i] == '1' ||
                       message[i] == '2' || message[i] == '3' ||
                       message[i] == '4' || message[i] == '5' ||
                       message[i] == '6' || message[i] == '7' ||
                       message[i] == '8' || message[i] == '9' ||
                       message[i] == '0' || message[i] == '+' ||
                       message[i] == '-' || message[i] == '/' ||
                       message[i] == '*' || message[i] == '=' ||
                       message[i] == '!' || message[i] == '"' ||
                       message[i] == '\''|| message[i] == '\\'||
                       message[i] == '#' || message[i] == '£' ||
                       message[i] == '€' || message[i] == 'µ' ||
                       message[i] == '<' || message[i] == '>' ||
                       message[i] == '|' || message[i] == '^' ||
                       message[i] == '¨' || message[i] == '~' ||
                       message[i] == '¤' || message[i] == '%' ||
                       message[i] == '&' || message[i] == '$' ||
                       message[i] == '§' || message[i] == '½' ||
                       message[i] == '´' || message[i] == '`' ||
                       message[i] == '_' || message[i] == ':' ||
                       message[i] == ';' || message[i] == ''  ||
                       message[i] == '[' || message[i] == ']' ||
                       message[i] == '@') {
                        newMessage += message[i];
                        break;
                    }
                } else if($scope.english != false) {
                    if(message[i] == ' ' || message[i] == '?' ||
                       message[i] == '\n'|| message[i] == '.' ||
                       message[i] == ',' || message[i] == '(' ||
                       message[i] == ')' || message[i] == '{' ||
                       message[i] == '}' || message[i] == '1' ||
                       message[i] == '2' || message[i] == '3' ||
                       message[i] == '4' || message[i] == '5' ||
                       message[i] == '6' || message[i] == '7' ||
                       message[i] == '8' || message[i] == '9' ||
                       message[i] == '0' || message[i] == '+' ||
                       message[i] == '-' || message[i] == '/' ||
                       message[i] == '*' || message[i] == '=' ||
                       message[i] == '!' || message[i] == '"' ||
                       message[i] == '\''|| message[i] == '\\'||
                       message[i] == '#' || message[i] == '£' ||
                       message[i] == '€' || message[i] == 'µ' ||
                       message[i] == '<' || message[i] == '>' ||
                       message[i] == '|' || message[i] == '^' ||
                       message[i] == '¨' || message[i] == '~' ||
                       message[i] == 'å' || message[i] == 'Å' ||
                       message[i] == 'ä' || message[i] == 'Ä' ||
                       message[i] == 'ö' || message[i] == 'Ö' ||
                       message[i] == '¤' || message[i] == '%' ||
                       message[i] == '&' || message[i] == '$' ||
                       message[i] == '§' || message[i] == '½' ||
                       message[i] == '´' || message[i] == '`' ||
                       message[i] == '_' || message[i] == ':' ||
                       message[i] == ';' || message[i] == ''  ||
                       message[i] == '[' || message[i] == ']' ||
                       message[i] == '@') {
                        newMessage += message[i];
                        break;
                    }
                }
            }
        }

        return newMessage;
    }

    $scope.decrypt = function(message) {
        $scope.recent = "output";
        var newMessage = "";
        for(var i = 0; i < message.length; i++) {
            for(var j = 0; j < $scope.characters; j++) {
                var letterToInsert = j - $scope.crypticValue;
                
                if(letterToInsert < 0) {
                    letterToInsert = $scope.characters + letterToInsert;
                }
                
                if(message[i] == $scope.lCharacters[j]) {
                    newMessage += $scope.lCharacters[letterToInsert];
                } else if(message[i] == $scope.sCharacters[j]) {
                    newMessage += $scope.sCharacters[letterToInsert];
                }

                if($scope.swedish != false) {
                    if(message[i] == ' ' || message[i] == '?' ||
                       message[i] == '\n'|| message[i] == '.' ||
                       message[i] == ',' || message[i] == '(' ||
                       message[i] == ')' || message[i] == '{' ||
                       message[i] == '}' || message[i] == '1' ||
                       message[i] == '2' || message[i] == '3' ||
                       message[i] == '4' || message[i] == '5' ||
                       message[i] == '6' || message[i] == '7' ||
                       message[i] == '8' || message[i] == '9' ||
                       message[i] == '0' || message[i] == '+' ||
                       message[i] == '-' || message[i] == '/' ||
                       message[i] == '*' || message[i] == '=' ||
                       message[i] == '!' || message[i] == '"' ||
                       message[i] == '\''|| message[i] == '\\'||
                       message[i] == '#' || message[i] == '£' ||
                       message[i] == '€' || message[i] == 'µ' ||
                       message[i] == '<' || message[i] == '>' ||
                       message[i] == '|' || message[i] == '^' ||
                       message[i] == '¨' || message[i] == '~' ||
                       message[i] == '¤' || message[i] == '%' ||
                       message[i] == '&' || message[i] == '$' ||
                       message[i] == '§' || message[i] == '½' ||
                       message[i] == '´' || message[i] == '`' ||
                       message[i] == '_' || message[i] == ':' ||
                       message[i] == ';' || message[i] == ''  ||
                       message[i] == '[' || message[i] == ']' ||
                       message[i] == '@') {
                        newMessage += message[i];
                        break;
                    }
                } else if($scope.english != false) {
                    if(message[i] == ' ' || message[i] == '?' ||
                       message[i] == '\n'|| message[i] == '.' ||
                       message[i] == ',' || message[i] == '(' ||
                       message[i] == ')' || message[i] == '{' ||
                       message[i] == '}' || message[i] == '1' ||
                       message[i] == '2' || message[i] == '3' ||
                       message[i] == '4' || message[i] == '5' ||
                       message[i] == '6' || message[i] == '7' ||
                       message[i] == '8' || message[i] == '9' ||
                       message[i] == '0' || message[i] == '+' ||
                       message[i] == '-' || message[i] == '/' ||
                       message[i] == '*' || message[i] == '=' ||
                       message[i] == '!' || message[i] == '"' ||
                       message[i] == '\''|| message[i] == '\\'||
                       message[i] == '#' || message[i] == '£' ||
                       message[i] == '€' || message[i] == 'µ' ||
                       message[i] == '<' || message[i] == '>' ||
                       message[i] == '|' || message[i] == '^' ||
                       message[i] == '¨' || message[i] == '~' ||
                       message[i] == 'å' || message[i] == 'Å' ||
                       message[i] == 'ä' || message[i] == 'Ä' ||
                       message[i] == 'ö' || message[i] == 'Ö' ||
                       message[i] == '¤' || message[i] == '%' ||
                       message[i] == '&' || message[i] == '$' ||
                       message[i] == '§' || message[i] == '½' ||
                       message[i] == '´' || message[i] == '`' ||
                       message[i] == '_' || message[i] == ':' ||
                       message[i] == ';' || message[i] == ''  ||
                       message[i] == '[' || message[i] == ']' ||
                       message[i] == '@') {
                        newMessage += message[i];
                        break;
                    }
                }
            }
            
        }

        return newMessage;
    }

    $scope.input = "Normal Message"
    $scope.output = $scope.encrypt("Encrypted Message");

    $scope.crypticValue = 4;

    $scope.updateValue = function() {
        parseInt($scope.crypticValue);

        if($scope.recent == "input") {
            $scope.output = $scope.encrypt($scope.input);
        } else if($scope.recent == "output") {
            $scope.input = $scope.decrypt($scope.output);
        }
    }

    $scope.activateEnglish = function() {
        $scope.testtext = "ENGLOSH";
        $scope.characters = 26;
        $scope.english = true;
        $scope.swedish = false;
        $scope.lCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                              'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                              'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A',
                              'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                              'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
                              'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
        $scope.sCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                              'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                              's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a',
                              'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                              'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
                              'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
    }

    $scope.activateSwedish = function() {
        $scope.testtext = "SWEDOSH";
        $scope.characters = 29;
        $scope.swedish = true;
        $scope.english = false;
        $scope.lCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                              'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                              'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å',
                              'Ä', 'Ö', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
                              'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                              'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
                              'Z', 'Å', 'Ä'];
        $scope.sCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                              'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                              's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å',
                              'ä', 'ö', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
                              'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                              'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
                              'z', 'å', 'ä'];
    }

    var slider = document.getElementById("crypt-range");
    slider.oninput = function() {
        $scope.crypticValue = slider.value;
    }

    $scope.output = $scope.encrypt("Encrypted Message");
    $scope.activateEnglish();
});
