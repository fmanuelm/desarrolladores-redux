import { createStore } from "redux"

export const types = {
    MOVE_TO_FRONTEND : 'move_to_frontend',
    MOVE_TO_BACKEND : 'move_to_backend',
    MOVE_TO_FULLSTACK : 'move_to_fullstack'
};

const initialState = {
    fullstack: [
        {
            id: 1,
            image: 'desarrolladores/mark-zuckerberg.jpg',
            nombre: 'Mark Zuckerberg'
        },
        {
            id: 2,
            image: 'desarrolladores/bill-gates.png',
            nombre: 'Bill Gates'
        },
        {
            id: 3,
            image: 'desarrolladores/jack-dorsey.jpeg',
            nombre: 'Jack Dorsey'
        },
        {
            id: 4,
            image: 'desarrolladores/elon-musk.jpg',
            nombre: 'Elon Musk'
        },
        {
            id: 5,
            image: 'desarrolladores/jeff-bezos.jpg',
            nombre: 'Jeff Bezzos'
        },
        {
            id: 6,
            image: 'desarrolladores/sergie-brin.jpeg',
            nombre: 'Sergie Brin'
        }
    ],
    frontend: [],
    backend: []
};  


const reducerDesarrolladores = (state = initialState, action) => {
    switch(action.type)
    {
        case types.MOVE_TO_FRONTEND: 
            return {
                ...state,
                frontend: state.frontend.concat(action.dev),
                backend: state.backend.filter(ft => ft.id !== action.dev.id),
                fullstack: state.fullstack.filter(ft => ft.id !== action.dev.id)
            };
        case types.MOVE_TO_BACKEND:
            
            return {
                ...state,
                backend: state.backend.concat(action.dev),
                frontend: state.frontend.filter(ft => ft.id !== action.dev.id),
                fullstack: state.fullstack.filter(ft => ft.id !== action.dev.id)
            };
        case types.MOVE_TO_FULLSTACK:
            return {
                ...state,
                fullstack: state.fullstack.concat(action.dev),
                frontend: state.frontend.filter(ft => ft.id !== action.dev.id),
                backend: state.backend.filter(ft => ft.id !== action.dev.id)
            };
        default:
            return state;
    }
}

export default createStore(reducerDesarrolladores);