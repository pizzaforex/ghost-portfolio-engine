<div align="center">

# Research Portfolio

**Private Intelligence & Wealth Mapping Dashboard.**

</div>

**Research Portfolio** is a bespoke, self-hosted wealth management software built for complete financial control. The application empowers busy people to keep track of stocks, ETFs, or cryptocurrencies and make solid, data-driven investment decisions. The software is designed for personal use in continuous operation.

## Why Research Portfolio?

- 💼 Trading stocks, ETFs or cryptocurrencies on multiple platforms
- 🏦 Pursuing a buy & hold strategy
- 🎯 Interested in getting insights of your portfolio composition
- 👻 Valuing privacy and data ownership
- 🧘 Into minimalism
- 🧺 Caring about diversifying your financial resources
- 🙅 Saying no to spreadsheets

## Features

- ✅ Create, update and delete transactions
- ✅ Multi account management
- ✅ Portfolio performance tracking
- ✅ Various charts and custom analysis
- ✅ Import and export transactions
- ✅ Deep Dark Mode integrated
- ✅ Custom Branding

## Self-hosting

This is a private fork designed for self-hosting on Hetzner or similar VPS providers.

### Supported Environment Variables

| Name                        | Type                  | Default Value         | Description                                                                                                                         |
| --------------------------- | --------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `ACCESS_TOKEN_SALT`         | `string`              |                       | A random string used as salt for access tokens                                                                                      |
| `DATABASE_URL`              | `string`              |                       | The database connection URL, e.g. `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?sslmode=prefer` |
| `JWT_SECRET_KEY`            | `string`              |                       | A random string used for _JSON Web Tokens_ (JWT)                                                                                    |
| `POSTGRES_DB`               | `string`              |                       | The name of the _PostgreSQL_ database                                                                                               |
| `POSTGRES_PASSWORD`         | `string`              |                       | The password of the _PostgreSQL_ database                                                                                           |
| `POSTGRES_USER`             | `string`              |                       | The user of the _PostgreSQL_ database                                                                                               |
| `REDIS_HOST`                | `string`              |                       | The host where _Redis_ is running                                                                                                   |
| `REDIS_PASSWORD`            | `string`              |                       | The password of _Redis_                                                                                                             |

### Upgrade Version (Private Fork)

Update the code locally, commit, push, and then use `docker compose build ghostfolio && docker compose up -d` on your remote Server.

## Development

Run `npm run start:client` for instantaneous live-reloading UI development.

## License

© 2026 Ghost Research
Private Fork of Ghostfolio
