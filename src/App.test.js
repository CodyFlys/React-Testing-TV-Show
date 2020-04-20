import React from 'react';
import App from './App';
import {render, userEvent, findByTestId} from '@testing-library/react';


  test('finds the select a season in the dropdown, proving the drop down exists.', async () => {
    let mainApp = render(<App />);
    const text = await mainApp.findByText('Select a season');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });