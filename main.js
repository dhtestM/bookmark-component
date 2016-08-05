import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkComponent from './src/js/bookmark-component';
import {addLocaleData, IntlProvider} from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import frJson from './translations/fr.json';

const translations = {
  'fr' : frJson
};

export default class BookmarkComponentDemo {

  constructor(config) {
    const locale = config.locale ? config.locale : '';
    if (locale) {
      addLocaleData(frLocaleData);
    }
    this.init(config);
  }

  init(config) {

    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale} messages={translations[locale]}>
          <BookmarkComponent data={config}
              />
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }
}

document.body.addEventListener('o.initBookmarkComponentDemo', e => new BookmarkComponentDemo(e.detail));
