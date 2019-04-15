let users = {
  badcat: {
    id: 'badcat',
    name: 'Bad Cat',
    avatarURL: 'https://i.ibb.co/tPMmMS3/bad-cat.jpg',
    answers: {
     
    },
    questions: ['am8ehyc8byjqgar0jgpub9']
  },
  warriorfish: {
    id: 'warriorfish',
    name: 'Warrior Fish',
    avatarURL: 'https://i.ibb.co/yywCrZs/warrior-fish.jpg',
    answers: {
      
    },
    questions: ['vthrdm985a262al8qx3do'],
  },
  mapachechonquis: {
    id: 'mapachechonquis',
    name: 'Mapache Chonquis',
    avatarURL: 'https://i.ibb.co/jvv6LVM/mapache-chonquis.jpg',
    answers: {
  
    },
    questions: ['6ni6ok3ym7mf1p33lnez'],
  },

wilddog: {
    id: 'wilddog',
    name: 'Wild Dog',
    avatarURL: 'https://i.ibb.co/Rhx3hCM/wild-dog.jpg',
    answers: {
   
    },
    questions: ['9ni6ok9ym7mf1p99lnez'],
  },
   angelcow: {
    id: 'angelcow',
    name: 'Angel Cow',
    avatarURL: 'https://i.ibb.co/k6Dw7Bq/angel-cow.jpg',
    answers: {
    
    },
    questions: ['1ni4oklym7mf3p44lnez'],
  }
}

let questions = {

   "9ni6ok9ym7mf1p99lnez": {
    id: '9ni6ok9ym7mf1p99lnez',
    author: 'wilddog',
    timestamp: 1467166872634,
    optionOne: {
      votes: [],
      text: 'be a Milli Vanilli',
    },
    optionTwo: {
      votes: [],
      text: 'be a guns And Roses'
    }
  },

  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'mapachechonquis',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: [],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'badcat',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be SnowBoarder',
    },
    optionTwo: {
      votes: [],
      text: 'be a Professional Cumbia Dancer'
    }
  },

  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'warriorfish',
    timestamp: 1489579767190,
    optionOne: {
      votes: [],
      text: 'Ride a Motocycle',
    },
    optionTwo: {
      votes: [],
      text: 'Ride a pig'
    }
  },
  "1ni4oklym7mf3p44lnez": {
    id: '1ni4oklym7mf3p44lnez',
    author: 'angelcow',
    timestamp: 1493579767190,
    optionOne: {
      votes: [],
      text: 'write a poem',
    },
    optionTwo: {
      votes: [],
      text: 'write nothing at all'
    }
  }
}

function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _dataGetUsers () {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({...users}), 1000)
  })

}

export function _dataGetQuestions () {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({...questions}), 1000)
    })

}

function setFormatQuestion ({ optionOneText, optionTwoText, author }) {


  
  return {
    id: generateID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _dataSaveQuestion (question) {

  return new Promise((resolve, reject) => {
    
    const authedUser = question.author;
    const formattedQuestion = setFormatQuestion(question);

    setTimeout(() => {
      questions = {
        //spread all obj old question
        ...questions,
        // add tne new quiestion formatted
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      resolve(formattedQuestion)
    }, 1000)
  })
}

export function _dataSaveQuestionAnswer ({ authedUser, qid, answer }) {
  
  return new Promise((res, rej) => {

    setTimeout(() => {

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
