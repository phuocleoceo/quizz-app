import callAPI from "./apiService";

export const GET_QUIZZ = () => callAPI.get("itmmckernan/triviaJSON/master/world.json");