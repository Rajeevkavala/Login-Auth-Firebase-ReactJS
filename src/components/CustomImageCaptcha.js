import React, { useState } from "react";
import { toast } from "react-toastify";
function CustomImageCaptcha({ onVerify }) {
  // List of images (replace with your own URLs or image imports)
  const images = [
    { src: "https://www.shutterstock.com/shutterstock/photos/2511743985/display_1500/stock-photo-a-highly-realistic-image-of-a-dog-sitting-upright-looking-directly-at-the-camera-the-dog-is-a-2511743985.jpg", isCorrect: true },
    { src: "https://www.shutterstock.com/shutterstock/photos/2520713727/display_1500/stock-photo-portrait-of-cute-dog-looking-at-camera-close-up-of-a-cute-dog-justin-krofohrl-nder-dog-portrait-2520713727.jpg", isCorrect: true },
    { src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg", isCorrect: false },
  ];
  

  // Shuffle the images to display randomly
  const shuffledImages = images.sort(() => Math.random() - 0.5);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [verified, setVerified] = useState(false);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    if (shuffledImages[index].isCorrect) {
      setVerified(true);
      onVerify(true); // Notify parent component of successful verification
    } else {
      setVerified(false);
      onVerify(false);
      toast.error("Incorrect Try Again.");
    }
  };

  return (
    <div>
      <p>Select the correct image: DOG</p>
      <div style={{ display: "flex", gap: "10px" }}>
        {shuffledImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`captcha-img-${index}`}
            style={{
              width: "150px",
              height: "100px",
              border: selectedImageIndex === index ? "3px solid green" : "1px solid gray",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {verified && <p style={{ color: "green" }}>Verified successfully!</p>}
    </div>
  );
}

export default CustomImageCaptcha;
