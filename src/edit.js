import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl, PanelBody } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	return (
		<div { ...useBlockProps({
      className: 'formo-newsticker'
    }) }>
        <InspectorControls>
          <PanelBody title={ __( 'Scroll Speed' ) }>
            <TextControl
              type='number'
              label={ __( 'From left to right (in seconds)' ) }
              value={ attributes.speed }
              onChange={ ( value ) => { setAttributes( { speed: value }) }} 
            />
          </PanelBody>
        </InspectorControls>
        <RichText
          tagName="h3"
          placeholder={ __( 'Add your news here…' ) }
          value={attributes.newstickerText}
          onChange={ ( value ) => setAttributes( { newstickerText: value } )}
          disableLineBreaks={true}
          className="formo-newsticker_content" 
        />
		</div>
	);
}
