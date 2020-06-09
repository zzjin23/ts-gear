import { EOL } from 'os'

import { schemaToTypescript as transform } from 'src/tool/schemaToTypescript'

describe('transformSwaggerPropertyToTsType', () => {
  it('number int32', () => {
    expect(
      transform({
        type: 'integer',
        format: 'int32',
      }),
    ).toBe('number')
  })

  it('number int64', () => {
    expect(
      transform({
        type: 'integer',
        format: 'int64',
      }),
    ).toBe('number')
  })

  it('string', () => {
    expect(
      transform({
        type: 'string',
      }),
    ).toBe('string')
  })

  it('boolean', () => {
    expect(
      transform({
        type: 'boolean',
      }),
    ).toBe('boolean')
  })

  it('enum', () => {
    expect(
      transform({
        type: 'string',
        enum: 'Abc',
      } as any),
    ).toBe('Abc')
  })

  it('object with unregular property name', () => {
    expect(
      transform({
        type: 'object',
        properties: {
          'X-Tag': {
            type: 'integer',
            format: 'int32',
            example: 1,
            description: '数据资源类型',
          },
        },
      }),
    ).toBe(`{
/**
数据资源类型
format: int32
example: 1 */
'X-Tag'?: number
}`)
  })

  it('allOf', () => {
    expect(
      transform({
        allOf: [
          {
            $ref: 'Date',
          },
          {
            $ref: 'Week',
          },
        ],
      }),
    ).toBe('Date & Week')
  })

  describe('unregular type', () => {
    it('only project, no property', () => {
      expect(
        transform({
          type: 'object',
        }),
      ).toBe('any')
    })
  })
  describe('array', () => {
    it('$ref', () => {
      expect(
        transform({
          type: 'array',
        }),
      ).toBe('Array<any>')
    })
    it('items', () => {
      expect(
        transform({
          type: 'array',
          items: [
            {
              $ref: 'Order',
            },
            {
              $ref: 'Promotion',
            },
          ],
        }),
      ).toBe('Array<Order | Promotion>')
    })
  })

  describe('additionalProperties', () => {
    it('true', () => {
      expect(
        transform({
          type: 'object',
          additionalProperties: true,
        }),
      ).toBe(`{${EOL}[propertyName: string]: any${EOL}}`)
    })

    it('string type', () => {
      expect(
        transform({
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        }),
      ).toBe(`{${EOL}[propertyName: string]: string${EOL}}`)
    })

    it('$ref type', () => {
      expect(
        transform({
          type: 'object',
          additionalProperties: {
            $ref: 'Sky',
          },
        }),
      ).toBe(`{${EOL}[propertyName: string]: Sky${EOL}}`)
    })

    it('properties and additionalProperties', () => {
      expect(
        transform({
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
          },
          additionalProperties: {
            $ref: 'Sky',
          },
        }),
      ).toBe(`{${EOL}'name'?: string${EOL}} & {${EOL}[propertyName: string]: Sky${EOL}}`)
    })
  })

  it('file', () => {
    expect(
      transform({
        type: 'file',
      }),
    ).toBe('File')
  })

  it('invalid type', () => {
    expect(transform({} as any)).toBe('any')
    expect(
      transform({
        type: 'xyz',
      } as any),
    ).toBe('any')
  })
})