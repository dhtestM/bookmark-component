# Usage

This project supports [Node v4+](https://nodejs.org) and npm 2+ installed in your development toolchain.

Install and save in your package.json:

    npm install @pearson-components/bookmark-list --save

## External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component. They are npm-installable or 
available from a third-party [CDN](https://cdnjs.com/libraries/react/).

This component targets the styling in the [Pearson Elements SDK](https://www.npmjs.com/package/pearson-elements).

## Cross-browser Compatibility

The following [Polyfill.io](https://cdn.polyfill.io/v2/docs/examples) service is recommended for consuming this 
component cross-browser:

```html
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent,Intl.~locale.en,Intl.~locale.fr"></script>
```

The CustomEvent polyfill is for Internet Explorer, and the Intl.js polyfill is for Safari. As you support more languages,
add them to the list of features requested.

If your browser already supports a feature, this service automatically optimizes and does not bring down unnecessary code.

## How to Consume in an Application

See the /demo directory for example usage.

The component's original source code and the transpiled bundle are available in the npm installation. The bundled version
 is exported as a UMD package supporting AMD, CommonJS2, or a global variable.

 ##Usage Specifics:

This component uses react-intl for translation and formatting.
This component also uses pearson-elements component. The elements.css from the component should be included in the html
as shown in the demo html.

The list passed in to the component should be an array of objects with these properties:

```
    {'uri':'relative/url/to/the/bookmarked/page.html',
        'data':{'baseUrl':'https://base.com/whatever/directories/'},
        'createdTimestamp':1467924204506,
        'title':'Copyright',
        'labels':['Copyright']}
```

## Getting Started

```
    npm install
    npm run test //runs the test
    npm run dev //runs the demo
```

## Demo

http://localhost:8081/demo/index.html

