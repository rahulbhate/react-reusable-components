import React, { useState } from 'react';
import Button from '../Button/Button';
const ImageSlider = (props) => {
  const [photos, setPhotos] = useState(props.options);
  const [slideCount, setSlideCount] = useState(0);
  function goToPrevSlide() {
    setSlideCount(slideCount - 1);
  }
  function goToNextSlide() {
    console.log('called');
    setSlideCount(slideCount + 1);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sn-12">
            {slideCount !== 0 ? (
              <Button handleClick={goToPrevSlide} type="secondary">
                Prev
              </Button>
            ) : (
              ''
            )}
            {photos.map((option, index) => {
              return (
                <>
                  {photos.indexOf(option) === slideCount ? (
                    <div className="col-sm-12">
                      <img src={option.imageSrc} alt={index} />
                    </div>
                  ) : (
                    ''
                  )}
                </>
              );
            })}
            {slideCount !== photos.length - 1 ? (
              <Button handleClick={goToNextSlide} type="primary">
                Prev
              </Button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
