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
  Inmueble,
} from '../models';
import {SolicitudesRepository} from '../repositories';

export class SolicitudesInmuebleController {
  constructor(
    @repository(SolicitudesRepository)
    public solicitudesRepository: SolicitudesRepository,
  ) { }

  @get('/solicitudes/{id}/inmueble', {
    responses: {
      '200': {
        description: 'Inmueble belonging to Solicitudes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inmueble)},
          },
        },
      },
    },
  })
  async getInmueble(
    @param.path.string('id') id: typeof Solicitudes.prototype.id,
  ): Promise<Inmueble> {
    return this.solicitudesRepository.fkinmueble(id);
  }
}
