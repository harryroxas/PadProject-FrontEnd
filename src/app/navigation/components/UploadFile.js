import React from 'react';
import { Modal, Form } from 'semantic-ui-react';

import options from './options'

const UploadFile = ({
	trigger
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
	</Modal>
	)
}

export default UploadFile;