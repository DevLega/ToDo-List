import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`

const FilterInput = styled.input`
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
`

export default function Filter({ onChange }) {
  return (
    <FilterContainer>
        <label>Фільтр по імені</label>
        <FilterInput type="text" onChange={(e) => onChange(e.target.value)}/>
    </FilterContainer>
  )
}