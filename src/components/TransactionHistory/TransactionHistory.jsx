import { Transaction } from 'components/Transaction/Transaction';
import { Table } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Transaction type={type} amount={amount} currency={currency} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

