import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {ConnectionState} from '../../src/components/ConnectionState';
import {expect} from 'chai';

describe('ConnectionState', () => {

  it('is not visible when connected', () => {
    const component = renderIntoDocument(
      <ConnectionState connected={true} />
    );
    const div = findRenderedDOMComponentWithTag(component, 'div');
    expect(div.getDOMNode().style.display).to.equal('none');
  });

  it('is visible when connected', () => {
    const component = renderIntoDocument(
      <ConnectionState connected={false} />
    );
    const div = findRenderedDOMComponentWithTag(component, 'div');
    expect(div.getDOMNode().style.display).to.equal('block');
  });

  it('contains connection state message', () => {
    const component = renderIntoDocument(
      <ConnectionState connected={false} state={'fail'}/>
    );
    const div = findRenderedDOMComponentWithTag(component, 'div');
    expect(div.getDOMNode().textContent).to.equal('Not connected: fail');
  });

});
