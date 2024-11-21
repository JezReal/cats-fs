import { addCat, deleteCat, getAllCats } from "../../prisma/client";

export async function load({ params }) {
    return {
        cats: await getAllCats()
    };
}

export const actions = {
    add: async function (event) {
        const formData = await event.request.formData()
        await addCat({
            'catName': formData.get('name'),
            'catDescription': formData.get('description')
        })
    },

    deleteCat: async function (event) {
        const formData = await event.request.formData()
        const catId = parseInt(formData.get('catId'))
        await deleteCat(catId)
    }
}
