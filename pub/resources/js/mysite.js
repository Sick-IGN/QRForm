//Generates a visible page
//index == index of pages array in the json
function generateVisiblePage(index) {
  let formItem = document.getElementById('main')
  let page = '';

  page += '<ol class="visiblePage">'
  page += '<h2>' + form.pages[index].subtitle + '</h2>';

  let q; let id; let type; let min; let max; let choices;

  for (var i = 0; i < form.pages[index].questions.length; i++) {
    q = form.pages[index].questions[i].q;
    id = form.pages[index].questions[i].id;
    type = form.pages[index].questions[i].type;
    req = form.pages[index].questions[i].required;

    page += '<li>';
    page += ('<label for="' + id + '">' + q + '</label>');

    if (type == "txt") {
      if (req == "true") {page += ('<input name="' + id + '" required type="text"></input');}
      else  {page += ('<input name="' + id + '" type="text"></input');}

    } else if (type == "mcq") {
      choices = form.pages[index].questions[i].choices;

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
      min = form.pages[index].questions[i].min
      max = form.pages[index].questions[i].max

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

//Generates an invisible page
//index == index of pages array in the json
function generateInvisiblePage(index) {
  let formItem = document.getElementById('main')
  let page = '';

  page += '<ol class="hiddenPage">'
  page += '<h2>' + form.pages[index].subtitle + '</h2>';

  let q; let id; let type; let min; let max; let choices;

  for (var i = 0; i < form.pages[index].questions.length; i++) {
    q = form.pages[index].questions[i].q;
    id = form.pages[index].questions[i].id;
    type = form.pages[index].questions[i].type;
    req = form.pages[index].questions[i].required;

    page += '<li>';
    page += ('<label for="' + id + '">' + q + '</label>');

    if (type == "txt") {
      if (req == "true") {page += ('<input name="' + id + '" required type="text"></input');}
      else  {page += ('<input name="' + id + '" type="text"></input');}

    } else if (type == "mcq") {
      choices = form.pages[index].questions[i].choices;

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
      min = form.pages[index].questions[i].min
      max = form.pages[index].questions[i].max

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

//Generates pages
function generatePages() {

  //Generates first visible page
  generateVisiblePage(0);

  //Generates the rest of the pages, invisible
  for (let i = 1; i < form.pages.length; i++) {
    generateInvisiblePage(i);
  }

  
};

//Initialize the page, populating the form
function initialize() {

  //Sets title to <header> title and text title
  document.title=form.title;
  document.getElementsByTagName('h1')[0].innerHTML=form.title;

  //Generates pages
  generatePages();

  //Generates QRCode Image to be show
};

//Goes to the next page, removing next and adding submit if the user is now on the last page
function nextPage() {
  let currentPage = document.getElementsByClassName('visiblePage')[0];
  let nextPage = currentPage.nextElementSibling;
  currentPage.setAttribute('class', 'hiddenPage');
  nextPage.setAttribute('class', 'visiblePage');
  if (document.querySelector(".visiblePage + .hiddenPage")==null) {
    document.getElementById('next').setAttribute('class', 'invis')
    document.getElementById('submit').setAttribute('class', '')
  }
};

//Goes to the previous page, removing submit and re-adding next if the user was on the last page
function prevPage() {
  let currentPage = document.getElementsByClassName('visiblePage')[0];
  let prevPage = currentPage.previousElementSibling;
  if (prevPage) {
    if (document.querySelector(".visiblePage + .hiddenPage")==null) {
      document.getElementById('next').setAttribute('class', '')
      document.getElementById('submit').setAttribute('class', 'invis')
    }
    currentPage.setAttribute('class', 'hiddenPage');
    prevPage.setAttribute('class', 'visiblePage');
  }
};

//Resets the page to default, allowing user to use it again
function reset() {

};

//Resets the page to default, keeps the output string from the previous form. 
//Allows user to continue completing forms without having the QR code scanned.
function saveQRandReset() {
  
};

//Attempts to post data to a server
//If it fails, provides a QR code instead
function submit() {

  let output = '';
  let formValues = document.querySelectorAll('form#main input');
  formValues = Array.from(formValues);
  let formData = new FormData();

  formValues.forEach(input => {
    formData.append(input.name, input.value);
  });

  //Attempts a post
  fetch('/priv/submit.js', {
    method: 'POST',
    body: formData,
    timeout: 5000 
  })

  .then(response => {  
    //If success
    alert('Success!');
    setTimeout(() => {reset();}, 5000)
  })

  .catch(error => {
    //If fail, qrcode time
    output += formValues[0].name;
    output += '=';
    output += formValues[0].value;

    for (let i = 1; i < formValues.length; i++) {
      output += ';'
      output += formValues[i].name;
      output += '=';
      output += formValues[i].value;
    }

    var options = {
      text: output,
      width: 256,
      height: 256
    };
    new QRCode(document.getElementById('qrcode'), options);
    document.getElementById('qrcode').setAttribute('class', '');
  })
};

function createTable() {
  let formValues = document.querySelectorAll('form#main input');
  formValues = Array.from(formValues);
};

$(document).ready(function() {
  initialize();
});