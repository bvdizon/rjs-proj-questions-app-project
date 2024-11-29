import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
  const [isInfoShown, setIsInfoShown] = useState(false);

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          type='button'
          className='question-btn'
          onClick={() => setIsInfoShown(!isInfoShown)}>
          {isInfoShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isInfoShown && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
