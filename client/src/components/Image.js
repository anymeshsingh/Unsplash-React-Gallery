import React from 'react'

export default function Image({ image }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={image.links.download}><img src={image.urls.thumb} title={image.description} alt={image.description}/></a>
  );
  
}
