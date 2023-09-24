let name = 'k8805';
let letter = 'dear '+name+' Lorem ipsum dolor sit amet, \n\
\consectetur adipiscing elit, sed do eiusmod tempor \
\incididunt ut labore et dolore magna aliqua. '+name+' \
\Ut enim ad minim veniam, quis nostrud exercitation ullamco \
\laboris nisi ut aliquip ex ea commodo consequat. Duis aute \
\irure dolor in reprehenderit in voluptate velit esse cillum\
 \dolore eu fugiat nulla pariatur. Excepteur sint occaecat '+name;
console.log(letter);

// literal 정보를 표현하는 방법


let letter2 = `dear ${name} 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

${name} Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in ${1+1}} voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat ${name}`;
console.log(letter2);
