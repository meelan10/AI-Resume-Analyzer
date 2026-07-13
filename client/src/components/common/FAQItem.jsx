import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)}>
        {question}
      </button>
      {open && <p>{answer}</p>}
    </div>
  );
};

export default FAQItem;
