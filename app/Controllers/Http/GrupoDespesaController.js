'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const GrupoDespesa = use('App/Models/GrupoDespesa')
const fields = ['descricao']

/**
 * Resourceful controller for interacting with grupodespesas
 */
class GrupoDespesaController {
  /**
   * Show a list of all grupodespesas.
   * GET grupodespesas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await GrupoDespesa.all()
  }

  
  /**
   * Create/save a new grupodespesa.
   * POST grupodespesas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(fields)
    const grupoDespesa = await GrupoDespesa.create(data)
    return grupoDespesa
  }

  /**
   * Display a single grupodespesa.
   * GET grupodespesas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const grupoDespesa = await GrupoDespesa.find(params.id)
    return grupoDespesa
  }

  
  /**
   * Update grupodespesa details.
   * PUT or PATCH grupodespesas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(fields)
    const grupoDespesa = await GrupoDespesa.find(params.id)
    grupoDespesa.merge(data)
    await grupoDespesa.save()
    return grupoDespesa

  }

  /**
   * Delete a grupodespesa with id.
   * DELETE grupodespesas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const grupoDespesa = await GrupoDespesa.find(params.id)
    await grupoDespesa.delete()
    return response.ok()
  }
}

module.exports = GrupoDespesaController
