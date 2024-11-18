import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
            <button 
                style={{ margin: '5px', padding: '10px', fontSize: '16px' }} 
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button 
                style={{ margin: '5px', padding: '10px', fontSize: '16px' }} 
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
            <button 
                style={{ margin: '5px', padding: '10px', fontSize: '16px', backgroundColor: '#f44336', color: 'white' }} 
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;
