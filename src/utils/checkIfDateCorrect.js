export function checkIfDateCorrect(date) {
  const inputDate = new Date(date);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return inputDate <= today;
}
