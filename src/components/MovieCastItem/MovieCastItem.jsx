export const MovieCastItem = ({
  movieCastItem: { profile_path, name, character },
}) => {
  console.log(profile_path);

  return (
    <div>
      <p>
        {profile_path ? (
          <img src={profile_path} alt={name} width="100" />
        ) : (
          'No image'
        )}
      </p>
      <p>Character:{character}</p>
    </div>
  );
};
