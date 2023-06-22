import { useNavigate } from 'react-router-dom';
import { Button } from './BtnGoBack.styled';
import PropTypes from 'prop-types';

export const BtnGoBack = ({ back }) => {
  const navigate = useNavigate();

  return (
    <Button type="button" onClick={() => navigate(back)}>
      Go Back
    </Button>
  );
};

BtnGoBack.propTypes = {
  back: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
