# Étape de construction
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet
COPY . .

# Créer le build
RUN npm run build

# Étape de production
FROM node:18

WORKDIR /app

# Copier le build depuis l'étape précédente
COPY --from=build /app ./

# Démarrer l'application
CMD ["npm", "start"]
