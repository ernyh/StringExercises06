/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = "title case and more title";
let i = 0;

notTitle = notTitle.replace(notTitle[0],notTitle[0].toUpperCase());

for(i = 0; i < notTitle.length; i++ ){

  if(notTitle[i] === " "){
    notTitle = notTitle.slice(0,i+1) + notTitle[i+1].toUpperCase() + notTitle.slice(i+2, notTitle.length);
  }

}


console.log(notTitle);