# Base node image
FROM node:lts AS runtime

# Set root directory as work directory
WORKDIR /

# Copy all files
COPY . .

# Install dependencies and build Astro site
RUN npm install
RUN npm run build

# Host site on port 4321
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs