import React, {PropTypes} from 'react';
import {intlShape, injectIntl} from 'react-intl';
import {messages} from './defaultMessages';

class bookmarkComponent extends React.Component {
  constructor(props) {

    super(props);
    const _isBookmarked = this.props.data.isCurrentPageBookmarked();
    this.state ={
      'isBookmarked': _isBookmarked
    };
  }

  toggleBookmark(bool) {

    const that = this;
    function removedBookmarkCbk() {
      that.setState({isBookmarked: false});
    }

    function addedBookmarkCbk() {
      that.setState({isBookmarked: true});
    }

    if (bool) {
      this.props.data.removeBookmarkHandler(removedBookmarkCbk);
    } else {
      this.props.data.addBookmarkHandler(addedBookmarkCbk);
    }
  }

  render() {

    const isBookmarked = this.props.data.isCurrentPageBookmarked();
    return (
      <button id="o-bookmark-overlay-icon"
        role="checkbox"
        onClick={this.toggleBookmark.bind(this, isBookmarked)}
        aria-checked={isBookmarked}
        title={this.props.intl.formatMessage(isBookmarked ? messages.bookmarkedIconText : messages.bookmarkIconText)}
        aria-label={this.props.intl.formatMessage(isBookmarked ? messages.bookmarkedIconText : messages.bookmarkIconText)}
        className={isBookmarked ? 'o-bookmarked' : 'o-not-bookmarked'}>
      </button>
    )
  }
}

bookmarkComponent.propTypes = {
  intl: intlShape.isRequired,
  locale: PropTypes.string,
  data: PropTypes.shape({
    addBookmarkHandler: PropTypes.func,
    removeBookmarkHandler: PropTypes.func,
    isCurrentPageBookmarked: PropTypes.func
  })
};

export default injectIntl(bookmarkComponent);
