import React from 'react';
import Comment from "../models/Comment"

interface CommentFormProps {
  onSave: (comment: Comment) => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({ onSave }) => {
  const [description, setDescription] = React.useState('');

  const handleSave = () => {
    const comment: Comment = {
      id: Date.now(),
      productId: 1,
      description,
      date: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }),
    };
    onSave(comment);
    setDescription('');
  };

  return (
    <div>
      <h3>Add Comment</h3>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Comment" />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};
