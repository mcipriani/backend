import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Orden, OrdenRelations} from '../models';

export class OrdenRepository extends DefaultCrudRepository<
  Orden,
  typeof Orden.prototype.id,
  OrdenRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Orden, dataSource);
  }
}
