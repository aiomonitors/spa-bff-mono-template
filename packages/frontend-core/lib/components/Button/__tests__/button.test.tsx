import React from 'react';
import { renderToString } from 'react-dom/server';
import { Button } from '..';

describe('Button Component', () => {
  it('Should match the snapshot', () => {
   const item = renderToString(<Button />);

   expect(item).toMatchSnapshot();
  })
})
