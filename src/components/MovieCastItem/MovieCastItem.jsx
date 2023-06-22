import { IMAGE_URL } from '../../service/Api';
import { Img } from './MovieCastItem.styled';
import PropTypes from 'prop-types';

export const MovieCastItem = ({
  movieCastItem: { profile_path, name, character },
}) => {
  return (
    <div>
      <p>
        {profile_path ? (
          <Img src={`${IMAGE_URL}${profile_path}`} alt={name} width="100" />
        ) : (
          <Img
            src={`https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`}
            alt="face"
            width="100"
          />
        )}
      </p>
      <p>{name}</p>
      <p>Character:{character}</p>
    </div>
  );
};

MovieCastItem.propTypes = {
  movieCastItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    character: PropTypes.string,
  }),
};
