import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Inmueble, InmuebleRelations, TipoInmueble, TipoOferta} from '../models';
import {TipoInmuebleRepository} from './tipo-inmueble.repository';
import {TipoOfertaRepository} from './tipo-oferta.repository';

export class InmuebleRepository extends DefaultCrudRepository<
  Inmueble,
  typeof Inmueble.prototype.id,
  InmuebleRelations
> {

  public readonly fktipoinmueble: BelongsToAccessor<TipoInmueble, typeof Inmueble.prototype.id>;

  public readonly fktipooferta: BelongsToAccessor<TipoOferta, typeof Inmueble.prototype.id>;

  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource, @repository.getter('TipoInmuebleRepository') protected tipoInmuebleRepositoryGetter: Getter<TipoInmuebleRepository>, @repository.getter('TipoOfertaRepository') protected tipoOfertaRepositoryGetter: Getter<TipoOfertaRepository>,
  ) {
    super(Inmueble, dataSource);
    this.fktipooferta = this.createBelongsToAccessorFor('fktipooferta', tipoOfertaRepositoryGetter,);
    this.registerInclusionResolver('fktipooferta', this.fktipooferta.inclusionResolver);
    this.fktipoinmueble = this.createBelongsToAccessorFor('fktipoinmueble', tipoInmuebleRepositoryGetter,);
    this.registerInclusionResolver('fktipoinmueble', this.fktipoinmueble.inclusionResolver);
  }
}
