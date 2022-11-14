// namespace useState in a react object, module pattern

const React = (() => {
    function useState(initVal) {
        let _val = initVal;
        let state = () => _val;
        let setState = (newVal) => {
            _val = newVal;
        };
        return [state, setState];
    }
    return { useState };
})();

const [count, setCount] = React.useState(1);
console.log(count());
setCount(2);
console.log(count());
