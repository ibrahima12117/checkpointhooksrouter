// src/components/AddMovieForm.js
import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating: parseFloat(rating) });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL de l'image"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <button type="submit">Ajouter le film</button>
    </form>
  );
};

export default AddMovieForm;
