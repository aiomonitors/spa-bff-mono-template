import React from 'react';
import { renderToString } from 'react-dom/server';
import { Header } from '..';

describe('Header Component', () => {
  it('Should match the snapshot', () => {
    const renderedString = renderToString(<Header />);
    expect(renderedString).toMatchSnapshot();
  })
})
