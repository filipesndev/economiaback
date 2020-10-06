'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const TipoDocumento = use('App/Models/TipoDocumento')
const fields = ['descricao', 'sigla']

/**
 * Resourceful controller for interacting with tipodocumentos
 */
class TipoDocumentoController {
  /**
   * Show a list of all tipodocumentos.
   * GET tipodocumentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await TipoDocumento.all()
  }

  
  /**
   * Create/save a new tipodocumento.
   * POST tipodocumentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(fields)
    return await TipoDocumento.create(data)
  }

  /**
   * Display a single tipodocumento.
   * GET tipodocumentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const tipoDocumento = await TipoDocumento.find(params.id)
    return tipoDocumento
  }

  
  /**
   * Update tipodocumento details.
   * PUT or PATCH tipodocumentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(fields)
    const tipoDocumento = await TipoDocumento.find(params.id)
    tipoDocumento.merge(data)
    await tipoDocumento.save()
    return tipoDocumento
  }

  /**
   * Delete a tipodocumento with id.
   * DELETE tipodocumentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const tipoDocumento = await TipoDocumento.find(params.id)
    await tipoDocumento.delete()
    return response.ok()
  }
}

module.exports = TipoDocumentoController
