let users = {
  badcat: {
    id: 'badcat',
    name: 'Bad Cat',
    avatarURL: 'https://i.ibb.co/tPMmMS3/bad-cat.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  warriorfish: {
    id: 'warriorfish',
    name: 'Warrior Fish',
    avatarURL: 'https://i.ibb.co/yywCrZs/warrior-fish.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  mapachechonquis: {
    id: 'mapachechonquis',
    name: 'Mapache Chonquis',
    avatarURL: 'https://i.ibb.co/jvv6LVM/mapache-chonquis.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },

wilddog: {
    id: 'wilddog',
    name: 'Wild Dog',
    avatarURL: 'https://i.ibb.co/Rhx3hCM/wild-dog.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['9ni6ok9ym7mf1p99lnez'],
  },
   angelcow: {
    id: 'angelcow',
    name: 'Angel Cow',
    avatarURL: 'https://i.ibb.co/k6Dw7Bq/angel-cow.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "1ni4oklym7mf3p44lnez": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
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
      votes: ['badcat'],
      text: 'be a Milli Vanilli',
    },
    optionTwo: {
      votes: [],
      text: 'be a guns And Roses'
    }
  },

  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'badcat',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['badcat'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'mapachechonquis',
    timestamp: 1468479767190,
    optionOne: {
      votes: ['badcat','wilddog', 'angelcow'],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['mapachechonquis'],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'badcat',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['badcat'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'warriorfish',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['badcat'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'warriorfish',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['warriorfish'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['mapachechonquis', 'wilddog'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'mapachechonquis',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['mapachechonquis','wilddog', 'angelcow'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['warriorfish'],
      text: 'write Swift'
    }
  },
  "1ni4oklym7mf3p44lnez": {
    id: '1ni4oklym7mf3p44lnez',
    author: 'angelcow',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['mapachechonquis','wilddog'],
      text: 'write a poem',
    },
    optionTwo: {
      votes: ['angelcow'],
      text: 'write nothing at all'
    }
  }
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })

}

export function _getQuestions () {

  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })

}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
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

export function _saveQuestion (question) {
  
  return new Promise((resolve, reject) => {
    
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
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

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  
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
          ...questions[s],
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
