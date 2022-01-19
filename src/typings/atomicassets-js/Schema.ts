// https://github.com/pinknetworkx/atomicassets-js/blob/5fda93b0dcdc7a2cce92d8ca6391d6e620b0869d/src/Schema/index.ts#L13
export interface SchemaObject {
  name: string
  type: string
  parent?: number
}

// https://github.com/pinknetworkx/atomicassets-js/blob/5fda93b0dcdc7a2cce92d8ca6391d6e620b0869d/src/API/Explorer/index.ts#L30
export type DataOptions = Array<{ key: string; value: any; type?: string }>
