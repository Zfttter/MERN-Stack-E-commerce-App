import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid> {/*Container 是一个带默认 padding 和响应式布局的组件 6 container*/}

        <Row className="mt-5"> {/*7  Bootstrap 的“工具类”用法*/}
          <Col className="bg-dark text-white text-center py-5">
            Copyright &copy; Best Online Shop
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default FooterComponent;