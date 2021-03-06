import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOOGLE_BOOKED } from "../types"

const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter(el => el.booked),
        loading: false
      }
    case TOOGLE_BOOKED:
      const allPosts = state.allPosts.map(el => {
        if (el.id === action.payload) {
          el.booked = !el.booked
        }

        return el
      })
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter(el => el.booked)
      }

    case REMOVE_POST:
      const newPosts = state.allPosts.filter(el => el.id !== action.payload);

      return {
        ...state,
        allPosts: newPosts,
        bookedPosts: newPosts.filter(el => el.booked)
      }

    case ADD_POST:
      return {
        ...state,
        allPosts: [action.payload, ...state.allPosts]
      }

    default:
      return state
  }
}