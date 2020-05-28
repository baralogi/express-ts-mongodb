<div align='center'>

![typescript-rest-api](https://raw.githubusercontent.com/ssembara/typescript-rest-api/master/cover.png)

</div>

---

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Authors](#authors)

---

# REST API built in TS + Express + MongoDB

  The to do app example, contains JWT Auth and Mongoose ODM for MongoDB.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* [Node](https://nodejs.org/en/) - The web server
* [Yarn](https://classic.yarnpkg.com/lang/en/) - Package Manager
* [MongoDB](https://www.mongodb.com/) - Database
* [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) - API Testing Tool

### Usage

A step by step series of examples that tell you how to get a development env running, Say what the step will be : 

1. Copy and rename ```.env.example``` to ```.env``` and configure your enviroment
2. Run ```$ yarn install ```
3. Run ``` $ yarn ts ```
4. RUn ``` $ yarn dev ```
5. Open Postman/ Insomnia to test API

The Route User Manajemen & Auth : 
| Method | EndPoint | Description |
| --- | --- | --- |
| GET | /api/v1/auth/signin | User Auth |
| POST | /api/v1/auth/signup | User Register |
| GET | /api/v1/user/Profile | User Profile |

The Route Todo Manajemen : 
| Method | EndPoint | Description |
| --- | --- | --- |
| GET | /api/v1/todo | Show All Todos |
| POST | /api/v1/todo | Store New Todo |
| GET | /api/v1/todo/:id | Show Todo |
| PUT | /api/v1/todo/:id | Update Todo |
| DELETE | /api/v1/todo/:id | Delete Todo |


## Authors

* **Sebastianus Sembara** - *Initial work* - [ssembara](https://github.com/ssembara)

See also the list of [contributors](https://github.com/ssembara/typescript-rest-api/contributors.md) who participated in this project.
