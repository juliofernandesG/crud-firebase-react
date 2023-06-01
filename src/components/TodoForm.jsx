import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import firebase from 'firebase';

const theme = createTheme();

const TodoForm = () => {
  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    // Verifica se o título da tarefa não está vazio
    if (title.trim() !== '') {
      const userId = firebase.auth().currentUser.uid;
      const tasksRef = firebase.database().ref(`tasks/${userId}`);

      // Cria uma nova tarefa no banco de dados
      const newTaskRef = tasksRef.push();
      newTaskRef.set({
        title,
        completed: false,
      });

      // Limpa o campo de título após adicionar a tarefa
      setTitle('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginTop: '2rem',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <TextField
          type="text"
          label="New Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default TodoForm;
