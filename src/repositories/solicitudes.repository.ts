import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Solicitudes, SolicitudesRelations, Usuario, Inmueble, Estados} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {InmuebleRepository} from './inmueble.repository';
import {EstadosRepository} from './estados.repository';

export class SolicitudesRepository extends DefaultCrudRepository<
  Solicitudes,
  typeof Solicitudes.prototype.id,
  SolicitudesRelations
> {

  public readonly fkcliente: BelongsToAccessor<Usuario, typeof Solicitudes.prototype.id>;

  public readonly fkinmueble: BelongsToAccessor<Inmueble, typeof Solicitudes.prototype.id>;

  public readonly fkasesor: BelongsToAccessor<Usuario, typeof Solicitudes.prototype.id>;

  public readonly fkestado: BelongsToAccessor<Estados, typeof Solicitudes.prototype.id>;

  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('InmuebleRepository') protected inmuebleRepositoryGetter: Getter<InmuebleRepository>, @repository.getter('EstadosRepository') protected estadosRepositoryGetter: Getter<EstadosRepository>,
  ) {
    super(Solicitudes, dataSource);
    this.fkestado = this.createBelongsToAccessorFor('fkestado', estadosRepositoryGetter,);
    this.registerInclusionResolver('fkestado', this.fkestado.inclusionResolver);
    this.fkasesor = this.createBelongsToAccessorFor('fkasesor', usuarioRepositoryGetter,);
    this.registerInclusionResolver('fkasesor', this.fkasesor.inclusionResolver);
    this.fkinmueble = this.createBelongsToAccessorFor('fkinmueble', inmuebleRepositoryGetter,);
    this.registerInclusionResolver('fkinmueble', this.fkinmueble.inclusionResolver);
    this.fkcliente = this.createBelongsToAccessorFor('fkcliente', usuarioRepositoryGetter,);
    this.registerInclusionResolver('fkcliente', this.fkcliente.inclusionResolver);
  }
}
