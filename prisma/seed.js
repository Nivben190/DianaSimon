const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  
  const worksImages = await prisma.workImage.createMany({
    data: [
        {
            id: 1,
            title: "Work 1",
            ImgUrl:"https://images.unsplash.com/photo-1610390000000-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 2,
            title: "Work 2",
            ImgUrl:"https://images.unsplash.com/photo-1610390000000-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
    ]
    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })