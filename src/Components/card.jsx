import React from 'react';

function QuoteCard() {
  return (
    <div className="card m-3 cyan-card">
      <div className="card-header">Premium Mobile Covers</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>Elevate your smartphone experience with our premium cases.</p>
          <footer className="blockquote-footer">Aura Digital Store<cite title="Source Title"></cite></footer>
        </blockquote>
      </div>
    </div>
  );
}

export default QuoteCard;
