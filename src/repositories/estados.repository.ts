import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Estados, EstadosRelations} from '../models';

export class EstadosRepository extends DefaultCrudRepository<
  Estados,
  typeof Estados.prototype.id,
  EstadosRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(Estados, dataSource);
  }
}
