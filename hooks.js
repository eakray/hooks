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

    function useEffect(cb, depArray) {
        const oldDeps = hooks[index];
        let hasChanged = true;
        if (oldDeps) {
            hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
        }
        if (hasChanged) {
            cb();
        }
        hooks[index] = depArray;
    }

    function render(component) {
        index = 0;
        const c = component();
        c.render();
        return c;
    }
    return { useState, useEffect, render };
})();

function Component() {
    const [count, setCount] = React.useState(1);
    const [text, setText] = React.useState("Test");
    React.useEffect(() => {
        console.log("effect test");
    }, [text]);
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
app = React.render(Component);
app.type("vue");
app = React.render(Component);
