// card.js
import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

// Action
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

const initialState = {list : []};


// Action Creators


export function loadWord(word_list) {
  return { type: LOAD, word_list };
}


export function createWord(word) {
  //   console.log("액션을 생성할거야!");
  return { type: CREATE, word };
}


// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));
      // console.log(word_data);

    let word_list = [];

    word_data.forEach((b) => {
      console.log(b.data());
      // bucket_list = [...bucket_list, {...b.data()}]; 
      word_list.push({ id: b.id, ...b.data() }); 
      // array의 내장함수 사용
      // update, delete 위해 아이디 붙이기
    });

      console.log(word_list);

    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    
    // dispatch();
    const docRef = await addDoc(collection(db, "word"), word);
                              //첫번째 인자 컬렉션, 두번째 인자 추가하고자 하는 데이터
    const _word = await getDoc(docRef);
    const word_data = { id: _word.id, ..._word.data() };
    
    dispatch(createWord(word_data));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list };
    }
    case "word/CREATE": {
      // console.log("이제 값을 바꿀거야!");
      const new_word_list = [...state.list, action.word];
      return { ...state, list: new_word_list };
      
    }

    default:
      return state;
  }
}
