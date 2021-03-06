import React from "react";
import Image from "gatsby-image";

export const ContentImage = ({ item }) => {
  if (!item.indexBackgroundImage) {
    return null;
  } else if (item.indexBackgroundImage.fluid) {
    const data = item.indexBackgroundImage;
    const aspectRatio = data.fluid.aspectRatio;
    const width = ((item.gridColumns || 1) * ((100 / 4) * aspectRatio)) / 0.75 - 2;
    const sources = [
      {
        ...data.fluid,
        sizes: `${width}vw`,
        aspectRatio,
        key: item.id
      },
      {
        ...data.fluid,
        media: "(max-width: 480px)",
        key: `mobile${item.id}`,
        aspectRatio
        // sizes: "50vw"
      }
    ];
    return (
      <Image
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        fluid={sources}
      />
    );
  }
  return (
    <img
      width="100%"
      alt={item.indexBackgroundImage.file.description}
      style={{ display: "block" }}
      src={item.indexBackgroundImage.file.url}
    />
  );
};
