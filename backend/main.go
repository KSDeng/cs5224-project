package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("handler called")
	w.WriteHeader(http.StatusCreated)
	w.Header().Set("Content-Type", "application/json")
	resp := make(map[string]string)
	resp["text"] = "Hello Golang!"
	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Write(jsonResp)
	//fmt.Fprintf(w, "Hi, this is %s!", r.URL.Path[1:])
}

func main() {

	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
