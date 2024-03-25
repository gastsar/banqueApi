import { useState } from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TransactionCollapse from './TransactionCollapse';

/**
 * TransactionRow component with optional collapse functionality
 * @param {{ name: string, stocked: boolean, price: string }} transaction
 * @param {boolean} [isCollapsible=false] - Flag to enable collapse
 * @param {JSX.Element} [collapseContent] - Content to display when expanded
 * @returns {JSX.Element}
 */
export default function TransactionRow({
  transaction,
  isCollapsible = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => setIsExpanded(!isExpanded);

  return (
    <>
      <tr className='table-column' onClick={isCollapsible ? toggleCollapse : undefined}>
        {isCollapsible && (
          <td >
            {isExpanded ? (
              <button className='btn-collapse' onClick={toggleCollapse}>
                <KeyboardArrowDownIcon />
              </button>
            ) : (
              <button className='btn-collapse' onClick={toggleCollapse}>
                <KeyboardArrowUpIcon />
              </button>
            )}
          </td>
        )}
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.balance}</td>
      </tr>
      {isExpanded && (    
          <TransactionCollapse/>
    
      )}
    </>
  );
}

TransactionRow.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
  isCollapsible: PropTypes.bool,
  collapseContent: PropTypes.node,
};
