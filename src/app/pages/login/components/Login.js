import React from 'react';
import { Header, Segment, Grid, GridRow, GridColumn, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Login = ({
      email,
      password,
      onChangeEmail,
      onChangePassword,
      onSubmitLogin
  }) => {
    return (
      <div>
      <Grid container verticalAlign="middle" style={{height: '100vh', marginTop: '-52px' }}>
      <GridRow>
      <GridColumn width={5} />
      <GridColumn width={7}>
      <Header textAlign="center">Iskollection</Header>
      <Segment>
      <Form onSubmit={onSubmitLogin}>
      <Grid>
      <GridRow>
        <GridColumn>
        <Form.Field>
          <label>Email</label>
          <input 
            value={email}
            placeholder='Email'
            onChange={onChangeEmail}
          />
        </Form.Field>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={onChangePassword}
            />
        </Form.Field>
        </GridColumn>
      </GridRow>
      <GridRow centered>
        <GridColumn>
        <Button as={Link} to='home' primary fluid type='submit'>Login</Button>
        </GridColumn>
      </GridRow>
      </Grid>
      </Form>
      </Segment>
      </GridColumn>
      </GridRow>
      </Grid>
      </div>
    );
  }

export default Login;