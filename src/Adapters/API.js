const API_URL = 'http://localhost:3000'

const handleServerResponse = resp => {
  if (resp.ok) {
    return resp.text().then(text => {
      try {
        return JSON.parse(text)
      } catch (error) {
        return { staticPageContent: text }
      }
    })
  } else if (resp.status === 503) {
    return { code: 503 }
  } else if (resp.status === 500) {
    return { code: 500, error: 'Something went wrong' }
  } else if (resp.status === 406) {
    return { code: 406, error: 'Not acceptable' }
  } else if (resp.status === 404) {
    return {code: 404, error: 'Not found' }
  }
  else {
    return resp.text().then(text => {
      try {
        return JSON.parse(text)
      } catch (error) {
        return resp
      }
    })
  }
}

export default{
  handleServerResponse,
}