import { useState } from 'react';

import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data);

  console.log(questions);
  return (
    <main>
      <Questions questions={questions} setQuestions={setQuestions} />
    </main>
  );
};
export default App;
