# Notes

## This doc is a notebook-style log of assumptions and ideas during rapid prototyping.

TODO: Clean up and collate.

- Decided to use a relational DB. The prompt illicits a simple data model with clear relationships between shelves, zones, and warehouses. Additionally, there are predefined constraints such as unique names and number of shelves available that need to be enforced.

Schema
- A **warehouse** has many **zones**
- A **zone** has many **shelves**
- **Shelves** require unique names, but are also given IDs in case different warehouses want to reuse a name. E.g., every warehouse probably has a shelf of `cardboard_boxes`.

