import React, { Component } from 'react';

import feeStore from '../../stores/fee.store';

import AccountCreator from '../AccountCreator';

export default class FromExchange extends Component {
  render () {
    return (
      <AccountCreator
        onCancel={this.handleCancel}
        onDone={this.handleDone}
      />
    );
  }

  handleCancel = () => {
    feeStore.goto('account-selection');
  };

  handleDone = () => {
    const { valid } = feeStore;

    if (!valid) {
      return;
    }

    feeStore.sendPayment();
  };
}
