// import { CollectionConfig } from 'payload'

// export const Blog: CollectionConfig = {
//   slug: 'blogs',
//   admin: {
//     useAsTitle: 'title',
//     group: 'Content',
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'slug',
//       type: 'text',
//       required: true,
//       unique: true,
//       admin: {
//         description: 'The URL-friendly identifier for this blog post',
//       },
//     },
//     {
//       name: 'excerpt',
//       type: 'textarea',
//       required: true,
//       maxLength: 160, // Good for SEO meta descriptions
//     },
//     {
//       name: 'featuredImage',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//     },
//     {
//       name: 'author',
//       type: 'relationship',
//       relationTo: 'users',
//       required: true,
//     },
//     {
//       name: 'publishedDate',
//       type: 'date',
//       required: true,
//       defaultValue: () => new Date(),
//     },
//     {
//       name: 'categories',
//       type: 'relationship',
//       relationTo: 'categories',
//       hasMany: true,
//     },
//     {
//       name: 'content',
//       type: 'blocks',
//       minRows: 1,
//       maxRows: 100,
//       blocks: [
//         {
//           slug: 'paragraph',
//           fields: [
//             {
//               name: 'content',
//               type: 'richText',
//               required: true,
//             },
//           ],
//         },
//         {
//           slug: 'image',
//           fields: [
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               required: true,
//             },
//             {
//               name: 'caption',
//               type: 'text',
//             },
//           ],
//         },
//         {
//           slug: 'quote',
//           fields: [
//             {
//               name: 'content',
//               type: 'textarea',
//               required: true,
//             },
//             {
//               name: 'author',
//               type: 'text',
//             },
//           ],
//         },
//         {
//           slug: 'codeBlock',
//           fields: [
//             {
//               name: 'language',
//               type: 'select',
//               options: [
//                 { label: 'JavaScript', value: 'javascript' },
//                 { label: 'TypeScript', value: 'typescript' },
//                 { label: 'HTML', value: 'html' },
//                 { label: 'CSS', value: 'css' },
//                 { label: 'Python', value: 'python' },
//                 { label: 'Java', value: 'java' },
//                 { label: 'PHP', value: 'php' },
//               ],
//               defaultValue: 'javascript',
//             },
//             {
//               name: 'code',
//               type: 'textarea',
//               required: true,
//             },
//           ],
//         },
//         {
//           slug: 'cta',
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               required: true,
//             },
//             {
//               name: 'url',
//               type: 'text',
//               required: true,
//             },
//             {
//               name: 'style',
//               type: 'select',
//               options: [
//                 { label: 'Primary', value: 'primary' },
//                 { label: 'Secondary', value: 'secondary' },
//                 { label: 'Outline', value: 'outline' },
//               ],
//               defaultValue: 'primary',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'meta',
//       type: 'group',
//       fields: [
//         {
//           name: 'title',
//           type: 'text',
//           admin: {
//             description: 'Meta title for SEO',
//           },
//         },
//         {
//           name: 'description',
//           type: 'textarea',
//           admin: {
//             description: 'Meta description for SEO',
//           },
//         },
//         {
//           name: 'keywords',
//           type: 'text',
//         },
//       ],
//     },
//   ],
// }

// export default Blog
