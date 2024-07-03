import React from 'react';
import { renderToString } from 'react-dom/server';
import { render, screen } from '@testing-library/react'
import userEvents from '@testing-library/user-event'
import { Button } from '..';

describe('Button Component', () => {
  it('Should match the snapshot', () => {
   const item = renderToString(<Button>This is a button</Button>);

   expect(item).toMatchSnapshot();
  });

  it('Should call onClick when pressed', async () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Test button</Button>);
    await userEvents.click(screen.getByText("Test button"));

    expect(onClick).toHaveBeenCalled();
  })
})
