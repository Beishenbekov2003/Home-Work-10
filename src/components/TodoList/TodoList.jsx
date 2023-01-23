import React, { useContext } from "react";
import TodoListItem from "../TodoItem/TodoListItem";
import styled from "styled-components";
import { TodoContext } from "../../Store/TodoContext";
export const ACTIONS = {
  ADD_TODO: "add_todo",
  COMPLETE_TODO: "complete_todo",
  DELETE_TODO: "delete_todo",
};

function TodoList() {
  const { title, setTitle, addTodoHandler , todos } = useContext(TodoContext);

  const enebled = title.trim().length > 6;
  return (
    <>
      <FormDiv>
        <Title>My todo app</Title>
        <Div>
          <form>
            <Input
              value={title}
              placeholder="Write your task..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <AddButton onClick={addTodoHandler} disabled={!enebled}>
            ADD TASK
          </AddButton>
        </Div>
      </FormDiv>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoListItem todo={todo} />
          </div>
        );
      })}
    </>
  );
}

export default TodoList;

const FormDiv = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 50px;
  background-image: linear-gradient(
    to bottom,
    #fe0616,
    #ff004c,
    #f00081,
    #bc00bb,
    #2b0eee
  );
`;
const Title = styled.div`
  color: #230d6e;
  font-size: 40px;
  font-weight: 30px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  &:focus {
    background-color: #08f7f7;
  }
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  box-shadow: 5px 5px 5px black;
  color: azure;
  font-weight: 30px;
  border-radius: 20px;
  border: none;
  margin-left: 20px;
  &:disabled {
    background-color: red;
  }
`;
