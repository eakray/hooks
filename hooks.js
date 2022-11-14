// namespace useState in a react object, module pattern

const React = (() => {
    let hooks = [];
    let index = 0;
    function useState(initVal) {
        let state = hooks[index] || initVal;
        let _index = index;
        let setState = (newVal) => {
            hooks[_index] = newVal;
        };
        index++;
        return [state, setState];
    }

    function render(component) {
        index = 0;
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
