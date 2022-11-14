// namespace useState in a react object, module pattern

const React = (() => {
    let _val;
    function useState(initVal) {
        let state = _val || initVal;
        let setState = (newVal) => {
            _val = newVal;
        };
        return [state, setState];
    }

    function render(component) {
        const c = component();
        c.render();
        return c;
    }
    return { useState, render };
})();

function Component() {
    const [count, setCount] = React.useState(1);
    const [text, setText] = React.useState("Test");
    return {
        render: () => {
            console.log({ count, text });
        },
        click: () => {
            setCount(count + 1);
        },
        type: (word) => {
            setText(word);
        },
    };
}

var app = React.render(Component);
app.click();
var app = React.render(Component);
app.type("vue");
var app = React.render(Component);
