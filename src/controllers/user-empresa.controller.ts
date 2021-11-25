import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Empresa,
} from '../models';
import {UserRepository} from '../repositories';

export class UserEmpresaController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/empresas', {
    responses: {
      '200': {
        description: 'Array of User has many Empresa',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empresa)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Empresa>,
  ): Promise<Empresa[]> {
    return this.userRepository.empresa(id).find(filter);
  }

  @post('/users/{id}/empresas', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Empresa)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empresa, {
            title: 'NewEmpresaInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) empresa: Omit<Empresa, 'id'>,
  ): Promise<Empresa> {
    return this.userRepository.empresa(id).create(empresa);
  }

  @patch('/users/{id}/empresas', {
    responses: {
      '200': {
        description: 'User.Empresa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empresa, {partial: true}),
        },
      },
    })
    empresa: Partial<Empresa>,
    @param.query.object('where', getWhereSchemaFor(Empresa)) where?: Where<Empresa>,
  ): Promise<Count> {
    return this.userRepository.empresa(id).patch(empresa, where);
  }

  @del('/users/{id}/empresas', {
    responses: {
      '200': {
        description: 'User.Empresa DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Empresa)) where?: Where<Empresa>,
  ): Promise<Count> {
    return this.userRepository.empresa(id).delete(where);
  }
}
