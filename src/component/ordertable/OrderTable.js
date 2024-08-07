import React from 'react';
import './OrderTable.scss';
import one from '../../asset/one.jpg'
import two from '../../asset/two.jpg'
import three from '../../asset/three.jpg'

const OrderTable = () => {
  // Sample data
  const data = [
    {
      id: 1,
      customerName: 'John Doe',
      profilePic: one,
      orderNo: '12345',
      amount: '$150.00',
      status: 'Completed',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      profilePic: two,
      orderNo: '12346',
      amount: '$250.00',
      status: 'Pending',
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      profilePic: three,
      orderNo: '12347',
      amount: '$100.00',
      status: 'Completed',
    },
    {
      id: 4,
      customerName: 'John Doe',
      profilePic: one,
      orderNo: '12345',
      amount: '$150.00',
      status: 'Completed',
    },
    {
      id: 5,
      customerName: 'Jane Smith',
      profilePic: two,
      orderNo: '12346',
      amount: '$250.00',
      status: 'Pending',
    },
    
  ];

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="customer-cell">
                <img src={item.profilePic} alt={item.customerName} className="profile-pic" />
                <span>{item.customerName}</span>
              </td>
              <td>{item.orderNo}</td>
              <td>{item.amount}</td>
              <td className={`status-cell ${item.status.toLowerCase()}`}> <p>{item.status}</p> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
