import React from 'react';
import Comment from '../models/Comment';

interface CommentListProps {
  comments: Comment[];
  onDelete: (commentId: number) => void;
}

export const CommentList: React.FC<CommentListProps> = ({ comments, onDelete }) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.description} - {comment.date}
            <button onClick={() => onDelete(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
