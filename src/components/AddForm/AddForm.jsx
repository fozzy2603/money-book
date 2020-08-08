import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const AddForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount,
        };
        addTransaction(newTransaction);
        setAmount(0);
        setText('');
    };
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">Add new transaction</div>
                    <div className="card-body">
                        <form
                            className="form-inline"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <input
                                type="text"
                                className="form-control mb-2 mr-sm-2"
                                placeholder="Enter transaction..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-control mb-2 mr-sm-2"
                                placeholder="Enter amount..."
                                value={amount}
                                onChange={(e) => {
                                    setAmount(+e.target.value);
                                }}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary flex-fill mb-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddForm;
