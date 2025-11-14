const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const createErrors = require ("http-errors")


async function creatCompetition(data, userId){
  data.userID = userId
  const newAnnoun = await prisma.competition.create({
      data :
          data    
  })
  return newAnnoun
}
// async function photo_adding (Uid, Url){
//     return await prisma.property.update({
//     where: {Uid : Uid},
//     data : {photo : Url}
//     })
// }
async function getById (code) {
    return prisma.competition.findUnique({
        where: {
            Uid : code
        }
    })
}
async function getAllCompetitions() {
    return (await prisma.property.findMany({
            where: {reject : false}
}))
}
async function updateCompetition(result){
    const code = await getById(result.Uid)
    return await prisma.competition.update({
    where: {Uid : code.Uid},
    data : result
    })
}
async function deleteCompetition (ID) {
      const updated = await prisma.competition.delete({
      where: {Uid: ID}
      })
    return (updated)
}
// async function search(data) {
//   const { full_name, address, price, ...rest } = data;

//   const where = {
//     ...rest,
//     ...(full_name && {
//       full_name: {
//         contains: full_name,
//         mode: 'insensitive'
//       }
//     }),
//     ...(address && {
//       address: {
//         contains: address,
//         mode: 'insensitive'
//       }
//     }),
//     ...(price && {
//       price: {
//         lte: price
//       }
//     })
//   };

//   const user_announs = await prisma.property.findMany({
//     where
//   });

//   return user_announs;
// }

module.exports = {
creatCompetition,
getById,
getAllCompetitions,
updateCompetition,
deleteCompetition,
// photo_adding,
// search 
}