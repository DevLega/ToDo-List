import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background: #f9f9f9;
  border-radius: 6px;
  margin-bottom: 8px;

  &:hover {
    background: #e6f7ff;
  }
`

const TaskText = styled.p`
  flex: 1;
  margin: 0;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  color: ${props => (props.completed ? '#888' : '#000')};
`

const DeleteButton = styled.button`
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background: #ff7875;
  }
`

export default function TodoList({ tasks, filter, handleCheck, handleDelete }) {
    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(filter.toLowerCase())
    )
    
    return (
        <List>
            {filteredTasks.map((task) => (
                <ListItem key={task.id}>
                    <input type="checkbox" onChange={() => handleCheck(task.id)} checked={task.completed} />
                    <TaskText completed={task.completed}>{task.text}</TaskText>
                    <DeleteButton onClick={() => handleDelete(task.id)}>Delete</DeleteButton>
                </ListItem>
            ))}
        </List>
    )
}
