## Getting Started

First, create a .env.local file for eg
```
cat > ./.env.local2 << EOF
BLOCKFROST_KEY="<API-KEY>"
API_URL="https://cardano-preprod.blockfrost.io/api/v0"
NETWORK="Preprod"
EOF
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
