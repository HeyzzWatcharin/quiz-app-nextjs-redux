import quiz from "../../../data.json";

const initiaState = {
  questions: quiz,
  step: 0,
  score: 0,
  hashAnswer: false,
};

const quizReducer = (state = initiaState, action) => {
  switch (action.type) {
    case "ADD_SCORE":
      return { ...state, score: state.score + 1 };
    case "RESET_ALL":
      return initiaState
    case "SET_HASH_ANSWER":
      return { ...state, hashAnswer: action.payload };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    default:
      return { ...state };
  }
};

export default quizReducer;
