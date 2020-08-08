import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const totalBalance = transactions.reduce((acc, item) => acc += item.amount, 0);
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">YOUR BALANCE</h5>
                <p className="card-text font-weight-bolder text-primary">${totalBalance}</p>
            </div>
        </div>
    );
};

export default Balance;
