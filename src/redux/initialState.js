const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-02'),
            author: 'John Doe',
            categoryId: '1',
        },
        {
            id: '2',
            title: 'Article title II',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2023-01-17'),
            author: 'Mick Autumn',
            categoryId: '2',
        },
        {
            id: '3',
            title: 'Article title III',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-07-25'),
            author: 'Joe Smith',
            categoryId: '3',
        },
        {
            id: '4',
            title: 'Article title IV',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2023-02-02'),
            author: 'Bryan Anderson',
            categoryId: '1',
        },
    ],

    categories: [
        {
          id: '1',
          name: 'Sport'
        },
        {
          id: '2',
          name: 'News'
        },
        {
          id: '3',
          name: 'Movies'
        }
      ]
};

export default initialState;