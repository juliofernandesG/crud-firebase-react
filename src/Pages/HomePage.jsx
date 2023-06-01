import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import TodoForm from './TodoForm';

const theme = createTheme();

const HomePage = () => {
  const history = useHistory();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    const tasksRef = firebase.database().ref(`tasks/${userId}`);

    tasksRef.on('value', (snapshot) => {
      const tasksData = snapshot.val();
      if (tasksData) {
        const tasksList = Object.keys(tasksData).map((taskId) => ({
          id: taskId,
          ...tasksData[taskId],
        }));
        setTasks(tasksList);
      } else {
        setTasks([]);
      }
    });

    return () => {
      tasksRef.off();
    };
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
    history.push('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Lista de Tarefas
        </Typography>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
        <TodoForm />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
