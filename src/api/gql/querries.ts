import { gql } from '@apollo/client'
import { ProjectFragment } from './fragments'

export const SEARCH_PROJECTS = gql`
  ${ProjectFragment}
  query SearchProjects($finished: Boolean, $search: String) {
    searchProjects(finished: $finished, search: $search) {
      ...Project
    }
  }
`

export const PROJECT = gql`
  ${ProjectFragment}
  query Project($_id: String!) {
    project(_id: $_id) {
      ...Project
    }
  }
`
