import initState from "./data";

const rootReducer = (state = initState, action) => {
  let myList = [...state.mylist];
  let recommend = [...state.recommendations];
  let movie;
  switch (action.type) {
    case "Remove":
      movie = myList[action.index];
      myList.splice(action.index, 1);
      recommend.push(movie);
      return {
        mylist: myList,
        recommendations: recommend
      };

    case "Add":
      movie = recommend[action.index];
      recommend.splice(action.index, 1);
      myList.push(movie);
      return {
        mylist: myList,
        recommendations: recommend
      };
    default:
      return state
      
  }

};

export default rootReducer;
