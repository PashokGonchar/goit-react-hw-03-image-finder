import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlGallery } from './ImageGallery.styled';

const ImageGallery = props => {
  return (
    <>
      <UlGallery>
        <ImageGalleryItem searchText={props.searchText} />
      </UlGallery>
    </>
  );
};

export default ImageGallery;
