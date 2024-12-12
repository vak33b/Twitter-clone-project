package provider

import (
	"database/sql"
	"fmt"
	"log"
)

type Database struct {
	conn *sql.DB
}

func NewDatabase(host string, port int, user, password, dbName string) *Database {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbName)

	// Создание соединения с сервером postgres
	conn, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}

	return &Database{conn: conn}
}
