import React from 'react';
import './FeedBack.scss';
import one from '../../asset/one.jpg'
import two from '../../asset/two.jpg'
import three from '../../asset/three.jpg'

const Feedback = () => {
  // Sample data
  const feedbacks = [
    {
      id: 1,
      customerName: 'John Doe',
      profilePic: one,
      rating: 4,
      review: 'Great Food! Highly recommend.',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      profilePic: two,
      rating: 5,
      review: 'Amazing experience, will definitely come back!',
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      profilePic: three,
      rating: 3,
      review: 'It was okay, could be better.',
    },
  ];

  return (
    <div className="feedback-container">
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="feedback-card">
          <div className="customer-info">
            <img src={feedback.profilePic} alt={feedback.customerName} className="profile-pic" />
            <h4>{feedback.customerName}</h4>
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (v, i) => (
              <span key={i} className={`star ${i < feedback.rating ? 'filled' : ''}`}>
                ★
              </span>
            ))}
          </div>
          <p className="review-text">{feedback.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
