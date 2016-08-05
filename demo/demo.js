function ReaderObj() {
  const config ={
    'endPoints': {
      'services': 'https://pxe-sdk-qa.stg-openclass.com/services-api/api/3.1',
      'search': 'https://dragonfly-qa.stg-openclass.com/pxereader-cm/latest/api/cm',
      'etextServices': 'https://paperapi-qa.stg-openclass.com/nextext-api/api'
    },
    'annotation': {
      'version': 'v2',
      'theme': 'new'
    },
    'backlinkLaunchParams': {
      'bookId': '1TTL8ARD3KQ',
      'id': 'adc154fe1c34fff6f6c9d75295280622cd84a6d49',
      'referrer': 'nav'
    },
    'backlinkSignatureEndpoint': 'https://paperapi-qa.stg-openclass.com/nextext-api/api/nextext/backlink/launchparams/book/1TTL8ARD3KQ',
    'target': 'demo-target',
    'userId': '10134931',
    'userName': 'instructor',
    'contextId': '1TTL8ARD3KQ',
    'supportLabels': true,
    'enableAnnotation': true,
    'additionalContext': false,
    'enablePrintPage': true,
    'masterPlayListUrlArr': '',
    'backlinkCSVMappings': '',
    'backlinkEndpointMapping': '',
    'includeMathMLLib': false,
    'baseUrl': 'https://content.stg-openclass.com/eps/pearson-reader/api/item/12d4a34c-e9ff-4537-b4b0-c1538ac01af2/1/file/QA_TEST_FILE/',
    'copyImages': false,
    'annotationShareable': true,
    'masterNcxObject': [{
      'id': 'adc154fe1c34fff6f6c9d75295280622cd84a6d49',
      'title': 'Cover',
      'playOrder': 1,
      'href': 'OPS/xhtml/file_0001.html'
    }, {
      'id': 'a21b8be0ac6660f0a33c1bdd2907f7323ba3787e7',
      'title': 'Title Page',
      'playOrder': 2,
      'href': 'OPS/xhtml/file_0002.html'
    }, {
      'id': 'ad0fd2c18cacf5dc77fabd1b03a8d19115f63bd5f',
      'title': 'Copyright',
      'playOrder': 3,
      'href': 'OPS/xhtml/file_0003.html'
    }, {
      'id': 'ae673f5841b8631cd796fc0e9ca7be3d168eefd68',
      'title': 'Page 4-5',
      'playOrder': 4,
      'href': 'OPS/xhtml/file_0004.html'
    }, {
      'id': 'a83c0d19c52012613bb0f3a28faa0032d026367ee',
      'title': 'Page 6-7',
      'playOrder': 5,
      'href': 'OPS/xhtml/file_0005.html'
    }, {
      'id': 'a225c5ce5b5246ea0da4f8eba337b5cd6a7f5c8d7',
      'title': 'Page 8-9',
      'playOrder': 6,
      'href': 'OPS/xhtml/file_0006.html'
    }, {
      'id': 'a7da5794398c3bb8c2cd2b8aac73a7e5ea6314dd8',
      'title': 'Page 10-11',
      'playOrder': 7,
      'href': 'OPS/xhtml/file_0007.html'
    }, {
      'id': 'accee7294add2d0fa186180c46d698a38568276ac',
      'title': 'Page 12-13',
      'playOrder': 8,
      'href': 'OPS/xhtml/file_0008.html'
    }, {
      'id': 'aafd4062c4d3174cfb55c3908b937f0650f4292fd',
      'title': 'Page 14-15',
      'playOrder': 9,
      'href': 'OPS/xhtml/file_0009.html'
    }, {
      'id': 'a1a9cfae6394c0f7cdb156bb44b01f33c6b1063b0',
      'title': 'Page 16-17',
      'playOrder': 10,
      'href': 'OPS/xhtml/file_0010.html'
    }, {
      'id': 'a49ae5cd069379b78663ec404fe6375d1873345e5',
      'title': 'Page 18-19',
      'playOrder': 11,
      'href': 'OPS/xhtml/file_0011.html'
    }, {
      'id': 'ab527b35dfb36142f87f867e3abf96c2e0247960c',
      'title': 'Page 20-21',
      'playOrder': 12,
      'href': 'OPS/xhtml/file_0012.html'
    }, {
      'id': 'abff49227606bfaf71154b25bdd0bf894c6606a6f',
      'title': 'Page 22-23',
      'playOrder': 13,
      'href': 'OPS/xhtml/file_0013.html'
    }, {
      'id': 'aab925c225eb2176669a30bf32c5fca661d75dc09',
      'title': 'Page 24-25',
      'playOrder': 14,
      'href': 'OPS/xhtml/file_0014.html'
    }]
  };

  const reader = window.pxereader.create(config);
  this.init = function() {
    return reader;
  };
}

const demoObject = {
  setReader: function(reader) {
    this._reader = reader;
  },
  loadIcon : function(resp) {
    this.bookmarks = resp.bookmarks;
    document.body.dispatchEvent(new CustomEvent('o.initBookmarkComponentDemo', {
      detail: {
        locale:'fr',
        elementId: 'bookmark-container',
        addBookmarkHandler: demoObject.addbookmarkHandler.bind(demoObject),
        removeBookmarkHandler: demoObject.removeBookmarkHandler.bind(demoObject),
        isCurrentPageBookmarked: demoObject.isCurrentPageBookmarked.bind(demoObject)
      }
    }));
  },
  isCurrentPageBookmarked : function() {
    if (!this._reader || !this._reader.getCurrentPage) {
      return false;
    }

    try {
      const currentPageUri = this._reader.getCurrentPage().pageUri;
      const currentPageRelativeUri =this. _reader.getCurrentPage().relativeUrl;
      return this.bookmarks.some(function (bookmark) {
        if (bookmark.uri === currentPageUri || bookmark.uri === currentPageRelativeUri) {
          return true;
        }
      });
    }
    catch (e) {
      return false;
    }
  },
  onNext : function() {
    this._reader.renderNextPage();
  },
  onPrev : function() {
    this._reader.renderPrevPage();
  },
  addbookmarkHandler : function(cbk) {
    const self = this;
    function addBookmark(bookmark) {
      self.bookmarks.push({
        uri: bookmark.uri,
        title: bookmark.title,
        date: bookmark.createdTimestamp
      });
      cbk();
    }
    const currentPage = this._reader.getCurrentPage();
    const bookmarkTitle = currentPage ? currentPage.title : '';
    this._reader.addBookMark(bookmarkTitle, addBookmark.bind(this));
  },
  noop : function() {},
  removeBookmarkHandler : function(cbk) {
    var self = this;
    const currentPageUri = this._reader.getCurrentPage().pageUri;
    const currentPageRelativeUri = this._reader.getCurrentPage().relativeUrl;
    this._reader.removeBookMark(cbk, currentPageUri);
    this._reader.removeBookMark(cbk, currentPageRelativeUri);

    this.bookmarks.forEach(function(bookmark, index) {
      if (bookmark.uri === currentPageUri || bookmark.uri === currentPageRelativeUri) {
        self.bookmarks.splice(index, 1);
      }
    });
  }
};

window.onload = function () {
  const instance = new ReaderObj();
  const _reader = instance.init();
  demoObject.setReader(_reader);
  _reader.eventManager.registerEventListener('onLoadingBegin', function() {
    _reader.getBookmarkList(demoObject.loadIcon.bind(demoObject));
  });

  _reader.render(0, null, null, false);
};


