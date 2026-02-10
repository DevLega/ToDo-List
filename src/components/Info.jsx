import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`

const InfoText = styled.p`
  margin: 0;
`

export default function Info({ tasks }) {
    const completed = tasks.reduce((total, task) => (task.completed ? total + 1 : total), 0)

    return (
        <InfoContainer>
            <InfoText>Всього завдань: {tasks.length}</InfoText>
            <InfoText>Виконано: {completed}</InfoText>
        </InfoContainer>
    )
}