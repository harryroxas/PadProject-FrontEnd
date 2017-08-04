import React from 'react';
import { Modal, Form } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

import options from './options'

const UploadFile = ({
	trigger, onDrop, files
}) => {
	return(
	<Modal trigger={trigger} closeIcon='close'>
		<Modal.Header>Upload a File</Modal.Header>
		<Modal.Content>
			<Form>
				<Form.Input label='File name' placeholder='File name'/>
				<Form.Select label='Subject' options={options} placeholder='Subject' />
				<Form.Button>Upload</Form.Button>
			</Form>
		</Modal.Content>
		<Modal.Content>
			<div>
			<Dropzone onDrop={onDrop}>
				<p>Upload a File</p>
			</Dropzone>
			</div>
		</Modal.Content>
	</Modal>
	)
}

export default UploadFile;