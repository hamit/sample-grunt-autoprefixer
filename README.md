# sample-grunt-autopolyfiller
Install Node.js and then:

`$ git clone https://github.com/hamitogluh/sample-grunt-autopolyfiller.git`<br />
`$ cd sample-grunt-autoprefixer`<br />
`$ npm install grunt-cli grunt-contrib-watch grunt-autoprefixer`<br />
`$ grunt watch`<br />

Example: <br />
css_to_be_autoprefixed.css <br />
`:fullscreen a {`<br />
    `transition: transform 1s`<br />
`}`<br />
prefix_result.css <br />
`:-webkit-full-screen a {`<br />
    `-webkit-transition: -webkit-transform 1s;`<br />
            `transition: transform 1s`<br />
`}`<br />
`:-moz-full-screen a {`<br />
    `transition: transform 1s`<br />
`}`<br />
`:-ms-fullscreen a {`<br />
    `transition: transform 1s`<br />
`}`<br />
`:fullscreen a {`<br />
    `-webkit-transition: -webkit-transform 1s;`<br />
            `transition: transform 1s`<br />
`}`
