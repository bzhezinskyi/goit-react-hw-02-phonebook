import PropTypes from 'prop-types';

import { Component } from 'react';
import { Btn } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  hendleClikBtn = event => {
    return this.props.onLeaveFeedback(event.target.textContent);
  };

  render() {
    return (
      <>
        <Btn onClick={this.hendleClikBtn}>Good</Btn>
        <Btn onClick={this.hendleClikBtn}>Neutral</Btn>
        <Btn onClick={this.hendleClikBtn}>Bad</Btn>
      </>
    );
  }
}

FeedbackOptions.propTypes = { onLeaveFeedback: PropTypes.func.isRequired };
