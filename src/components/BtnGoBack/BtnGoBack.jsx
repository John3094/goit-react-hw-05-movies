import { useNavigate } from 'react-router-dom';
import { Button } from './BtnGoBack.styled';

export const BtnGoBack = ({ back }) => {
  const navigate = useNavigate();

  return (
    <Button type="button" onClick={() => navigate(back)}>
      Go Back
    </Button>
  );
};
