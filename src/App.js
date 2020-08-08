import React from 'react';
import Provider from './context/GlobalProvider';
import Balance from './components/Balance';
import History from './components/History';
import AddForm from './components/AddForm';
import IncomeExpense from './components/IncomeExpense';

function App() {
    return (
        <Provider>
            <div className="container wrapper mt-5 mb-5">
                <div className="row mb-4">
                    <div className="col-12 col-sm-5 mb-3 mb-sm-0">
                        <Balance />
                    </div>
                    <div className="col-12 col-sm-7">
                        <IncomeExpense />
                    </div>
                </div>
                <History />
                <AddForm />
            </div>
        </Provider>
    );
}

export default App;
