import React, { forwardRef } from 'react'

const ResultModalComponent = ({ result, targetTime },  ref) => {
  
  // const dialogRef = useRef();

  // useEffect(() => { 
  //   dialogRef.current.showModal();
  // }, []);

  return (
    <dialog ref={ref} className='result-modal'>
      <h2>Your {result}!</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
}

const ResultModal = forwardRef(ResultModalComponent);

export default ResultModal;