//Action Creator
export const consoleLog = (log) => {
  console.log(log);
  //api call can be made here for cleaner code
  return {
    type: "ADD_LOG",
    // payload: JSON.stringify(log),
    payload: log,
  };
};
