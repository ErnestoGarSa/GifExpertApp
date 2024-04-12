import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import GifItem from "./GifItem";

const GifGrid = (props) => {
  const { category } = props;

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => {
          return (
            <GifItem
              className="card-grid"
              key={image.id}
              title={image.title}
              url={image.url}
            />
          );
        })}
      </div>
    </>
  );
};

export default GifGrid;
