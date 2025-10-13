import styles from "./MovieGallery.module.css";
import PropTypes from "prop-types";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className={styles.movie} key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

//Prop types
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Type: PropTypes.string,
  }),
};

export default MovieCard;