import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
    return (
        <div>
            <h2>Snack 1</h2>
            <p>A Snickers bar.</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
}

export default Snack1;