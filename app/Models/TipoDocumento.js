'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoDocumento extends Model {

  static get table() {
    return 'tipos_documentos'
  }
  
}

module.exports = TipoDocumento
