function useState(initVal) {
    let _val = initVal;
    let state = initVal;
    let setState = (newVal) => {
        _val = newVal;
    };
    return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count);
setCount(2);
console.log(count);
