import { displayPrompt, print } from "../crash/messages/message";

export const getWeightInMoon = () => {
  const weight = displayPrompt('Enter your weight');

  if (!weight) {
    console.log('Please enter a valid weight');
    return getWeightInMoon();
  }

  const moonWeight = parseFloat(weight) * 0.165;

  print({
    msg: `Your weight in moon is ${moonWeight}`,
    type: 'success'
  });
}
