/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Row, Col } from 'antd';

const { TextArea } = Input;

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Enter a message</h2>
        <Row>
          <Col span={16}>
            <TextArea placeholder="Autosize height based on content lines" rows={4} />
          </Col>
          <Col span={8}>
            <Button type="primary">Primary</Button>
          </Col>
        </Row>
        <h2>Thread</h2>
        <Row>
          I am a message
        </Row>
        <Row>
          I am another message
        </Row>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
