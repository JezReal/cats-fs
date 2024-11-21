import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient()

/**
 * @typedef {Cat}
 * @type {object}
 * @property {int} id
 * @property {string} catName
 * @property {string} catDescription
 */

/** 
 * @returns {Promise<Cat[]>}
 */
export async function getAllCats() {
    return await prismaClient.cat.findMany()
}

export async function addCat(catInfo) {
    const cat = await prismaClient.cat.create({
        data: {
            catName: catInfo.catName,
            catDescription: catInfo.catDescription
        }
    })
}

export async function deleteCat(catId) {
    const deletedCat = await prismaClient.cat.delete({
        where: {
            id: catId
        }
    })
}
