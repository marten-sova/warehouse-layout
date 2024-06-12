import Layout from "../components/Layout"
import gql from "graphql-tag"
import client from "../lib/apollo-client"
import Warehouse, { WarehouseProps } from "../components/Warehouse"


const WarehouseList: React.FC<{ data: { warehouses: WarehouseProps[] } }> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Warehouses List</h1>
        <main>
          {props.data.warehouses.map(warehouse => (
            <div key={warehouse.id} className="warehouse">
              <Warehouse warehouse={warehouse} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .warehouse {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .warehouse:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .warehouse + .warehouse {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Warehouses {
        warehouses {
          id
          name
          zones {
            id
            zoneNumber
            shelves {
              id
              name
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data
    },
  };
}

export default WarehouseList
