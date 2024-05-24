import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save({
      className: 'formo-newsticker',
      'data-scrollspeed': attributes.speed
    }) }>
      <RichText.Content 
        tagName="h3" 
        value={attributes.newstickerText} 
        className="formo-newsticker_content" 
      />
		</div>
	);
}
