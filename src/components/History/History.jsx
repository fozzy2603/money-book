import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import HistoryRow from './HidtoryRow';
import Emptytransactions from '../EmptyTransactions';

const History = () => {
    const { transactions } = useContext(GlobalContext);
    if (!transactions.length) return <Emptytransactions />;
    return (
        <div className="row mb-5">
            <div className="col-12">
                <h5>History</h5>
                <div className="card">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Description</th>
                                <th>Cost</th>
                                <th
                                    className="text-center"
                                    style={{ width: '100px' }}
                                >
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <HistoryRow
                                    key={transaction.id}
                                    index={index + 1}
                                    transaction={transaction}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default History;
