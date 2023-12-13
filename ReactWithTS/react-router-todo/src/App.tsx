import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { DataView } from 'pages/DataView';
import { ToDoListContextProvider } from 'contexts/ToDoList';
import { ToDoInput } from 'pages/ToDoInput';
import { Header } from 'components/Header';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '운동하기', '책 읽기']);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <Container>
      <ToDoListContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<DataView toDoList={toDoList} onDelete={onDelete} />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route
            path="*"
            element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
