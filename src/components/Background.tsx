import React from "react";
import Carousel from "./Carousel";

const Background = () => {
  // Danh sách ảnh bạn muốn hiển thị
  const myImages = ["/bg1.jpg", "/bg2.jpg"];

  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0">
        <Carousel images={myImages} />
      </div>
    </div>
  );
};

export default Background;
