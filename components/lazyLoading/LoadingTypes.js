import React from "react";
import ContentLoader from "react-content-loader";

export const FeedLoader = () => (
  <ContentLoader
    speed={2}
    height={500}
    primaryColor="#e6e8eb"
    secondaryColor="#f3f3f3"
  >
    <rect x="0" y="0" rx="3" ry="3" width="350" height="40" />
    <rect x="0" y="65" rx="3" ry="3" width="250" height="40" />
    <rect x="0" y="125" rx="3" ry="3" width="180" height="40" />
  </ContentLoader>
);
