function generateVisiblePage() {

};

function generateInvisiblePage() {

};

function generatePages() {

  let formItem = document.getElementById('main')
  let page = '';

  //Creates the first page and displays normally
  page += '<ol class="page" class="visible">'
  page += '<h2>' + form.pages[0].subtitle + '</h2>';

  let q; let id; let type; let min; let max; let choices = [1,2,3];

  for (var i = 0; i < form.pages[0].questions.length; i++) {
    q = form.pages[0].questions[i].q;
    id = form.pages[0].questions[i].id;
    type = form.pages[0].questions[i].type;
    req = form.pages[0].questions[i].required;

    page += '<li>';
    page += ('<label for="' + id + '">' + q + '</label>');

    if (type == "txt") {
      if (req == "true") {page += ('<input name="' + id + '" required type="text"></input');}
      else  {page += ('<input name="' + id + '" type="text"></input');}

    } else if (type == "mcq") {
      choices = form.pages[0].questions[i].choices;

      for (var j = 0; j < choices.length; j++) {
        if (req == "true") {
          page += ('<label for="' + choices[j].choice + '">' + choices[j].choice + '</label>')
          page += ('<input name="' + id + '" required type="radio" value="' + choices[j].choice + '"></input');
          
        }
        else  {
          page += ('<input name="' + id + '" type="radio"></input');
        }

      }
    } else if (type == "int") {
      min = form.pages[0].questions[i].min
      max = form.pages[0].questions[i].max

      if (req == "true") {page += ('<input name="' + id + '" required type="number" min="' + min + '" max="' + max + '"></input');}
      else  {page += ('<input name="' + id + '" type="number" min="' + min + '" max="' + max + '"></input');}

    } else if (type == "special") {
      //ADAM MANUALLY IMPLEMENT THIS FOR THE SCORE TRACKER, MAKE SOME AUTO THING LATER
      
    } else {
      alert("Error! Invalid question type! Fix yer json!!")
    }
    page += '</li>'
  };

  page += '</ol>'
  formItem.innerHTML += page;
};

function initialize() {

  //Sets title to <header> title and text title
  document.title=form.title;
  document.getElementsByTagName('h1')[0].innerHTML=form.title;

  //Generates pages
  generatePages();
};

window.onload = function() {
  var output;
  initialize();
};
