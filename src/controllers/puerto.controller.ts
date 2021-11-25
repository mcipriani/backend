import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Puerto} from '../models';
import {PuertoRepository} from '../repositories';

export class PuertoController {
  constructor(
    @repository(PuertoRepository)
    public puertoRepository : PuertoRepository,
  ) {}

  @post('/puerto')
  @response(200, {
    description: 'Puerto model instance',
    content: {'application/json': {schema: getModelSchemaRef(Puerto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puerto, {
            title: 'NewPuerto',
            exclude: ['id'],
          }),
        },
      },
    })
    puerto: Omit<Puerto, 'id'>,
  ): Promise<Puerto> {
    return this.puertoRepository.create(puerto);
  }

  @get('/puerto/count')
  @response(200, {
    description: 'Puerto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Puerto) where?: Where<Puerto>,
  ): Promise<Count> {
    return this.puertoRepository.count(where);
  }

  @get('/puerto')
  @response(200, {
    description: 'Array of Puerto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Puerto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Puerto) filter?: Filter<Puerto>,
  ): Promise<Puerto[]> {
    return this.puertoRepository.find(filter);
  }

  @patch('/puerto')
  @response(200, {
    description: 'Puerto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puerto, {partial: true}),
        },
      },
    })
    puerto: Puerto,
    @param.where(Puerto) where?: Where<Puerto>,
  ): Promise<Count> {
    return this.puertoRepository.updateAll(puerto, where);
  }

  @get('/puerto/{id}')
  @response(200, {
    description: 'Puerto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Puerto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Puerto, {exclude: 'where'}) filter?: FilterExcludingWhere<Puerto>
  ): Promise<Puerto> {
    return this.puertoRepository.findById(id, filter);
  }

  @patch('/puerto/{id}')
  @response(204, {
    description: 'Puerto PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puerto, {partial: true}),
        },
      },
    })
    puerto: Puerto,
  ): Promise<void> {
    await this.puertoRepository.updateById(id, puerto);
  }

  @put('/puerto/{id}')
  @response(204, {
    description: 'Puerto PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() puerto: Puerto,
  ): Promise<void> {
    await this.puertoRepository.replaceById(id, puerto);
  }

  @del('/puerto/{id}')
  @response(204, {
    description: 'Puerto DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.puertoRepository.deleteById(id);
  }
}
