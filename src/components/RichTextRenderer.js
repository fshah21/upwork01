import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichTextRenderer = ({ richText }) => {
  const options = {
    renderNode: {
    //   'embedded-asset-block': (node) => (
    //     <img
    //       src={node.data.target.fields.file.url}
    //       alt={node.data.target.fields.description}
    //     />
    //   ),
    },
  };

  return (
    <div>
      {documentToReactComponents(richText, options)}
    </div>
  );
};

export default RichTextRenderer;