'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GrupoDespesa extends Model {

  static get table() {
    return 'grupos_despesas'
  }
  
}



module.exports = GrupoDespesa
