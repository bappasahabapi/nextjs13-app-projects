import { render, screen } from '@testing-library/react'
import Home from '../../src/app/page';
import Dashboard from '@/app/dashboard/page';
// import '@testing-library/jest-dom/extend-expect';

describe('Dashboard page', () => {
    it('should render properly', () => {
      render(<Dashboard />);
  
      const header = screen.getByRole('heading');
      const headerText ='Dashboard'
  
      expect(header).toHaveTextContent(headerText);
    });
  });