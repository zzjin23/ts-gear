import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'
import { generateDefinitions } from './definitions'
import { fetchSwaggerJSONSchema } from './fetchSwagger'
import { IUserConfig, JSONSchema } from './interface'
import { generatePaths } from './paths'
import prettierWrite from './prettierWrite'

const cwd = process.cwd()

const interceptorFilePath = resolve(__dirname, 'fetchInterceptor.ts')

/** get user config
 * fetch schema
 * get ts template content
 * write ts file
 * */
export const run = async () => {
  const config = require(join(cwd, '.ts-gear.ts')).default as IUserConfig
  // 建立dest文件夹
  const dest = join(cwd, config.dest)
  if (!existsSync(dest)) {
    mkdirSync(dest)
  }
  for (const i in config.projects) {
    if (!config.projects.hasOwnProperty(i)) {
      continue
    }
    const project = config.projects[i]
    const projectPath = join(dest, project.name)
    // 在dest文件夹内建立项目文件夹
    if (!existsSync(projectPath)) {
      mkdirSync(projectPath)
    }

    // 获取swagger schema
    const schema = await fetchSwaggerJSONSchema(
      join(cwd, project.source),
      project.fetchOption,
    )
    // 生成definitions
    const definitions = await generateDefinitions(schema.definitions)
    const definitionsPath = join(projectPath, 'definitions.ts')
    prettierWrite(definitionsPath, definitions)

    // 生成paths内函数
    const pathsContent = await generatePaths(schema as JSONSchema)
    const pathsPath = join(projectPath, 'paths.ts')
    prettierWrite(pathsPath, pathsContent)

    // 每个项目的拦截器文件只在第一次生成时copy一次
    // 这个文件可能会写入一些请求的配置
    // 不应该被覆盖
    const projectInterceptorFile = join(projectPath, 'fetchInterceptor.ts')
    if (!existsSync(projectInterceptorFile)) {
      copyFileSync(interceptorFilePath, projectInterceptorFile)
    }
  }
}

run()
