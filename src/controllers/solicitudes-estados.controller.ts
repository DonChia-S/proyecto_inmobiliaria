import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitudes,
  Estados,
} from '../models';
import {SolicitudesRepository} from '../repositories';

export class SolicitudesEstadosController {
  constructor(
    @repository(SolicitudesRepository)
    public solicitudesRepository: SolicitudesRepository,
  ) { }

  @get('/solicitudes/{id}/estados', {
    responses: {
      '200': {
        description: 'Estados belonging to Solicitudes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Estados)},
          },
        },
      },
    },
  })
  async getEstados(
    @param.path.string('id') id: typeof Solicitudes.prototype.id,
  ): Promise<Estados> {
    return this.solicitudesRepository.fkestado(id);
  }
}
