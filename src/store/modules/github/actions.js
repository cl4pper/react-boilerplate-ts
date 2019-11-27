const getCommits = () => {
  return {
    type: 'GET_COMMITS'
  }
}

const setCommits = commit => {
  return {
    type: 'SET_COMMITS',
    payload: {
      id: commit.id,
      text: commit.text
    }
  }
}

export {
  getCommits,
  setCommits
}
