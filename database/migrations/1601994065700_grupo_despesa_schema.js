'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GrupoDespesaSchema extends Schema {
  up () {
    this.create('grupos_despesas', (table) => {
      table.increments()
      table.timestamps()
      table.string('descricao', 100)
    })
  }

  down () {
    this.drop('grupo_despesas')
  }
}

module.exports = GrupoDespesaSchema
