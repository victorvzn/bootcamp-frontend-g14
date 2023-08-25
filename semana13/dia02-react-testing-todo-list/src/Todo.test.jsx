import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useState } from 'react'

const Todo = ({ items }) => {
  return (
    <>
      <h1>todo app</h1>
      <ul>
        {items?.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  )
}

describe('Todo List App', () => {
  it('renders a title', () => {
    render(<Todo />)

    screen.getByText('todo app')
  })

  it('renders a item', () => {
    const items = [{ id: '1',  text: 'tarea 1'}]

    render(<Todo items={items} />)

    screen.getByText('tarea 1')
  })

  // it('renders another item', () => {
  //   const items = [{ id: '1',  text: 'tarea 2'}]

  //   render(<Todo items={items} />)

  //   screen.getByText('tarea 2')
  // })

  it ('renders multiple items', () => {
    const items = [
      { id: '3',  text: 'tarea 3'},
      { id: '4',  text: 'tarea 4'}
    ]

    render(<Todo items={items} />)

    screen.getByText('tarea 3')
    screen.getByText('tarea 4')
  })
})