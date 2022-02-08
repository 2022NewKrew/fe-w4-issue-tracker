type CheckAction =
    | {
          type: 'CHECK_ALL';
          payload: {
              length: number;
              newStatus: boolean;
              setSelectMode: React.Dispatch<React.SetStateAction<boolean>>;
          };
      }
    | {
          type: 'CHECK';
          payload: {
              length: number;
              rowNumber: number;
              setSelectMode: React.Dispatch<React.SetStateAction<boolean>>;
          };
      };

const checkStatusReducer = (state: boolean[], action: CheckAction): boolean[] => {
    if (state.length === 0) state = Array(action.payload.length).fill(false);
    switch (action.type) {
        case 'CHECK_ALL':
            action.payload.setSelectMode(action.payload.newStatus);
            return state.map((_) => action.payload.newStatus);
        case 'CHECK':
            const { rowNumber, setSelectMode } = action.payload;
            const newState = [...state];
            newState[rowNumber] = !newState[rowNumber];
            if (newState.filter((status) => status).length > 0) setSelectMode(true);
            else setSelectMode(false);
            return newState;
        default:
            throw Error;
    }
};
