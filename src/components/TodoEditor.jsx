import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`

const TextArea = styled.textarea`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
`

const CreateButton = styled.button`
  align-self: flex-start;
  padding: 6px 12px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #40a9ff;
  }
`

export default class TodoEditor extends React.Component {
    state = {
        textValue: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { textValue } = this.state
        if (!textValue.trim()) return

        this.props.addTask(textValue)
        this.setState({ textValue: '' })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <TextArea
                    rows={3}
                    value={this.state.textValue}
                    onChange={(e) => this.setState({ textValue: e.target.value })}
                />
                <CreateButton type="submit">Create</CreateButton>
            </Form>
        )
    }
}