import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Puerto, PuertoRelations} from '../models';

export class PuertoRepository extends DefaultCrudRepository<
  Puerto,
  typeof Puerto.prototype.id,
  PuertoRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Puerto, dataSource);
  }
}
