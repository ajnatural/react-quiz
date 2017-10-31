import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Quiz from './Quiz';
import Results from './Results';
import shuffleQuestions from '../helpers/shuffleQuestions';
import { questions } from '../data/quiz-data';

const QUESTIONS = shuffleQuestions(questions);

class QuizApp extends Component {
  constructor(props) {
    super();

    this.state = {
      questions: QUESTIONS,
      userAnswers: QUESTIONS.map(question => {
        return {
          tries: 0
        }
      }),
      step: 1,
      score: 0
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  handleAnswerClick(e) {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = questions[0].correct === e.target.textContent;
    const answersFromUser = userAnswers.slice();
    const currentStep = step - 1;
    const tries = answersFromUser[currentStep].tries;

    if (isCorrect && e.target.nodeName === 'SPAN') {
      document.querySelector('.question:first-child').style.pointerEvents = 'none';

      e.target.parentNode.classList.add('right');

      answersFromUser[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: answersFromUser
      });

      const praise = document.querySelector('.praise');
      const bonus = document.querySelector('.bonus');
      const explanation = document.querySelector('.explanation');
      render(questions[0].explanation, explanation);

      if (tries === 0) {
        praise.textContent = 'Correct!';
        bonus.textContent = '+1';
      }

      document.querySelector('.correct-modal').classList.add('modal-enter');
      document.querySelector('.bonus').classList.add('show');
    }

    else if (e.target.nodeName === 'SPAN') {
      e.target.style.pointerEvents = 'none';
      e.target.parentNode.classList.add('wrong');

      answersFromUser[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: answersFromUser
      });

    }
  }

  nextStep() {
    document.querySelector('.correct-modal').classList.remove('modal-enter');
    document.querySelector('.bonus').classList.remove('show');
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: (() => {
        if (tries === 1) return score + 1;
        return score;
      })(),
      questions: restOfQuestions
    });
  }

  restartQuiz() {
    window.location.reload();
  }

  render() {
    const { totalQuestions } = this.props;
    const { step, questions, userAnswers, score } = this.state;
    return (
      <div>
        {(() => {
          if (step >= totalQuestions + 1) {
            return (
              <Results
                score={score}
                restartQuiz={this.restartQuiz}
                userAnswers={userAnswers}
              />
            );
          } else return (
            <Quiz
              step={step}
              questions={questions}
              totalQuestions={totalQuestions}
              score={score}
              handleAnswerClick={this.handleAnswerClick}
              nextStep={this.nextStep}
            />
          );
        })()}
      </div>
    );
  }
}

QuizApp.defaultProps = {
  totalQuestions: QUESTIONS.length
};

QuizApp.propTypes = {
  totalQuestions: PropTypes.number.isRequired
};

export default QuizApp;
