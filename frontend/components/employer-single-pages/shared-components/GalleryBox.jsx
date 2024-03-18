import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import galleryItem from "../../../data/gallery";

const GalleryBox = () => {
  return (
    <>
      <Gallery>
        {galleryItem.map((singleItem) => (
          <div className="col-lg-3 col-md-3 col-sm-6" key={singleItem.id}>
            <figure className="image" role="button">
              <Item
                original={singleItem.img}
                thumbnail={singleItem.img}
                width={190}
                height={167}
              >
                {({ ref, open }) => (
                  <div className="lightbox-image" ref={ref} onClick={open}>
                    <img src={singleItem.img} alt="resource" />
                  </div>
                )}
              </Item>
            </figure>
          </div>
        ))}
      </Gallery>
    </>
  );
};

export default GalleryBox;
