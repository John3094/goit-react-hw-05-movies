import { useNavigate } from 'react-router-dom';

export const BtnGoBack = ({ back }) => {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(back)}>
      Go Back
    </button>
  );
};
