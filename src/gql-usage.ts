useGQL: <T, R>() => [
  output: {
    loading : boolean,
    error   : object,
    response: R
  },
  triggerGQLCall: (
    gql        : GQLParams<T>,  // GQL query, name and variables
    type       : TypeC<any>,    // Type check the response at runtime
    conditional: boolean = true // Constraint GQL call based on condition
  ) => void
]

// T: GQL query/mutation input
// R: GQL query/mutation output