/** Don`t modify this file, it will be overwriten next time execute the `tsg` command. */
import { interceptRequest, interceptResponse } from './interceptor'
import { Pet, ApiResponse, Order, User } from './definitions'

export interface IPostPetParam {
  body: Pet
}

/**
 * Add a new pet to the store
 */
export function postPet(param: IPostPetParam) {
  const [url, option] = interceptRequest('/v2/pet', param)
  option.method = postPet.method
  return fetch(url, option).then<Response>(interceptResponse)
}

postPet.method = 'post'

export interface IPutPetParam {
  body: Pet
}

/**
 * Update an existing pet
 */
export function putPet(param: IPutPetParam) {
  const [url, option] = interceptRequest('/v2/pet', param)
  option.method = putPet.method
  return fetch(url, option).then<Response>(interceptResponse)
}

putPet.method = 'put'

export interface IGetPetFindByStatusParam {
  query: {
    status: Array<'available' | 'pending' | 'sold'>
  }
}

type GetPetFindByStatusResponse = Array<Pet>
/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 */
export function getPetFindByStatus(param: IGetPetFindByStatusParam) {
  const [url, option] = interceptRequest('/v2/pet/findByStatus', param)
  option.method = getPetFindByStatus.method
  return fetch(url, option).then<GetPetFindByStatusResponse>(interceptResponse)
}

getPetFindByStatus.method = 'get'

export interface IGetPetPetIdParam {
  path: {
    petId: number
  }
}

/**
 * Find pet by ID
 * Returns a single pet
 */
export function getPetPetId(param: IGetPetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/:petId', param)
  option.method = getPetPetId.method
  return fetch(url, option).then<Pet>(interceptResponse)
}

getPetPetId.method = 'get'

export interface IPostPetPetIdParam {
  path: {
    petId: number
  }
  formData?: {
    name?: string
    status?: string
  }
}

/**
 * Updates a pet in the store with form data
 */
export function postPetPetId(param: IPostPetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/:petId', param)
  option.method = postPetPetId.method
  return fetch(url, option).then<Response>(interceptResponse)
}

postPetPetId.method = 'post'

export interface IDeletePetPetIdParam {
  header?: {
    api_key?: string
  }
  path: {
    petId: number
  }
}

/**
 * Deletes a pet
 */
export function deletePetPetId(param: IDeletePetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/:petId', param)
  option.method = deletePetPetId.method
  return fetch(url, option).then<Response>(interceptResponse)
}

deletePetPetId.method = 'delete'

export interface IPostPetPetIdUploadImageParam {
  path: {
    petId: number
  }
  formData?: {
    additionalMetadata?: string
    file?: File
  }
}

/**
 * uploads an image
 */
export function postPetPetIdUploadImage(param: IPostPetPetIdUploadImageParam) {
  const [url, option] = interceptRequest('/v2/pet/:petId/uploadImage', param)
  option.method = postPetPetIdUploadImage.method
  return fetch(url, option).then<ApiResponse>(interceptResponse)
}

postPetPetIdUploadImage.method = 'post'

type GetStoreInventoryResponse = any
/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 */
export function getStoreInventory() {
  const [url, option] = interceptRequest('/v2/store/inventory')
  option.method = getStoreInventory.method
  return fetch(url, option).then<GetStoreInventoryResponse>(interceptResponse)
}

getStoreInventory.method = 'get'

export interface IPostStoreOrderParam {
  body: Order
}

/**
 * Place an order for a pet
 */
export function postStoreOrder(param: IPostStoreOrderParam) {
  const [url, option] = interceptRequest('/v2/store/order', param)
  option.method = postStoreOrder.method
  return fetch(url, option).then<Order>(interceptResponse)
}

postStoreOrder.method = 'post'

export interface IGetStoreOrderOrderIdParam {
  path: {
    orderId: number
  }
}

/**
 * Find purchase order by ID
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 */
export function getStoreOrderOrderId(param: IGetStoreOrderOrderIdParam) {
  const [url, option] = interceptRequest('/v2/store/order/:orderId', param)
  option.method = getStoreOrderOrderId.method
  return fetch(url, option).then<Order>(interceptResponse)
}

getStoreOrderOrderId.method = 'get'

export interface IDeleteStoreOrderOrderIdParam {
  path: {
    orderId: number
  }
}

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 */
export function deleteStoreOrderOrderId(param: IDeleteStoreOrderOrderIdParam) {
  const [url, option] = interceptRequest('/v2/store/order/:orderId', param)
  option.method = deleteStoreOrderOrderId.method
  return fetch(url, option).then<Response>(interceptResponse)
}

deleteStoreOrderOrderId.method = 'delete'

export interface IPostUserParam {
  body: User
}

/**
 * Create user
 * This can only be done by the logged in user.
 */
export function postUser(param: IPostUserParam) {
  const [url, option] = interceptRequest('/v2/user', param)
  option.method = postUser.method
  return fetch(url, option).then<Response>(interceptResponse)
}

postUser.method = 'post'

export interface IPostUserCreateWithArrayParam {
  body: Array<User>
}

/**
 * Creates list of users with given input array
 */
export function postUserCreateWithArray(param: IPostUserCreateWithArrayParam) {
  const [url, option] = interceptRequest('/v2/user/createWithArray', param)
  option.method = postUserCreateWithArray.method
  return fetch(url, option).then<Response>(interceptResponse)
}

postUserCreateWithArray.method = 'post'

export interface IPostUserCreateWithListParam {
  body: Array<User>
}

/**
 * Creates list of users with given input array
 */
export function postUserCreateWithList(param: IPostUserCreateWithListParam) {
  const [url, option] = interceptRequest('/v2/user/createWithList', param)
  option.method = postUserCreateWithList.method
  return fetch(url, option).then<Response>(interceptResponse)
}

postUserCreateWithList.method = 'post'

export interface IGetUserLoginParam {
  query: {
    username: string
    password: string
  }
}

type GetUserLoginResponse = string
/**
 * Logs user into the system
 */
export function getUserLogin(param: IGetUserLoginParam) {
  const [url, option] = interceptRequest('/v2/user/login', param)
  option.method = getUserLogin.method
  return fetch(url, option).then<GetUserLoginResponse>(interceptResponse)
}

getUserLogin.method = 'get'

/**
 * Logs out current logged in user session
 */
export function getUserLogout() {
  const [url, option] = interceptRequest('/v2/user/logout')
  option.method = getUserLogout.method
  return fetch(url, option).then<Response>(interceptResponse)
}

getUserLogout.method = 'get'

export interface IGetUserUsernameParam {
  path: {
    username: string
  }
}

/**
 * Get user by user name
 */
export function getUserUsername(param: IGetUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/:username', param)
  option.method = getUserUsername.method
  return fetch(url, option).then<User>(interceptResponse)
}

getUserUsername.method = 'get'

export interface IPutUserUsernameParam {
  path: {
    username: string
  }
  body: User
}

/**
 * Updated user
 * This can only be done by the logged in user.
 */
export function putUserUsername(param: IPutUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/:username', param)
  option.method = putUserUsername.method
  return fetch(url, option).then<Response>(interceptResponse)
}

putUserUsername.method = 'put'

export interface IDeleteUserUsernameParam {
  path: {
    username: string
  }
}

/**
 * Delete user
 * This can only be done by the logged in user.
 */
export function deleteUserUsername(param: IDeleteUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/:username', param)
  option.method = deleteUserUsername.method
  return fetch(url, option).then<Response>(interceptResponse)
}

deleteUserUsername.method = 'delete'
