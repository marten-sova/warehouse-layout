import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const warehouseData: Prisma.WarehouseCreateInput[] = [
  {
    name: 'Portland Warehouse',
    zones: {
      create: [
        {
          zoneNumber: 1,
          shelves: {
            create: [
              {
                name: 'PDX_A1',
              },
              {
                name: 'PDX_A2',
              },
            ],
          },
        },
        {
          zoneNumber: 2,
          shelves: {
            create: [
              {
                name: 'PDX_B1',
              },
              {
                name: 'PDX_B2',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Seattle Warehouse',
    zones: {
      create: [
        {
          zoneNumber: 1,
          shelves: {
            create: [
              {
                name: 'SEA_A1',
              },
              {
                name: 'SEA_A2',
              },
            ],
          },
        },
        {
          zoneNumber: 2,
          shelves: {
            create: [
              {
                name: 'SEA_B1',
              },
              {
                name: 'SEA_B2',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'San Francisco Warehouse',
    zones: {
      create: [
        {
          zoneNumber: 1,
          shelves: {
            create: [
              {
                name: 'SF_A1',
              },
              {
                name: 'SF_A2',
              },
            ],
          },
        },
        {
          zoneNumber: 2,
          shelves: {
            create: [
              {
                name: 'SF_B1',
              },
              {
                name: 'SF_B2',
              },
            ],
          },
        },
      ],
    },
  },
]

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    posts: {
      create: [
        {
          title: 'Join the Prisma Discord',
          content: 'https://pris.ly/discord',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    posts: {
      create: [
        {
          title: 'Ask a question about Prisma on GitHub',
          content: 'https://www.github.com/prisma/prisma/discussions',
          published: true,
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube',
        },
      ],
    },
  },
]

export async function main() {
  try {
    console.log(`Start seeding ...`)
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      })
      console.log(`Created user with id: ${user.id}`)
    }
    for (const w of warehouseData) {
      const warehouse = await prisma.warehouse.create({
        data: w,
      })
      console.log(`Created warehouse with id: ${warehouse.id}`)
    }
    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
