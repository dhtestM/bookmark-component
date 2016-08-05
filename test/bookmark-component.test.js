/* global describe it expect */

import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import {IntlProvider} from 'react-intl';
import TestUtils from 'react-addons-test-utils';
import BookmarkComponent from '../src/js/bookmark-component';

expect.extend(expectJSX);

describe('bookmark-component Suite', () => {
  let renderer;
  let intlProvider;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    intlProvider = new IntlProvider({locale: 'en'}, {});
  });

  let isBookmarked = false;
  let bkmarkRemoved = false;

  let addBookmark = function() {
    isBookmarked = true;
  };

  let removeBookmark = function() {
    bkmarkRemoved = true;
  };

  let isCurrentPageBookmarked = function() {
    return isBookmarked ? true : false;
  };

  it('shallowly renders the component owner using React TestUtils', () => {

    const {intl} = intlProvider.getChildContext();
    const targetData = {
      addBookmarkHandler: addBookmark,
      removeBookmarkHandler: removeBookmark,
      isCurrentPageBookmarked: isCurrentPageBookmarked
    };
    renderer.render(
      <BookmarkComponent.WrappedComponent
        data={targetData}
        intl={intl} />
      , {intl}
    );

    let result = renderer.getRenderOutput();
    expect(result).toExist;
    expect(result.type).toEqual('button');
    expect(result.props.id).toEqual('o-bookmark-overlay-icon');
  });

  it('performs add routine when the button is clicked', () => {

    const {intl} = intlProvider.getChildContext();
    const targetData = {
      addBookmarkHandler: addBookmark,
      removeBookmarkHandler: removeBookmark,
      isCurrentPageBookmarked: isCurrentPageBookmarked
    };
    const locale = 'en';
    const translations = {
      'en' : {}
    };

    const container = TestUtils.renderIntoDocument(<IntlProvider locale={locale} messages={translations[locale]}><BookmarkComponent data={targetData} intl={intl} /></IntlProvider>);
    const button = TestUtils.findRenderedDOMComponentWithTag(container, 'button');
    TestUtils.Simulate.click(button);
    expect(isBookmarked).toEqual(true);
  });
});

describe('bookmark-component with bookmark', () => {
  let renderer;
  let intlProvider;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    intlProvider = new IntlProvider({locale: 'en'}, {});
  });

  let isBookmarked = true;
  let bkmarkRemoved = false;

  let addBookmark = function() {
    isBookmarked = true;
  };

  let removeBookmark = function() {
    bkmarkRemoved = true;
  };

  let isCurrentPageBookmarked = function() {
    return isBookmarked ? true : false;
  };

  it('performs remove routine when the button is clicked', () => {

    const {intl} = intlProvider.getChildContext();
    const targetData = {
      addBookmarkHandler: addBookmark,
      removeBookmarkHandler: removeBookmark,
      isCurrentPageBookmarked: isCurrentPageBookmarked
    };
    const locale = 'en';
    const translations = {
      'en' : {}
    };

    const container = TestUtils.renderIntoDocument(<IntlProvider locale={locale} messages={translations[locale]}><BookmarkComponent data={targetData} intl={intl} /></IntlProvider>);
    const button = TestUtils.findRenderedDOMComponentWithTag(container, 'button');
    TestUtils.Simulate.click(button);
    expect(bkmarkRemoved).toEqual(true);
  });
});

