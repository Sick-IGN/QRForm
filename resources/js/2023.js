const form = {
  
  /*
    title: Title given to doc
    pages : array of all pages
      {
        subtitle: page subtitle,
        question: array of all question in the page 
        {
          q: name of question

          id: id of question

          type: type of question

            int: integer answer
              min: minimum value
              max: maximum value

            mcq: multiple choice
              choices: array of possible answers
                {
                  choice: a possible answer
                }
            
            txt: standard text based response

          required: true/false, sets if question is required            
        }
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
    {
      subtitle: "Teleop",
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
    {
      subtitle: "Endgame",
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
    }
  ]
}