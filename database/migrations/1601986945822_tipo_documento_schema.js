'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoDocumentoSchema extends Schema {
  up () {
    this.create('tipos_documentos', (table) => {
      table.increments()
      table.timestamps()
      table.string('descricao', 100)
      table.string('sigla', 10)
    })
  }

  down () {
    this.drop('tipo_documentos')
  }
}

module.exports = TipoDocumentoSchema
