# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Tambahkan ini sebelum build
ENV NEXT_PUBLIC_SUPABASE_URL=https://cradzbdfhvrzcmlpumrn.supabase.co
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyYWR6YmRmaHZyemNtbHB1bXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1OTA1MTksImV4cCI6MjA2NDE2NjUxOX0.qCJgJ1kuk0RTTw7ACL3AWC9AccOEer6hj8FegmYac4k

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
