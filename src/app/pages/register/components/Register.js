import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Grid, GridRow, GridColumn, Button, Form, Label, Icon } from 'semantic-ui-react';

const Register = ({
	firstName,
	lastName,
	email,
	password,
	onChangeFirstName,
	onChangeLastName,
	onChangeEmail,
	onChangePassword,
	onSubmitRegister
}) => {
	return (
		<div>
			<Grid container verticalAlign="middle" style={{height: '100vh', marginTop: '-52px' }}>
				<GridRow>
					<GridColumn width={5}/>
					<GridColumn width={7}>
						<Header textAlign="center">Iskollection</Header>
						<Segment compact>
							<Form>
								<Grid>
									<GridRow>
										<GridColumn>
											<Form.Group widths='equal'>
													<Form.Input label='First Name' placeholder='First Name' required={true} />	
					          						<Form.Input label='Last Name' placeholder='Last Name' required={true} />
											</Form.Group>
										</GridColumn>
									</GridRow>
									<GridRow>
										<GridColumn>
											<Form.Input label='Email' placeholder='Email' required={true} />
										</GridColumn>
									</GridRow>
									<GridRow>
										<GridColumn>
		          							<Form.Input label='Password' type='password' placeholder='Password' required={true} />
		          						</GridColumn>
		          					</GridRow>
		          					<GridRow>
		          						<GridColumn>
		          							<Button primary fluid type='submit'>Register</Button>
		          						</GridColumn>
		          					</GridRow>
		          				</Grid>
							</Form>
						</Segment>
							<Label as={Link} to="/"><Icon name='arrow left' />Back to Login</Label>
					</GridColumn>
				</GridRow>
			</Grid>
		</div>
	);
}

export default Register