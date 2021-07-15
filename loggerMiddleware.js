const logger = (request, response, next) => {
  console.log(request.method)
  console.log(request.path)
  console.log(request.body)
  console.log('O.O')
  next()
}

module.exports = logger
