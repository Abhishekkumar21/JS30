## To-do List App Server

This is a simple server for Todo-List fullstack application. This is application is not having an authentication
mechanism so, in the backend server - logic for auth is not implemented.

### Feature/api endpoints(routes) needed in the server: 
1. Create/Add todo
2. Read/Get todo(s) the existing todos
3. Update todo(s) with 'completed' status
4. Delete todo(s)


#### Expected user input variables:
 title\
 description\
 Completed (pre-defined)

#### Structure of data in DB:
- Mongoose schema as per the user input data
```
/*
{
    title: String,
    description: String,
    description:  Boolean
}
*/
```