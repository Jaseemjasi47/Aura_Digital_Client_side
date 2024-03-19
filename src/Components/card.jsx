import React from 'react';

function QuoteCard() {
  return (
    <div className="card m-3 cyan-card">
      <div className="card-header ff-garamond">Premium Mobile Covers</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p className='ff-garamond'>Elevate your smartphone experience with our premium cases.</p>
          <footer className="blockquote-footer ff-monospace">Aura Digital Store<cite title="Source Title"></cite></footer>
        </blockquote>
      </div>
    </div>
  );
}

export default QuoteCard;
