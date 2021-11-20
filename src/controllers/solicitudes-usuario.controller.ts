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
  Usuario,
} from '../models';
import {SolicitudesRepository} from '../repositories';

export class SolicitudesUsuarioController {
  constructor(
    @repository(SolicitudesRepository)
    public solicitudesRepository: SolicitudesRepository,
  ) { }

  @get('/solicitudes/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Solicitudes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Solicitudes.prototype.id,
  ): Promise<Usuario> {
    return this.solicitudesRepository.fkcliente(id);
  }
}
