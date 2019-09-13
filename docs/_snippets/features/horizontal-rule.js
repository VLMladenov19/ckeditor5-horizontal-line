/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window, document, console */

import ClassicEditor from '@ckeditor/ckeditor5-build-classic/src/ckeditor';
import HorizontalRule from '@ckeditor/ckeditor5-horizontal-rule/src/horizontalrule';
import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config';

ClassicEditor.builtinPlugins.push( HorizontalRule );

ClassicEditor
	.create( document.querySelector( '#snippet-horizontal-rule' ), {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'bulletedList',
				'numberedList',
				'blockQuote',
				'link',
				'|',
				'imageUpload',
				'mediaEmbed',
				'insertTable',
				'horizontalRule',
				'|',
				'undo',
				'redo',
			],
			viewportTopOffset: window.getViewportTopOffsetConfig()
		},
		image: {
			styles: [
				'full',
				'alignLeft',
				'alignRight'
			],
			toolbar: [
				'imageStyle:alignLeft',
				'imageStyle:full',
				'imageStyle:alignRight',
				'|',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
		},
		cloudServices: CS_CONFIG
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
