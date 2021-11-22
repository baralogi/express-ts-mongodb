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

The Blog app example, contains JWT Auth and Mongoose ODM for MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [Node](https://nodejs.org/en/) - The web server
- [Yarn](https://classic.yarnpkg.com/lang/en/) - Package Manager
- [MongoDB](https://www.mongodb.com/) - Database
- [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) - API Testing Tool

### Usage

A step by step series of examples that tell you how to get a development env running, Say what the step will be :

1. Copy and rename `.env.example` to `.env` and configure your enviroment
2. Run `$ yarn`
3. Run `$ yarn ts`
4. RUn `$ yarn dev`
5. Open Postman/ Insomnia to test API

The Route User Manajemen & Auth :
| Method | EndPoint | Description |
| --- | --- | --- |
| POST | /api/v1/auth/signin | User Auth |
| POST | /api/v1/auth/signup | User Register |
| GET | /api/v1/user/Profile | User Profile |

The Route Topic Manajemen :
| Method | EndPoint | Description |
| --- | --- | --- |
| GET | /api/v1/topics | Show All Topics |
| POST | /api/v1/topics | Store New Topic |
| GET | /api/v1/topics/:id | Show Topic |
| PUT | /api/v1/topics/:id | Update Topic |
| DELETE | /api/v1/topics/:id | Delete Topic |

The Route Article Manajemen :
| Method | EndPoint | Description |
| --- | --- | --- |
| GET | /api/v1/articles | Show All Articles |
| POST | /api/v1/articles | Store New Article |
| GET | /api/v1/articles/:id | Show Article |
| PUT | /api/v1/articles/:id | Update Article |
| DELETE | /api/v1/articles/:id | Delete Article |
| Filter | ?filter_field | Field filter, ex: status |
| Filter | ?filter_value | Value filter, ex: draft, deleted, published |
| Filter | ?topic | Topic filter, ex: sci-fi, crime, adventure |
| Sort | ?sort_field | Sort field, ex: title, createdBy |
| Sort | ?sort_orientation | Sort orientation, ex: asc & desc |

## Authors

- **Sebastianus Sembara** - _Initial work_ - [ssembara](https://github.com/ssembara)

See also the list of [contributors](https://github.com/ssembara/typescript-rest-api/contributors.md) who participated in this project.
