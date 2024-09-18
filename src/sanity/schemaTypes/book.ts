export default {
    name: 'book',
    title: 'Book',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'book_name',
        title: 'Book Name',
        type: 'string',
      },
      {
        name: 'author_name',
        title: 'Author Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'cover_image',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping in the Sanity Studio
        },
      },
    ],
  };
  