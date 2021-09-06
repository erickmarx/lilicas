const filmes = [{"Titulo":"Castle in the Sky","ID":"2baf70d1-42bb-4437-b551-e5fed5a87abe"},{"Titulo":"Grave of the Fireflies","ID":"12cfb892-aac0-4c5b-94af-521852e46d6a"},{"Titulo":"My Neighbor Totoro","ID":"58611129-2dbc-4a81-a72f-77ddfc1b1b49"},{"Titulo":"Kiki's Delivery Service","ID":"ea660b10-85c4-4ae3-8a5f-41cea3648e3e"},{"Titulo":"Only Yesterday","ID":"4e236f34-b981-41c3-8c65-f8c9000b94e7"},{"Titulo":"Porco Rosso","ID":"ebbb6b7c-945c-41ee-a792-de0e43191bd8"},{"Titulo":"Pom Poko","ID":"1b67aa9a-2e4a-45af-ac98-64d6ad15b16c"},{"Titulo":"Whisper of the Heart","ID":"ff24da26-a969-4f0e-ba1e-a122ead6c6e3"},{"Titulo":"Princess Mononoke","ID":"0440483e-ca0e-4120-8c50-4c8cd9b965d6"},{"Titulo":"My Neighbors the Yamadas","ID":"45204234-adfd-45cb-a505-a8e7a676b114"},{"Titulo":"Spirited Away","ID":"dc2e6bd1-8156-4886-adff-b39e6043af0c"},{"Titulo":"The Cat Returns","ID":"90b72513-afd4-4570-84de-a56c312fdf81"},{"Titulo":"Howl's Moving Castle","ID":"cd3d059c-09f4-4ff3-8d63-bc765a5184fa"},{"Titulo":"Tales from Earthsea","ID":"112c1e67-726f-40b1-ac17-6974127bb9b9"},{"Titulo":"Ponyo","ID":"758bf02e-3122-46e0-884e-67cf83df1786"},{"Titulo":"Arrietty","ID":"2de9426b-914a-4a06-a3a0-5e6d9d3886f6"},{"Titulo":"From Up on Poppy Hill","ID":"45db04e4-304a-4933-9823-33f389e8d74d"},{"Titulo":"The Wind Rises","ID":"67405111-37a5-438f-81cc-4666af60c800"},{"Titulo":"The Tale of the Princess Kaguya","ID":"578ae244-7750-4d9f-867b-f3cd3d6fecf4"},{"Titulo":"When Marnie Was There","ID":"5fdfb320-2a02-49a7-94ff-5ca418cae602"}]

filmes.sort((a ,b) => {
        if (a.Titulo < b.Titulo) return -1
        if (a.Titulo > b.Titulo) return 1
    }).reverse()

console.log(filmes)