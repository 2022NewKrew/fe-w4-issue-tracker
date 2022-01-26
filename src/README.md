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
