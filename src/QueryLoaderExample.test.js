import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QueryLoaderExample from './QueryLoaderExample';

test('Smoke test', () => {
  expect(1 + 1).toBe(2);
});

describe('QueryLoaderExample', () => {
  test('Loads the component', () => {
    render(
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <QueryLoaderExample />
      </RelayEnvironmentProvider>
    );
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Clicking the button reveals content', async () => {
    render(
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <QueryLoaderExample />
      </RelayEnvironmentProvider>
    );

    expect(screen.queryByText('Login:', { exact: false })).toBeNull();
    expect(screen.queryByText('Name:', { exact: false })).toBeNull();

    fireEvent.click(screen.getByRole('button'));
    // eslint-disable-next-line testing-library/prefer-find-by
    await waitFor(() => screen.getByText('Login:', { exact: false }));

    expect(screen.getByText('Login: johnpaxton')).toBeInTheDocument();
  });
});
