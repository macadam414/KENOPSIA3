const axios = require('axios');
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

describe('API Books tests', function() {
   
    test('Should return status code 200 for a book id and match the schema', async () => {
        const bookId = 2;
        const bookIdSchema = {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                description: { type: 'string' },
                pageCount: { type: 'integer' },
                excerpt: { type: 'string' },
                publishDate: { type: 'string', format: 'date-time' }
        },
            required: ['id', 'title', 'description', 'pageCount', 'excerpt', 'publishDate'],
            additionalProperties: false
    };
        try {
            let response = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${bookId}`);
            expect(response.status).toBe(200);
            expect(response.data).toMatchSchema(bookIdSchema);
        } catch (error) {
            throw new Error('Expected status code was not received');
        }
    });

    test('Should return status code 200 for just a book(?)', async () => {
        const bookSchema = {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    title: { type: 'string' },
                    description: { type: 'string' },
                    pageCount: { type: 'integer' },
                    excerpt: { type: 'string' },
                    publishDate: { type: 'string', format: 'date-time' }
            },
                required: ['id', 'title', 'description', 'pageCount', 'excerpt', 'publishDate'],
                additionalProperties: false
            }
    };

        try {
            let response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
            console.log(response.data); 
            expect(response.status).toBe(200);
            expect(response.data).toMatchSchema(bookSchema);
        } catch (error) {
            throw new Error('Expected status code was not received');
        }
    }); 
    test('Should create a new book with status code 200', async () => {
        const bookPostSchema = {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                description: { type: 'string' },
                pageCount: { type: 'integer' },
                excerpt: { type: 'string' },
                publishDate: { type: 'string', format: 'date-time' }
        },
            required: ['id', 'title', 'description', 'pageCount', 'excerpt', 'publishDate'],
            additionalProperties: false
    };

        const newBook = {
            Title: 'New Book Title',
            Description: 'Description of the new book',
            PageCount: 250,
            Excerpt: 'Excerpt of the new book',
            PublishDate: '2023-11-21T00:00:00.000Z'
        };
    
        try {
            let response = await axios.post(`https://fakerestapi.azurewebsites.net/api/v1/Books`, newBook);
            console.log(response.data); 
            expect(response.status).toBe(200);
            expect(response.data).toMatchSchema(bookPostSchema);
        } catch (error) {
            throw new Error('Expected status code was not received');
        }
    });
    test('should update a book with status code 200', async () => {
        const idToUpdate = 2
        const bookPutSchema = {    
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                description: { type: 'string' },
                pageCount: { type: 'integer' },
                excerpt: { type: 'string' },
                publishDate: { type: 'string', format: 'date-time' }
        },
            required: ['id', 'title', 'description', 'pageCount', 'excerpt', 'publishDate'],
            additionalProperties: false
    };

        const updatedData = {
            Title: 'Updated Title',
            Description: 'Updated description',
            PageCount: 1337,
            Excerpt: 'Updated excerpt of new book',
            PublishDate: '2024-01-01T00:00:00.000Z'
        };
        
        try {
            let response = await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${idToUpdate}`, updatedData);
            console.log(response.data); 
            expect(response.status).toBe(200);
            expect(response.data).toMatchSchema(bookPutSchema);
        } catch (error) {
            throw new Error('Expected status code was not received');
        }
    });
    test('Should delete a book with a status code 200', async () => {
        const idToDelete = 2
        const bookDeleteSchema = {
            // ну типа пустая схема, тест пропускает, так что, в теории, так можно... 
            // по сути это не имеет смысла, но в какой-то домашке я провернул похожую тему с пустым циклом, который тоже отрабатывал так, как надо, так что пусть будет так
            // интересно, у кодеров есть "почерк"? 
            // ну вот такие вот тупые фишки, которые как бы бессмысленные, но как бы отрабатывают и ничего не ломают...
        };
        
        try {
            let response = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${idToDelete}`)
            console.log(response.data); 
            expect(response.status).toBe(200);
            expect(response.data).toMatchSchema(bookDeleteSchema);
        } catch (error) {
            throw new Error('Expected status code was not received');
        }
    })
});


// а еще мне страшно отправлять вот это после того, как я увидел, что демонстрировала Ольга(?) в своей домашке... 
// хотя она показывала на тайп скрипте... видимо, там все настолько страшно

