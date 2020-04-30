#FROM node:latest AS build
#WORKDIR /app
#COPY . .
#RUN yarn
#RUN yarn build

FROM theblueforest/dropin:static-runner

#COPY --from=build /app/dist /app

COPY dist /app
