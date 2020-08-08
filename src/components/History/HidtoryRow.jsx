import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const HidtoryRow = ({ transaction: { id, text, amount }, index }) => {
    const sign = amount < 0 ? '-' : '+';
    const { removeTransaction } = useContext(GlobalContext);
    return (
        <tr>
            <th>{index}</th>
            <td>{text}</td>
            <td className={amount < 0 ? 'text-danger' : 'text-success'}>
                {sign} ${Math.abs(amount)}
            </td>
            <td className="text-center">
                <button className="btn btn-danger btn-sm" onClick={() => removeTransaction(id)}>&times;</button>
            </td>
        </tr>
    );
};

export default HidtoryRow;
