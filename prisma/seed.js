const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  
  const worksImages = await prisma.workImage.createMany({
    data: [
        {
           
            title: "Work 1",
            ImgUrl: "https://i.imgur.com/OQIrVOC.jpg",
        },
        {
        
            title: "Work 2",
            ImgUrl: "https://i.imgur.com/6TP1GPK.jpg",
        },
        {
          
            title: "Work 3",
            ImgUrl: "https://i.imgur.com/X9BuCfV.jpg",
        },
        {
          
            title: "Work 4",
            ImgUrl: "https://i.imgur.com/9ENno8z.jpg",
        },
        {
         
            title: "Work 5",
            ImgUrl: "https://i.imgur.com/fc8rrPb.jpg",
        },
        {
          
            title: "Work 6",
            ImgUrl: "https://i.imgur.com/ghHQ4AG.jpg",
        },
        {
       
            title: "Work 7",
            ImgUrl: "https://i.imgur.com/EHmxBL5.jpg",
        },
        {
     
            title: "Work 8",
            ImgUrl: "https://i.imgur.com/v05Irsu.jpg",
        },
        {
      
            title: "Work 9",
            ImgUrl: "https://i.imgur.com/MlvFb3p.jpg",
        },
        {
        
            title: "Work 10",
            ImgUrl: "https://i.imgur.com/00tQCCj.jpg",
        },
        {
       
            title: "Work 11",
            ImgUrl: "https://i.imgur.com/iJigvKC.jpg",
        },
        {
 
            title: "Work 12",
            ImgUrl: "https://i.imgur.com/bvnhEId.jpg",
        },
        {
            title: "Work 13",
            ImgUrl: "https://i.imgur.com/nEb3aeG.jpg",
        },
        {
            title: "Work 14",
            ImgUrl: "https://i.imgur.com/p3LekOt.jpg",
        },
        {
            title: "Work 15",
            ImgUrl: "https://i.imgur.com/zwOzSSU.jpg",
        }
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