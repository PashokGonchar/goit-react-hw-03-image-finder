import CreateImageGallery from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = (props) => {
  return (
    <>
      <ul className="gallery">
        <CreateImageGallery searchText={props.searchText} />
      </ul>
    </>
  );
};

export default ImageGallery;
