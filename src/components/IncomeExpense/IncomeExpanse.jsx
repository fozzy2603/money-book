import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const IncomeExpanse = () => {
    const { transactions } = useContext(GlobalContext);
    const { expanse, income } = transactions.reduce(
        (acc, item) => {
            if (item.amount < 0) {
                acc.expanse += item.amount;
            } else {
                acc.income += item.amount;
            }
            return acc;
        },
        { expanse: 0, income: 0 }
    );

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <h5 className="card-title">INCOME</h5>
                        <p className="card-text text-success">${income}</p>
                    </div>
                    <div className="col-6">
                        <h5 className="card-title">EXPENSE</h5>
                        <p className="card-text text-danger">${expanse}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeExpanse;
