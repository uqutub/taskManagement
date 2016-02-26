export class ValidationService {

    static getValidatorErrorMessage(code: string) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidDecimalNumber': 'Invalid number should be number or decimal values',
            'invalidDropdown': 'Select any option'
        };
        return config[code];
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
    
    static dropdownValidator(control) {
        //default value of dorpdown will be -1,         
        if (control.value != '-1') {
            return null;
        } else {
            return { 'invalidDropdown': true };
        }
    }

    static decimalNumberValidator(control) {
        // ^[0-9]+(\.[0-9]{1,2})?$           # only number or decimal upto 2 digits are allowed
        //  ^                   # Start of string.
        //  [0-9]+              # Must have one or more numbers.
        //  (                   # Begin optional group.
        //  \.                  # The decimal point, . must be escaped,  or it is treated as "any character". 
        //  [0-9]{1,2}          # One or two numbers.
        //  )?                  # End group, signify it's optional with ?
        //  $                   # End of string.
        if (control.value.match(/^\d+(\.\d{1,2})?$/)) {
            return null;
        } else {
            return { 'invalidDecimalNumber': true };
        }
    }
}



// ^((\+|\-)?)\d+(\.\d{1,2})?$         #start if any + or - numbders
// ^[a-z]+([a-z0-9]+)?                  # should be start with alphabets (small) and then alphanumaric... else nuthing will be allowed
// ^([a-z]{1}[a-z0-9]{2,4})           # should be start with alphabets (small) and then alphanumaric with min 3 and max 5... else nuthing will be allowed
// ^([0-9]{1,7})?                       #should be only numbers, and range min 1 and max 7

// Name:
// Alphabets, numbers and space(' ') no special characters min 3 and max 20 characters. 
// var ck_name = /^[A-Za-z0-9 ]{3,20}$/;

// Learning JavaScript, 2nd Edition

// Email
// Standard email address 
// var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
// var ck_email2 = /^[a-z0-9]+[_a-z0-9.-]*[a-z0-9]+@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

// UserId
// Supports alphabets and numbers no special characters except underscore('_') min 3 and max 20 characters. 
// var ck_username = /^[A-Za-z0-9_]{3,20}$/;

// Password
// Password supports special characters and here min length 6 max 20 charters.
// var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

// Regular expression for URL
// ^http[s]?://[a-z0-9-.]+.[a-z.]{2,5}(/[a-z0-9%-_.?=&@#]*)?$

// Regular expression for Domain Name
// ^[a-z0-9]+[a-z0-9-.]*[a-z0-9]+.[a-z.]{2,5}$

// Regular expression for IP-address
// This will match any IP-address between 0.0.0.0 to 255.255.255.255
// ^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$

// Regular expression for Hexadecimal color
// This Regex pattern will match any 3 or 6 digit hexadecimal value eg: FF2 or 33CCEE
// ^([a-f0-9]{6}|[a-f0-9]{3})$