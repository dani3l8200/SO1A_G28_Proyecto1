FROM golang

WORKDIR /

COPY . .

RUN go mod download

EXPOSE 3500

CMD ["go", "run", "publica.go"]