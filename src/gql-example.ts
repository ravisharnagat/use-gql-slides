import useGQL from 'useGQL'

function App() {

  const {
    output: {loading, response, error},
    triggerGQLCall
  } = useGQL<GQLQueryInput, GQLResponse>()

  useEffect(() => {
    // make gql request
    triggerGQLCall(
      {
        query: getPlayerList, // GQL Query
        name: 'getPlayerList', // GQL Query name
        variables: {gameId: 2} // GQL Query params
      },
      PlayerListSchema // Schema for Runtime Validation of response
    )
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <pre>{JSON.stringify(response)}</pre>
    </div>
  )
}