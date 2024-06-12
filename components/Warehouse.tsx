import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'
import { Zone, Shelf } from '@prisma/client';

export type WarehouseProps = {
  id: string;
  name: string;
  zones: {
    id: string;
    zoneNumber: number;
    shelves: Shelf[];
  }[]
  };

const Warehouse: React.FC<{warehouse: WarehouseProps}> = ({ warehouse }) => {
  return (
    <div>
        <h2>{warehouse.name}</h2>
          {warehouse.zones.map((zone) => (
            <div key={zone.id}>
              <h3>Zone {zone.zoneNumber} Shelves</h3>
              <ul>
                {zone.shelves.map((shelf) => (
                  <li key={shelf.id}>{shelf.name}</li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  )
}

export default Warehouse