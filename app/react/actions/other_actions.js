import {
    IS_FETCHING,
} from '../constants'

export function isFetching(isFetching) {
  return {
    type: IS_FETCHING,
    isFetching
  }
}
