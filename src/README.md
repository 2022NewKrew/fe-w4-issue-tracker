# Frontend README
This README is for the record with regard to frontend development.

## Recoil
To use Recoil, instantiate `RecoilRoot` at App root.
### atom
Atom is a state of single truth. Atom can save anything including a string,
an array, or an object. Create an atom with `atom({key, default})` function.
No `new` keyword needed.

Atom has its distinct key and corresponding value. The default value can be set with
`default` key. To read the value, use `useRecoildValue(atom)` hook.

## Axios
To embed query when invoking `GET` request,
use `params` key in option.

Reversely, when getting query from `GET` request from server-side,
use `query` key in `request`.

## React-router-dom
To get a dynamic value such as issue ID that is in the URL,
use `useParam` hook and set path like `/:id`.
Then you can use object destructuring assignment to get the value
inside the react component.
```js
const {id}=useParams();
```

## Event Delegation in React
Even if React handles event handlers at `document` level,
there is another aspect of optimization you need to keep in mind,
**the code definition cost itself**.
keep in mind that defining many event handlers that have so much in common
is not a good way since it can burden the browser.
```JSX
const liArray=itemArray.map({itemName}=>{
    return (
        <li onClick={() => {
            doSomethingWithName(itemName);
            }}
        >
            {itemName}
        </li>
    };
})
```
VS.
```JSX
const onClickHandler=(e) => {
    const itemName=e.target.cloest('li').getAttribute('data-itemName');
    doSomethingWithName(itemName);
}

const liArray=itemArray.map({itemName}=>{
    return (
        <li data-itemName={itemName}>
            {itemName}
        </li>
    );
})
```

## useMemo or useCallback with Object or Array Deps
Are React's useMemo or useCallback useful when the dependencies are
`Array` or `Object`? Consider the following component.
```JSX
function App(){
    const [val, setVal]=useState({1:1});

    useEffect(()=>{
        console.log(1);
    }, [val]);

    return (
        <div>
            <button onClick={()=>setVal({1:1})}>Click</button>
        </div>
    )
}
```
React will print `1` everytime we click the button, since
React uses `Object.is` function to determin whether deps have been changed.
Isn't it the same case for `useCallback` and `useMemo`?
That is, are they really use memo when deps had been changed and
return to the previous value?
