import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlGallery } from './ImageGallery.styled';
import Button from 'components/Button/Button';

const ImageGallery = props => {

  const { searchText } = props;
  const hasImages = searchText.length > 0;
  return (
    <>
      <UlGallery>
        <ImageGalleryItem searchText={props.searchText} />
        {hasImages && <Button />}
      </UlGallery>
    </>
  );
};

export default ImageGallery;
