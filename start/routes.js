'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { message: 'API executando ...' }
})

Route.resource('/users', 'UserController').apiOnly()
Route.resource('/tipos-documentos', 'TipoDocumentoController').apiOnly()
Route.resource('/grupos-despesas', 'GrupoDespesaController').apiOnly()

Route.post('/auth/login', 'UserController.login')
Route.post('/auth/profile', 'UserController.profile')
