const initiaState = {
  correctAnswer: 0,
  clickedAnswer: 0,
  step: 1,
  score: 0,
};

const quizReducer = (state = initiaState, action) => {
  switch (action.type) {
    case "NEXTSTEP":
      return {
        ...state,
        step: state.step + 1,
        correctAnswer: 0,
        clickedAnswer: 0,
      };
    case "BACKSTEP":
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      return { ...state };
  }
};

export default quizReducer;
