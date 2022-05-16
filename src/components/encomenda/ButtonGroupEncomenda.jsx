import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function ButtonGroupEncomenda() {
    const [count, setCount] = useState(0);

    const handleIncrement = (data) => {
        setCount(count + 1);
        console.log('incrementa', data);
    };

    const handleDecrement = (data) => {
        setCount(count - 1);
        console.log('decrementa', data);

    }

    const displayCount = () => {
        setCount(count > 0);
    }    

    return (
        <div>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={handleIncrement}>+</Button>
                {displayCount && <Button disabled>{count}</Button>}
                {displayCount && <Button onClick={handleDecrement}>-</Button>}
            </ButtonGroup>
        </div>
    );
}




