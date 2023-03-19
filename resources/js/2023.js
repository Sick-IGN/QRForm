const form = {
  
  /*
    title: Title given to doc
    prematch, auto, tele, endgame: pages, add as many as you want
    {
      q: question to ask
      id: id given, must be unique
      type: type of question; mcq, txt, num
        mcq: multiple choice, requires "options"
          choices: answers for mcq, formatted: {"return value":"public name"}
        txt: any text, used as string
        int: any integer
          min: minimum valid input 
          max: maximum valid input
      required: true or false
    }
  */

  title: "Charged Up 263 Scouting",
  pages: [
    {
      subtitle: "Prematch",
      questions: [
        { 
          q: "txt:",
          id: "name",
          type: "txt",
          required: "true"
        }, 
        {
          q: "mcq:",
          id: "match",
          type: "mcq",
          choices: [
            {
              choice: "sussy"
            },
            {
              choice: "balls"
            }
          ],
          required: "true"
        },
        {
          q: "int:",
          id: "match",
          type: "int",
          min: "10",
          max: "100",
          required: "true"
        }
      ]
    },
    {
      subtitle: "Autonomous",
      questions: [
        { 
          q: "Your name:",
          id: "name",
          type: "txt",
        }, 
        {
          q: "Match Number:",
          id: "match",
          type: "txt"
        }
      ]
    },
  ]
}

