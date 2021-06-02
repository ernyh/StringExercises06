/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = "title case and more title";
let i = 0;

//using the LC book replace can't achieve the below
notTitle = notTitle.replace(notTitle[0],notTitle[0].toUpperCase());

/*using this referrence https://www.w3schools.com/js/js_string_methods.asp*/
for(i = 0; i < notTitle.length; i++ ){

  if(notTitle[i] === " "){
    notTitle = notTitle.slice(0,i+1) + notTitle[i+1].toUpperCase() + notTitle.slice(i+2, notTitle.length);
  }

}

/*this might work in c or java to title case a char [] it seems easier in JS
there is a toupper() and it may be more portable this assumes ascii values
void titleCase (char searchChar, int * title) {
  int i = 0;
  int length = strlen(title);
  for(i = 0; i < length; i++){
    if ( strcmp(title[i] ==  " ") == 0){
      if( (int)title[i+1] >= 97 && (int)title[i+1] <= 122  ){
        title[i+1] = char( (int)title[i+1] - 32 );
      }      
    }
  }
}
*/

console.log(notTitle);