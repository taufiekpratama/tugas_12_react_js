import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Header,
  List,
  Image,
  Container,
  Segment,
  Form,
  Input,
  Icon,
  Checkbox,
  Button,
  Message,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <Grid textAlign="center" verticalAlign="middle" style={{ height: '100vh' }}>
        <Grid.Column width="5">
          <Header color="teal" as="h2">
            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/>Member Login
          </Header>
          <Container fluid>
            <Segment>
              <Form>
                <Form.Field>
                  <Input type="text" placeholder="E-mail address" icon="user" iconPosition="left"/>
                </Form.Field>
                <Form.Field>
                  <Input text="text" placeholder="Password" icon="lock" iconPosition="left"/>
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions"/>
                </Form.Field>
              </Form>
              <br/>
              <Button color="teal" content="Login" fluid/>
            </Segment>
          </Container>
          <Message>
            Tidak Punya Akun? Silahkan <a href="#">Register</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
