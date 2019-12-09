import request from 'superagent'

export const FETCH_JOKES = 'FETCH_JOKES'

const jokeFetched = joke => ({
  type: FETCH_JOKES,
  payload: joke
})

export const loadJokes = () => (dispatch) => {

  request(`https://official-joke-api.appspot.com/random_joke`)
    .then(response => {

        // console.log("response", response)
        dispatch(jokeFetched(response.body))
    })
    .catch(console.error)
}