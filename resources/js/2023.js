var form = {
  
  /*
  title: Title given to doc
  prematch, auto, tele, endgame: pages, add as many as you want
  {
    "q": question to ask
    "id": id given, must be unique
    "type": type of question; mcq, txt, num
      mcq: multiple choice, requires "options"
        "options": answers for mcq, formatted: {"return value":"public name"}
      txt: any text, used as string
      int: any integer
        "min": minimum valid input
        "max": maximum valid input"
  }
  */

  "title:": "Charged Up 263 Scouting",
  "prematch": [
    { "q": "Your name:",
      "id": "name",
      "type": "txt"
    }, {
      "q": "Match Number:",
      "id": "match"
      "type": "txt"
    }
  ]