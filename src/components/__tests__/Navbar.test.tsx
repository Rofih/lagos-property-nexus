import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '../layout/Navbar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('Navbar', () => {
  test('renders navbar with logo', () => {
    renderWithProviders(<Navbar />);
    
    // Check if the navbar is rendered
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithProviders(<Navbar />);
    
    // Check for common navigation elements
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
  });

  test('renders login/register buttons when not authenticated', () => {
    renderWithProviders(<Navbar />);
    
    // Check for authentication buttons
    const loginButton = screen.getByText(/login/i);
    const registerButton = screen.getByText(/register/i);
    
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});

