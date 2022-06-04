import React from "react";
import PropTypes from "prop-types";
import styles from "./YoutubeEmbed.module.scss";

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.video__responsive}>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}?start=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Youtube Video Player"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;