import { createAction, handleActions } from 'redux-actions';
import { Record, List } from 'immutable';

const CHANGE_INPUT = 'leftSideMenu/CHANGE_INPUT';
const INSERT = 'leftSideMenu/INSERT';
const TOGGLE = 'leftSideMenu/TOGGLE';
const REMOVE = 'leftSideMenu/REMOVE';


export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; // todo 아이템에 들어갈 고유 값 입니다

// Record 함수는 Record 형태 데이터를 만드는 함수를 반환합니다.
// 따라서, 만든 다음에 뒤에 () 를 붙여줘야 데이터가 생성됩니다.
const initialState = Record({    
    menus: List()
})();
  
  // Todo 아이템의 형식을 정합니다.
const TodoRecord = Record({
    id: id++, 
    title: '',
    valid: true
});
  
export default handleActions({
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    [INSERT]: (state, { payload: text }) => {
      // TodoRecord 를 사용해야 아이템도 Record 형식으로 조회 가능합니다. 
      // 빠져있는 값은, 기본값을 사용하게 됩니다 (checked: false)
      const item = TodoRecord({ id: id++, text }); 
      return state.update('menus', todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
      const index = state.get('menus').findIndex(item => item.get('id') === id);
      return state.updateIn(['menus', index, 'valid'], valid => !valid);
    },
    [REMOVE]: (state, { payload: id }) => {
      const index = state.get('menus').findIndex(item => item.get('id') === id);
      return state.deleteIn(['menus', index]);
    }
}, initialState);